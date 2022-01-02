import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const RoutesList = () => {

    return (
        <Router>
            <Navbar />
            <SiteHeader />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/Blog' exact element={
                    <section id='blogContainer'>
                        <div id='articlesBackground'>
                            <ArticlesList />
                            <Members />
                        </div>
                    </section>
                } />
                <Route path='/Blog/Create_article' exact element={<CreateArticles />} />
                <Route path='/Blog/Articles/:id' exact element={
                    <section id='blogContainer'>
                        <div id='articlesBackground'>
                            <Article />
                            <Members />
                        </div>
                    </section>
                } />
                <Route path='/Schools' exact element={<Schools />} />
                <Route path='/Schools/School/:id' exact element={<SchoolDetails />} />
                <Route path='/AboutUs' exact element={<AboutUs />} />
                <Route path='/Login' exact element={<LoginContainer />} />
            </Routes>
            <Footer />
        </Router >
    );
}

export default RoutesList;