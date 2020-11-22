import React, {forwardRef} from 'react'

const Input = forwardRef( ( props, ref) => {
    const {id, name, label, type, value, disabled = false, onChange, error} = props;
    return (
        <>
         <label htmlFor={id}>{label}</label>
         <input ref={ref} id={id} name={name} type={type || 'text'} value={value}  disabled={disabled} onChange={ (e) => onChange(e)}/>
         {error &&  <p>This field is required</p>}
        </>
    )
})

export default Input
