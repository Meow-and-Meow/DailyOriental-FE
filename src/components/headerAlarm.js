import React from "react";
import * as H from "../styles/components/AlarmStyle";

import alarm from "../img/bell_main.png";

function HeaderAlarm() {
  return (
    <>
      <H.Header>
        <H.Alarm>
          <img src={alarm} alt="알람" />
        </H.Alarm>
      </H.Header>
    </>
  );
}

export default HeaderAlarm;
