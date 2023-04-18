import React, { createContext, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config'

export const UserContext = createContext(null);
const auth = getAuth(app)


const Authprovider = ({ children }) => {



    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }
    const authInfo = {
        user,
        createUser,
        loginUser,
        logOut
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