import React from 'react'


import {useHistory} from 'react-router-dom';


export const PermissionDenied = () => {
  const history = useHistory();
  return (
    <div>
     
         you do not have permission to access this page
       
       <a href={'#'}   onClick={()=> history.push('/')}  > Home</a>
    </div>
  )
}