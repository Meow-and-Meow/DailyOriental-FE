import React, { useState } from "react";
import * as C from "../styles/CommonStyle";
import * as A from "../styles/AIStyle";
import { CallGPT } from "../utils/gpt";

import Header from "../components/header";
import search from "../img/icon_search.png";
import doctor from "../img/AIdoctor.png";
import polygon from "../img/polygon.png";

function AI() {
    const mainTitle = "사상체질 건강관리";
    const subTitle = "AI 허준과 함께하는 매일 한방";
    const [selectedType, setSelectedType] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [answer, setAnswer] = useState("");

    const handleTypeClick = (type, text) => {
        if (selectedType === type) {
            setSelectedType("");
            setInputValue(inputValue.replace(text, "").trim());
        } else {
            setSelectedType(type);
            const newValue = inputValue.replace(getTypeText(selectedType), "").trim();
            setInputValue(`${text} ${newValue}`.trim());
        }
    };

    const handleChange = (e) => {
        const newValue = e.target.value;
        const typeText = getTypeText(selectedType);
        if (newValue.startsWith(typeText)) {
            setInputValue(newValue);
        } else {
            setInputValue(`${typeText} ${newValue}`.trim());
        }
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
        CallGPT(inputValue)
            .then((response) => {
                console.log("Response from GPT:", response);
                setAnswer(response.choices[0].message.content);
            })
            .catch((error) => {
                console.error("Error calling GPT:", error);
                setAnswer("문제가 발생했습니다. 다시 시도해 주세요.");
            });
    };

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
                                        name="a"
                                        value={inputValue}
                                        onChange={handleChange}
                                        onKeyPress={handleKeyPress}
                                    ></A.input>
                                </A.search>
                                <A.tip>
                                    <A.tip_text>Tip. 이렇게 물어보면 좋아요</A.tip_text>
                                    <br></br>
                                    <A.tip_text> ∙ 건강관리법을 알려줘</A.tip_text>
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
                                        {answer ? (
                                            <A.answer_text style={{ color: "#28272A" }}>{answer}</A.answer_text>
                                        ) : (
                                            <A.answer_text>검색창을 통해 AI 허준에게 질문해보세요</A.answer_text>
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
