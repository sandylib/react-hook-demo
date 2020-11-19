import React, {useEffect, useState} from 'react'
import { useLocation, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

import {withAuth} from '../../components/Authentication/Authentication'
const Login = ({authenticate} ) => {
  
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, errors } = useForm();

    const [authData, setAuthData] = useState({
        isLoggingIn: true,
        redirectToReferrer: false,
        hasAuthenticationFailed: false
      });

  
      const onSubmit = (data) => {
        
        authenticate(data.username, data.password)
        .then(result=>{
     
          setAuthData({
            isLoggingIn: false,
            redirectToReferrer: true,
            hasAuthenticationFailed: false
          });

        }).catch( (error)=> {
    
          setAuthData({
            isLoggingIn: false,
            redirectToReferrer: false,
            hasAuthenticationFailed: true
          });
        }  )    

     
      
      }; 

    if(authData.redirectToReferrer) return  <Redirect to={from} />;

    if(authData.isLoggingIn || authData.hasAuthenticationFailed) {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
            {authData.hasAuthenticationFailed && <h1>authenticate failed</h1>}
            <label htmlFor={'username'}>User Name</label>
            <input id={'username'} name="username" type="text" defaultValue="test" ref={register({required: true})} />
            {errors.username &&  <p>This field is required</p>}
            <label htmlFor={'password'}>Password</label>
            <input
              id="password"
              name="password"
              type={'password'}
              ref={register({ required: true})}
            />
            {errors.password &&  <p>This field is required</p>}
            <input type="submit" />
          </form>
        )
    }
    return <div>Loading...</div>
}

export default withAuth(Login)
