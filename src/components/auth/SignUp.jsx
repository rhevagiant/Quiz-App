/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCrendential) => {
            console.log(userCrendential)
        }) .catch((error) => {
            console.log(error)
        })
    }
  return (
    <div className='sign-up-container'>
        <form onSubmit={signUp}>
            <h1>Create Account</h1>
            <input 
            type='text' 
            placeholder='Enter your email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ></input>

            <input 
            type='password' 
            placeholder='Enter your password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button type='submit'>Sign Up</button>
            <p>
                Already Have account?<Link to="/login" style={{ textDecoration: "none" }}>Log in</Link>
            </p>
        </form>
    </div>
  )
}

export default SignUp
