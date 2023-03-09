import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import  { auth }  from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default function LoginPage() {
    
    // useNavigate allows to programmatically change the url
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const signIn = e =>{
        e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.email);
    if(user){
        navigate("/");
        }
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
    
    const register = e =>{
        e.preventDefault();
    
     createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // if(user){
        //     navigate("/");
        //     }
        
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}
        
        
    return(
        <div className="login">
            <Link to="/">
                <img className="loginLogo" src="./images/Amazonwhitelogo.jpg" alt="White background logo of Amazon"/>
            </Link>
            <div className="loginContainer">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" onClick={signIn} className="loginSignInButton">Sign In</button>
                </form>
                <p>By signing-in you agree to the terms and conditions of Amazon's policy. Please see our Privacy Notice and cookies</p>
                <button onClick={register} className="loginRegisterButton">Create your Amazon Account</button>
            </div>

        </div>
    )
    }

