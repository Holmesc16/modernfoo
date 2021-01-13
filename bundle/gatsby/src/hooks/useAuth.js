/* eslint-disable no-case-declarations */
/* eslint-disable no-async-promise-executor */
import React, { createContext, useContext, useReducer } from 'react';
import axios from 'axios';

const apiURL = process.env.GATSBY_API_URL;

const defaultState = {
  jwt: null,
  hasEnteredSecret: false,
  isLoggedIn: false,
};

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'login':
      const { jwt = null, hasEnteredSecret } = action.payload;
      return { ...state, jwt, hasEnteredSecret, isLoggedIn: true };
    case 'logout':
      return {
        ...state,
        jwt: null,
        hasEnteredSecret: false,
        isLoggedIn: false,
      };
    default:
      return defaultState;
  }
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  <AuthContext.Provider value={useReducer(reducer, defaultState)}>
    {children}
  </AuthContext.Provider>;
};

export const wrapRootElement = ({ element }) => {
  <AuthProvider>{element}</AuthProvider>;
};

const useAuth = () => {
  const [state, dispatcher] = useContext(AuthContext);
  const isAuthenticated = state.isLoggedIn && state.hasEnteredSecret;

  const login = async (credentials) =>
    new Promise(async (resolve, reject) => {
      try {
        const { data: payload } = await axios.post(
          `${apiURL}/auth/local`,
          credentials
        );
        dispatcher({ type: 'login' });
        resolve(payload);
      } catch (e) {
        console.log(`error: ${e}`);
        reject(e);
      }
    });
  const logout = () => {
    dispatcher({ type: 'logout' });
  };

  return { state, isAuthenticated, login, logout };
};

export default useAuth;
