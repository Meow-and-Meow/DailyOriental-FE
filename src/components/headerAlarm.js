import React, { useState, useEffect } from "react";
import * as H from "../styles/components/AlarmStyle";

import DropdownItem from "./dropdownItem";
import alarm from "../img/bell_main.png";
import alarmNew from "../img/bell_new.png";

function HeaderAlarm() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [hasDropdownItems, setHasDropdownItems] = useState(false);

  const handleMenuClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeMenuClick = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    // 서버 연동 등을 통해 DropdownItem이 있는지 확인하는 로직
    setHasDropdownItems(false); // 임의로 true
  }, []);

  return (
    <>
      <H.Header>
        <H.Alarm onClick={handleMenuClick} $isVisible={isDropdownVisible}>
          <img src={hasDropdownItems ? alarmNew : alarm} alt="알람" />
        </H.Alarm>
      </H.Header>

      {isDropdownVisible && (
        <>
          <H.Background onClick={closeMenuClick} />
          <H.DropdownContainer $isVisible={isDropdownVisible} $hasDropdownItems={hasDropdownItems}>
            {hasDropdownItems ? (
              <>
                <DropdownItem category="mission" />
                <DropdownItem category="ai" />
                <DropdownItem category="acupressure" />
              </>
            ) : (
              <H.NoAlarm>알림 없음</H.NoAlarm>
            )}
          </H.DropdownContainer>
        </>
      )}
    </>
  );
}

export default HeaderAlarm;
