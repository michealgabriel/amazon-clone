import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';
import { useDispatch } from 'react-redux';
import { setAuthData } from '../../../redux/reducers/auth.reducer';

function Login() {

    const navigator = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // create dispatch to manipulate data to Redux Store
    const dispatch = useDispatch();

    const signIn = (e) => {
        e.preventDefault();

        // firebase authentication
        signInWithEmailAndPassword(auth, email, password)
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
            setError('Email or password invalid');
        });

    }

  return (
    <div className='login'>

        <Link to="/">
            <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png' alt='' />
        </Link>

        <div className='login__container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <span className='login__errorText'>{error}</span>

                <button type='submit' onClick={signIn} className='login__signInButton'>Continue</button>

                <Link to='/register'>
                <span className='login__createAccount'>Don't have an account ?</span>
                </Link>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                

            </form>
        </div>
    </div>
  )
}

export default Login