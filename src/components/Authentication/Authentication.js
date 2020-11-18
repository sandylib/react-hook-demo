import React, {createContext, useState, useCallback  } from 'react';

import { getUser } from '../../api/auth'

const AuthenticationCtx = createContext({isAuthenticated: false });

export const AuthenticationManger = ({children}) => {
    const [user, setUser] = useState({
      isAuthenticated: false,
      token: null,
      permissions : [],
      expired: null
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);

   const authenticate = useCallback (async (email, password) => { 
   
       const {data} = await getUser(email, password);
       setUser(data);
       setIsAuthenticated(true);
   }, [])

   const logout = async () => { 

   }

   return (
   <AuthenticationCtx.Provider value={{user, permissions: user.permissions, token: user.token, isAuthenticated,  authenticate, logout}}>
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