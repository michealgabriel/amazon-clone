import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuthData } from './redux/reducers/auth.reducer';

function AuthRoute(props) {

    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        // checking for auth status changes
        onAuthStateChanged(auth, (user) => {
            if(user){
                setIsLoading(false);
                console.log("E dey alright");
    
                dispatch(setAuthData(user));
            }else {
                console.log("unauthorized");
                navigate('/login');
            }
        });
    }, [auth, dispatch, navigate]);

    if(isLoading) return (<h1>Loading...</h1>);


  return (<>{children}</>);
}

export default AuthRoute