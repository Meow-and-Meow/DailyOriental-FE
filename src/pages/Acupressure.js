import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../styles/CommonStyle";
import * as A from "../styles/AcupressureStyle";

import Header from "../components/header";
import btnFoot from "../img/btn_foot.png";
import btnHand from "../img/btn_hand.png";
import Foot from "../img/foot.png";
import Hand from "../img/hand.png";

import h1 from "../img/h1.png";
import h2 from "../img/h2.png";
import h3 from "../img/h3.png";
import h4 from "../img/h4.png";
import h5 from "../img/h5.png";
import h6 from "../img/h6.png";
import h7 from "../img/h7.png";
import h8 from "../img/h8.png";
import h9 from "../img/h9.png";
import h10 from "../img/h10.png";
import h11 from "../img/h11.png";
import h12 from "../img/h12.png";

import f1 from "../img/f1.png";
import f2 from "../img/f2.png";
import f3 from "../img/f3.png";
import f4 from "../img/f4.png";
import f5 from "../img/f5.png";
import f6 from "../img/f6.png";
import f7 from "../img/f7.png";
import f8 from "../img/f8.png";
import f9 from "../img/f9.png";
import f10 from "../img/f10.png";
import f11 from "../img/f11.png";
import f12 from "../img/f12.png";
import f13 from "../img/f13.png";
import f14 from "../img/f14.png";
import f15 from "../img/f15.png";
import f16 from "../img/f16.png";
import SelectableButton from "../styles/components/SelectableButton.js"; // 생성한 컴포넌트 import

