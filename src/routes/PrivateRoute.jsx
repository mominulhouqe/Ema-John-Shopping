import React, { useContext } from 'react';
import { UserContext } from '../components/Providers/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(UserContext);
    const location = useLocation();
    if (loader) {
        return <div className='mt-5 d-flex gap-2'>
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    if (user) {
        return children;
    }


    return (
        <Navigate to="/login" state={{from:location}} replace >

        </Navigate>
    );
};

export default PrivateRoute;