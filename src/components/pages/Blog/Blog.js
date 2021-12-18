import '../../../styles/pages/blog/Blog.css';
import Members from './Members';
import Articles from './Articles';
import CreateArticles from './CreateArticles';

const Blog = () => {
    return (
        <section id='blogContainer'>
            <CreateArticles/>
            {/* <Articles/>
            <Members/> */}
        </section>
    );
};

export default Blog;

