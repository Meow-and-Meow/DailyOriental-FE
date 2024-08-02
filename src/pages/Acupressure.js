import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../styles/CommonStyle";
import * as A from "../styles/AcupressureStyle";
import navbar from "../img/back_w.png";

function Acupressure() {
    const navigate = useNavigate();
    return (
        <>
            <C.Page>
                <C.Center>
                    <A.Background>
                        <C.PageSpace>
                            <A.Acupressure>
                                <A.Nav>
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
                                        <div className="TopTitle">지압점</div>
                                        <div className="TitleInfo">
                                            매일 한방, 매일 꾹꾹, 매일 건강
                                        </div>
                                    </div>
                                    <div></div>
                                </A.Nav>
                            </A.Acupressure>
                        </C.PageSpace>
                    </A.Background>
                </C.Center>
            </C.Page>
        </>
    );
}

export default Acupressure;
