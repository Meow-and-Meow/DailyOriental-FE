import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../styles/CommonStyle";
import * as M from "../styles/MainStyle";

import HeaderAlarm from "../components/headerAlarm";
import MainBox from "../components/mainBox";
import ModalLink from "../components/modalLink";
import titleImg from "../img/title.png";
import testBtn from "../img/Arch_test_btn_650x650.png";
import massageBtn from "../img/Arch_massage_btn_650x650.png";
import aiBtn from "../img/Arch_AI_btn_650x650.png";
import missionBtn from "../img/Arch_mission_btn_650x650.png";
import ring from "../img/ring.png";
import profile from "../img/profile.png";

function Main() {
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [category, setCategory] = useState("testStart");

  const openModal = () => {
    // 클립보드에 링크 복사
    navigator.clipboard.writeText("https://dailyoriental.netlify.app/");

    setIsModalOpen(true);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 400); // 400ms 후에 모달 상태를 false로 설정
  };

  const categories = ["testStart", "ai", "acupressure", "mission"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCategory((prevCategory) => {
        const currentIndex = categories.indexOf(prevCategory);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <C.Page>
        <C.Center>
          <M.Background>
            <C.PageSpace>
              <M.Main>
                <M.MainY>
                  <HeaderAlarm />
                  <M.Title>
                    <img src={titleImg} alt="매일한방" />
                    <M.TitleText>더 나은 삶을 위한 한 방, 매일 한방</M.TitleText>
                  </M.Title>
                  <M.Btns>
                    <M.MainBtns>
                      <M.testBtn onClick={() => handleNavLinkClick("/testStart")}>
                        <img src={testBtn} alt="자가진단" />
                      </M.testBtn>
                      <M.massageBtn onClick={() => handleNavLinkClick("/acupressure")}>
                        <img src={massageBtn} alt="지압점" />
                      </M.massageBtn>
                      <M.aiBtn onClick={() => handleNavLinkClick("/ai")}>
                        <img src={aiBtn} alt="AI 건강상식" />
                      </M.aiBtn>
                      <M.missionBtn onClick={() => handleNavLinkClick("/mission")}>
                        <img src={missionBtn} alt="건강습관" />
                      </M.missionBtn>
                    </M.MainBtns>
                  </M.Btns>
                  <M.MainProfile>
                    <img src={ring} alt="프로필" />
                  </M.MainProfile>
                  <M.MyPage onClick={() => handleNavLinkClick("/mypage")}>
                    <img src={profile} alt="마이페이지" />
                  </M.MyPage>
                </M.MainY>
                <M.Tip>Tip</M.Tip>
                <MainBox category={category} />
                <M.Boxs>
                  <M.SubBox onClick={() => handleNavLinkClick("/mission")}>
                    <M.SubTitle>오늘의 미션 확인하기</M.SubTitle>
                    <M.SubText>건강한 삶을 위한 건강한 한방</M.SubText>
                  </M.SubBox>
                  <M.SubBox onClick={openModal}>
                    <M.SubTitle>친구와 함께 매일 한방</M.SubTitle>
                    <M.SubText>매일 한방 공유하기</M.SubText>
                  </M.SubBox>
                </M.Boxs>
                {isModalOpen && <ModalLink onClose={closeModal} isModalVisible={isModalVisible} />}
              </M.Main>
            </C.PageSpace>
          </M.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Main;
