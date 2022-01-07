import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../../styles/pages/blog/Articles.css'
import { serverURL } from '../../../Global';
import axios from 'axios';
import Moment from 'react-moment';

const RelatedArticle = ({ titlesRelatedTo }) => {

    const RegExpToClearSearch = /a\s|the\s|at\s|in_|on_|for\s|of\s|my\s|his\s|her\s|he_|she_|they_|them_|about_/ig;
    const keyWordsArray = titlesRelatedTo.replaceAll(RegExpToClearSearch, '').split(' ');
    const [relatedArticleData, setRelatedArticleData] = useState([]);

    axios.post(`${serverURL}/api/get_relatedArticles`, keyWordsArray)
        .then((res) => {
            setRelatedArticleData(res.data);
        })
        .catch((err) =>
            console.log(err)
        );

        return (
                        <div>
        
                        </div>)

    if (relatedArticleData.length === 0) {

        const allArticles = relatedArticleData.map(relatedARticle => {

            return (
                <div key={relatedARticle.title}>

                </div>
            )
        });
    };
};

const RelatedArticlesList = ({ titlesRelatedTo }) => {

    return (
        <aside id='relatedArticlesSection'>
            <h4>Related Articles</h4>
            <hr />
            <div id='relatedArticle'>
                <RelatedArticle titlesRelatedTo={titlesRelatedTo} />
            </div>
        </aside>
    );
};


const Article = () => {

    const params = useParams();
    const articlelId = params.id;

    const [articleData, setArticleData] = useState([]);

    useEffect(
        function getArticleById() {

            axios.get(`${serverURL}/api/get_article/${articlelId}`)
                .then((res) => {
                    setArticleData(res.data[0]);
                })
                .catch((err) => {
                    console.log(err)
                });
        }, []);

    let articleTitle = '';

    if (articleData.title !== '') {
        articleTitle = articleData.title;
    };

    if (articleData.length !== 0) {
        return (
            <React.Fragment>
                <RelatedArticlesList titlesRelatedTo={articleTitle} />
                <section id='article' key={articleData.id}>
                    <img alt='Article Image' id='articleImage' src={require(`../../../assets/img/articles/${articleData.image}`)} />
                    <h2>{articleData.title}</h2>
                    <h5>
                        <Moment
                            fromNow>
                            {articleData.article_date}
                        </Moment>
                        &nbsp;- {articleData.author}
                    </h5>
                    <p>{articleData.article}</p>
                </section>
            </React.Fragment>
        );
    } else {
        return (
            <section id='article' key={articleData.id}>
                <p>Loading selected article...</p>
            </section>
        )
    };
};

export default Article;