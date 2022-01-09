import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import '../../../styles/pages/login/SignUp.css'
import { serverURL, user, userEmail } from '../../../Global';
import PageTransitionAnimation from '../../layout/PageTransitionAnimation';

axios.defaults.withCredentials = true;

const SignUpModal = ({ closeModal, message }) => {

    let signUpUserEmail = useRef();
    let signUpUserName = useRef();
    let signUpUserPassword = useRef();
    let signUpUserPasswordCheck = useRef();

    const [signUpStatus, setSignUpStatus] = useState(null);

    useEffect(() => {
        if (signUpStatus === 'success') {
            message('THANK YOU!', `User ${user} has been successfully created. Please log in for access.`, true);
            closeModal();
        } else if (signUpUserEmail != '' && signUpStatus) {
            alert("Sorry, seems like there has been an error. Please reload the page and try again.");
            closeModal();
        }
    }, [signUpStatus]);

    function getSignUpForm(e) {
        e.preventDefault();

        if (signUpUserPassword.current.value === signUpUserPasswordCheck.current.value) {

            const submittedSignUpForm = {
                email: signUpUserEmail.current.value,
                name: signUpUserName.current.value,
                password: signUpUserPassword.current.value
            }

            axios.post(`${serverURL}/api/insert_user`, submittedSignUpForm)
                .then((response) => {
                    setSignUpStatus(response.data.status);
                    user = response.data.name;
                    userEmail = response.data.email;
                })
                .catch((err) => {
                    alert(err);
                });

        } else {
            alert('Passwords do not match. Please check your password and try again.');
        };
    };

    return (
        <PageTransitionAnimation>
            <div id='background-layer'>
                <form id='user-creation-form' onSubmit={getSignUpForm}>
                    <button type='button' id='close-btn' onClick={closeModal}
                    >&#10006;</button>
                    <label htmlFor='user-email' id='user-email' dataToolTip='Email cannot be more than 50 characters long'
                        className='toolTipAvailable'>E-mail:&nbsp;</label>
                    <input type='email' name='user-email' ref={signUpUserEmail} maxLength='50' />
                    <label htmlFor='user-name' id='user-name' dataToolTip='Name cannot be more than 30 characters long'
                        className='toolTipAvailable'>Name:&nbsp;</label>
                    <input name='user-name' id='user-name' ref={signUpUserName} maxLength='30' />
                    <label htmlFor='user-password' id='user-password' dataToolTip='Password should be between 8 and 15 characters long'
                        className='toolTipAvailable'>Password:&nbsp;</label>
                    <input type='password' name='user-password' ref={signUpUserPassword} minLength='8' maxLength='15' />
                    <label htmlFor='user-password' id='user-password-check'>Re-enter Password:&nbsp;</label>
                    <input type='password' name='user-password-check' ref={signUpUserPasswordCheck} minLength='8' maxLength='15' />
                    <button type='submit' id='user-creation-btn'>Create user</button>
                </form>
            </div>
        </PageTransitionAnimation>
    );
};

export default SignUpModal;