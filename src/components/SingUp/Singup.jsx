import React from 'react';
import { Link } from 'react-router-dom';

const Singup = () => {
    return (
        <>
            <form className='w-50 mx-auto mt-5 bg-light p-4 border rounded'>
                <h3 className='text-center mb-5'>Please Register !!!</h3>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name='email' required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" name='password' required id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" name='password' required class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" class="btn btn-primary">Sign Up</button>
                <p>Already have an account ? <Link to="/login">login</Link> </p>
                <hr />
               <div className='d-flex align-item-center justify-content-center bg-light'>
               <button className='btn btn-outline-primary'>Continue With Google</button>
               </div>
            </form>
        </>
    );
};

export default Singup;