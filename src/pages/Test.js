import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as C from "../styles/CommonStyle";
import * as T from "../styles/TestStyle";
import axios from "axios";

import human1 from "../img/human_1.png";
import human2 from "../img/human_2.png";
import human3 from "../img/human_3.png";
import human4 from "../img/human_4.png";
import title1 from "../img/title_1.png";
import title2 from "../img/title_2.png";
import title3 from "../img/title_3.png";
import title4 from "../img/title_4.png";
import humanR1 from "../img/result1.png";
import humanR2 from "../img/result2.png";
import humanR3 from "../img/result3.png";
import humanR4 from "../img/result4.png";
import Header from "../components/header";

function Test() {
    const mainTitle = "사상체질 자가진단";
    const subTitle = "태양인/소양인/태음인/소음인";

    const location = useLocation();
    const { type } = location.state || { type: 3 };
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const getContent = (type) => {
        switch (type) {
            case 1:
                return {
                    imageSrc: human1,
                    titleSrc: title1,
                    introText: (
                        <>
                            태양인은 전체 사상체질 중 가장 수가 적어 <br />
                            구별하기 어렵다는 특징이 있어요
                        </>
                    ),
                    info1: (
                        <>
                            용모가 뚜렷하고 살이 비후하지 않다. <br />
                            목덜미가 굵고 실하며 머리가 큰 편이다. 엉덩이가 작고
                            가슴 윗 부분이 발달했다. <br />
                            다리가 위축되어 서 있는 자세가 불안정하다. <br />
                            하체가 약해 오래 걷거나 서 있기 불편하다.
                        </>
                    ),
                    info2: (
                        <>
                            사회적 관계가 원만하고 적극적으로 남들과 소통합니다{" "}
                            <br />
                            소통이 원활하지 않으면 화를 잘 냅니다 <br />
                            조급한 경우가 많아 일을 그르치기도 합니다 <br />
                            앞으로 나아가려고 하며 용맹스럽고 적극적입니다
                            <br />
                            계획성이 적고 치밀하지 못한 편입니다
                            <br />
                        </>
                    ),
                    info3: (
                        <>
                            폐 기능이 좋고 간의 기능이 약합니다 <br />
                            소변이 잘 나와야 건강합니다
                            <br /> 변비가 오래가거나 입에서 침 또는 거품이
                            지속되면 큰 병일 수 있습니다
                            <br />
                        </>
                    ),
                };
            case 2:
                return {
                    imageSrc: human2,
                    titleSrc: title2,
                    introText: (
                        <>
                            소양인은 수가 많고
                            <br />
                            비교적 구별하기 쉽다는 특징이 있어요
                        </>
                    ),

                    info1: (
                        <>
                            용모가 뚜렷하고 살이 비후하지 않다 <br />
                            목덜미가 굵고 실하며 머리가 큰 편이다 <br />
                            엉덩이가 작고 가슴 윗 부분이 발달했다 <br />
                            다리가 위축되어 서 있는 자세가 불안정하다 <br />
                            하체가 약해 오래 걷거나 서 있기 불편하다 <br />
                        </>
                    ),
                    info2: (
                        <>
                            사회적 관계가 원만하고 적극적으로 남들과 소통합니다{" "}
                            <br />
                            소통이 원활하지 않으면 화를 잘 냅니다 <br />
                            조급한 경우가 많아 일을 그르치기도 합니다 <br />
                            앞으로 나아가려고 하며 용맹스럽고 적극적입니다{" "}
                            <br />
                            계획성이 적고 치밀하지 못한 편입니다 <br />
                        </>
                    ),
                    info3: (
                        <>
                            폐 기능이 좋고 간의 기능이 약합니다 <br />
                            소변이 잘 나와야 건강합니다 <br />
                            변비가 오래가거나 입에서 침 또는 거품이 지속되면 큰
                            병일 수 있습니다 <br />
                        </>
                    ),
                };
            case 3:
                return {
                    imageSrc: human3,
                    titleSrc: title3,
                    introText: (
                        <>
                            태음인은 한국인 중에서 <br />
                            가장 많은 비율을 차지하는 사상체질입니다
                        </>
                    ),

                    info1: (
                        <>
                            용모가 뚜렷하고 살이 비후하지 않다
                            <br />
                            목덜미가 굵고 실하며 머리가 큰 편이다
                            <br />
                            엉덩이가 작고 가슴 윗 부분이 발달했다
                            <br />
                            다리가 위축되어 서 있는 자세가 불안정하다
                            <br />
                            하체가 약해 오래 걷거나 서 있기 불편하다
                            <br />
                        </>
                    ),
                    info2: (
                        <>
                            사회적 관계가 원만하고 적극적으로 남들과 소통합니다
                            <br />
                            소통이 원활하지 않으면 화를 잘 냅니다
                            <br />
                            조급한 경우가 많아 일을 그르치기도 합니다
                            <br />
                            앞으로 나아가려고 하며 용맹스럽고 적극적입니다
                            <br />
                            계획성이 적고 치밀하지 못한 편입니다
                            <br />
                        </>
                    ),
                    info3: (
                        <>
                            폐 기능이 좋고 간의 기능이 약합니다
                            <br />
                            소변이 잘 나와야 건강합니다
                            <br />
                            변비가 오래가거나 입에서 침 또는 거품이 지속되면 큰
                            병일 수 있습니다
                            <br />
                        </>
                    ),
                };
            case 4:
                return {
                    imageSrc: human4,
                    titleSrc: title4,
                    introText: (
                        <>
                            소음인은 체형이 균형적으로 발달하였고 <br />{" "}
                            한국인의 사상체질 중 3위에 속합니다
                        </>
                    ),

                    info1: (
                        <>
                            상체보다 하체가 균형 있게 발달했으며 키가 작은
                            편입니다 <br />
                            약하고 마른 체형이 많습니다 <br />
                            엉덩이가 발달되어 있고 가슴 부위가 약합니다 <br />
                            앞으로 수그린 자세로 걷는 사람이 많습니다 <br />
                        </>
                    ),
                    info2: (
                        <>
                            유순하고 침착하지만 질투심이 많습니다
                            <br />
                            세심하고 부드러워 사람들을 잘 조직하는 능력이
                            있습니다
                            <br />
                            자주 불안함을 느끼는 편이며 작은 일에도 걱정이
                            많습니다
                            <br />
                            내성적이고 여성적인 편이지만 소극적이고 추진력이
                            약한 편입니다
                            <br />
                            이해타산에 자주 얽매이고 남의 간섭을 싫어합니다
                            <br />
                        </>
                    ),
                    info3: (
                        <>
                            신장의 기능이 좋고 비위의 기능이 약합니다
                            <br />
                            음식의 소화를 잘해야 건강합니다
                            <br />
                            땀이 많이 나오면 큰 병일 수 있습니다
                            <br />
                            설사가 멎지 않으면서 아랫배가 자주 차갑습니다
                            <br />
                            위장병으로 고생하는 사람이 많습니다
                            <br />
                        </>
                    ),
                };
            default:
                return {
                    imageSrc: human1,
                    titleSrc: title1,
                    introText:
                        "태양인은 전체 사상체질 중 가장 수가 적어 구별하기 어렵다는 특징이 있어요",
                    info1: (
                        <>
                            용모가 뚜렷하고 살이 비후하지 않다. <br />
                            목덜미가 굵고 실하며 머리가 큰 편이다. 엉덩이가 작고
                            가슴 윗 부분이 발달했다. <br />
                            다리가 위축되어 서 있는 자세가 불안정하다. <br />
                            하체가 약해 오래 걷거나 서 있기 불편하다.
                        </>
                    ),
                    info2: (
                        <>
                            사회적 관계가 원만하고 적극적으로 남들과 소통합니다
                            <br />
                            소통이 원활하지 않으면 화를 잘 냅니다
                            <br />
                            조급한 경우가 많아 일을 그르치기도 합니다
                            <br />
                            앞으로 나아가려고 하며 용맹스럽고 적극적입니다
                            <br />
                            계획성이 적고 치밀하지 못한 편입니다
                            <br />
                        </>
                    ),
                    info3: (
                        <>
                            폐 기능이 좋고 간의 기능이 약합니다
                            <br />
                            소변이 잘 나와야 건강합니다
                            <br /> 변비가 오래가거나 입에서 침 또는 거품이
                            지속되면 큰 병일 수 있습니다
                            <br />
                        </>
                    ),
                };
        }
    };

    const content = getContent(type);

    const handleClick = async () => {
        let surveyResultText = "";

        // type에 따라 survey_result를 설정
        switch (type) {
            case 1:
                surveyResultText = "태양인";
                break;
            case 2:
                surveyResultText = "소양인";
                break;
            case 3:
                surveyResultText = "태음인";
                break;
            case 4:
                surveyResultText = "소음인";
                break;
            default:
                surveyResultText = "Unknown";
        }

        const bodyText = {
            survey_result: surveyResultText,
        };

        try {
            const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기

            if (!token) {
                alert("토큰이 존재하지 않습니다. 로그인 후 다시 시도해주세요.");
                return;
            }

            const response = await axios.post(
                `${process.env.REACT_APP_API}/accounts/survey/`,
                bodyText,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`, // 헤더에 토큰 추가
                    },
                }
            );

            console.log("Server response:", response.data);
            navigate("/main"); // 원하는 경로로 변경하세요.
        } catch (error) {
            console.error(
                "Error submitting survey:",
                error.response ? error.response.data : error.message
            );
            alert("An error occurred while submitting the survey.");
        }
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const copyToClipboard = () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl).then(
            () => {
                setAlertMessage([
                    "링크 복사를 완료했어요.",
                    <br />,
                    "친구에게 링크를 전달해보세요.",
                ]);

                setIsAlertOpen(true);
            },
            () => {
                alert("URL 복사에 실패했습니다.");
            }
        );
    };
    const imageMap = {
        1: humanR1,
        2: humanR2,
        3: humanR3,
        4: humanR4,
    };
    // 이미지 다운로드 함수
    const saveImage = async () => {
        try {
            const imageSrc = imageMap[type];
            const link = document.createElement("a");
            link.href = imageSrc;
            link.download = `type${type}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setAlertMessage([
                "이미지가 저장되었어요.",
                <br />,
                "나의 사상체질 결과를 공유해보세요.",
            ]);
            setIsAlertOpen(true);
        } catch (error) {
            console.error("Error downloading image:", error);
            alert("Failed to download image.");
        }
    };

    return (
        <>
            <div id="capture">
                <C.Page>
                    <C.Center>
                        <T.Background>
                            <C.PageSpace>
                                <T.Test>
                                    <Header
                                        mainTitle={mainTitle}
                                        subTitle={subTitle}
                                    />
                                    <T.ImgTitle>
                                        <img
                                            src={content.imageSrc}
                                            alt="Human"
                                            style={{
                                                width: "50%",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                top: "4px",
                                            }}
                                        />
                                        <img
                                            src={content.titleSrc}
                                            alt="Title"
                                            style={{
                                                width: "60%",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        />
                                    </T.ImgTitle>
                                    <T.Detail>
                                        <div className="Detailelements">
                                            <div className="DetailIntro">
                                                {content.introText}
                                            </div>
                                            <div>
                                                <div className="Detailtitle">
                                                    <span>체형기상</span>
                                                </div>
                                                <div className="Deatilinfomation1">
                                                    <span>
                                                        {" "}
                                                        {content.info1}
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="Detailtitle">
                                                    <span>성질재간</span>
                                                </div>
                                                <div className="Deatilinfomation2">
                                                    <span>{content.info2}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="Detailtitle">
                                                    <span>병증약리</span>
                                                </div>
                                                <div className="Deatilinfomation3">
                                                    <span>{content.info3}</span>
                                                </div>
                                            </div>

                                            <T.ButtonContainer>
                                                <T.Button onClick={handleClick}>
                                                    나의 사상체질로 저장하기
                                                </T.Button>
                                                <T.Button onClick={toggleModal}>
                                                    결과 공유하기
                                                </T.Button>
                                            </T.ButtonContainer>
                                        </div>
                                    </T.Detail>
                                </T.Test>
                            </C.PageSpace>
                        </T.Background>
                    </C.Center>
                </C.Page>
            </div>
            {isModalOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        zIndex: 10,
                        width: "80%",

                        maxWidth: "400px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginRight: "20px",
                            marginLeft: "10px",
                        }}
                    >
                        <button
                            onClick={toggleModal}
                            style={{
                                background: "none",
                                color: "black",
                                border: "none",
                                fontSize: "20px",
                                cursor: "pointer",
                            }}
                        >
                            ×
                        </button>
                        <div style={{ fontSize: "15px" }}>공유하기</div>
                        <div></div>
                    </div>
                    <div style={{ margin: "20px 0" }}>
                        <button
                            onClick={copyToClipboard}
                            style={{
                                backgroundColor: "#63636380",
                                padding: "10px",
                                paddingLeft: "20px",
                                paddingRight: "10px",
                                borderRadius: "30px",
                                border: "none",
                                width: "100%",
                                textAlign: "center",
                                marginBottom: "10px",
                                cursor: "pointer",
                                fontSize: "14px",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            {window.location.href}
                            <button
                                style={{
                                    backgroundColor: "#6a1b3a",
                                    padding: "10px",
                                    borderRadius: "15px",
                                    border: "none",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    fontSize: "10px",
                                    color: "white",
                                    width: "20%",
                                }}
                            >
                                복사
                            </button>
                        </button>
                        <button
                            style={{
                                backgroundColor: "#63636380",
                                padding: "10px",
                                paddingLeft: "20px",
                                paddingRight: "10px",
                                borderRadius: "30px",
                                border: "none",
                                width: "100%",
                                textAlign: "center",
                                fontSize: "14px",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            이미지로 저장하기
                            <button
                                onClick={saveImage}
                                style={{
                                    backgroundColor: "#6a1b3a",
                                    padding: "10px",
                                    borderRadius: "15px",
                                    border: "none",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    fontSize: "10px",
                                    color: "white",
                                    width: "20%",
                                }}
                            >
                                저장
                            </button>
                        </button>
                    </div>
                </div>
            )}
            {isModalOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 9,
                    }}
                    onClick={toggleModal}
                ></div>
            )}

            {isAlertOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#000000",
                        padding: "30px",
                        paddingTop: "50px",
                        borderRadius: "20px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        zIndex: 10,
                        width: "80%",
                        maxWidth: "300px",
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    <p>{alertMessage}</p>
                    <button
                        onClick={() => setIsAlertOpen(false)}
                        style={{
                            background: "#000000",
                            border: "none",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            width: "100%",
                            marginTop: "40px",
                            color: "#F5F5F5",
                        }}
                    >
                        확인
                    </button>
                </div>
            )}

            {(isModalOpen || isAlertOpen) && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 9,
                    }}
                    onClick={() => {
                        setIsModalOpen(false);
                        setIsAlertOpen(false);
                    }}
                ></div>
            )}
        </>
    );
}

export default Test;
