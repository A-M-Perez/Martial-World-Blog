import React, { useRef } from 'react';
import '../../../styles/pages/blog/CreateArticles.css';
import axios from 'axios';
import { serverURL } from '../../../Global';

const CreateArticles = () => {

    let articleTitle = useRef();
    let articleText = useRef();

    function postArticle(e) {

        e.preventDefault();

        const submittedArticleForm = {
            articleTitle: articleTitle.current.value,
            articleText: articleText.current.value
        }

        axios.post(`${serverURL}/api/post_article`, submittedArticleForm);

    };


    return (
        <section>
            <h2>CREATE ARTICLES</h2>
            <hr />
            <form id='createArticle' onSubmit={postArticle}>
                <label for='articleTitle'>Title:&nbsp;</label>
                <input type='text' name='articleTitle' placeholder="Enter article title here..." href={articleTitle} />

                <label>Image:&nbsp;</label>

                <label for='articleText'>Article text:&nbsp;</label>
                <textarea name='articleText' placeholder="Write your article here..." href={articleText} />
                <button type='submit'>Post</button>
            </form>
            <aside id="rules">

            </aside>
        </section>
    )
};

export default CreateArticles;