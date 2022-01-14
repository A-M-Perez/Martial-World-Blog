import React, { useState, useEffect, useRef } from 'react';
import '../../../styles/pages/login/Login.css'
import '../../../styles/pages/Home.css'
import axios from 'axios';
import { serverURL } from '../../../Global';
import PageTransitionAnimation from '../../layout/PageTransitionAnimation';

axios.defaults.withCredentials = true;

const Login = ({ openModal, message, authentication, userInfo }) => {

    const [signInStatus, setSignInStatus] = useState(null);

    // REGULAR LOGIN FORM METHODS
    let loginUserEmail = useRef();
    let loginUserPassword = useRef();

    useEffect(() => {

        if (!userInfo.guestUserName) {
            if (signInStatus) {
                switch (signInStatus) {
                    case 'success':
                        message('WELCOME', `${userInfo.userName}!`, true);
                        break;
                    case 'wrongPassword':
                        message('SORRY', `Wrong password, please try again.`, true);
                        break;
                    case 'unknown':
                        message('SORRY', `User could not be found. Please try again.`, true);
                        break;
                    default:
                        message('SORRY', `Please try again.`, true);
                        break;
                };
            } else if ('' && signInStatus) {
                alert("Sorry, seems like there has been an error. Please reload the page and try again.");
            };
        };
    }, [signInStatus]);

    function getLoginForm(e) {
        e.preventDefault();

        const submittedLoginForm = {
            loginEmail: loginUserEmail.current.value,
            loginPassword: loginUserPassword.current.value
        }

        axios.post(`${serverURL}/api/login_user`, submittedLoginForm)
            .then((response) => {
                authentication(true, response.data.name, '', response.data.email);
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

        axios.post(`${serverURL}/api/login_guestUser`, submittedGuestLogin)
            .then((response) => {
                authentication(true, '', response.data.user);
                setSignInStatus(response.data.status)
            })
            .catch((err) => {
                alert(err);
            });
    };

    //FOR BOTH METHODS
    function logOut() {

        axios.get(`${serverURL}/api/logout`)
            .then((response) => {
                authentication(false, '', '');
                setSignInStatus(response.data.status)
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <PageTransitionAnimation>
            <section id='login'>

                {/* REGULAR LOG IN FORM */}
                {!userInfo.userName && <section id='login-form'>
                    <h2>Sign in</h2>
                    <h3>Log in to post, like(?) and comment(?) articles</h3>
                    <form id='user-login' onSubmit={getLoginForm}>
                        <label id='user' htmlFor='user'>User e-mail:&nbsp;</label>
                        <input type='text' name='user' placeholder='User e-mail...' ref={loginUserEmail} maxLength='50' />
                        <label id='password' htmlFor='password'>Password:&nbsp;</label>
                        <input type='password' name='password' placeholder='Enter password...' ref={loginUserPassword} minLength='8' maxLength='15' />
                        <button type='submit' id='login-btn'>Log in</button>
                    </form>
                    <span id='not-user'>Not an user yet?</span>
                    <br />
                    <button type='button' id='sign-up-btn' onClick={openModal}>Sign up</button>
                </section>}

                {userInfo.userName && <section id='login-form'>
                    <p id='alreadySignedIn'>You are already signed in as <span id='userName'>{userInfo.userName}</span></p>
                    <div id='logOutContainer'>
                        <button type='button' id='logOutBtn' onClick={logOut}>Log out</button>
                    </div>
                </section>}

                <div id='separator' />

                {/* LOG IN FORM FOR GUESTS */}
                <aside id='guest-login-section'>
                    {!userInfo.guestUserName && <form id='guest-login' onSubmit={getGuestLoginForm}>
                        <button type='submit' id='guest-login-btn'>GUEST Log in</button>
                        <label id='guest-nickname' htmlFor='guest-nickname' dataToolTip='User nickname cannot be more than 30 characters long'
                            className='toolTipAvailable'>Choose a nickname:&nbsp;</label>
                        <input type='text' name='guest-nickname' placeholder='Enter nickname...' ref={guestNickname}
                            maxLength='30' />
                    </form>}
                    {userInfo.guestUserName &&
                        <section>
                            <p id='alreadySignedIn'>Temporarily logged in as<br /><span id='userName'>{userInfo.guestUserName}</span></p>
                            <div id='logOutContainer'>
                                <button id='logOutBtn' type='button' onClick={logOut}>Log out</button>
                            </div>
                        </section>
                    }
                    <p>If you are visiting this site for the first time or do not have an user but want to check out the community, just choose a nickname and <b>sign in as a Guest user</b>.</p>
                </aside>

            </section>
        </PageTransitionAnimation>
    )
};

export default Login;