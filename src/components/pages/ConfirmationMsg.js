import '../../styles/pages/ConfirmationMsg.css';

const ConfirmationMessage = (props) => {


    const $confirmationBtnText = '';

    return (
        <div id='confirmationScreen'>
            <h6>
                THANK YOU!<br />
                You message has been successfully sent
            </h6>
            <button type='button' id='confirmationBtn'>{$confirmationBtnText}</button>
        </div>
    )
};

export default ConfirmationMessage;