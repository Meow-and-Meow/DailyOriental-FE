import React, { useState } from "react";
import * as C from "../styles/CommonStyle";
import * as T from "../styles/TestIngStyle";
import navbar from "../img/back_w.png";
import { useNavigate } from "react-router-dom";
import TestRadio from "../components/TestRadio"; // RadioGroup 컴포넌트 임포트

function TestIng() {
    const navigate = useNavigate();
    const [selectedOptions, setSelectedOptions] = useState({
        Q1: "",
        Q2: "",
        Q3: "",
        Q4: "",
        Q5: "",
    });

    const handleOptionChange = (question, value) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [question]: value,
        }));
    };

    const handleClick = () => {
        // 모든 질문이 선택되었는지 확인
        const allQuestionsAnswered = Object.values(selectedOptions).every(
            (option) => option !== ""
        );

        if (allQuestionsAnswered) {
            navigate("/Test"); // 모든 질문이 선택되었을 때만 페이지 이동
        } else {
            alert("모든 질문에 답해주세요."); // 선택되지 않은 질문이 있을 경우 경고 메시지
        }
    };

    return (
        <C.Page>
            <C.Center>
                <T.Background>
                    <C.PageSpace>
                        <T.Test>
                            <T.Nav>
                                <img
                                    src={navbar}
                                    alt="Navbar"
                                    onClick={() => navigate(-1)} // 이전 페이지로 이동
                                    style={{
                                        width: "18px",
                                        height: "18px",
                                        cursor: "pointer",
                                    }}
                                />
                                <div className="Title">
                                    <div className="TopTitle">
                                        사상체질 자가진단
                                    </div>
                                    <div className="TitleInfo">
                                        태양인/소양인/태음인/소음인
                                    </div>
                                </div>
                                <div></div>
                            </T.Nav>

                            <T.TestQuestion>
                                <TestRadio
                                    question="1. 체구"
                                    options={[
                                        {
                                            value: "Q1SelectionFirst",
                                            label: "목덜미가 굵고 허리 부위가 가늘다",
                                        },
                                        {
                                            value: "Q1SelectionSecond",
                                            label: "허리가 굵고 목덜미가 가늘다",
                                        },
                                        {
                                            value: "Q1SelectionThird",
                                            label: "가슴 부위가 넓고 엉덩이가 작다",
                                        },
                                        {
                                            value: "Q1SelectionFourth",
                                            label: "엉덩이가 크고 가슴이 좁다",
                                        },
                                    ]}
                                    selectedOption={selectedOptions.Q1}
                                    onOptionChange={(value) =>
                                        handleOptionChange("Q1", value)
                                    }
                                />
                                <TestRadio
                                    question="2. 체격"
                                    options={[
                                        {
                                            value: "Q2SelectionFirst",
                                            label: "건장하고 어깨 위가 발달되었다",
                                        },
                                        {
                                            value: "Q2SelectionSecond",
                                            label: "체구가 크고 풍채가 큰 편이다",
                                        },
                                        {
                                            value: "Q2SelectionThird",
                                            label: "날렵하고 가슴 부위가 발달되었다",
                                        },
                                        {
                                            value: "Q2SelectionFourth",
                                            label: "단정하고 체구가 작다",
                                        },
                                    ]}
                                    selectedOption={selectedOptions.Q2}
                                    onOptionChange={(value) =>
                                        handleOptionChange("Q2", value)
                                    }
                                />
                                <TestRadio
                                    question="3. 일 처리 방식"
                                    options={[
                                        {
                                            value: "Q3SelectionFirst",
                                            label: "시원시원하고 막힘없이 하고자 한다",
                                        },
                                        {
                                            value: "Q3SelectionSecond",
                                            label: "끝까지 꾸준하게 한다",
                                        },
                                        {
                                            value: "Q3SelectionThird",
                                            label: "창의적이고 솔직하게 한다",
                                        },
                                        {
                                            value: "Q3SelectionFourth",
                                            label: "세밀하고 꼼꼼하게 한다",
                                        },
                                    ]}
                                    selectedOption={selectedOptions.Q3}
                                    onOptionChange={(value) =>
                                        handleOptionChange("Q3", value)
                                    }
                                />
                                <TestRadio
                                    question="4. 나의 성격과 가장 가까운 것은?"
                                    options={[
                                        {
                                            value: "Q4SelectionFirst",
                                            label: "낯선 사람과도 쉽게 이야기한다",
                                        },
                                        {
                                            value: "Q4SelectionSecond",
                                            label: "느긋하며 잘 받아들인다",
                                        },
                                        {
                                            value: "Q4SelectionThird",
                                            label: "불의를 참지 못한다",
                                        },
                                        {
                                            value: "Q4SelectionFourth",
                                            label: "예의가 바르고 적절한 거리를 두는 편이다",
                                        },
                                    ]}
                                    selectedOption={selectedOptions.Q4}
                                    onOptionChange={(value) =>
                                        handleOptionChange("Q4", value)
                                    }
                                />
                                <TestRadio
                                    question="5. 나는 어디에 더 가깝습니까?"
                                    options={[
                                        {
                                            value: "Q5SelectionFirst",
                                            label: "진취적이고 추진력이 강하다",
                                        },
                                        {
                                            value: "Q5SelectionSecond",
                                            label: "행동은 느리지만 꾸준한 편이다",
                                        },
                                        {
                                            value: "Q5SelectionThird",
                                            label: "일 벌이기를 좋아하지만 마무리가 쉽지 않다",
                                        },
                                        {
                                            value: "Q5SelectionFourth",
                                            label: "행동하기보다는 사색하기를 좋아한다",
                                        },
                                    ]}
                                    selectedOption={selectedOptions.Q5}
                                    onOptionChange={(value) =>
                                        handleOptionChange("Q5", value)
                                    }
                                />
                            </T.TestQuestion>

                            <T.ButtonContainer>
                                <T.Button onClick={handleClick}>
                                    결과 확인하기
                                </T.Button>
                            </T.ButtonContainer>
                        </T.Test>
                    </C.PageSpace>
                </T.Background>
            </C.Center>
        </C.Page>
    );
}

export default TestIng;
