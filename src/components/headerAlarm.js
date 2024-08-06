import React, { useState, useEffect } from "react";
import axios from "axios";
import * as H from "../styles/components/AlarmStyle";

import DropdownItem from "./dropdownItem";
import alarm from "../img/bell_main.png";
import alarmNew from "../img/bell_new.png";

import Loading from "../components/Loading";

function HeaderAlarm() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [hasDropdownItems, setHasDropdownItems] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
    }
  };

  const deleteNotification = async (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("토큰이 없습니다.");
      return;
    }

    try {
      await axios.delete(`${process.env.REACT_APP_API}/alarm/notifications/${id}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      fetchNotifications();
    } catch (error) {
      console.error("알람 삭제 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
    const intervalId = setInterval(fetchNotifications, 5000);

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
                  onDelete={() => deleteNotification(item.id)}
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
