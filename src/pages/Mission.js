import React from "react";
import * as C from "../styles/CommonStyle";
import * as M from "../styles/MissionStyle";

function Mission() {
  return (
    <>
      <C.Page>
        <C.Center>
          <M.Background>
            <C.PageSpace>
              <M.Mission></M.Mission>
            </C.PageSpace>
          </M.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Mission;
