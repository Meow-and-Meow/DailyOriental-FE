import React, { useState } from "react";
import * as C from "../styles/CommonStyle";
import * as M from "../styles/MyMissionStyle";

import Header from "../components/header";
import ModalMission from "../components/modalMission";

import mood from "../img/btn_feeling.png";
import exercise from "../img/btn_exercise.png";
import happiness from "../img/btn_happy.png";
import diet from "../img/btn_meal.png";

import moodY from "../img/btn_feeling_y.png";
import exerciseY from "../img/btn_exercise_y.png";
import happinessY from "../img/btn_happy_y.png";
import dietY from "../img/btn_meal_y.png";

function MyMission() {
  const mainTitle = "매일한방 매일습관";
  const subTitle = "나의 체질에 맞는 건강 습관 만들기";

  const [selectedCategory, setSelectedCategory] = useState("기분");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const getCategoryImage = (category) => {
    switch (category) {
      case "기분":
        return selectedCategory === "기분" ? moodY : mood;
      case "운동":
        return selectedCategory === "운동" ? exerciseY : exercise;
      case "행복":
        return selectedCategory === "행복" ? happinessY : happiness;
      case "식습관":
        return selectedCategory === "식습관" ? dietY : diet;
      default:
        return null;
    }
  };

  const getCategoryTitle = () => {
    switch (selectedCategory) {
      case "기분":
        return "기분";
      case "운동":
        return "운동";
      case "행복":
        return "행복";
      case "식습관":
        return "식습관";
      default:
        return "기분";
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <M.Background>
            <C.PageSpace>
              <M.MyMission>
                <Header mainTitle={mainTitle} subTitle={subTitle} />
                <M.CategoryBtns>
                  <M.CategoryBtn onClick={() => handleCategoryClick("기분")}>
                    <img src={getCategoryImage("기분")} alt="기분" />
                    기분
                  </M.CategoryBtn>
                  <M.CategoryBtn onClick={() => handleCategoryClick("운동")}>
                    <img src={getCategoryImage("운동")} alt="운동" />
                    운동
                  </M.CategoryBtn>
                  <M.CategoryBtn onClick={() => handleCategoryClick("행복")}>
                    <img src={getCategoryImage("행복")} alt="행복" />
                    행복
                  </M.CategoryBtn>
                  <M.CategoryBtn onClick={() => handleCategoryClick("식습관")}>
                    <img src={getCategoryImage("식습관")} alt="식습관" />
                    식습관
                  </M.CategoryBtn>
                </M.CategoryBtns>
                <M.CategoryTitle>{getCategoryTitle()}</M.CategoryTitle>
                <M.MissionList>
                  <M.Missions>
                    <M.Mission>10분 동안 명상하기</M.Mission>
                    <M.Mission>감사한 일 3가지 적어보기</M.Mission>
                    <M.Mission>좋아하는 노래 3곡 듣기</M.Mission>
                    <M.Mission>10분 동안 하늘 쳐다보기</M.Mission>
                    <M.Mission>가까운 친구와 가족에게 안부 메시지 보내기</M.Mission>
                    <M.PlusMission>
                      자화상 그려보기
                      <M.DBtn>-</M.DBtn>
                    </M.PlusMission>
                  </M.Missions>
                  <M.MBtn onClick={openModal}>+</M.MBtn>
                </M.MissionList>
                {isModalOpen && <ModalMission onClose={closeModal} />}
              </M.MyMission>
            </C.PageSpace>
          </M.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default MyMission;
