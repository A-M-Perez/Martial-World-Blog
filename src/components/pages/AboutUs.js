import React, { useState, useRef } from 'react';
import '../../styles/pages/AboutUs.css';
import '../../styles/pages/Home.css';
import axios from 'axios';
import { serverURL } from '../../Global';
import ConfirmationMessage from './ConfirmationMsg';
import PageTransitionAnimation from '../layout/PageTransitionAnimation';

const AboutUs = () => {

    const [messageTitle, setMessageTitle] = useState('');
    const [messageContent, setMessageContent] = useState('');
    const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);

    const confirmationMessageContent = (title, content, showMessage) => {
        setMessageTitle(title);
        setMessageContent(content);
        setShowConfirmationMessage(showMessage);
    };

    let contactEmailRef = useRef();
    let contactSubjectRef = useRef();
    let contactMessageRef = useRef();

    function getContactForm(e) {
        e.preventDefault();

        const submittedContactForm = {
            email: contactEmailRef.current.value,
            subject: contactSubjectRef.current.value,
            message: contactMessageRef.current.value
        }

        axios.post(`${serverURL}/api/send_message`, submittedContactForm)
            .then((response) => {
                confirmationMessageContent('THANK YOU!','Your message has been sent, we will contact you shortly.',response.data.status);
                document.getElementById('contactEmail').value = '';
                document.getElementById('contactSubject').value = '';
                document.getElementById('contactMessage').value = '';
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <PageTransitionAnimation>
            <section id='about-us'>
                <section id='about-us-text'>
                    <h2 id='about-us-title'>About Us</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At reiciendis sequi necessitatibus ex optio ab laudantium illo vel, nostrum impedit numquam blanditiis provident. Expedita itaque nisi saepe, enim maiores perspiciatis!</p>
                    <p>Reiciendis quae eligendi necessitatibus est similique nam obcaecati itaque! Cumque esse facilis nesciunt necessitatibus qui recusandae, praesentium labore perspiciatis dolorum a deserunt, cum, non commodi. Pariatur est esse vero voluptas.</p>
                </section>
                <aside id='contact-us'>
                    <h3 id='contact-us-title'>Contact us</h3>
                    <hr />
                    <form id='contact-us-form' onSubmit={getContactForm}>
                        <label htmlFor='email'>E-mail:&nbsp;
                            <input type='email' name='email' id='contactEmail' placeholder="Enter your e-mail address..." ref={contactEmailRef}></input>
                        </label>
                        <label htmlFor='subject'>Subject:&nbsp;
                            <input type='text' name='subject' id='contactSubject' placeholder="Enter a subject..." ref={contactSubjectRef}></input>
                        </label>
                        <label htmlFor='message'>Message:&nbsp;
                            <textarea name='message' id='contactMessage' placeholder='Enter your message here...' ref={contactMessageRef}></textarea>
                        </label>
                        <button type='submit'>Send</button>
                    </form>
                </aside>
                {showConfirmationMessage && <ConfirmationMessage messageTitle={messageTitle} messageContent={messageContent} visibility={confirmationMessageContent} />}
            </section>
        </PageTransitionAnimation>
    );
};

export default AboutUs;