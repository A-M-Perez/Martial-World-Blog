import { NavLink } from 'react-router-dom';
import '../../../styles/pages/blog/Members.css';

const Members = ({toggleView}) => {

    return (
        <aside id='blogMembers'>
            <h4>MEMBERS ONLY</h4>
            <button type='button' id='guest-login-btn' onClick={() => {toggleView('createArticle')}}>CREATE ARTICLE</button>
            <p>Guests can create an article <span onClick={() => {toggleView('createArticle')}}>here</span></p>
            <hr />
            <h5>SEARCH</h5>
            <label htmlFor='searchArticle'>Find any article</label>
            <input type='text' name='searchArticle' placeholder='Enter article title...' />
        </aside>
    );
};

export default Members;