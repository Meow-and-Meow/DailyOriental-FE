import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as M from "../styles/components/ModalDeleteStyle";
import Loading from "../components/Loading";

const ModalDelete = ({ onClose, isModalVisible3 }) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleWithdraw = () => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("user_id");
    const deleteUserData = async () => {
      // setLoading(true);
      try {
        await axios.delete(`${process.env.REACT_APP_API}/accounts/user/${id}/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("date");
        navigate("/");
      } catch (error) {
        console.error("탈퇴 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };
    deleteUserData();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <M.ModalBackground onClick={onClose} />
      <M.ModalSpace>
        <M.ModalWrap $isModalVisible3={isModalVisible3}>
          <M.ModalContent>
            <M.ModalText>{`정말 탈퇴하시나요?`}</M.ModalText>
            <M.ModalText
              style={{ fontSize: "11px", marginTop: "10px", lineHeight: "13.13px" }}
            >{`탈퇴 버튼 선택 시, 계정은 삭제되며\n복구가 어렵습니다.`}</M.ModalText>
            <M.Close>
              <M.CloseBtn onClick={onClose}>취소</M.CloseBtn>
              <M.CloseBtn onClick={handleWithdraw}>탈퇴</M.CloseBtn>
            </M.Close>
          </M.ModalContent>
        </M.ModalWrap>
      </M.ModalSpace>
    </>
  );
};

export default ModalDelete;
