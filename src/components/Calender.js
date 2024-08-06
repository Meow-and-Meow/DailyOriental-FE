import React, { useState, useEffect } from "react";
import moment from "moment";
import * as S from "../styles/components/CalenderStyle";

import todayImg from "../img/today.png";
import checkImg from "../img/check_day.png";

function CalenderInfo({ attendDays }) {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [activeStartDate, setActiveStartDate] = useState(today);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const isToday = (date) => {
    return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
  };

  const isAttendDay = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    return attendDays.includes(formattedDate);
  };

  return (
    <S.StyledCalendarWrapper>
      <S.StyledCalendar
        value={date}
        onChange={handleDateChange}
        formatDay={(locale, date) => moment(date).format("D")}
        formatYear={(locale, date) => moment(date).format("YYYY")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY년 M월")}
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        activeStartDate={activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate)}
        tileContent={({ date, view }) => {
          let html = [];

          const todayFlag = isToday(date);
          const attendDayFlag = isAttendDay(date);

          if (view === "month") {
            if (todayFlag && !attendDayFlag) {
              html.push(
                <S.StyledDot key="today">
                  <img src={todayImg} alt="today" />
                </S.StyledDot>
              );
            } else if (attendDayFlag) {
              html.push(
                <S.StyledDot key={moment(date).format("YYYY-MM-DD")}>
                  <img src={checkImg} alt="check" />
                </S.StyledDot>
              );
            }
          }

          return <>{html}</>;
        }}
      />
    </S.StyledCalendarWrapper>
  );
}

export default CalenderInfo;
