import React, { createContext, useState } from 'react';

import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase-config'

export const UserContext = createContext(null);
const auth = getAuth(app);
console.log(auth);


const Authprovider = ({ children }) => {



    const [user, setUser] = useState(null)
    const authInfo = {
        user,
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