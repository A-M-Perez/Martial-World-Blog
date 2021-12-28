import '../../styles/pages/ConfirmationMsg.css';

const ConfirmationMessage = (props) => {

    return (
        <div id='confirmationScreen'>
            <h6>
                THANK YOU!<br />
                Your message has been successfully sent
            </h6>
            <button type='button' id='confirmationBtn'>OK</button>
        </div>
    )
};

export default ConfirmationMessage;