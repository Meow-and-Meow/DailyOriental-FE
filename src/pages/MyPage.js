import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import * as C from "../styles/CommonStyle";
import * as M from "../styles/MyPageStyle";

import HeaderMypage from "../components/headerMypage";
import Member from "../components/member";
import NonMember from "../components/nonMember";

function MyPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const id = localStorage.getItem("user_id");
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <C.Page>
                <C.Center>
                    <M.Background>
                        <C.PageSpace>
                            <M.MyPage>
                                <HeaderMypage />
                                {isLoggedIn ? <Member /> : <NonMember />}
                            </M.MyPage>
                        </C.PageSpace>
                    </M.Background>
                </C.Center>
            </C.Page>
        </>
    );
}

export default MyPage;
