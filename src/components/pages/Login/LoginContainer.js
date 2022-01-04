import { useState } from "react";
import Login from "./Login";
import SignUpModal from "./SignUpModal";
import ConfirmationMessage from "../ConfirmationMsg";

const LoginContainer = ({authentication, userInfo}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [messageTitle, setMessageTitle] = useState('');
    const [messageContent, setMessageContent] = useState('');
    const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const confirmationMessageContent = (title, content, showMessage) => {
        setMessageTitle(title);
        setMessageContent(content);
        setShowConfirmationMessage(showMessage);
    };

    return (
        <>
            <Login openModal={openModal} message={confirmationMessageContent} authentication={authentication} userInfo={userInfo}/>
            {modalOpen ? <SignUpModal closeModal={closeModal} message={confirmationMessageContent} /> : null}
            {showConfirmationMessage && <ConfirmationMessage messageTitle={messageTitle} messageContent={messageContent} visibility={confirmationMessageContent} />}
        </>
    );
};

export default LoginContainer;