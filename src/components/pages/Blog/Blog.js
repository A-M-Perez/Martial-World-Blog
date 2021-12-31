import '../../../styles/pages/blog/Blog.css';
import Members from './Members';
import ArticlesList from './ArticlesList';
import { useState } from 'react';

const Blog = () => {

    const [articlesList, setArticlesList] = useState(true);
    const [article, setArticle] = useState(false);
    const [createArticle, setCreateArticles] = useState(false);

    const switchViews = (view) => {
        switch (view) {
            case 'createArticle':
                setCreateArticles(true);
                break;
            case 'readArticle':
                setArticlesList(false);
                setArticle(true);
                break;
            default:
                setArticlesList(true);
                setArticle(false);
                setCreateArticles(false);
                break;
        };
    };

    return (
        <section id='blogContainer'>
            <div id='articlesBackground'>
                <ArticlesList />
                <Members />
            </div>
        </section>
    );
};

export default Blog;

