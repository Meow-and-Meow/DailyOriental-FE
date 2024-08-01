import React, { useState, useEffect } from "react";
import * as C from "../styles/CommonStyle";
import * as M from "../styles/MyPageStyle";

import HeaderMypage from "../components/headerMypage";

function MyPage() {
    const [message, setMessage] = useState("누르면 보여요");

    const handleTextClick = () => {
        setMessage("hello");
    };
    return (
        <>
            <C.Page>
                <C.Center>
                    <M.Background>
                        <C.PageSpace>
                            <M.MyPage>
                                <HeaderMypage />
                                <M.profile>
                                    <M.profile_img></M.profile_img>
                                    <M.profile_text>
                                        <M.profile_name>김덕성</M.profile_name>
                                        <M.profile_status>회원</M.profile_status>
                                    </M.profile_text>
                                </M.profile>
                                <M.container>
                                    <M.title>나의 사상체질</M.title>
                                    <M.result></M.result>
                                </M.container>
                                <M.container style={{ height: "245px" }}>
                                    <M.title>설정</M.title>
                                    <M.sub_container>
                                        <M.content style={{ marginTop: "20px" }}>
                                            <M.sub_title>PW</M.sub_title>
                                            <M.text onClick={handleTextClick}>{message}</M.text>
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
                                        공유{" "}
                                        <p
                                            style={{
                                                display: "flex",
                                                color: "#F7DB8D",
                                                height: "24px",
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
                                    <M.btn>링크 복사하기</M.btn>
                                </M.container>
                                <M.other_func style={{ marginTop: "33px" }}>개인정보 처리 방침</M.other_func>
                                <M.other_func>-</M.other_func>
                                <M.other_func>로그아웃</M.other_func>
                                <M.other_func>탈퇴하기</M.other_func>
                            </M.MyPage>
                        </C.PageSpace>
                    </M.Background>
                </C.Center>
            </C.Page>
        </>
    );
}

export default MyPage;
