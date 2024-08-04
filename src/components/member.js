import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as M from "../styles/components/MemberStyle";
import axios from "axios";

import ModalLink from "../components/modalLink";
import text_1 from "../img/text_1.png";
import text_2 from "../img/text_2.png";
import text_3 from "../img/text_3.png";
import text_4 from "../img/text_4.png";

function Member() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const userData = localStorage.getItem("userData");
        console.log("User Data:", userData);
        const apiUrl = `${process.env.REACT_APP_API}/accounts/user/${id}/`;
        console.log("API URL:", apiUrl);
        console.log("Retrieved ID:", id);
        if (userData && id) {
            const fetchUserData = async () => {
                try {
                    const token = JSON.parse(userData).token;
                    const response = await axios.get(`${process.env.REACT_APP_API}accounts/user/${id}/`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    setUserInfo(response.data);
                    console.log(response.data);
                } catch (error) {
                    console.error("사용자 정보를 불러오는데 실패했습니다:", error);
                }
            };
            fetchUserData();
        }
    }, [id]);

    const [message, setMessage] = useState("***********");

    const handleTextClick = () => {
        setMessage("hello");
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
        // 클립보드에 링크 복사
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
            localStorage.removeItem("userData");
            navigate("/join");
            alert("로그아웃 되었습니다.");
        }
    };

    const handleWithdraw = () => {
        const confirmWithdraw = window.confirm("정말 탈퇴하시겠습니까?");
        if (confirmWithdraw) {
            //탈퇴 api
            localStorage.removeItem("userData");
            alert("탈퇴가 완료되었습니다.");
            navigate("/");
        }
    };

    return (
        <>
            <M.container style={{ marginTop: "40px" }}>
                <M.title>나의 사상체질</M.title>
                <M.result>
                    <M.result_img>
                        <img src={text_1}></img>
                    </M.result_img>
                    <M.result_text>태양인</M.result_text>
                </M.result>
            </M.container>
            <M.container style={{ height: "245px" }}>
                <M.title>설정</M.title>
                <M.sub_container>
                    <M.content style={{ marginTop: "20px" }}>
                        <M.sub_title>PW</M.sub_title>
                        <M.text style={{ cursor: "pointer" }} onClick={handleTextClick}>
                            {message}
                        </M.text>
                    </M.content>
                    <M.content>
                        <M.sub_title>이름</M.sub_title>
                        <M.text>김덕성</M.text>
                    </M.content>
                    <M.content>
                        <M.sub_title>성별</M.sub_title>
                        <M.text>여성</M.text>
                    </M.content>
                    <M.content>
                        <M.sub_title>연령</M.sub_title>
                        <M.text>20대</M.text>
                    </M.content>
                    <M.content style={{ marginBottom: "14px" }}>
                        <M.sub_title>휴대전화</M.sub_title>
                        <M.text>010-1234-0382</M.text>
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
