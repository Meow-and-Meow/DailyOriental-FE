import React from "react";
import * as C from "../styles/CommonStyle";
import * as S from "../styles/SplashStyle";
import logo_r from "../img/logo_r.png";

function Splash() {
    return (
        <>
            <C.Page>
                <C.Center>
                    <S.Background>
                        <C.PageSpace>
                            <S.Splash>
                                <S.logo>
                                    <img src={logo_r}></img>
                                </S.logo>
                            </S.Splash>
                        </C.PageSpace>
                    </S.Background>
                </C.Center>
            </C.Page>
        </>
    );
}

export default Splash;
