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
        password: "",
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
            const response = await axios.post(`${process.env.REACT_APP_API}/accounts/login/`, loginData);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user_id", response.data.user_id);
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
                                            <img src={logo} style={{ width: "124px" }} alt="매일한방"></img>
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
                                                name="password"
                                                value={loginData.password}
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
                                                alt="카카오 로그인"
                                            ></img>
                                            카카오로 시작하기
                                        </J.btn>
                                        <J.btn style={{ backgroundColor: "#27D34A" }}>
                                            <img
                                                src={naver}
                                                style={{ width: "22px", height: "22px", marginRight: "17px" }}
                                                alt="네이버 로그인"
                                            ></img>
                                            네이버로 시작하기
                                        </J.btn>
                                    </J.easy_login>
                                    <J.other_func>
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
