import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 가져오기
import * as C from "../styles/CommonStyle";
import * as T from "../styles/TestStyle";

import Header from "../components/header";

function Test() {
    const mainTitle = "사상체질 자가진단";
    const subTitle = "태양인/소양인/태음인/소음인";

    return (
        <>
            <C.Page>
                <C.Center>
                    <T.Background>
                        <C.PageSpace>
                            <T.Test>
                                <Header
                                    mainTitle={mainTitle}
                                    subTitle={subTitle}
                                />
                            </T.Test>
                        </C.PageSpace>
                    </T.Background>
                </C.Center>
            </C.Page>
        </>
    );
}

export default Test;
