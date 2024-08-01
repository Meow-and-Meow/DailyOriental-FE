import React from "react";
import * as C from "../styles/CommonStyle";
import * as A from "../styles/AcupressureStyle";

import Header from "../components/header";

function Acupressure() {
  const mainTitle = "지압점";
  const subTitle = "매일 한방, 매일 꾹꾹, 매일 건강";

  return (
    <>
      <C.Page>
        <C.Center>
          <A.Background>
            <C.PageSpace>
              <A.Acupressure>
                <Header mainTitle={mainTitle} subTitle={subTitle} />
              </A.Acupressure>
            </C.PageSpace>
          </A.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Acupressure;
