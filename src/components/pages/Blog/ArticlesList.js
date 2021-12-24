import { NavLink } from 'react-router-dom';
import '../../../styles/pages/blog/ArticlesList.css';

const ArticleSummary = ({ toggleView }) => {
    return (
        <div id='articleSummary'>
            <img alt='Article image' id='articleImage' />
            <h5 onClick={() => { toggleView('readArticle') }}>Title</h5>
            <h6>Date</h6>
            <p>preview of text preview of text preview of text preview of text preview of text preview of text preview of text preview of text preview of text preview of text
                preview of text preview of text preview of text preview of text preview of text preview of text
            </p>
        </div>
    );
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