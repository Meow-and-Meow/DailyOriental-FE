import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as C from "../styles/CommonStyle";
import * as M from "../styles/MyPageStyle";

import HeaderMypage from "../components/headerMypage";
import Member from "../components/member";
import NonMember from "../components/nonMember";

function MyPage() {
    const { id } = useParams(); // URL에서 id 가져오기
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData && userData.token) {
            setIsLoggedIn(true);
            console.log(userData);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    return (
        <>
            <C.Page>
                <C.Center>
                    <M.Background>
                        <C.PageSpace>
                            <M.MyPage>
                                <HeaderMypage />
                                {isLoggedIn ? <Member id={id} /> : <NonMember />}
                            </M.MyPage>
                        </C.PageSpace>
                    </M.Background>
                </C.Center>
            </C.Page>
        </>
    );
}

export default MyPage;
