import React from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/components/MemberStyle";

function NonMember() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/signup");
    };

    const handleTest = () => {
        navigate("/test");
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
    return (
        <>
            <M.container style={{ marginTop: "40px" }}>
                <M.title>나의 사상체질</M.title>
                <M.result onClick={handleTest}>
                    <M.result_text style={{ width: "312px" }}>자가진단 하러가기</M.result_text>
                </M.result>
            </M.container>
            <M.container style={{ height: "111px" }}>
                <M.title>설정</M.title>
                <M.sub_container style={{ height: "82px" }} onClick={handleSignup}>
                    <M.result_text style={{ width: "312px" }}>회원가입 하러가기</M.result_text>
                    <p
                        style={{
                            display: "flex",
                            color: "#28272A",
                            height: "24px",
                            fontFamily: "Pretendard",
                            fontWeight: "600",
                            fontSize: "12px",
                            lineHeight: "14.32px",
                            textAlign: "center",
                            alignItems: "center",
                        }}
                    >
                        더 많은 정보를 얻을 수 있어요
                    </p>
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
        </>
    );
}
export default NonMember;
