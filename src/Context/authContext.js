import React, {createContext, useContext, useState, useEffect} from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../Firebase/firebase';


const authContext  = createContext()

export const useAuth = () => useContext(authContext);

export const AuthProvider = ({children}) => {
    const [currentUser, setUser ] = useState(null)
    const signUp = ({email, password}) => createUserWithEmailAndPassword(auth, email, password)
    const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const logout = () => signOut(auth)

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, []);
    return (
        <authContext.Provider value={{signUp, logIn, currentUser, logout}}>
            {children}
        </authContext.Provider>
    );
}

