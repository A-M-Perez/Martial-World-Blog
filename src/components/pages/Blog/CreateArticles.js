import React, { useState, useRef } from 'react';
import '../../../styles/pages/blog/CreateArticles.css';
import axios from 'axios';
import { serverURL } from '../../../Global';
import ConfirmationMessage from '../ConfirmationMsg';
import PageTransitionAnimation from '../../layout/PageTransitionAnimation';

let cocAcknowledged = false;

const CodeOfConduct = ({ checked }) => {

    function checkCodeOfConduct(e) {
        if (e.target.checked === true) {
            cocAcknowledged = true;
        } else if (e.target.checked === false) {
            cocAcknowledged = false;
        };
    };

    let codeOfConductStatus = checked;

    return (
        <aside id='codeOfConduct'>
            <h4 id='cocTitle'>Code of Conduct:</h4>
            <div id='cocText'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, similique placeat architecto excepturi esse atque at optio quas nesciunt quos ut nisi reiciendis quisquam, nihil laborum, expedita perspiciatis dolores quam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, similique placeat architecto excepturi esse atque at optio quas nesciunt quos ut nisi reiciendis quisquam, nihil laborum, expedita perspiciatis dolores quam?</p>
                <ul>
                    <li>Rule #1</li>
                    <li>Rule #2</li>
                    <li>Rule #3</li>
                    <li>Rule #4</li>
                </ul>
            </div>
            <input checked={codeOfConductStatus} type='checkbox' name='cocAcknowledgement' onChange={checkCodeOfConduct} id='acknowledgeCheckBox' /><label htmlFor='cocAcknowledgement' id='acknowledgeText'>I acknowledge the code of conduct for posting articles.</label>
        </aside>
    );
};

const CreateArticles = ({ userName, guestUserName, userEmail }) => {

    let articleTitle = useRef();
    let articleText = useRef();
    const [uploadedImage, setUploadedImage] = useState(null);
    const [codeOfConductChecked, setCodeOfConductChecked] = useState();

    function uploadImage(e) {
        setUploadedImage(e.target.files[0]);
    };

    function postArticle(e) {
        e.preventDefault();

        if (cocAcknowledged === true) {
            const submittedArticleForm = {
                blogArticleTitle: articleTitle.current.value,
                blogArticleText: articleText.current.value,
                blogArticleUser: userName,
                blogArticleGuestUserName: guestUserName,
                blogArticleUserEmail: userEmail
            }

            axios.post(`${serverURL}/api/post_article`, submittedArticleForm)
                .then((response) => {
                    if (response) {
                        confirmationMessageContent('POSTED', 'successfully', true);
                        clearFormAfterPosting();
                        setCodeOfConductChecked(false);
                        cocAcknowledged = false;
                    }
                })
                .catch((err) => {
                    console.log(err);
                });

        } else if (cocAcknowledged === false) {
            confirmationMessageContent('Please Acknowledge our', 'CODE OF CONDUCT', true)
        };
    };

    const [messageTitle, setMessageTitle] = useState('');
    const [messageContent, setMessageContent] = useState('');
    const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);

    const confirmationMessageContent = (title, content, showMessage) => {
        setMessageTitle(title);
        setMessageContent(content);
        setShowConfirmationMessage(showMessage);
    };

    function clearFormAfterPosting() {
        const form = document.getElementById('createArticleForm');
        form.reset();
    };

    return (
        <PageTransitionAnimation>
            <section id='createArticleContainer'>
                <CodeOfConduct checked={codeOfConductChecked} />
                <div id='createArticleSection'>
                    <h2 id='createArticleTitle'>CREATE ARTICLE</h2>
                    <hr />
                    <form id='createArticleForm' onSubmit={postArticle}>
                        <label htmlFor='articleTitle'>Title:&nbsp;</label>
                        <input type='text' name='articleTitle' placeholder="Enter article title here..." ref={articleTitle} /><br /><br />
                        <label>Image:&nbsp;
                            <input type='file' id='imageUploader' accept='image/png' onChange={uploadImage} />
                        </label><br /><br />
                        <label htmlFor='articleText'>Article text:&nbsp;</label>
                        <textarea name='articleText' placeholder="Write your article here..." ref={articleText} /><br /><br />
                        <button type='submit' id='login-btn'>Post</button>
                    </form>
                </div>
                {showConfirmationMessage && <ConfirmationMessage messageTitle={messageTitle} messageContent={messageContent} visibility={confirmationMessageContent} />}
            </section>
        </PageTransitionAnimation>

    )
};

export default CreateArticles;