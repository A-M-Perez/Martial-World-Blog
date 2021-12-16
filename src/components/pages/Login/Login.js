import React, { useRef } from 'react';
import '../../../styles/pages/Login.css'
import '../../../styles/pages/Home.css'
import axios from 'axios';
import { serverURL } from '../../../Global';

const Login = ({ openModal }) => {

    // REGULAR LOGIN FORM METHODS
    let loginUserEmail = useRef();
    let loginUserPassword = useRef();

    function getLoginForm(e) {
        e.preventDefault();

        const submittedLoginForm = {
            loginEmail: loginUserEmail.current.value,
            loginPassword: loginUserPassword.current.value
        }

        axios.post(`${serverURL}/api/login_user`, submittedLoginForm);
    };

    // GUEST LOGIN FORM METHODS
    let guestNickname = useRef();

    function getGuestLoginForm(e) {
        e.preventDefault();

        const submittedGuestLogin = {
            nickname: guestNickname.current.value
        };
    };

    return (
        <section id='login'>

            {/* REGULAR LOGIN FORM */}
            <section id='login-form'>
                <h2>Sign in</h2>
                <form id='user-login' onSubmit={getLoginForm}>
                    <label id='user' htmlFor='user'>User e-mail:&nbsp;</label>
                    <input type='text' name='user' placeholder='User e-mail...' ref={loginUserEmail} />
                    <label id='password' htmlFor='password'>Password:&nbsp;</label>
                    <input type='password' name='password' placeholder='Enter password...' ref={loginUserPassword} />
                    <button type='submit' id='login-btn'>Login</button>
                </form>
                <span id='not-user'>Not an user yet?</span>
                <br />
                <button type='button' id='sign-up-btn' onClick={openModal}>Sign up</button>
            </section>
            <div id='separator' />

            {/* LOGIN FORM FOR GUESTS */}
            <aside id='guest-login-section'>
                <form id='guest-login' onSubmit={getGuestLoginForm}>
                    <button type='submit' id='guest-login-btn'>GUEST Login</button>
                    <label id='guest-nickname' htmlFor='guest-nickname'>Choose a nickname:&nbsp;</label>
                    <input type='text' name='guest-nickname' placeholder='Enter nickname...' ref={guestNickname} />
                </form>
                <p>If you are visiting this site for the first time or do not have an user but want to check out the community, just choose a nickname and <b>sign in as a Guest user</b>.</p>
            </aside>

        </section>
    )
};

export default Login;