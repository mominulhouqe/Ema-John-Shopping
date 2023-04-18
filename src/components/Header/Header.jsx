import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../Providers/Authprovider';


const Header = () => {
    const { user, logOut } = useContext(UserContext);

    const handleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch(error => {
                console.log(error);
            })
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
                    user && <button onClick={handleLogOut}>LogOut</button>
                }


            </div>
        </nav>
    );
};

export default Header;