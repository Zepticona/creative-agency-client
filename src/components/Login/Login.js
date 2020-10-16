import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import classes from './login.module.css'

const Login = () => {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInuser] = useContext(UserContext);
    
    // Stopping firebase from creating an infinite loop by rerendering the dom
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    
    // Logging in google account
    const provider = new firebase.auth.GoogleAuthProvider();    
    const googleLoginHandler = () => {
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            console.log(result)
            const userInfos = {
                name: result.user.displayName,
                email: result.user.email,
                userImg: result.user.photoURL
            }
            setLoggedInuser(userInfos);
            history.replace(from);
        })
        .catch( error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(errorCode, errorMessage, email, credential)
        });
    }
    
    return (
        <div className={classes.wrappingContainer}>
            <Link to='/home'>
                <img className={classes.siteLogo} src={require(`../../assets/images/logos/logo.png`)} alt=""/>
            </Link>
            <div className={classes.loginBox}>
                <h4>Login With</h4>
                <button className={classes.loginBtn} onClick={googleLoginHandler}>
                    <img src={require('../../assets/images/logos/googleLogo.png')} alt=""/>
                    <span>Continue with google</span>
                </button>
                <p>Don't have an account? <a href="https://accounts.google.com/signup?hl=en" target="_blank">Crate an account</a> </p>
            </div>
        </div>
    );
};

export default Login;