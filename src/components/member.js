import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as M from "../styles/components/MemberStyle";

import ModalLink from "../components/modalLink";
import ModalLogout from "../components/modalLogout";
import ModalDelete from "../components/modalDelete";
import text_1 from "../img/text_1.png";
import text_2 from "../img/text_2.png";
import text_3 from "../img/text_3.png";
import text_4 from "../img/text_4.png";

import Loading from "../components/Loading";

function Member() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("user_id");
    if (token) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API}/accounts/user/${id}/`, {
            headers: {
              Authorization: `Token ${token}`,
            },
          });
          setUserInfo(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("사용자 정보를 불러오는데 실패했습니다:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchUserData();
    }
  }, []);

  /* const [message, setMessage] = useState("***********");

    const handleTextClick = () => {
        setMessage(userInfo.password);
    }; */

  const surveyImages = {
    태양인: text_1,
    소양인: text_2,
    태음인: text_3,
    소음인: text_4,
  };

  const resultImgSrc = userInfo.survey_result ? surveyImages[userInfo.survey_result] : "";

  const handleTest = () => {
    navigate("/testStart");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);

  const openModal = () => {
    navigator.clipboard.writeText("https://dailyoriental.netlify.app/");

    setIsModalOpen(true);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 400); // 400ms 후에 모달 상태를 false로 설정
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
    setIsModalVisible2(true);
  };
  const closeModal2 = () => {
    setIsModalVisible2(false);
    setTimeout(() => {
      setIsModalOpen2(false);
    }, 400);
  };

  const openModal3 = () => {
    setIsModalOpen3(true);
    setIsModalVisible3(true);
  };
  const closeModal3 = () => {
    setIsModalVisible3(false);
    setTimeout(() => {
      setIsModalOpen3(false);
    }, 400);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <M.container style={{ marginTop: "40px" }}>
        <M.title>나의 사상체질</M.title>
        <M.result onClick={handleTest}>
          <M.result_img>
            <img src={resultImgSrc}></img>
          </M.result_img>
          <M.result_text>{userInfo.survey_result ? userInfo.survey_result : "자가진단 하러가기"}</M.result_text>
        </M.result>
      </M.container>
      <M.container style={{ height: "245px" }}>
        <M.title>설정</M.title>
        <M.sub_container>
          <M.content style={{ marginTop: "20px" }}>
            <M.sub_title>ID</M.sub_title>
            <M.text>{userInfo.id}</M.text>
          </M.content>
          <M.content>
            <M.sub_title>이름</M.sub_title>
            <M.text>{userInfo.name}</M.text>
          </M.content>
          <M.content>
            <M.sub_title>성별</M.sub_title>
            <M.text>{userInfo.gender === "M" ? "남성" : userInfo.gender === "F" ? "여성" : ""}</M.text>
          </M.content>
          <M.content>
            <M.sub_title>연령</M.sub_title>
            <M.text>
              {userInfo.age < 20
                ? "10대"
                : userInfo.age < 30
                ? "20대"
                : userInfo.age < 40
                ? "30대"
                : userInfo.age < 50
                ? "40대"
                : userInfo.age < 60
                ? "50대"
                : userInfo.age < 70
                ? "60대"
                : "70대이상"}
            </M.text>
          </M.content>
          <M.content style={{ marginBottom: "14px" }}>
            <M.sub_title>휴대전화</M.sub_title>
            <M.text>{userInfo.phone}</M.text>
          </M.content>
        </M.sub_container>
      </M.container>
      <M.container>
        <M.title>
          공유
          <p
            style={{
              display: "flex",
              color: "#F7DB8D",
              fontFamily: "Pretendard",
              fontWeight: "600",
              fontSize: "10px",
              lineHeight: "11.93px",
              marginLeft: "10px",
              textAlign: "center",
              alignItems: "flex-end",
            }}
          >
            친구에게 매일한방 추천하기
          </p>
        </M.title>
        <M.btn onClick={openModal}>링크 복사하기</M.btn>
        {isModalOpen && <ModalLink onClose={closeModal} isModalVisible={isModalVisible} />}
      </M.container>
      <M.other_func onClick={openModal2}>로그아웃</M.other_func>
      {isModalOpen2 && <ModalLogout onClose={closeModal2} isModalVisible2={isModalVisible2} />}
      <M.other_func onClick={openModal3}>탈퇴하기</M.other_func>
      {isModalOpen3 && <ModalDelete onClose={closeModal3} isModalVisible3={isModalVisible3} />}
    </>
  );
}
export default Member;
