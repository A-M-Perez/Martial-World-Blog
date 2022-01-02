import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../../../styles/pages/blog/Articles.css'
import { serverURL } from "../../../Global";
import axios from 'axios';
import Moment from 'react-moment';

const RelatedArticle = () => {
    return (
        <div>

        </div>
    );
};

const RelatedArticlesList = () => {
    return (
        <aside id='relatedArticlesSection'>
            <h4>Related Articles</h4>
            <hr />
            <div id="relatedArticle">
                <RelatedArticle />
            </div>
        </aside>
    );
};

const Article = () => {

    const params = useParams();
    const articlelId = params.id;

    const [articleData, setArticleData] = useState([]);
    const [status, setStatus] = useState('Success');

    useEffect(
        function getArticleById(props) {

            axios.get(`${serverURL}/api/get_article/${articlelId}`)
                .then((res) => {
                    setArticleData(res.data[0]);
                })
                .catch(() => setStatus('Error'))
        }, []);

    return (
        <React.Fragment>
            <RelatedArticlesList />
            <section id='article' key={articleData.id}>
                <img alt="Article Image" id="articleImage" />
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
};

export default Article;