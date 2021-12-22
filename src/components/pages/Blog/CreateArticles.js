import React, { useRef } from 'react';
import '../../../styles/pages/blog/CreateArticles.css';
import axios from 'axios';
import { serverURL } from '../../../Global';
import styles from '../../../styles/pages/blog/CodeOfConduct.module.css';

let cocAcknowledged = false;

const CodeOfConduct = () => {

    function checkCodeOfConduct(e) {
        if (e.target.checked === true) {
            cocAcknowledged = true;
            console.log(cocAcknowledged);
        } else if (e.target.checked === false) {
            cocAcknowledged = false;
            console.log(cocAcknowledged);
        };
    };

    return (
        <aside className={styles.cocContainer}>
            <h4>Code of Conduct:</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, similique placeat architecto excepturi esse atque at optio quas nesciunt quos ut nisi reiciendis quisquam, nihil laborum, expedita perspiciatis dolores quam?</p>
            <ul>
                <li>Rule #1</li>
                <li>Rule #2</li>
                <li>Rule #3</li>
                <li>Rule #4</li>
            </ul>
            <input type='checkbox' name='cocAcknowledgement' onChange={checkCodeOfConduct} /><label htmlFor='cocAcknowledgement'>I acknowledge the code of conduct for posting articles.</label>
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
        <section className='createArticleContainer'>
            <CodeOfConduct />
            <div className='createArticleSection'>
                <h2>CREATE ARTICLES</h2>
                <hr />
                <form id='createArticle' onSubmit={postArticle}>
                    <label htmlFor='articleTitle'>Title:&nbsp;</label>
                    <input type='text' name='articleTitle' placeholder="Enter article title here..." href={articleTitle} />

                    <label>Image:&nbsp;</label>

                    <label htmlFor='articleText'>Article text:&nbsp;</label>
                    <textarea name='articleText' placeholder="Write your article here..." href={articleText} />
                    <button type='submit'>Post</button>
                </form>
            </div>
        </section>
    )
};

export default CreateArticles;