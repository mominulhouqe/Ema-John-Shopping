import React, { useContext, useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../Providers/Authprovider';


const Header = () => {
    const { user, logOut, setUser } = useContext(UserContext);
    
  

    const handleLogOut = () => {
        
        logOut()
            .then(result => {
                setUser(null); // Update user state to null
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/singup">Sign Up </Link>
                
                    {
                        user && <small className='text-white mx-5'>{user.email} <button onClick={handleLogOut} className="btn btn-success mx-2">Sing Out</button>  </small>  
                      }
                


            </div>
        </nav>
    );
};

export default Header;