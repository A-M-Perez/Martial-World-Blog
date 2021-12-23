import React from "react";
import '../../../styles/pages/blog/Articles.css'

const RelatedArticle = () => {
    return (
        <div>

        </div>
    );
};

const RelatedArticlesList = () => {
    return (
        <aside id='relatedArticlesSection'>
            <h4>Related Articles</h4>
            <hr />
            <div id="relatedArticle">
                <RelatedArticle />
            </div>
        </aside>
    );
};

const Article = () => {
    return (
        <React.Fragment>
            <RelatedArticlesList />
            <section id='article'>
                <img alt="Article Image" id="articleImage" />
                <h2>Article Title</h2>
                <h5>article date and author</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore voluptatum aliquid quod, illum sequi nihil, cupiditate, soluta incidunt officiis at fugiat! Quas debitis itaque nesciunt dolor quam asperiores et!
                    Sapiente temporibus aperiam iste saepe at soluta sint nulla? Aliquid placeat molestias excepturi iure non optio quas eaque enim qui. Culpa doloremque modi amet rerum, sunt exercitationem quisquam sit obcaecati.
                    Tempora accusantium provident explicabo nemo, ipsum veritatis corporis ea, unde, perferendis tenetur reiciendis porro saepe qui. Repellendus nemo voluptatibus consequuntur fugit officia, voluptatem tempora cupiditate corrupti fugiat, sapiente fuga architecto.
                    Voluptatem optio odit voluptate quae ipsa dolore dolorem aliquam unde. Consequuntur, hic. Numquam tenetur consectetur, perspiciatis alias incidunt est eligendi nam architecto modi odit quod velit laudantium deserunt itaque deleniti.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore voluptatum aliquid quod, illum sequi nihil, cupiditate, soluta incidunt officiis at fugiat! Quas debitis itaque nesciunt dolor quam asperiores et!
                    Sapiente temporibus aperiam iste saepe at soluta sint nulla? Aliquid placeat molestias excepturi iure non optio quas eaque enim qui. Culpa doloremque modi amet rerum, sunt exercitationem quisquam sit obcaecati.
                    Tempora accusantium provident explicabo nemo, ipsum veritatis corporis ea, unde, perferendis tenetur reiciendis porro saepe qui. Repellendus nemo voluptatibus consequuntur fugit officia, voluptatem tempora cupiditate corrupti fugiat, sapiente fuga architecto.
                    Voluptatem optio odit voluptate quae ipsa dolore dolorem aliquam unde. Consequuntur, hic. Numquam tenetur consectetur, perspiciatis alias incidunt est eligendi nam architecto modi odit quod velit laudantium deserunt itaque deleniti.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore voluptatum aliquid quod, illum sequi nihil, cupiditate, soluta incidunt officiis at fugiat! Quas debitis itaque nesciunt dolor quam asperiores et!
                    Sapiente temporibus aperiam iste saepe at soluta sint nulla? Aliquid placeat molestias excepturi iure non optio quas eaque enim qui. Culpa doloremque modi amet rerum, sunt exercitationem quisquam sit obcaecati.
                    Tempora accusantium provident explicabo nemo, ipsum veritatis corporis ea, unde, perferendis tenetur reiciendis porro saepe qui. Repellendus nemo voluptatibus consequuntur fugit officia, voluptatem tempora cupiditate corrupti fugiat, sapiente fuga architecto.
                    Voluptatem optio odit voluptate quae ipsa dolore dolorem aliquam unde. Consequuntur, hic. Numquam tenetur consectetur, perspiciatis alias incidunt est eligendi nam architecto modi odit quod velit laudantium deserunt itaque deleniti.
                </p>
            </section>
        </React.Fragment>
    );
};

export default Article;