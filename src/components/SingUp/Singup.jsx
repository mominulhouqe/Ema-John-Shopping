import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Singup = () => {

    const [error, setError] = useState('');



    const handleSingUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.event.target;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password !== confirm){
            setError('Your Password did not match')
            return;
        }
        else if(password.length > 6){
            setError('You have must given 6 digit')
        }
    }

    return (
        <>
            <form onSubmit={handleSingUp} className='w-50 mx-lg-auto mt-5 bg-light p-4 border rounded'>
                <h3 className='text-center mb-5'>Please Register !!!</h3>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' required id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" name='confirm' required className="form-control" id="exampleInputPassword1" />
                </div>
                
                <button type="submit" className="btn btn-primary mb-4">Sign Up</button>
                <p>Already have an account ? <Link to="/login" className='text-warning'>login</Link> </p>
                <p className='text-warning'>{error}</p>
                <hr />
               <div className='d-flex align-item-center justify-content-center bg-light'>
               <button className='btn btn-outline-primary'>Continue With Google</button>
               </div>
            </form>
        </>
    );
};

export default Singup;