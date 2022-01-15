import '../../styles/pages/ConfirmationMsg.css';
import { useNavigate } from 'react-router-dom'

const ConfirmationMessage = ({ messageTitle, messageContent, visibility, navigateTo }) => {

    console.log(navigateTo)
    const navigate = useNavigate();

    return (
        <div id='confirmationScreen'>
            <h6>
                {messageTitle}<br />
                <span id='text'>{messageContent}</span>
            </h6>
            <button type='button' id='confirmationBtn' onClick={() => {
                visibility('', '', false);
                navigate(navigateTo)
            }}>OK</button>
        </div>
    )
};

export default ConfirmationMessage;