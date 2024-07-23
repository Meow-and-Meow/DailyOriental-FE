import React from "react";
import * as C from "../styles/CommonStyle";
import * as S from "../styles/SignUpStyle";

function SignUp() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.SignUp></S.SignUp>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default SignUp;
