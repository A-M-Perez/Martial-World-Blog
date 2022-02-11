import axios from 'axios';
import Moment from 'react-moment';
import React, { useEffect, useState } from 'react';
import '../../../styles/pages/blog/ArticlesList.css';
import { serverURL } from '../../../Global';
import { NavLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const ArticleSummary = ({ searchedArticles }) => {

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

    //Pagination begin
    const [pageNumber, setPageNumber] = useState(0);
    const articlesPerPage = 5;
    const pagesVisited = pageNumber * articlesPerPage;
    const onPageChange = ({ selected }) => {
        setPageNumber(selected);
    };
    //Pagination end

    if (searchedArticles.length !== 0) {
        const pageCount = Math.ceil(searchedArticles.length / articlesPerPage);

        const listOfArticles = searchedArticles
            .slice(pagesVisited, pagesVisited + articlesPerPage)
            .map(article => {
                return (
                    <div key={article.id} id='articleSummary'>
                        <img alt='Article image' id='articleImage' src={article.image} />
                        <h5>{article.title}</h5>
                        <h6 >
                            <Moment
                                fromNow>
                                {article.article_date}
                            </Moment>
                        </h6>
                        <h6 >{article.author}</h6>
                        <p >{article.article}
                        </p>
                        <NavLink to={`/Blog/Articles/${article.id}`}><button id='readMoreBtn'>Read more...</button></NavLink>
                    </div>
                );
            });

        return (
            <React.Fragment>
                {listOfArticles}
                <hr className='separator' id='upperSeparator' />
                <div id='paginateContainer'>
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={onPageChange}
                        containerClassName={'paginationBtns'}
                        previousClassName={'previousBtn'}
                        nextClassName={'nextBtn'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'}
                    />
                </div>
                <hr className='separator' />
            </React.Fragment>
        )
    };

    if (articleData.length !== 0) {
        const pageCount = Math.ceil(articleData.length / articlesPerPage);
        const listOfArticles = articleData
            .slice(pagesVisited, pagesVisited + articlesPerPage)
            .map(article => {
                return (
                    <div key={article.id} id='articleSummary'>
                        <img alt='Article image' id='articleImage' src={article.image} />
                        <h5>{article.title}</h5>
                        <h6 >
                            <Moment
                                fromNow>
                                {article.article_date}
                            </Moment>
                        </h6>
                        <h6 >{article.author}</h6>
                        <p >{article.article}
                        </p>
                        <NavLink to={`/Blog/Articles/${article.id}`}><button id='readMoreBtn'>Read more...</button></NavLink>
                    </div>
                );
            });

        return (
            <React.Fragment>
                {listOfArticles}
                <hr className='separator' id='upperSeparator' />
                <div id='paginateContainer'>
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={onPageChange}
                        containerClassName={'paginationBtns'}
                        previousClassName={'previousBtn'}
                        nextClassName={'nextBtn'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'}
                    />
                </div>
                <hr className='separator' />
            </React.Fragment>
        )
    } else if (articleData.length === 0 || searchedArticles.length === 0) {
        return (
            <p id='articlesMessage'>Sorry, we could not find any articles.</p>
        )
    } else {
        return (
            <p id='articlesMessage'>Loading articles...</p>
        )
    };
};

const ArticlesList = ({ searchedArticles }) => {

    return (
        <section id='articlesList'>
            <h2>ARTICLES</h2>
            <ArticleSummary searchedArticles={searchedArticles} />
        </section>
    );
};

export default ArticlesList;