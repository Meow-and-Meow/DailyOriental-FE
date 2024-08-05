import React from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/components/ModalLogoutStyle";

const ModalLogout = ({ onClose, isModalVisible2 }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        navigate("/join");
    };

    return (
        <>
            <M.ModalBackground onClick={onClose} />
            <M.ModalSpace>
                <M.ModalWrap $isModalVisible2={isModalVisible2}>
                    <M.ModalContent>
                        <M.ModalText>{`로그아웃 하시겠어요?`}</M.ModalText>
                        <M.Close>
                            <M.CloseBtn onClick={onClose}>취소</M.CloseBtn>
                            <M.CloseBtn onClick={handleLogout}>로그아웃</M.CloseBtn>
                        </M.Close>
                    </M.ModalContent>
                </M.ModalWrap>
            </M.ModalSpace>
        </>
    );
};

export default ModalLogout;
