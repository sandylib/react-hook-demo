import React from 'react'
import Input from '../../components/Input/Input';
import  { list }  from '../../utils/defaultUser';
import { useForm } from "react-hook-form";

const MyProfile = () => {
    const [fields, setFields] = React.useState(list);
    const [validationErrors, setValidationErrors] = React.useState(null);
    const { register, handleSubmit, errors } = useForm();

    
    const onHandleChange = (e) => {

        const idx = fields.findIndex(f=>f.id === e.target.id);
        const existing = fields[idx];
     
        const updated = {
            ...existing,
            value: e.target.value
        };
        const newList = Object.assign([...fields], {[idx]: updated})
        
        setFields(newList);

    }

    const onSubmit = (data) => {
        console.log(errors);
        console.log(data);
    }

    return (
         <form onSubmit={handleSubmit(onSubmit)}>
            {
                fields.map( (field) => (
                    <Input 
                        key = {field.id} 
                        name={field.name}
                        value={field.value}   
                        disabled={field.permissions.find(p=> p !== 'writable')} 
                        ref={register({...field.validationRules})} 
                        error={errors[field.name]}
                        onChange={onHandleChange}
                        {...field}
                        />
                ))
            }
             <input type="submit" />
        </form>
    )
}

export default MyProfile
