import React, { useEffect, useState } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import SiteHeader from './layout/SiteHeader';
import Home from "./pages/Home";
import Schools from "./pages/Schools/Schools";
import AboutUs from "./pages/AboutUs";
import LoginContainer from "./pages/Login/LoginContainer";
import Footer from './layout/Footer';
import SchoolDetails from "./pages/Schools/SchoolDetails";
import Article from './pages/Blog/Articles';
import CreateArticles from "./pages/Blog/CreateArticles";
import Members from "./pages/Blog/Members";
import ArticlesList from './pages/Blog/ArticlesList';
import '../../src/styles/pages/blog/Blog.css';
import PageTransitionAnimation from './layout/PageTransitionAnimation';

const RoutesList = () => {

    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const [userName, setUserName] = useState('');
    const [guestUserName, setGuestUserName] = useState('');

    function authenticateUser(isAuthenticated, authenticatedUser, authenticatedGuestUser) {
        setIsUserAuthenticated(isAuthenticated);
        setUserName(authenticatedUser);
        setGuestUserName(authenticatedGuestUser);
    };

    const [createArticleAuthorization, setCreateArticleAuthorization] = useState(<LoginContainer authentication={authenticateUser} userInfo={{ isUserAuthenticated, userName, guestUserName }} />);

    useEffect(() => {
        if (isUserAuthenticated) {
            setCreateArticleAuthorization(<CreateArticles />)
        } else {
            setCreateArticleAuthorization(<Navigate to='/Login' />)
        }
    }, [isUserAuthenticated])


    const [searchedArticles, setSearchedArticles] = useState([]);

    function passSearchedArticlesResults(searchedArticles) {
        setSearchedArticles(searchedArticles);
    };

    return (
        <Router>
            <Navbar />
            <SiteHeader />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/Blog' exact element={
                    <PageTransitionAnimation>
                        <section id='blogContainer'>
                            <div id='articlesBackground'>
                                <ArticlesList searchedArticles={searchedArticles} />
                                <Members search={passSearchedArticlesResults} userInfo={{ isUserAuthenticated, userName, guestUserName }} />
                            </div>
                        </section>
                    </PageTransitionAnimation>
                } />
                <Route path='/Blog/Create_article' exact element={createArticleAuthorization} />
                <Route path='/Blog/Articles/:id' exact element={
                    <PageTransitionAnimation>
                        <section id='blogContainer'>
                            <div id='articlesBackground'>
                                <Article />
                                <Members search={passSearchedArticlesResults} userInfo={{ isUserAuthenticated, userName, guestUserName }} />
                            </div>
                        </section>
                    </PageTransitionAnimation>
                } />
                <Route path='/Schools' exact element={<Schools />} />
                <Route path='/Schools/School/:id' exact element={<SchoolDetails />} />
                <Route path='/AboutUs' exact element={<AboutUs />} />
                <Route path='/Login' exact element={<LoginContainer authentication={authenticateUser} userInfo={{ isUserAuthenticated, userName, guestUserName }} />} />
            </Routes>
            <Footer />
        </Router >
    );
}

export default RoutesList;