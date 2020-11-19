import { CURRENT_USER } from '../constants/applicationConstants';

export const getInitAuthData = () => {
  let currentUserInitData = {isAuthenticated: false, token: null, permission: [], expired: null};

  const currentUserStr = localStorage.getItem(CURRENT_USER);
  if(currentUserStr){
    const currentUser = JSON.parse(currentUserStr);
    currentUserInitData = {
      ...currentUserInitData,
      ...currentUser
    }

  }
  return currentUserInitData;
}