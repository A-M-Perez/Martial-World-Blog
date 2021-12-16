import { useState } from "react";
import Login from "./Login";
import SignUpModal from "./SignUpModal";

const LoginContainer = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <>
            <Login openModal={openModal} />
            {modalOpen ? <SignUpModal closeModal={closeModal} /> : null}
        </>
    );
};

export default LoginContainer;