import React, { useState } from "react";
import axios from "axios";
import * as M from "../styles/components/ModalMissionStyle";

import close from "../img/close_btn.png";

const ModalMission = ({ onClose, selectedCategory }) => {
  const [newMission, setNewMission] = useState("");

  const handleMissionChange = (e) => {
    setNewMission(e.target.value);
  };

  const handleMissionSubmit = async () => {
    if (!newMission.trim()) {
      alert("미션을 입력하세요.");
      return;
    }

    const token = localStorage.getItem("token");
    const categoryMap = {
      기분: "mood",
      운동: "exercise",
      행복: "happiness",
      식습관: "diet",
    };
    const apiCategory = categoryMap[selectedCategory];

    try {
      await axios.post(
        `${process.env.REACT_APP_API}/habits/`,
        { category: apiCategory, text: newMission },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      onClose(true); // 새 미션 추가 후 모달 닫기 및 목록 새로 고침 요청
    } catch (error) {
      console.error("미션 추가 실패:", error);
    }
  };

  return (
    <>
      <M.ModalBackground onClick={onClose} />
      <M.ModalSpace>
        <M.ModalWrap>
          <M.ModalContent>
            <M.Header>
              <img src={close} alt="닫기" onClick={onClose} />
              <M.ModalText>나만의 미션 추가하기</M.ModalText>
              <M.Empty />
            </M.Header>
            <M.Field placeholder="새로운 나만의 미션을 추가해보세요" value={newMission} onChange={handleMissionChange} />
            <M.CloseBtn onClick={handleMissionSubmit}>작성 완료</M.CloseBtn>
          </M.ModalContent>
        </M.ModalWrap>
      </M.ModalSpace>
    </>
  );
};

export default ModalMission;
