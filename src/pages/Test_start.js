import React, { useState } from "react";
import * as C from "../styles/CommonStyle";
import * as T from "../styles/TestStartStyle";
import navbar from "../img/back_w.png";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";

function Test_start() {
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.
    const mainTitle = "사상체질 자가진단";
    const subTitle = "태양인/소양인/태음인/소음인";
    const handleClick = () => {
        navigate("/testIng"); // "/test-ing" 경로로 이동합니다.
    };
    return (
        <C.Page>
            <C.Center>
                <T.Background>
                    <C.PageSpace>
                        <T.Test>
                            <T.Nav>
                                <Header
                                    mainTitle={mainTitle}
                                    subTitle={subTitle}
                                />
                            </T.Nav>
                            <T.Adver>
                                <div className="AdvText">
                                    미래의 의사는 환자에게 약을 주기보다 <br />
                                    환자가 자신의 체질과 음식, 질병의 원인과
                                    예방에
                                    <br />
                                    관심을 갖도록 할 것이다.
                                </div>
                            </T.Adver>
                            <T.InfoDetail>
                                <div className="InfoTitle">사상체질이란?</div>
                                <div className="InfoBox">
                                    <div className="InfoText">
                                        사람은 타고난 바에 의해 각각의
                                        오장육부에 허실이 생김으로써 체질별로
                                        독특한 질환이 발생합니다. 사상의학의
                                        가장 큰 특징은 치료에 있어서 체질에 따라
                                        그 특징에 차이가 있으므로 그 체질적
                                        차이를 감안하여 같은 병이더라도 치료법을
                                        다르게 적용해야 한다는 것입니다.
                                    </div>
                                </div>
                                <div className="InfoTitle">체질 구분 지표</div>
                                <div className="InfoBox">
                                    <div className="InfoText">
                                        <li>체형기상(體形氣像) - 체형</li>
                                        <li>
                                            용모사기(容貌詞氣) - 얼굴 생김새,
                                            말투 등
                                        </li>
                                        <li>
                                            성질재간(性質材幹) - 성격, 일 처리
                                            능력, 심욕 등{" "}
                                        </li>
                                        <li>
                                            병증약리(病證藥理) - 같은 병에 따른
                                            체질별 증상
                                        </li>
                                    </div>
                                </div>
                                <div className="InfoTitle">
                                    병증약리 관련 용어
                                </div>
                                <div className="InfoBox">
                                    <div className="InfoText">
                                        <li> 완실무병 : 건강의 조건</li>

                                        <li>
                                            대병 : 체질적인 병으로 아직은 중병이
                                            아닌 병
                                        </li>
                                        <li>
                                            {" "}
                                            중병 : 체질에 따라 치명적이거나
                                            치료하기 힘든 병
                                        </li>
                                    </div>
                                </div>
                            </T.InfoDetail>
                            <T.ButtonContainer>
                                <T.Button onClick={handleClick}>
                                    진단하러 가기
                                </T.Button>
                            </T.ButtonContainer>
                        </T.Test>
                    </C.PageSpace>
                </T.Background>
            </C.Center>
        </C.Page>
    );
}

export default Test_start;
