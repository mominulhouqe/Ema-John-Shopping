import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Providers/Authprovider';

const Header = () => {
  const { user, logOut } = useContext(UserContext);

  const handleLogOut = () => {
    logOut()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800">
      <div className="flex items-center">
        <Link to="/">
          {/* <img src={logo} alt="" className="h-8" /> */}
        </Link>
        <div className="ml-4">
          <Link to="/" className="text-white ml-4">
            Shop
          </Link>
          <Link to="/orders" className="text-white ml-4">
            Orders
          </Link>
          <Link to="/inventory" className="text-white ml-4">
            Inventory
          </Link>
        </div>
      </div>
      <div>
        {user && (
          <div className="text-white">
            <small className="mr-2">{user.email}</small>
            <button
              onClick={handleLogOut}
              className="px-4 py-2 bg-green-500 rounded text-white"
            >
              Sign Out
            </button>
          </div>
        )}
        {!user && (
          <Link to="/login" className="text-white ml-4">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
