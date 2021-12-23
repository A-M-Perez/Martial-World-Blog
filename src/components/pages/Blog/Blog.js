import '../../../styles/pages/blog/Blog.css';
import Members from './Members';
import Article from './Articles';
import CreateArticles from './CreateArticles';
import ArticlesList from './ArticlesList';

const Blog = () => {
    return (
        <section id='blogContainer'>
            <div id='articlesBackground'>
                <ArticlesList />
                {/* <Article /> */}
                <Members />
            </div>
            {/* <CreateArticles /> */}
        </section>
    );
};

export default Blog;

