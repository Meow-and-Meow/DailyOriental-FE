import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import * as M from "../styles/components/MemberStyle";

import ModalLink from "../components/modalLink";
import text_1 from "../img/text_1.png";
import text_2 from "../img/text_2.png";
import text_3 from "../img/text_3.png";
import text_4 from "../img/text_4.png";

function Member() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        const id = localStorage.getItem("user_id");
        console.log(token);
        console.log(id);
        if (token) {
            const fetchUserData = async () => {
                try {
                    const response = await axios.get(`${process.env.REACT_APP_API}/accounts/user/${id}/`, {
                        headers: {
                            Authorization: `Token ${token}`,
                        },
                    });
                    setUserInfo(response.data);
                    console.log("확인:", response.data);
                } catch (error) {
                    console.error("사용자 정보를 불러오는데 실패했습니다:", error);
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
        1: text_1,
        2: text_2,
        3: text_3,
        4: text_4,
    };

    const resultImgSrc = surveyImages[userInfo.survey_result] || "";

    const handleTest = () => {
        navigate("/test");
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

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

    const handleLogout = () => {
        const confirmLogout = window.confirm("접속한 기기에서 로그아웃하시겠습니까?");
        if (confirmLogout) {
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
            navigate("/join");
            alert("로그아웃 되었습니다.");
        }
    };

    const handleWithdraw = () => {
        const confirmWithdraw = window.confirm("정말 탈퇴하시겠습니까?");
        if (confirmWithdraw) {
            const token = localStorage.getItem("token");
            const id = localStorage.getItem("user_id");
            const deleteUserData = async () => {
                try {
                    const response = await axios.delete(`${process.env.REACT_APP_API}/accounts/user/${id}/`, {
                        headers: {
                            Authorization: `Token ${token}`,
                        },
                    });
                    deleteUserData();
                    localStorage.removeItem("token");
                    localStorage.removeItem("user_id");
                    alert("탈퇴가 완료되었습니다.");
                    navigate("/");
                } catch (error) {
                    console.error("탈퇴 실패했습니다:", error);
                }
            };
        }
    };

    return (
        <>
            <M.container style={{ marginTop: "40px" }}>
                <M.title>나의 사상체질</M.title>
                <M.result onClick={handleTest}>
                    <M.result_img>
                        <img src={resultImgSrc}></img>
                    </M.result_img>
                    <M.result_text>
                        {userInfo.survey_result === 1
                            ? "태양인"
                            : userInfo.survey_result === 2
                            ? "소양인"
                            : userInfo.survey_result === 3
                            ? "태음인"
                            : userInfo.survey_result === 4
                            ? "소음인"
                            : "자가진단 하러가기"}
                    </M.result_text>
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
            <M.other_func onClick={handleLogout}>로그아웃</M.other_func>
            <M.other_func onClick={handleWithdraw}>탈퇴하기</M.other_func>
        </>
    );
}
export default Member;
