import React from "react";
import * as C from "../styles/CommonStyle";
import * as A from "../styles/AcupressureStyle";

function Acupressure() {
  return (
    <>
      <C.Page>
        <C.Center>
          <A.Background>
            <C.PageSpace>
              <A.Acupressure></A.Acupressure>
            </C.PageSpace>
          </A.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Acupressure;
