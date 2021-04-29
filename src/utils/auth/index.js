import { deleteStorageObject, getStorageObject, setStorageObject } from '../../store/UserStorage';

export const getUserToken = () => {
  const session = getStorageObject('user-session');
  if (session) {
    return session.token;
  }
  return undefined;
};

export const getUserSession = () => {
  const session = getStorageObject('user-session');
  if (session) {
    return session.user;
  }
  return undefined;
};

export const setUserSession = (sessionData) => {
  console.log(sessionData);
  setStorageObject('user-session', sessionData);
};

export const removeSession = () => {
  deleteStorageObject('user-session');
};
