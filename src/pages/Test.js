import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 가져오기
import * as C from "../styles/CommonStyle";
import * as T from "../styles/TestStyle";
import navbar from "../img/back_r.png";
import human1 from "../img/human_1.png";
import human2 from "../img/human_2.png";
import human3 from "../img/human_3.png";
import title1 from "../img/title_1.png";
import title2 from "../img/title_2.png";
import title3 from "../img/title_3.png";

function Test({ type }) {
    // navigate 훅 선언
    const navigate = useNavigate();

    //모달창
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

    // type에 따라 이미지와 텍스트 설정
    type = 3;
    const getContent = (type) => {
        switch (type) {
            case 1:
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
                    introText:
                        "태양인은 전체 사상체질 중 가장 수가 적어 구별하기 어렵다는 특징이 있어요",
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
                    introText:
                        "태양인은 전체 사상체질 중 가장 수가 적어 구별하기 어렵다는 특징이 있어요",
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
        }
    };

    // 선택된 타입에 따라 콘텐츠 가져오기
    const content = getContent(type);

    const handleClick = () => {
        alert("Button was clicked!");
        // 추가적으로 버튼 클릭 시의 로직을 여기에 추가
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const copyToClipboard = () => {
        navigator.clipboard.writeText("http://hanbang.com/share").then(
            () => {
                alert("복사되었습니다!"); // 복사 완료 후 알림
            },
            () => {
                alert("복사에 실패했습니다."); // 복사 실패 시 알림
            }
        );
    };
    return (
        <>
            <C.Page>
                <C.Center>
                    <T.Background>
                        <C.PageSpace>
                            <T.Test>
                                <T.Nav
                                    style={{ position: "relative", zIndex: 4 }}
                                >
                                    <img
                                        src={navbar}
                                        alt="Navbar"
                                        onClick={() => navigate(-1)} // 이전 페이지로 이동
                                        style={{
                                            cursor: "pointer",
                                            width: "18px",
                                            height: "18px",
                                            margin: "20px",
                                        }} // 커서 모양 변경
                                    />
                                </T.Nav>
                                <T.ImgTitle>
                                    <img
                                        src={content.imageSrc}
                                        alt="Human"
                                        style={{
                                            width: "50%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            position: "relative",
                                            top: "4px",
                                            zIndex: 0,
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
                                            zIndex: 2,
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
                                                체형기상
                                            </div>
                                            <div className="Deatilinfomation1">
                                                {content.info1}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="Detailtitle">
                                                성질재간
                                            </div>
                                            <div className="Deatilinfomation2">
                                                {content.info2}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="Detailtitle">
                                                병증약리
                                            </div>
                                            <div className="Deatilinfomation3">
                                                {content.info3}
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

            {/* 모달 창 */}
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
                        }}
                    >
                        {" "}
                        <button
                            onClick={toggleModal}
                            style={{
                                background: "none",
                                border: "none",
                                fontSize: "20px",
                                cursor: "pointer",
                            }}
                        >
                            ×
                        </button>
                        <h3>공유하기</h3>
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
                                fontSize: "16px",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            http://hanbang.com/share
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
                                    width: "13%",
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
                                fontSize: "16px",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            이미지로 저장하기
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
                                    width: "13%",
                                }}
                            >
                                저장
                            </button>
                        </button>
                    </div>
                </div>
            )}

            {/* 모달 뒤의 배경 */}
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
        </>
    );
}

export default Test;
