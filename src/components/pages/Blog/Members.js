import axios from 'axios';
import { NavLink } from 'react-router-dom';
import '../../../styles/pages/blog/Members.css';
import { serverURL } from '../../../Global';
import { useEffect, useState } from 'react';

const Members = ({ search }) => {

    const [articlesBySearchTerm, setArticlesBySearchTerm] = useState([]);

    function getSearchedArticles() {

        const searchTerm = {
            term: document.getElementById('searchTermInput').value
        };

        axios.post(`${serverURL}/api/get_articles_by_search`, searchTerm)
            .then((res) => {
                setArticlesBySearchTerm(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        if (articlesBySearchTerm.length !== 0) {
            search(articlesBySearchTerm);
            document.getElementById('searchTermInput').value = '';
        } else if (articlesBySearchTerm === 0) {
            articlesBySearchTerm.push('notFound')
        };
    }, [articlesBySearchTerm]);

    return (
        <aside id='blogMembers'>
            <h4>MEMBERS ONLY</h4>
            <NavLink to={'/Blog/Create_article'}><button type='button' id='guest-login-btn'>CREATE ARTICLE</button></NavLink>
            <NavLink className='BlogNavLink' to={'/Blog/Create_article'}><p>Guests can create an article <span>here</span></p></NavLink>
            <hr />
            <h5>SEARCH</h5>
            <label htmlFor='searchArticle'>Find any article</label>
            <div id='searchInputContainer'>
                <input id='searchTermInput' type='text' name='searchArticle' placeholder='Enter article title...' onKeyPress={(e) => {
                    if (e.key === 'Enter') { getSearchedArticles() };
                }} />
                <i className="fas fa-search" id='searchIcon' onClick={getSearchedArticles} />
            </div>
        </aside>
    );
};

export default Members;