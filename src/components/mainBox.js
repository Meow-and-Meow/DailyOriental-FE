import React from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/components/MainBoxStyle";

import test from "../img/icon_medicine.png";
import ai from "../img/icon_AIdoctor.png";
import acupressure from "../img/icon_massage.png";
import mission from "../img/icon_gift.png";

function MainBox({ category }) {
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  let title, content, imgSrc;

  switch (category) {
    case "testStart":
      title = `사상체질을 진단해보고\n나에게 딱 맞는 건강관리법을 알아보세요`;
      content = "사상체질 자가진단 하러가기";
      imgSrc = test;
      break;
    case "ai":
      title = `AI 허준 그리고 AI 장금이가\n여러분의 더 나은 삶의 한 방을 알려드립니다`;
      content = "나의 사상체질에 딱 맞는 건강상식 알아보기";
      imgSrc = ai;
      break;
    case "acupressure":
      title = `증상에 맞는 지압점을 확인하고\n꾹꾹 눌러 개선해보세요`;
      content = "손 지압점, 발 지압점 배우러 가기";
      imgSrc = acupressure;
      break;
    case "mission":
      title = `친구들과 함께 미션을 수행하고\n더 나은 삶을 가꿔보세요`;
      content = "건강 습관 만들기 탭에서 다양한 미션 수행하기";
      imgSrc = mission;
      break;
    default:
      title = "";
      content = "";
      imgSrc = "";
  }

  return (
    <M.TipBox onClick={() => handleNavLinkClick(`/${category}`)}>
      <img src={imgSrc} alt={category} />
      <M.Texts>
        <M.Title>{title}</M.Title>
        <M.Content>{content}</M.Content>
      </M.Texts>
    </M.TipBox>
  );
}

export default MainBox;