function Acupressure() {
    const mainTitle = "지압점";
    const subTitle = "매일 한방, 매일 꾹꾹, 매일 건강";

    // 상태 관리: 처음에는 Hand와 btnHand로 설정
    const [currentImage, setCurrentImage] = useState(Hand);
    const [currentBtnImage, setCurrentBtnImage] = useState(btnFoot);
    const [buttonLabels, setButtonLabels] = useState([
        "발바닥",
        "간",
        "변비/대장",
        "생리통/자궁",
        "방광/전립선",
        "심장/두근거림",
        "위/위염",
        "피로함/신장",
        "소화 불량",
        "눈",
        "기관지/인후염",
        "답답한 가슴 천식/가래",
    ]);
    const [selectedButtons, setSelectedButtons] = useState([]);
    const [visibleImages, setVisibleImages] = useState({}); // 여러 이미지를 관리하기 위한 상태

    // 손과 발에 맞는 이미지 매핑 설정
    const handImageMapping = {
        발바닥: h1,
        간: h2,
        "변비/대장": h3,
        "생리통/자궁": h4,
        "방광/전립선": h5,
        "심장/두근거림": h6,
        "위/위염": h7,
        "피로함/신장": h8,
        "소화 불량": h9,
        눈: h10,
        "기관지/인후염": h11,
        "답답한 가슴 천식/가래": h12,
        // 나머지 버튼들도 설정
    };

    const footImageMapping = {
        "비염/축농증": f1,
        "목 디스크": f2,
        눈: f3,
        귀: f4,
        어깨: f5,
        골다공증: f6,
        위: f7,
        "천식/기침": f8,
        심장: f9,
        "부종/신장": f10,
        "복통/설사": f11,
        소화불량: f12,
        방광염: f13,
        "치질/변비": f14,
        "생리통/갱년기": f15,
        "갑상선/부정맥": f16,
    };

    // 버튼 클릭 시 이미지 변경
    const handleImageChange = () => {
        // 현재 선택된 버튼과 표시된 이미지 모두 해제
        setSelectedButtons([]);
        setVisibleImages({});
        if (currentImage === Hand) {
            setCurrentImage(Foot); // Hand 이미지를 Foot 이미지로 변경
            setCurrentBtnImage(btnHand); // btnHand 이미지를 btnFoot 이미지로 변경
            setButtonLabels([
                "비염/축농증",
                "목 디스크",
                "눈",
                "귀",
                "어깨",
                "골다공증",
                "위",
                "천식/기침",
                "심장",
                "부종/신장",
                "복통/설사",
                "소화불량",
                "방광염",
                "치질/변비",
                "생리통/갱년기",
                "갑상선/부정맥",
            ]); // Foot 이미지에 해당하는 버튼 라벨로 변경
        } else {
            setCurrentImage(Hand); // 다시 Foot 이미지를 Hand 이미지로 변경
            setCurrentBtnImage(btnFoot); // btnFoot 이미지를 btnHand 이미지로 변경
            setButtonLabels([
                "발바닥",
                "간",
                "변비/대장",
                "생리통/자궁",
                "방광/전립선",
                "심장/두근거림",
                "위/위염",
                "피로함/신장",
                "소화 불량",
                "눈",
                "기관지/인후염",
                "답답한 가슴 천식/가래",
            ]); // Hand 이미지에 해당하는 버튼 라벨로 변경
        }
    };

    const handleButtonClick = (label) => {
        // 현재 이미지 상태에 따라 적절한 이미지 매핑 사용
        const currentImageMapping =
            currentImage === Hand ? handImageMapping : footImageMapping;

        // 클릭된 버튼에 맞는 이미지가 이미 표시 중이라면 제거, 아니라면 표시
        setVisibleImages((prevVisibleImages) => ({
            ...prevVisibleImages,
            [label]: prevVisibleImages[label]
                ? null
                : currentImageMapping[label],
        }));

        // 버튼 선택 상태 토글
        if (selectedButtons.includes(label)) {
            setSelectedButtons(
                selectedButtons.filter((item) => item !== label)
            );
        } else {
            setSelectedButtons([...selectedButtons, label]);
        }
    };

    const handleSelectAll = () => {
        // 현재 이미지 상태에 따라 적절한 이미지 매핑 사용
        const currentImageMapping =
            currentImage === Hand ? handImageMapping : footImageMapping;

        setSelectedButtons(buttonLabels); // 모든 버튼 선택
        const allImages = buttonLabels.reduce((acc, label) => {
            acc[label] = currentImageMapping[label];
            return acc;
        }, {});
        setVisibleImages(allImages); // 모든 이미지 보이기
    };

    const handleDeselectAll = () => {
        setSelectedButtons([]); // 모든 버튼 선택 해제
        setVisibleImages({}); // 모든 이미지 숨기기
    };
    return (
        <>
            <C.Page>
                <C.Center>
                    <A.Background>
                        <C.PageSpace>
                            <A.Acupressure>
                                <Header
                                    mainTitle={mainTitle}
                                    subTitle={subTitle}
                                />
                                <A.Selection>
                                    <div className="Top">
                                        <div className="SelectionTitle">
                                            증상 또는 아픈 부위를 선택하세요
                                        </div>
                                        <div className="SelectionOption">
                                            <div className="All">전체 </div>
                                            <div style={{ margin: "2px" }}>
                                                {" "}
                                            </div>
                                            <div
                                                className="On"
                                                onClick={handleSelectAll}
                                                style={{ cursor: "pointer" }}
                                            >
                                                선택
                                            </div>
                                            <div>/</div>
                                            <div
                                                className="Off"
                                                onClick={handleDeselectAll}
                                                style={{ cursor: "pointer" }}
                                            >
                                                해제
                                            </div>
                                        </div>
                                    </div>
                                    <A.SelectionsBtns
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <div
                                            className="scroll"
                                            style={{
                                                margin: "6px",
                                            }}
                                        >
                                            {buttonLabels
                                                .reduce(
                                                    (
                                                        resultArray,
                                                        item,
                                                        index
                                                    ) => {
                                                        // 3개씩 묶기
                                                        const chunkIndex =
                                                            Math.floor(
                                                                index / 3
                                                            );

                                                        if (
                                                            !resultArray[
                                                                chunkIndex
                                                            ]
                                                        ) {
                                                            resultArray[
                                                                chunkIndex
                                                            ] = []; // 새로운 배열 생성
                                                        }

                                                        resultArray[
                                                            chunkIndex
                                                        ].push(
                                                            <div
                                                                key={item}
                                                                style={{
                                                                    marginBottom:
                                                                        "3px",
                                                                }}
                                                            >
                                                                <SelectableButton
                                                                    label={item}
                                                                    onClick={
                                                                        handleButtonClick
                                                                    }
                                                                    isSelected={selectedButtons.includes(
                                                                        item
                                                                    )}
                                                                />
                                                            </div>
                                                        );

                                                        return resultArray;
                                                    },
                                                    []
                                                )
                                                .map((chunk, index) => (
                                                    <div
                                                        key={index}
                                                        style={{
                                                            display: "flex",
                                                        }}
                                                    >
                                                        {chunk}
                                                    </div>
                                                ))}
                                        </div>
                                    </A.SelectionsBtns>
                                </A.Selection>
                                <div style={{}}>
                                    <A.Bottom>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: "500px",
                                                width: "85%",
                                                marginBottom: "10%",
                                            }}
                                        >
                                            <A.Show
                                                style={{
                                                    position: "relative",
                                                    width: "100%",
                                                    height: "100%",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <img
                                                    src={currentImage}
                                                    style={{
                                                        cursor: "pointer",
                                                        width: "100%",
                                                        height: "100%",
                                                    }}
                                                />
                                                {Object.entries(
                                                    visibleImages
                                                ).map(
                                                    ([label, imageSrc]) =>
                                                        imageSrc && (
                                                            <img
                                                                key={label}
                                                                src={imageSrc}
                                                                style={{
                                                                    position:
                                                                        "absolute",
                                                                    top: 0,
                                                                    left: 0,
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    pointerEvents:
                                                                        "none",
                                                                }}
                                                            />
                                                        )
                                                )}
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        bottom: "0px",
                                                        right: "10px",
                                                    }}
                                                >
                                                    <img
                                                        src={currentBtnImage}
                                                        onClick={
                                                            handleImageChange
                                                        }
                                                        style={{
                                                            cursor: "pointer",
                                                            width: "70px",
                                                            height: "70px",
                                                        }}
                                                    />
                                                </div>
                                            </A.Show>
                                        </div>
                                    </A.Bottom>
                                </div>
                            </A.Acupressure>
                        </C.PageSpace>
                    </A.Background>
                </C.Center>
            </C.Page>
        </>
    );
}

export default Acupressure;
