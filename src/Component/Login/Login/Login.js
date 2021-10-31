import React from 'react';
import './Login.css';
import {Container } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setError, error } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                setError("");
                history.push(redirect_uri);
            })
            .catch(error=>{
                setError(error.message);
            })
    }

    return (
        <div className="vh-100" >
            <Container className="login-style">
            <h1 className="mb-5">Please Login</h1>
            <button onClick={handleGoogleSignIn} className="btn btn-success"><i className="fab fa-google me-2 text-warning"></i>Sign in with Google</button>
            <p>{error}</p>
            </Container>
        </div>
    );
};

export default Login;