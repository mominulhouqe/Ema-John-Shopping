import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <form className='w-50 mx-lg-auto mt-5 bg-light p-4 border rounded'>
                <h3 className='text-center mb-5'>Please Login !!!</h3>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' required id="exampleInputPassword1" />
                </div>
              
                <div className="mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Login</button>
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