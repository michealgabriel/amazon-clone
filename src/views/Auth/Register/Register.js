import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Register.css';
import { useDispatch } from 'react-redux';
import { setAuthData } from '../../../redux/reducers/auth.reducer';

function Register() {

    const navigator = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // create dispatch to manipulate data to Redux Store
    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();

        // firebase authentication
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            // successfully created new user
            console.log(res.user);
            if(res) {
                dispatch(setAuthData(res.user));
                navigator('/');
            }
        })
        .catch(error => {
            console.log(error.message);
            if(error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') setError('Password should be at least 6 characters');
            else setError('Please provide a valid email');
        });
    }

  return (
    <div className='register'>

        <Link to="/">
            <img className='register__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png' alt='' />
        </Link>

        <div className='register__container'>
            <h1>Create Account</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <span className='register__errorText'>{error}</span>   

                <button type='submit' onClick={register} className='register__signInButton'>Continue</button>

                <Link to='/login'>
                <span className='register__haveAccount'>Already have an account ?</span>
                </Link>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

            </form>
        </div>
    </div>
  )
}

export default Register