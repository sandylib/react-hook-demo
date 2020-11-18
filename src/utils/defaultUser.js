import {APP_USER_ROLES} from '../constants/applicationConstants';

export  const businessUser =  {isAuthenticated: true, token: null, permissions: [APP_USER_ROLES.BUSINESS], expired: null};

export default {isAuthenticated: true, token: null, permissions: [APP_USER_ROLES.INDIVIDUAL], expired: null};