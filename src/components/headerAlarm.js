import React, { useState, useEffect } from "react";
import axios from "axios";
import * as H from "../styles/components/AlarmStyle";

import DropdownItem from "./dropdownItem";
import alarm from "../img/bell_main.png";
import alarmNew from "../img/bell_new.png";

function HeaderAlarm() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([]);
  const [hasNewItems, setHasNewItems] = useState(false);

  const handleMenuClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeMenuClick = () => {
    setDropdownVisible(false);
  };

  const fetchNotifications = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/alarm/notifications/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setDropdownItems(response.data);
      setHasNewItems(response.data.some((item) => !item.is_read));
    } catch (error) {
      console.error("Failed to fetch notifications:", error);
    }
  };

  const markAsRead = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await axios.get(`${process.env.REACT_APP_API}/alarm/notifications/${id}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      // fetchNotifications를 호출하여 상태를 최신화
      fetchNotifications();
    } catch (error) {
      console.error("Failed to mark notification as read:", error);
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
          <img src={hasNewItems ? alarmNew : alarm} alt="알람" />
        </H.Alarm>
      </H.Header>

      {isDropdownVisible && (
        <>
          <H.Background onClick={closeMenuClick} />
          <H.DropdownContainer $isVisible={isDropdownVisible} $hasDropdownItems={hasNewItems}>
            {dropdownItems.length > 0 ? (
              dropdownItems.map((item) => (
                <DropdownItem
                  key={item.id}
                  category={item.message_type === "Daily Mission" ? "mission" : item.message_type === "Health Tip" ? "ai" : "acupressure"}
                  onItemClick={() => markAsRead(item.id)}
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
