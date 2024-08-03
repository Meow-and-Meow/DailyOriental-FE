import React from "react";
import { useNavigate } from "react-router-dom";
import * as H from "../styles/components/HeaderStyle";

import back from "../img/back_w.png";
import profile from "../img/profile.png";

function HeaderMypage() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <>
            <H.Header>
                <H.Arrow onClick={handleBackClick}>
                    <img src={back} alt="뒤로가기" />
                </H.Arrow>
                <H.TitleImg>
                    <img src={profile} alt="프로필" />
                    <H.Title>
                        <H.MainTitle>김덕성</H.MainTitle>
                        <H.SubName>회원</H.SubName>
                    </H.Title>
                </H.TitleImg>

                <H.ArrowSpace></H.ArrowSpace>
            </H.Header>
        </>
    );
}

export default HeaderMypage;
