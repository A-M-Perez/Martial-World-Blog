import { useState } from "react";
import Login from "./Login";
import SignUpModal from "./SignUpModal";
import ConfirmationMessage from "../ConfirmationMsg";

const LoginContainer = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [messageTitle, setMessageTitle] = useState('titulo');
    const [messageContent, setMessageContent] = useState('contenido');
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
            <Login openModal={openModal} message={confirmationMessageContent} />
            {modalOpen ? <SignUpModal closeModal={closeModal} message={confirmationMessageContent} /> : null}
            {showConfirmationMessage && <ConfirmationMessage messageTitle={messageTitle} messageContent={messageContent} visibility={confirmationMessageContent} />}
        </>
    );
};

export default LoginContainer;