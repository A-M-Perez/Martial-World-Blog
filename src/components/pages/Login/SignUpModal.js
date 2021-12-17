import axios from 'axios';
import React, { useRef } from 'react';
import '../../../styles/pages/SignUp.css'
import { serverURL } from '../../../Global';

const SignUpModal = ({ closeModal }) => {

    let signInUserEmail = useRef();
    let signInUserName = useRef();
    let signInUserPassword = useRef();
    let signInUserPasswordCheck = useRef();

    function getSignUpForm(e) {
        e.preventDefault();

        if (signInUserPassword.current.value === signInUserPasswordCheck.current.value) {
        
            const submittedSignUpForm = {
                email: signInUserEmail.current.value,
                name: signInUserName.current.value,
                password: signInUserPassword.current.value
            }

            axios.post(`${serverURL}/api/insert_user`, submittedSignUpForm);

        } else {
            alert('Please check your password and try again');
        }

    };

    return (
        <div id='background-layer'>
            <form id='user-creation-form' onSubmit={getSignUpForm}>
                <button type='button' id='close-btn' onClick={closeModal}
                >&#10006;</button>
                <label htmlFor='user-email' id='user-email'>E-mail:&nbsp;</label>
                <input type='email' name='user-email' ref={signInUserEmail} />
                <label htmlFor='user-name' id='user-name'>Name:&nbsp;</label>
                <input name='user-name' id='user-name' ref={signInUserName} />
                <label htmlFor='user-password' id='user-password'>Password:&nbsp;</label>
                <input type='password' name='user-password' ref={signInUserPassword} />
                <label htmlFor='user-password' id='user-password-check'>Re-enter Password:&nbsp;</label>
                <input type='password' name='user-password-check' ref={signInUserPasswordCheck} />
                <button type='submit' id='user-creation-btn'>Create user</button>
            </form>
        </div>
    );
};

export default SignUpModal;