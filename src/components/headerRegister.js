import React from "react";
import { useNavigate } from "react-router-dom";
import * as H from "../styles/components/HeaderStyle";

import back from "../img/back_w.png";

function HeaderRegister() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <H.Header>
        <H.Arrow onClick={handleBackClick}>
          <img src={back} alt="뒤로가기" />
        </H.Arrow>
        <H.ArrowSpace></H.ArrowSpace>
      </H.Header>
    </>
  );
}

export default HeaderRegister;
