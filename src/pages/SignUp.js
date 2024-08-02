import React, { useState, useEffect } from "react";
import * as C from "../styles/CommonStyle";
import * as S from "../styles/SignUpStyle";

import HeaderRegister from "../components/headerRegister";
import logo from "../img/title.png";

function SignUp() {
    const [selectedGender, setSelectedGender] = useState("");
    const [formData, setFormData] = useState({
        id: "",
        pwd: "",
        name: "",
        gender: "",
        age: "",
        tel: "",
        reason: "",
    });

    const handleGenderClick = (gender) => {
        setSelectedGender((prev) => (prev === gender ? "" : gender));
        setFormData((prevData) => ({
            ...prevData,
            gender: gender === selectedGender ? "" : gender,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 폼 제출 처리
    };

    return (
        <>
            <C.Page>
                <C.Center>
                    <S.Background>
                        <C.PageSpace>
                            <S.SignUp>
                                <S.sub_background>
                                    <HeaderRegister />
                                    <S.title>
                                        <S.logo_title>
                                            <img src={logo} style={{ width: "124px" }}></img>
                                        </S.logo_title>
                                        <S.sub_title>회원가입</S.sub_title>
                                    </S.title>
                                    <S.signup onSubmit={handleSubmit}>
                                        <S.content style={{ marginTop: "73px" }}>
                                            <S.label>ID</S.label>
                                            <S.input type="text" name="id" placeholder="아이디"></S.input>
                                        </S.content>
                                        <S.content>
                                            <S.label>PW</S.label>
                                            <S.input type="password" name="pwd" placeholder="비밀번호"></S.input>
                                        </S.content>
                                        <S.content>
                                            <S.label>이름</S.label>
                                            <S.input type="text" name="name" placeholder="이름"></S.input>
                                        </S.content>
                                        <S.content>
                                            <S.label>성별</S.label>
                                            <S.gender name="gender">
                                                <S.gender_btn
                                                    value="male"
                                                    onClick={() => handleGenderClick("male")}
                                                    style={{
                                                        backgroundColor:
                                                            selectedGender === "male" ? "#79212f" : "#f5f5f5",
                                                        color: selectedGender === "male" ? "#f5f5f5" : "#28272a",
                                                    }}
                                                >
                                                    남
                                                </S.gender_btn>
                                                <S.gender_btn
                                                    value="female"
                                                    onClick={() => handleGenderClick("female")}
                                                    style={{
                                                        backgroundColor:
                                                            selectedGender === "female" ? "#79212f" : "#f5f5f5",
                                                        color: selectedGender === "female" ? "#f5f5f5" : "#28272a",
                                                    }}
                                                >
                                                    여
                                                </S.gender_btn>
                                            </S.gender>
                                        </S.content>
                                        <S.content>
                                            <S.label>연령</S.label>
                                            <S.select value="" name="age">
                                                <S.option value="10" name="10">
                                                    10대
                                                </S.option>
                                                <S.option value="20" name="20">
                                                    20대
                                                </S.option>
                                                <S.option value="30" name="30">
                                                    30대
                                                </S.option>
                                                <S.option value="40" name="40">
                                                    40대
                                                </S.option>
                                                <S.option value="50" name="50">
                                                    50대
                                                </S.option>
                                                <S.option value="60" name="60">
                                                    60대
                                                </S.option>
                                                <S.option value="70" name="70">
                                                    70대 이상
                                                </S.option>
                                            </S.select>
                                        </S.content>
                                        <S.content>
                                            <S.label>휴대전화</S.label>
                                            <S.input type="tel" name="tel" placeholder="010-0000-0000"></S.input>
                                        </S.content>
                                        <S.content>
                                            <S.label>가입사유</S.label>
                                            <S.select value="" name="reason">
                                                <S.option value="interest" name="interest">
                                                    한방에 대한 관심
                                                </S.option>
                                                <S.option value="test" name="test">
                                                    사상체질 자가진단
                                                </S.option>
                                                <S.option value="habit" name="habit">
                                                    건강 습관 개선
                                                </S.option>
                                                <S.option value="knowing" name="knowing">
                                                    건강 상식 획득
                                                </S.option>
                                                <S.option value="recommend" name="recommend">
                                                    지인 추천
                                                </S.option>
                                                <S.option value="etc" name="etc">
                                                    기타
                                                </S.option>
                                            </S.select>
                                        </S.content>
                                        <S.btn type="submit">회원가입</S.btn>
                                    </S.signup>
                                </S.sub_background>
                            </S.SignUp>
                        </C.PageSpace>
                    </S.Background>
                </C.Center>
            </C.Page>
        </>
    );
}

export default SignUp;
