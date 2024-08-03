import React from "react";
import * as C from "../styles/CommonStyle";
import * as A from "../styles/AIStyle";

import Header from "../components/header";

function AI() {
  const mainTitle = "사상체질 건강관리";
  const subTitle = "AI 허준과 함께하는 매일 한방";

  return (
    <>
      <C.Page>
        <C.Center>
          <A.Background>
            <C.PageSpace>
              <A.AI>
                <Header mainTitle={mainTitle} subTitle={subTitle} />
              </A.AI>
            </C.PageSpace>
          </A.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default AI;
