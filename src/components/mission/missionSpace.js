import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../../styles/components/mission/MissionSpaceStyle";

import moodBtn from "../../img/Arch_feeling_650x650.png";
import exerciseBtn from "../../img/Arch_exercise_650x650.png";
import happinessBtn from "../../img/Arch_happy_650x650.png";
import dietBtn from "../../img/Arch_meal_650x650.png";
import list from "../../img/list.png";

import mon from "../../img/day_Mon.png";
import tue from "../../img/day_Tue.png";
import wed from "../../img/day_Wed.png";
import thu from "../../img/day_Thu.png";
import fri from "../../img/day_Fri.png";
import sat from "../../img/day_Sat.png";
import sun from "../../img/day_Sun.png";

function MissionSpace() {
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
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

  return (
    <>
      <M.Background>
        <M.Time>
          <M.Small>오늘은</M.Small>
          <M.Big>
            {hour}H : {minute}M : {second}s
          </M.Big>
          <M.Small>남았어요</M.Small>
        </M.Time>

        <M.Btns>
          <M.MainBtns>
            <M.moodBtn>
              <img src={moodBtn} alt="기분" />
              <M.BtnText>큰 소리로 3번 웃기</M.BtnText>
            </M.moodBtn>
            <M.exerciseBtn>
              <img src={exerciseBtn} alt="운동" />
              <M.BtnText>동네 산책 한바퀴</M.BtnText>
            </M.exerciseBtn>
            <M.happinessBtn>
              <img src={happinessBtn} alt="행복" />
              <M.BtnText2>박수 크게 20번 치기</M.BtnText2>
            </M.happinessBtn>
            <M.dietBtn>
              <img src={dietBtn} alt="식습관" />
              <M.BtnText3>따듯한 물 다섯 컵</M.BtnText3>
            </M.dietBtn>
          </M.MainBtns>
        </M.Btns>
        <M.ToList onClick={() => handleNavLinkClick("/mission/list")}>
          <img src={list} alt="프로필" />
        </M.ToList>

        <M.DateBtn>7월 4주차</M.DateBtn>
        <M.DateList>
          <img src={mon} alt="월요일" />
          <img src={tue} alt="화요일" />
          <img src={wed} alt="수요일" />
          <img src={thu} alt="목요일" />
          <img src={fri} alt="금요일" />
          <img src={sat} alt="토요일" />
          <img src={sun} alt="일요일" />
        </M.DateList>
      </M.Background>
    </>
  );
}

export default MissionSpace;
