import React from "react";
import * as C from "../styles/CommonStyle";
import * as T from "../styles/TestStyle";

function Test() {
  return (
    <>
      <C.Page>
        <C.Center>
          <T.Background>
            <C.PageSpace>
              <T.Test></T.Test>
            </C.PageSpace>
          </T.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Test;
