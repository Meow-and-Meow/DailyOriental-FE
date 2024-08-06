import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledCalendarWrapper, StyledCalendar } from "../../styles/components/CalenderStyle";
import * as M from "../../styles/components/mission/MissionSpaceStyle";

import CalenderInfo from "../Calender";

import moodBtn from "../../img/Arch_feeling_650x650.png";
import exerciseBtn from "../../img/Arch_exercise_650x650.png";
import happinessBtn from "../../img/Arch_happy_650x650.png";
import dietBtn from "../../img/Arch_meal_650x650.png";
import moodBtnY from "../../img/Arch_feeling_red.png";
import exerciseBtnY from "../../img/Arch_exercise_red.png";
import happinessBtnY from "../../img/Arch_happy_red.png";
import dietBtnY from "../../img/Arch_meal_red.png";
import check from "../../img/check_center.png";
import list from "../../img/list_center.png";

import mon from "../../img/day_Mon.png";
import tue from "../../img/day_Tue.png";
import wed from "../../img/day_Wed.png";
import thu from "../../img/day_Thu.png";
import fri from "../../img/day_Fri.png";
import sat from "../../img/day_Sat.png";
import sun from "../../img/day_Sun.png";

import monY from "../../img/day_Mon_check.png";
import tueY from "../../img/day_Tue_check.png";
import wedY from "../../img/day_Wed_check.png";
import thuY from "../../img/day_Thu_check.png";
import friY from "../../img/day_Fri_check.png";
import satY from "../../img/day_Sat_check.png";
import sunY from "../../img/day_Sun_check.png";

function MissionSpace({ dateInfo, completedMissions, onMissionClick }) {
  const navigate = useNavigate();
  const [info, setInfo] = useState(dateInfo);

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  const handleMissionClick = (field) => {
    onMissionClick(field);
  };

  const [hour, setHour] = useState(23 - new Date().getHours());
  // 시간을 가져와 23에서 시간값을 뺀 시간을 정해주는 state
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  // 분을 가져와 59에서 분값을 뺀 분을 정해주는 state
  const [second, setSecond] = useState(59 - new Date().getSeconds());
  // 초를 가져와 59에서 초값을 뺀 초를 정해주는 state

  useEffect(() => {
    const id = setInterval(() => {
      setHour(23 - new Date().getHours());
      setMinute(59 - new Date().getMinutes());
      setSecond(59 - new Date().getSeconds());
    }, 1000);
    // 1초마다 실행되는 인터벌을 이용해 1초마다 다시 랜더링 시켜줌
    return () => clearInterval(id);
    // 페이지를 벗어나게되면 반복을 종료해줌
  }, []);

  const getDayImage = (day) => {
    const completedDay = completedMissions.find((mission) => mission.day_of_week.toLowerCase() === day && mission.all_completed);

    switch (day) {
      case "monday":
        return completedDay ? monY : mon;
      case "tuesday":
        return completedDay ? tueY : tue;
      case "wednesday":
        return completedDay ? wedY : wed;
      case "thursday":
        return completedDay ? thuY : thu;
      case "friday":
        return completedDay ? friY : fri;
      case "saturday":
        return completedDay ? satY : sat;
      case "sunday":
        return completedDay ? sunY : sun;
      default:
        return null;
    }
  };

  const attendDays = completedMissions.filter((mission) => mission.all_completed).map((mission) => mission.date);

  return (
    <>
      <M.Background>
        <M.Time>
          <M.Small1>오늘은</M.Small1>
          <M.Big>
            {hour}H : {minute}M : {second}s
          </M.Big>
          <M.Small2>남았어요</M.Small2>
        </M.Time>

        <M.Btns>
          <M.MainBtns>
            <M.moodBtn onClick={() => handleMissionClick("mood_completed")}>
              <img src={dateInfo.mood_completed ? moodBtnY : moodBtn} alt="기분" />
              <M.BtnText>{dateInfo.mood_mission}</M.BtnText>
            </M.moodBtn>
            <M.exerciseBtn onClick={() => handleMissionClick("exercise_completed")}>
              <img src={dateInfo.exercise_completed ? exerciseBtnY : exerciseBtn} alt="운동" />
              <M.BtnText>{dateInfo.exercise_mission}</M.BtnText>
            </M.exerciseBtn>
            <M.happinessBtn onClick={() => handleMissionClick("happiness_completed")}>
              <img src={dateInfo.happiness_completed ? happinessBtnY : happinessBtn} alt="행복" />
              <M.BtnText2>{dateInfo.happiness_mission}</M.BtnText2>
            </M.happinessBtn>
            <M.dietBtn onClick={() => handleMissionClick("diet_completed")}>
              <img src={dateInfo.diet_completed ? dietBtnY : dietBtn} alt="식습관" />
              <M.BtnText3>{dateInfo.diet_mission}</M.BtnText3>
            </M.dietBtn>
          </M.MainBtns>
        </M.Btns>
        <M.ToList onClick={() => handleNavLinkClick("/mission/list")}>
          <img src={dateInfo.all_completed ? check : list} alt="프로필" />
        </M.ToList>

        <M.DateBtn>{`${parseInt(info.date.substring(5, 7), 10)}월 ${info.week_of_month}주차`}</M.DateBtn>
        <M.DateList>
          <img src={getDayImage("monday")} alt="월요일" />
          <img src={getDayImage("tuesday")} alt="화요일" />
          <img src={getDayImage("wednesday")} alt="수요일" />
          <img src={getDayImage("thursday")} alt="목요일" />
          <img src={getDayImage("friday")} alt="금요일" />
          <img src={getDayImage("saturday")} alt="토요일" />
          <img src={getDayImage("sunday")} alt="일요일" />
        </M.DateList>
        <M.CalenderSpace>
          <CalenderInfo attendDays={attendDays} />
        </M.CalenderSpace>
      </M.Background>
    </>
  );
}

export default MissionSpace;
