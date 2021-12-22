import React, { useRef } from 'react';
import '../../../styles/pages/blog/CreateArticles.css';
import axios from 'axios';
import { serverURL } from '../../../Global';

let cocAcknowledged = false;

const CodeOfConduct = () => {

    function checkCodeOfConduct(e) {
        if (e.target.checked === true) {
            cocAcknowledged = true;
        } else if (e.target.checked === false) {
            cocAcknowledged = false;
        };
    };

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
            <input type='checkbox' name='cocAcknowledgement' onChange={checkCodeOfConduct} id='acknowledgeCheckBox'/><label htmlFor='cocAcknowledgement' id='acknowledgeText'>I acknowledge the code of conduct for posting articles.</label>
        </aside>
    );
};

const CreateArticles = () => {

    let articleTitle = useRef();
    let articleText = useRef();

    function postArticle(e) {

        e.preventDefault();

        if (cocAcknowledged === true) {
            const submittedArticleForm = {
                articleTitle: articleTitle.current.value,
                articleText: articleText.current.value
            }

            axios.post(`${serverURL}/api/post_article`, submittedArticleForm);

        } else if (cocAcknowledged === false) {
            alert('confirma el COC');
        };
    };

    return (
        <section id='createArticleContainer'>
            <CodeOfConduct />
            <div id='createArticleSection'>
                <h2 id='createArticleTitle'>CREATE ARTICLE</h2>
                <hr />
                <form id='createArticleForm' onSubmit={postArticle}>
                    <label htmlFor='articleTitle'>Title:&nbsp;<input type='text' name='articleTitle' placeholder="Enter article title here..." href={articleTitle} /></label>
                    <label>Image:&nbsp;</label>
                    <label htmlFor='articleText'>Article text:&nbsp;<textarea name='articleText' placeholder="Write your article here..." href={articleText} /></label>
                    <button type='submit'>Post</button>
                </form>
            </div>
        </section>
    )
};

export default CreateArticles;