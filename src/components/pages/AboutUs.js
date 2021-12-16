import React, { useRef } from 'react';
import '../../styles/pages/AboutUs.css';
import '../../styles/pages/Home.css';

const AboutUs = () => {

    let contactEmailRef = useRef();
    let contactSubjectRef = useRef();
    let contactMessageRef = useRef();

    // const [contactForm, setContactForm] = useState({});

    function getContactForm(e) {
        e.preventDefault();

        const submittedContactForm = {
            email: contactEmailRef.current.value,
            subject: contactSubjectRef.current.value,
            message: contactMessageRef.current.value
        }

        // console.log(submittedContactForm);
    };

    return (
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
                        <input type='email' name='email' placeholder="Enter your e-mail address..." ref={contactEmailRef}></input>
                    </label>
                    <label htmlFor='subject'>Subject:&nbsp;
                        <input type='text' name='subject' placeholder="Enter a subject..." ref={contactSubjectRef}></input>
                    </label>
                    <label htmlFor='message'>Message:&nbsp;
                        <textarea name='message' placeholder='Enter your message here...' ref={contactMessageRef}></textarea>
                    </label>
                    <button type='submit'>Send</button>
                </form>
            </aside>
        </section>
    );
};

export default AboutUs;