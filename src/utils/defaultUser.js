import Input from '../components/Input/Input';
import {APP_USER_ROLES} from '../constants/applicationConstants';

export const list = () => {

    return [ {
        type: 'input',
        id : '1',
        name : 'account',
        label : 'Account',
        value : '123445',
        permissions : ['readyOnly'],
        validationRules : {required: false},
    },
    {
        type: 'input',
        id : '2',
        name : 'name',
        label : 'Uer Name',
        value : 'sandy',
        permissions : ['writable'],
        validationRules : {required : true}
        
    }
    

]
}

export  const businessUser =  {isAuthenticated: true, token: null, permissions: [APP_USER_ROLES.BUSINESS], expired: null};

export default {isAuthenticated: true, token: null, permissions: [APP_USER_ROLES.INDIVIDUAL], expired: null};