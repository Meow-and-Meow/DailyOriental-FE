import React from "react";
import { useNavigate } from "react-router-dom";
import * as D from "../styles/components/DropdownItemStyle";

function DropdownItem({ category }) {
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  let title, content;

  switch (category) {
    case "ai":
      title = `AI 허준에게 알림이 왔어요`;
      content = "AI 허준에게 건강 상식 물어보기";
      break;
    case "acupressure":
      title = `두통이 있을 때는 여기를 누르세요`;
      content = "손 지압점 확인하러 가기";
      break;
    case "mission":
      title = `오늘 미션을 확인하지 않았어요`;
      content = "미션 확인하러 가기";
      break;
    default:
      title = "";
      content = "";
  }

  return (
    <>
      <D.DropdownItem onClick={() => handleNavLinkClick(`/${category}`)}>
        <D.Text>
          <D.DropTitle>{title}</D.DropTitle>
          <D.DropLink>{content}</D.DropLink>
        </D.Text>
        <D.Line />
      </D.DropdownItem>
    </>
  );
}

export default DropdownItem;
