import React from "react";
import * as C from "../styles/CommonStyle";
import * as M from "../styles/MyPageStyle";

function MyPage() {
  return (
    <>
      <C.Page>
        <C.Center>
          <M.Background>
            <C.PageSpace>
              <M.MyPage>
              </M.MyPage>
            </C.PageSpace>
          </M.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default MyPage;
