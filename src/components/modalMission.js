import React from "react";
import * as M from "../styles/components/ModalMissionStyle";

import close from "../img/close_btn.png";

const ModalMission = ({ onClose, isModalVisible }) => {
  return (
    <>
      <M.ModalBackground onClick={onClose} />
      <M.ModalSpace>
        <M.ModalWrap $isModalVisible={isModalVisible}>
          <M.ModalContent>
            <M.Header>
              <img src={close} alt="닫기" onClick={onClose} />
              <M.ModalText>나만의 미션 추가하기</M.ModalText>
              <M.Empty />
            </M.Header>
            <M.Field placeholder="새로운 나만의 미션을 추가해보세요" />
            <M.CloseBtn onClick={onClose}>작성 완료</M.CloseBtn>
          </M.ModalContent>
        </M.ModalWrap>
      </M.ModalSpace>
    </>
  );
};

export default ModalMission;
