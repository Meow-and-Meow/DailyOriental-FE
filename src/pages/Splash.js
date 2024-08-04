import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../styles/CommonStyle";
import * as S from "../styles/SplashStyle";

import logo_r from "../img/logo_r.png";

function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/join");
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.Splash>
                <S.logo>
                  <img src={logo_r} alt="매일한방"></img>
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
