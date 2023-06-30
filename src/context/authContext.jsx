/* eslint-disable react/prop-types */
import { createContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiDomain } from '../utils/utils';


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(`${apiDomain}/api/auth/login`, inputs);
    setCurrentUser(res.data);
  };

  // logout
  const logout = async () => {
    await axios.post(`${apiDomain}/api/auth/logout`);
    setCurrentUser(null);
  };
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

