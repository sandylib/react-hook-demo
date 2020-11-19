import React, {createContext, useState, useCallback  } from 'react';

import { getUser } from '../../api/auth'
import { CURRENT_USER } from '../../constants/applicationConstants'

import {getInitAuthData} from '../../utils/help';

const initialAuthData = getInitAuthData();

const AuthenticationCtx = createContext({...initialAuthData});

export const AuthenticationManger = ({children}) => {
    const [user, setUser] = useState({
      ...initialAuthData
    });
  
   const authenticate = useCallback (async (email, password) => { 
   
       const {data : currentUser} = await getUser(email, password);
       setUser(currentUser);
      //  setIsAuthenticated(true);
       localStorage.setItem(CURRENT_USER,JSON.stringify(currentUser));
   }, [])

   const logout = useCallback(async () => { 
    try {
      const currentUserStr = localStorage.getItem(CURRENT_USER);
     if(currentUserStr) {
      
     
      localStorage.removeItem(CURRENT_USER);
      const initialAuthData = getInitAuthData();
      setUser({...initialAuthData})
     }

     return true;
      
    } catch (error) {
      return false;
    }
   },[])

   return (
   <AuthenticationCtx.Provider value={{user, permissions: user.permissions, token: user.token, isAuthenticated: user.isAuthenticated,  authenticate, logout}}>
      {children}
    </AuthenticationCtx.Provider>
   );
}



export const Auth = ({ children }) => (
  <AuthenticationCtx.Consumer>
    {({ isAuthenticated, authenticate, token, permissions = [], logout }) => {
      return children({ isAuthenticated, authenticate, token, permissions, logout });
    }}
  </AuthenticationCtx.Consumer>
);


export const Guard = ({ allowed = [], children }) => (
  <Auth>
    {({ permissions }) => {
      if (permissions.some(permission => allowed.includes(permission))) {
        return children;
      }
    }}
  </Auth>
);


export const withAuth = Component => props => (
  <Auth>
    {({ isAuthenticated, authenticate, token, permissions = [], logout }) => (
      <Component
        {...props}
        isAuthenticated={isAuthenticated}
        authenticate={authenticate}
        token={token}
        permissions={permissions}
        logout={logout}
      />
    )}
  </Auth>
);