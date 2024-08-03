import React from "react";
import * as M from "../styles/components/ModalLinkStyle";

const ModalLink = ({ onClose, isModalVisible }) => {
  return (
    <>
      <M.ModalBackground onClick={onClose} />
      <M.ModalSpace>
        <M.ModalWrap $isModalVisible={isModalVisible}>
          <M.ModalContent>
            <M.ModalText>{`링크 복사를 완료했어요.\n친구에게 링크를 전달해보세요.`}</M.ModalText>
            <M.CloseBtn onClick={onClose}>확인</M.CloseBtn>
          </M.ModalContent>
        </M.ModalWrap>
      </M.ModalSpace>
    </>
  );
};

export default ModalLink;
