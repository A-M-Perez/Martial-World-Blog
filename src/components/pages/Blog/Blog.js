import '../../../styles/pages/blog/Blog.css';
import Members from './Members';
import Articles from './Articles';
import CreateArticles from './CreateArticles';

const Blog = () => {
    return (
        <section id='blogContainer'>
            {/* <CreateArticles/> */}            
            <div id='articlesBackground'>
                <Articles/>
                <Members/>
            </div>
        </section>
    );
};

export default Blog;

