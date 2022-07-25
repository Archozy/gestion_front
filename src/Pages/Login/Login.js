import React, { useState } from "react";
import logo from '../../assets/images/Login/logoDD.png';
import './Login.css';
import data from '../data/data.json';

function Login(props) {
    const handleConnect = () => {
        let email = document.getElementById('email-form');
        let password = document.getElementById('password-form');
        props.auth(email.value, password.value);
    }
    return (
        <div className="login">
            {data.map(post => {
                return (
                    <div className="loginContainer">

                        {/* //Login left */}
                        <div className="loginLeft">
                            <img className="loginLogo" src={logo} alt="logo" />
                            <input
                                type="text"
                                id="email-form"
                                placeholder={post.login.placeholder.username}>
                            </input>
                            <input
                                type="password"
                                id="password-form"
                                placeholder={post.login.placeholder.password}>
                            </input>
                            <button onClick={handleConnect}>{post.login.connectionButton}</button>
                            <a>{post.login.forgottenPW}</a>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Login;
