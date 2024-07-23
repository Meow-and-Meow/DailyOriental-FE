import React from "react";
import * as C from "../styles/CommonStyle";
import * as A from "../styles/AIStyle";

function AI() {
  return (
    <>
      <C.Page>
        <C.Center>
          <A.Background>
            <C.PageSpace>
              <A.AI></A.AI>
            </C.PageSpace>
          </A.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default AI;
