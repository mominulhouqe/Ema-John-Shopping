import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config'

export const UserContext = createContext(null);
const auth = getAuth(app)


const Authprovider = ({ children }) => {

    const [loader , setLoader] = useState(true)

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }

    // observer user auth state
    useEffect(() => {
      const unsubscrib =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoader(false)
        })
        // stop observring while unmounting
        return unsubscrib();
    }, [])


    const authInfo = {
        user,
        createUser,
        loginUser,
        logOut,
        loader
    }

    return (
        <div>
            <UserContext.Provider value={authInfo}>
                {children}
            </UserContext.Provider>
        </div>
    );
};

export default Authprovider;