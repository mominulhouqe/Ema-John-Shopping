import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../Providers/Authprovider';

const Login = () => {

    const { user, loginUser } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState(null);


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('')

        if (password.length > 6) {
            setError('You have must 6 digit of password')
        }

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => {
                setError(error.message);

            })


    }



    return (
        <div>
            <h3 className='text-center mb-5'>Please Login !!!</h3>
            <form onSubmit={handleLogin} className='w-50 mx-lg-auto mt-5 bg-light p-4 border rounded'>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' required id="exampleInputPassword1" />
                </div>

                <div className="mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Login</button>
                <p className='text-warning'>{error}</p>
               

                <p>New to Ema-john? <Link to="/singup" className='text-warning'>Create an account </Link> </p>
                <hr />
                <div className='d-flex align-item-center justify-content-center bg-light'>
                    <button className='btn btn-outline-primary'>Continue With Google</button>
                </div>
            </form>
        </div>
    );
};

export default Login;