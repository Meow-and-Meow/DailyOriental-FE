import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as C from "../styles/CommonStyle";
import * as J from "../styles/JoinStyle";
import logo from "../img/title.png";
import kakao from "../img/icon_kakao.png";
import naver from "../img/icon_naver.png";

function Join() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/signup");
    };

    const handleNon = () => {
        navigate("/main");
    };

    const [loginData, setLoginData] = useState({
        id: "",
        pwd: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("api주소/login", loginData);
            console.log("Response:", response.data);
            localStorage.setItem("userToken", response.data.token);
            navigate("/main");
        } catch (error) {
            console.error("로그인 에러:", error);
            window.alert("로그인에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <>
            <C.Page>
                <C.Center>
                    <J.Background>
                        <C.PageSpace>
                            <J.Join>
                                <J.sub_background>
                                    <J.title>
                                        <J.sub_title>더 나은 삶을 위한 한방</J.sub_title>
                                        <J.logo_title>
                                            <img src={logo} style={{ width: "124px" }}></img>
                                        </J.logo_title>
                                    </J.title>
                                    <J.login onSubmit={handleSubmit}>
                                        <J.login_content style={{ marginTop: "116px" }}>
                                            <J.label>ID</J.label>
                                            <J.input
                                                placeholder="아이디"
                                                type="text"
                                                name="id"
                                                value={loginData.id}
                                                onChange={handleChange}
                                            ></J.input>
                                        </J.login_content>
                                        <J.login_content>
                                            <J.label>PW</J.label>
                                            <J.input
                                                placeholder="비밀번호"
                                                type="password"
                                                name="pwd"
                                                value={loginData.pwd}
                                                onChange={handleChange}
                                            ></J.input>
                                        </J.login_content>
                                        <J.btn type="submit" style={{ color: "#F5F5F5" }}>
                                            로그인
                                        </J.btn>
                                    </J.login>
                                    <J.line></J.line>
                                    <J.easy_login>
                                        <J.login_title>간편 로그인</J.login_title>
                                        <J.btn style={{ backgroundColor: "#FDDC3F" }}>
                                            <img
                                                src={kakao}
                                                style={{ width: "29px", height: "29px", marginRight: "10px" }}
                                            ></img>
                                            카카오로 시작하기
                                        </J.btn>
                                        <J.btn style={{ backgroundColor: "#27D34A" }}>
                                            <img
                                                src={naver}
                                                style={{ width: "22px", height: "22px", marginRight: "17px" }}
                                            ></img>
                                            네이버로 시작하기
                                        </J.btn>
                                    </J.easy_login>
                                    <J.other_func>
                                        <J.content>아이디 찾기</J.content>
                                        <J.content_line>|</J.content_line>
                                        <J.content>비밀번호 찾기</J.content>
                                        <J.content_line>|</J.content_line>
                                        <J.content onClick={handleSignup}>회원가입</J.content>
                                    </J.other_func>
                                    <J.non_member onClick={handleNon}>비회원으로 시작하기</J.non_member>
                                </J.sub_background>
                            </J.Join>
                        </C.PageSpace>
                    </J.Background>
                </C.Center>
            </C.Page>
        </>
    );
}

export default Join;
