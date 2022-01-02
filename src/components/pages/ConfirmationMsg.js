import '../../styles/pages/ConfirmationMsg.css';

const ConfirmationMessage = ({messageTitle, messageContent, visibility}) => {

    return (
        <div id='confirmationScreen'>
            <h6>
                {messageTitle}<br />
                <span id='text'>{messageContent}</span>
            </h6>
            <button type='button' id='confirmationBtn' onClick={()=>{
                visibility('', '', false);
            }}>OK</button>
        </div>
    )
};

export default ConfirmationMessage;