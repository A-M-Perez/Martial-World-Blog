import '../../../styles/pages/blog/ArticlesList.css';

const ArticleSummary = () => {
    return (
        <div id='articleSummary'>
            <img alt='Article image' id='articleImage' />
            <h5>Title</h5>
            <h6>Date</h6>
            <p>preview of text preview of text preview of text preview of text preview of text preview of text preview of text preview of text preview of text preview of text 
            preview of text preview of text preview of text preview of text preview of text preview of text 
            </p>
        </div>
    );
};

const ArticlesList = () => {
    return (
        <section id='articlesList'>
            <h2>ARTICLES</h2>
            <ArticleSummary/>
        </section>
    );
};

export default ArticlesList;