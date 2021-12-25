import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../../styles/pages/blog/ArticlesList.css';
import { serverURL } from '../../../Global';

const ArticleSummary = ({ toggleView }) => {

    const [articleData, setArticleData] = useState([]);
    const [status, setStatus] = useState('Success');

    useEffect(
        function getArticles() {
            axios.get(`${serverURL}/api/get_articles`)
                .then((res) => {
                    setArticleData(res.data);
                })
                .catch(() => {
                    setStatus('Error');
                });
        }, []);

    if (articleData.length != 0) {
        const listOfArticles = articleData.map(article => {
            return (
                <div key={article.id} id='articleSummary'>
                    <img alt='Article image' id='articleImage' />
                    <h5 onClick={() => { toggleView('readArticle') }}>{article.title}</h5>
                    <h6 >{article.article_date}</h6>
                    <h6 >{article.author}</h6>
                    <p >{article.article}
                    </p>
                </div>
            );
        });
        return (
            <React.Fragment>
                {listOfArticles}
            </React.Fragment>
        )
    } else {
        return (
            <p id='loadingMessage'>Loading articles...</p>
        )
    };
};

const ArticlesList = ({ toggleView }) => {

    return (
        <section id='articlesList'>
            <h2>ARTICLES</h2>
            <ArticleSummary toggleView={toggleView} />
        </section>
    );
};

export default ArticlesList;