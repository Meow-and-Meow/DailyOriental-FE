import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/components/MemberStyle";

import text_1 from "../img/text_1.png";
import text_2 from "../img/text_2.png";
import text_3 from "../img/text_3.png";
import text_4 from "../img/text_4.png";

function Member() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("userToken");
    }, []);

    const [message, setMessage] = useState("누르면 보여요");

    const handleTextClick = () => {
        setMessage("hello");
    };

    const handleCopyLink = () => {
        const url = "https://dailyoriental.netlify.app/";
        navigator.clipboard
            .writeText(url)
            .then(() => {
                alert("링크가 복사되었습니다!");
            })
            .catch((error) => {
                console.error("링크 복사 실패:", error);
            });
    };

    const handleLogout = () => {
        const confirmLogout = window.confirm("접속한 기기에서 로그아웃하시겠습니까?");
        if (confirmLogout) {
            localStorage.removeItem("userToken");
            navigate("/join");
            alert("로그아웃 되었습니다.");
        }
    };

    const handleWithdraw = () => {
        const confirmWithdraw = window.confirm("정말 탈퇴하시겠습니까?");
        if (confirmWithdraw) {
            //탈퇴 api
            localStorage.removeItem("userToken");
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
                        <M.text>누르면 보여요</M.text>
                    </M.content>
                    <M.content>
                        <M.sub_title>성별</M.sub_title>
                        <M.text>누르면 보여요</M.text>
                    </M.content>
                    <M.content>
                        <M.sub_title>연령</M.sub_title>
                        <M.text>누르면 보여요</M.text>
                    </M.content>
                    <M.content style={{ marginBottom: "14px" }}>
                        <M.sub_title>휴대전화</M.sub_title>
                        <M.text>누르면 보여요</M.text>
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
                            height: "24px",
                            fontFamily: "Pretendard",
                            fontWeight: "600",
                            fontSize: "10px",
                            lineHeight: "11.93px",
                            marginLeft: "10px",
                            textAlign: "center",
                            alignItems: "center",
                        }}
                    >
                        친구에게 매일한방 추천하기
                    </p>
                </M.title>
                <M.btn onClick={handleCopyLink}>링크 복사하기</M.btn>
            </M.container>
            <M.other_func style={{ marginTop: "33px" }}>개인정보 처리 방침</M.other_func>
            <M.other_func>-</M.other_func>
            <M.other_func onClick={handleLogout}>로그아웃</M.other_func>
            <M.other_func onClick={handleWithdraw}>탈퇴하기</M.other_func>
        </>
    );
}
export default Member;
