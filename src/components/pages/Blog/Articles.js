import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../../styles/pages/blog/Articles.css'
import { serverURL } from '../../../Global';
import axios from 'axios';
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';
import PageTransitionAnimation from '../../layout/PageTransitionAnimation';
import ConfirmationMessage from '../ConfirmationMsg';

const RelatedArticle = ({ titlesRelatedTo, idRelatedto }) => {

    const RegExpToClearSearch = /a\s|the\s|at\s|in\s|on\s|for\s|of\s|my\s|his\s|her\s|he_|she_|they_|them_|about_|he\s|she\s|they\s|them\s|about\s/ig;
    const keyWordsArray = titlesRelatedTo.replaceAll(RegExpToClearSearch, '').split(' ');
    const [relatedArticleData, setRelatedArticleData] = useState([]);
    const [temporaryResponse, setTemporaryResponse] = useState([]);

    useEffect(() => {
        axios.post(`${serverURL}api/get_relatedArticles`, keyWordsArray)
            .then((res) => {
                let responseArray = res.data;
                setTemporaryResponse([...responseArray]);
            })
            .catch((err) =>
                console.log(err)
            );
    }, [idRelatedto]);

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


const Article = ({ userEmail, guestUserName, passEditableArticleInfo }) => {

    const params = useParams();
    const articleId = params.id;
    const navigate = useNavigate();

    const [articleData, setArticleData] = useState([]);
    const [editIconClass, setEditIconClass] = useState('fas fa-edit articleIcons iconHidden');
    const [deleteIconClass, setDeleteIconClass] = useState('fas fa-trash-alt articleIcons iconHidden');

    useEffect(
        function getArticleById() {

            axios.get(`${serverURL}api/get_article/${articleId}`)
                .then((res) => {
                    setArticleData(res.data[0]);
                })
                .catch((err) => {
                    console.log(err)
                });
        }, [articleId]);

    useEffect(() => {
        if (articleData.author_email === userEmail || articleData.author == `Guest user ${guestUserName}`) {
            setEditIconClass('fas fa-edit articleIcons iconVisible');
            setDeleteIconClass('fas fa-trash-alt articleIcons iconVisible');
        };
    }, [articleData]);

    const [messageTitle, setMessageTitle] = useState('');
    const [messageContent, setMessageContent] = useState('');
    const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);
    const [navigateToPath, setNavigateToPath] = useState('');

    const confirmationMessageContent = (title, content, showMessage, path) => {
        setMessageTitle(title);
        setMessageContent(content);
        setShowConfirmationMessage(showMessage);
        setNavigateToPath(path);
    };

    function editArticle() {

        passEditableArticleInfo(true, articleID, articleTitle, articleData.article);
        navigate('/Blog/Edit_article');

    };

    function deleteArticle() {

        axios.post(`${serverURL}api/delete_article/${articleId}`, { id: articleId })
            .then((response) => {
                if (response) {
                    confirmationMessageContent('DELETED', 'successfully', true, '/Blog');
                };
            })
            .catch((err) => {
                console.log(err)
            });
    };

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
                    <img alt='Article Image' id='articleImage' src={articleData.image} />
                    <h2>{articleData.title}</h2>
                    <h5>
                        <Moment
                            fromNow>
                            {articleData.article_date}
                        </Moment>
                        &nbsp;- {articleData.author}
                    </h5>
                    <i id='deleteIcon' className={deleteIconClass} onClick={deleteArticle}></i>
                    <i id='editIcon' className={editIconClass} onClick={editArticle}></i>
                    <p>{articleData.article}</p>
                </section>
                {showConfirmationMessage && <ConfirmationMessage messageTitle={messageTitle} messageContent={messageContent} visibility={confirmationMessageContent} navigateTo={navigateToPath} />}
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