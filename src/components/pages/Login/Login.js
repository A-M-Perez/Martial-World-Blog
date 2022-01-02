import React, { useState, useEffect, useRef } from 'react';
import '../../../styles/pages/login/Login.css'
import '../../../styles/pages/Home.css'
import axios from 'axios';
import { serverURL, user } from '../../../Global';

axios.defaults.withCredentials = true;

const Login = ({ openModal, message }) => {

    const [signInStatus, setSignInStatus] = useState(null);

    // REGULAR LOGIN FORM METHODS
    let loginUserEmail = useRef();
    let loginUserPassword = useRef();

    useEffect(() => {
        if (signInStatus === 'success') {
            message('WELCOME', `${user}!`, true);
        } else if ('' && signInStatus) {
            alert("Sorry, seems like there has been an error. Please reload the page and try again.");
        }
    }, [signInStatus]);

    function getLoginForm(e) {
        e.preventDefault();

        const submittedLoginForm = {
            loginEmail: loginUserEmail.current.value,
            loginPassword: loginUserPassword.current.value
        }

        axios.post(`${serverURL}/api/login_user`, submittedLoginForm)
            .then((response) => {
                setSignInStatus(response.data.status);
                
            })
            .catch((err) => {
                alert(err);
            });
    };

    // GUEST USER LOGIN FORM METHODS
    let guestNickname = useRef();

    function getGuestLoginForm(e) {
        e.preventDefault();

        const submittedGuestLogin = {
            nickname: guestNickname.current.value
        };

        axios.post(`${serverURL}/api/login_guestUser`, submittedGuestLogin);

    };

    return (
        <section id='login'>

            {/* REGULAR LOG IN FORM */}
            <section id='login-form'>
                <h2>Sign in</h2>
                <form id='user-login' onSubmit={getLoginForm}>
                    <label id='user' htmlFor='user'>User e-mail:&nbsp;</label>
                    <input type='text' name='user' placeholder='User e-mail...' ref={loginUserEmail} />
                    <label id='password' htmlFor='password'>Password:&nbsp;</label>
                    <input type='password' name='password' placeholder='Enter password...' ref={loginUserPassword} />
                    <button type='submit' id='login-btn'>Log in</button>
                </form>
                <span id='not-user'>Not an user yet?</span>
                <br />
                <button type='button' id='sign-up-btn' onClick={openModal}>Sign up</button>
            </section>
            <div id='separator' />

            {/* LOG IN FORM FOR GUESTS */}
            <aside id='guest-login-section'>
                <form id='guest-login' onSubmit={getGuestLoginForm}>
                    <button type='submit' id='guest-login-btn'>GUEST Log in</button>
                    <label id='guest-nickname' htmlFor='guest-nickname'>Choose a nickname:&nbsp;</label>
                    <input type='text' name='guest-nickname' placeholder='Enter nickname...' ref={guestNickname} />
                </form>
                <p>If you are visiting this site for the first time or do not have an user but want to check out the community, just choose a nickname and <b>sign in as a Guest user</b>.</p>
            </aside>

        </section>
    )
};

export default Login;