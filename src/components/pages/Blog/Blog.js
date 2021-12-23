import '../../../styles/pages/blog/Blog.css';
import Members from './Members';
import Article from './Articles';
import CreateArticles from './CreateArticles';
import ArticlesList from './ArticlesList';

const Blog = () => {
    return (
        <section id='blogContainer'>
            <div id='listOfArticles'>
                <ArticlesList/>
                <Members/>
            </div>
            {/* <CreateArticles/>             */}
            {/* <div id='articlesBackground'>
                <Article />
                <Members />
            </div> */}
        </section>
    );
};

export default Blog;

