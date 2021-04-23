import { deleteStorageObject, getStorageObject, setStorageObject } from '../../store/UserStorage';

export const getUserToken = () => {
  const session = getStorageObject('user-session');
  if (session) {
    return session.token;
  }
  return undefined;
};

export const getSessionUser = () => {
  const session = getStorageObject('user-session');
  if (session) {
    return session.user;
  }
  return undefined;
};

export const setSessionUser = (sessionData) => {
  setStorageObject('user-session', sessionData);
};

export const removeSession = () => {
  deleteStorageObject('user-session');
};
