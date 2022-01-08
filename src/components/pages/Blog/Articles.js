import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../../styles/pages/blog/Articles.css'
import { serverURL } from '../../../Global';
import axios from 'axios';
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';
import PageTransitionAnimation from '../../layout/PageTransitionAnimation';

const RelatedArticle = ({ titlesRelatedTo, idRelatedto }) => {

    const RegExpToClearSearch = /a\s|the\s|at\s|in\s|on\s|for\s|of\s|my\s|his\s|her\s|he_|she_|they_|them_|about_|he\s|she\s|they\s|them\s|about\s/ig;
    const keyWordsArray = titlesRelatedTo.replaceAll(RegExpToClearSearch, '').split(' ');
    const [relatedArticleData, setRelatedArticleData] = useState([]);
    const [temporaryResponse, setTemporaryResponse] = useState([]);


    useEffect(() => {
        axios.post(`${serverURL}/api/get_relatedArticles`, keyWordsArray)
            .then((res) => {
                setTemporaryResponse(res.data);
            })
            .catch((err) =>
                console.log(err)
            );
    }, []);


    useEffect(() => {
        if (temporaryResponse.length !== 0) {
            let tempArray = temporaryResponse.filter(item => item.id !== idRelatedto);
            setRelatedArticleData(tempArray);
        } else {
            setRelatedArticleData(temporaryResponse);
        };
    }, [temporaryResponse]);


    if (relatedArticleData.length !== 0) {
        const listOfRelatedArticles = relatedArticleData.map(relatedArticle => {

            return (
                <NavLink to={`/Blog/Articles/${relatedArticle.id}`} id='relatedArticleNavLink' key={relatedArticle.title}>
                    <div id='relatedArticle'>
                        <h5 className='relatedArticleTitle'>{relatedArticle.title}</h5>
                        <h6 id='relatedArticleInfo'>
                            <Moment
                                fromNow>
                                {relatedArticle.article_date}
                            </Moment>
                            , {relatedArticle.author}
                        </h6>
                    </div>
                </NavLink >
            )

        });

        return (
            <PageTransitionAnimation>
                <React.Fragment>
                    {listOfRelatedArticles}
                </React.Fragment>
            </PageTransitionAnimation>
        )

    } else {
        return (
            <h5 className='relatedArticleTitle'>No related articles</h5>
        )
    };


};

const RelatedArticlesList = ({ titlesRelatedTo, idRelatedto }) => {

    return (
        <aside id='relatedArticlesSection'>
            <h4>Related Articles</h4>
            <hr />
            <div id='relatedArticleContainer'>
                <RelatedArticle titlesRelatedTo={titlesRelatedTo} idRelatedto={idRelatedto} />
            </div>
        </aside>
    );
};


const Article = () => {

    const params = useParams();
    const articleId = params.id;

    const [articleData, setArticleData] = useState([]);

    useEffect(
        function getArticleById() {

            axios.get(`${serverURL}/api/get_article/${articleId}`)
                .then((res) => {
                    setArticleData(res.data[0]);
                })
                .catch((err) => {
                    console.log(err)
                });
        }, [articleId]);

    let articleTitle = '';
    let articleID = '';

    if (articleData.title !== '') {
        articleTitle = articleData.title;
        articleID = articleData.id;
    };

    if (articleData.length !== 0) {
        return (
            <React.Fragment>
                <RelatedArticlesList titlesRelatedTo={articleTitle} idRelatedto={articleID} />
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