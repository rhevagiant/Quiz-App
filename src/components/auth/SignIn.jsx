/* eslint-disable no-unused-vars */
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { useNavigate, Link } from 'react-router-dom';
import "./signin.scss";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            navigate("/");
          })
          .catch((error) => {
            alert("Password or Email is incorrect ❌");
          });
      };
  return (
    <div className='sign-in-container'>
        <form onSubmit={signIn}>
            <h1>Log In to your account</h1>
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

            <button type='submit'>Sign In</button>
            <p>
              Have no account?
              <Link to="/signup" style={{ textDecoration: "none" }}>
              {" "}
                Sign Up
              </Link>
            </p>
        </form>
    </div>
  )
}

export default SignIn
