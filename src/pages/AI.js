import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as C from "../styles/CommonStyle";
import * as A from "../styles/AIStyle";

import Header from "../components/header";
import search from "../img/icon_search.png";
import doctor from "../img/AIdoctor.png";
import polygon from "../img/polygon.png";

function AI() {
    const mainTitle = "사상체질 건강관리";
    const subTitle = "AI 허준과 함께하는 매일 한방";
    const [selectedType, setSelectedType] = useState("");
    const [inputValue, setInputValue] = useState({ message: "" });
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const handleTypeClick = (type, text) => {
        if (selectedType === type) {
            setSelectedType("");
            setInputValue((prev) => ({ ...prev, message: prev.message.replace(text, "").trim() }));
        } else {
            setSelectedType(type);
            const newValue = inputValue.message.replace(getTypeText(selectedType), "").trim();
            setInputValue({ ...inputValue, message: `${text} ${newValue}`.trim() });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const typeText = getTypeText(selectedType);
        const newMessage = value.startsWith(typeText) ? value : `${typeText} ${value}`.trim();
        setInputValue({
            ...inputValue,
            [name]: newMessage,
        });
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    const getTypeText = (type) => {
        switch (type) {
            case "text1":
                return "태양인";
            case "text2":
                return "소양인";
            case "text3":
                return "태음인";
            case "text4":
                return "소음인";
            default:
                return "";
        }
    };

    const handleSubmit = () => {
        const token = localStorage.getItem("token");
        const id = localStorage.getItem("user_id");
        if (token) {
            const fetchUserData = async () => {
                try {
                    console.log("Submitting data:", inputValue);
                    const response = await axios.post(`${process.env.REACT_APP_API}/chat/${id}/`, inputValue, {
                        headers: {
                            Authorization: `Token ${token}`,
                            "Content-Type": "application/json",
                        },
                    });
                    console.log(response.data);
                } catch (error) {
                    console.error("입력 정보를 전달하는데 실패했습니다:", error);
                }
            };

            fetchUserData();
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/join");
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const id = localStorage.getItem("user_id");
        if (token) {
            const fetchChatData = async () => {
                try {
                    const chatAnswer = await axios.get(`${process.env.REACT_APP_API}/chat/${id}/assistant_messages/`, {
                        headers: {
                            Authorization: `Token ${token}`,
                        },
                    });
                    setAnswer(chatAnswer.data);
                    console.log("답: ", chatAnswer.data);
                } catch (error) {
                    console.error("답변을 불러오는데 실패했습니다:", error);
                }
            };

            fetchChatData();
        }
    }, []);

    return (
        <>
            <C.Page>
                <C.Center>
                    <A.Background>
                        <C.PageSpace>
                            <A.AI>
                                <Header mainTitle={mainTitle} subTitle={subTitle} />
                                <A.container>
                                    <A.title>체질별 모아보기</A.title>
                                    <A.content>
                                        <A.btn
                                            value="text1"
                                            selected={selectedType === "text1"}
                                            onClick={() => handleTypeClick("text1", "태양인")}
                                        >
                                            태양인
                                        </A.btn>
                                        <A.btn
                                            value="text2"
                                            selected={selectedType === "text2"}
                                            onClick={() => handleTypeClick("text2", "소양인")}
                                        >
                                            소양인
                                        </A.btn>
                                        <A.btn
                                            value="text3"
                                            selected={selectedType === "text3"}
                                            onClick={() => handleTypeClick("text3", "태음인")}
                                        >
                                            태음인
                                        </A.btn>
                                        <A.btn
                                            value="text4"
                                            selected={selectedType === "text4"}
                                            onClick={() => handleTypeClick("text4", "소음인")}
                                        >
                                            소음인
                                        </A.btn>
                                    </A.content>
                                </A.container>
                                <A.search
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        handleSubmit();
                                    }}
                                >
                                    <A.search_icon>
                                        <img src={search} alt="검색"></img>
                                    </A.search_icon>
                                    <A.input
                                        placeholder="이곳을 눌러서 검색하세요"
                                        type="text"
                                        name="message"
                                        value={inputValue.message}
                                        onChange={handleChange}
                                        onKeyPress={handleKeyPress}
                                    ></A.input>
                                </A.search>
                                <A.tip>
                                    <A.tip_text>Tip. 이렇게 물어보면 좋아요</A.tip_text>
                                    <br></br>
                                    <A.tip_text> ∙ 건강관리방법을 알려줘</A.tip_text>
                                    <A.tip_text> ∙ 피해야 하는 음식을 알려줘</A.tip_text>
                                    <A.tip_text> ∙ 치명적인 병을 알려줘</A.tip_text>
                                    <A.tip_text> ∙ 조심해야하는 생활습관을 알려줘</A.tip_text>
                                </A.tip>

                                <A.answer>
                                    <A.polygon>
                                        <img src={polygon} alt="말풍선"></img>
                                    </A.polygon>
                                    <A.doctor>
                                        <img src={doctor} alt="AI 허준"></img>
                                    </A.doctor>
                                    <A.answer_container>
                                        {answer.content ? (
                                            <A.answer_text>
                                                {answer.content.split("\n").map((line, index) => {
                                                    <React.Fragment key={index}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>;
                                                })}
                                            </A.answer_text>
                                        ) : (
                                            <A.answer_text style={{ color: "rgba(0, 0, 0, 0.25)" }}>
                                                검색창을 통해 AI 허준에게 질문해보세요
                                            </A.answer_text>
                                        )}
                                    </A.answer_container>
                                </A.answer>
                            </A.AI>
                        </C.PageSpace>
                    </A.Background>
                </C.Center>
            </C.Page>
        </>
    );
}

export default AI;
