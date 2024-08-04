import React from "react";
import * as C from "../styles/CommonStyle";
import * as M from "../styles/MyMissionStyle";

import Header from "../components/header";

function MyMission() {
  const mainTitle = "매일한방 매일습관";
  const subTitle = "나의 체질에 맞는 건강 습관 만들기";

  return (
    <>
      <C.Page>
        <C.Center>
          <M.Background>
            <C.PageSpace>
              <M.MyMission>
                <Header mainTitle={mainTitle} subTitle={subTitle} />
              </M.MyMission>
            </C.PageSpace>
          </M.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default MyMission;
