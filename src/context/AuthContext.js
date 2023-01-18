import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });

    return unsubscriber;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
