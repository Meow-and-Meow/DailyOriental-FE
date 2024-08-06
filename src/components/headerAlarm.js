import React, { useState, useEffect } from "react";
import axios from "axios";
import * as H from "../styles/components/AlarmStyle";

import DropdownItem from "./dropdownItem";
import alarm from "../img/bell_main.png";
import alarmNew from "../img/bell_new.png";

function HeaderAlarm() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [hasDropdownItems, setHasDropdownItems] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([]);

  const handleMenuClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeMenuClick = () => {
    setDropdownVisible(false);
  };

  const fetchNotifications = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/alarm/notifications/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      const notifications = response.data;
      setDropdownItems(notifications);
      setHasDropdownItems(notifications.length > 0);
    } catch (error) {
      console.error("알림 정보를 불러오는데 실패했습니다:", error);
    }
  };

  useEffect(() => {
    // 최초 로드 시 알림을 불러옵니다.
    fetchNotifications();

    // 5초 간격으로 알림을 불러옵니다.
    const intervalId = setInterval(fetchNotifications, 5000);

    // 컴포넌트 언마운트 시 interval을 정리합니다.
    return () => clearInterval(intervalId);
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
              dropdownItems.map((item) => (
                <DropdownItem
                  key={item.id}
                  category={item.message_type === "Daily Mission" ? "mission" : item.message_type === "Health Tip" ? "ai" : "acupressure"}
                  message={item.message}
                  url={item.url}
                  urlText={item.url_text}
                />
              ))
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
