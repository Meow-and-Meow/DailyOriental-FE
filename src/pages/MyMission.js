import React, { useState, useEffect } from "react";
import axios from "axios";
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

import Loading from "../components/Loading";

function MyMission() {
  const mainTitle = "매일한방 매일습관";
  const subTitle = "나의 체질에 맞는 건강 습관 만들기";

  const [selectedCategory, setSelectedCategory] = useState("기분");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMissions(selectedCategory);
  }, [selectedCategory]);

  const fetchMissions = async (category) => {
    const token = localStorage.getItem("token");
    const apiCategory = getCategoryApiName(category);
    // setLoading(true);

    try {
      console.log(apiCategory);
      const response = await axios.get(`${process.env.REACT_APP_API}/habits/category/${apiCategory}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setMissions(response.data);
    } catch (error) {
      console.error(`${category} 카테고리의 미션을 불러오는데 실패했습니다:`, error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const getCategoryApiName = (category) => {
    switch (category) {
      case "기분":
        return "mood";
      case "운동":
        return "exercise";
      case "행복":
        return "happiness";
      case "식습관":
        return "diet";
      default:
        return "mood";
    }
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

  const closeModal = (refresh) => {
    setIsModalOpen(false);
    if (refresh) {
      fetchMissions(selectedCategory); // 새 미션 추가 후 목록 새로 고침
    }
  };

  const handleMissionDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`${process.env.REACT_APP_API}/habits/${id}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      fetchMissions(selectedCategory); // 미션 삭제 후 목록 새로 고침
    } catch (error) {
      console.error("미션 삭제 실패:", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

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
                    {missions.map((mission) =>
                      mission.default ? (
                        <M.Mission key={mission.id}>{mission.text}</M.Mission>
                      ) : (
                        <M.PlusMission key={mission.id}>
                          {mission.text}
                          <M.DBtn onClick={() => handleMissionDelete(mission.id)}>-</M.DBtn>
                        </M.PlusMission>
                      )
                    )}
                  </M.Missions>
                  <M.MBtn onClick={openModal}>+</M.MBtn>
                </M.MissionList>
                {isModalOpen && <ModalMission onClose={closeModal} selectedCategory={selectedCategory} />}
              </M.MyMission>
            </C.PageSpace>
          </M.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default MyMission;
