import '../../../styles/pages/blog/Blog.css';
import Members from './Members';
import Articles from './Articles';

const Blog = () => {
    return (
        <section id='blogContainer'>
            <Articles/>
            <Members/>
        </section>
    );
};

export default Blog;

