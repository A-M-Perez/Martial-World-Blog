import { NavLink } from 'react-router-dom';
import '../../../styles/pages/blog/Members.css';

const Members = () => {

    return (
        <aside id='blogMembers'>
            <h4>MEMBERS ONLY</h4>
            <NavLink to={'/Blog/Create_article'}><button type='button' id='guest-login-btn'>CREATE ARTICLE</button></NavLink>
            <NavLink className='BlogNavLink' to={'/Blog/Create_article'}><p>Guests can create an article <span>here</span></p></NavLink>
            <hr />
            <h5>SEARCH</h5>
            <label htmlFor='searchArticle'>Find any article</label>
            <input type='text' name='searchArticle' placeholder='Enter article title...' />
        </aside>
    );
};

export default Members;