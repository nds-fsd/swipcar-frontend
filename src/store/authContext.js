import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

const initialStateUser = {};
const initialStateToken = undefined;

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(initialStateToken);
  const [user, setUser] = useState(initialStateUser);

  const saveToken = (token) => {
    setToken(token);
  };

  const saveUser = (user) => {
    setUser(user);
  };

  const resetAuth = () => {
    setToken(initialStateToken);
    setUser(initialStateUser);
  };

  const isLoged = () => {
    return !!token;
  };

  const value = {
    token,
    user,
    saveToken,
    saveUser,
    resetAuth,
    isLoged,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
