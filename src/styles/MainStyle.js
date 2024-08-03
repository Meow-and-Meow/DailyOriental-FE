import styled from "styled-components";

export const Background = styled.div`
  background-color: #28272a;
`;

export const Main = styled.div``;

export const MainY = styled.div`
  width: 100%;
  height: 575px;
  border-radius: 0 0 250px 250px;
  background-color: #f7db8d;
`;

export const Title = styled.div`
  margin: 21px 20px;

  img {
    width: 180px;
  }
`;

export const TitleText = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
  color: #28272a;
  padding-left: 12px;
`;

export const Btns = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 54px;
`;

export const MainBtns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;

  img {
    width: 160px;
  }
`;

export const testBtn = styled.div`
  height: 160px;

  img {
    transition: all 400ms ease-out;
  }
  &:hover img {
    content: url(${require("../img/Arch_test_650x650.png")});
    transition: all 400ms ease-out;
  }
`;

export const massageBtn = styled.div`
  height: 160px;

  img {
    transition: all 400ms ease-out;
  }
  &:hover img {
    content: url(${require("../img/Arch_massage_650x650.png")});
    transition: all 400ms ease-out;
  }
`;

export const aiBtn = styled.div`
  height: 160px;

  img {
    transition: all 400ms ease-out;
  }
  &:hover img {
    content: url(${require("../img/Arch_AI_650x650.png")});
    transition: all 400ms ease-out;
  }
`;

export const missionBtn = styled.div`
  height: 160px;

  img {
    transition: all 400ms ease-out;
  }
  &:hover img {
    content: url(${require("../img/Arch_mission_650x650.png")});
    transition: all 400ms ease-out;
  }
`;

export const MainProfile = styled.div`
  text-align: center;
  margin-top: -212px;

  img {
    width: 95px;
  }
`;

export const MyPage = styled.div`
  text-align: center;
  margin-top: -84px;
  cursor: pointer;

  img {
    width: 70px;
  }
`;

export const Tip = styled.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 17.9px;
  color: #ffffff;
  margin: 0 26px;
  margin-top: 20px;
`;

export const TipBox = styled.div`
  width: calc(100% - 24px);
  height: 75px;
  background-color: #f5f5f5;
  border-radius: 20px;
  margin: 12px;
`;

export const Boxs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const SubBox = styled.div`
  width: calc(50% - 18px - 30px);
  height: calc(75px - 34px);
  padding: 17px 15px;
  background-color: #f5f5f5;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 14.32px;
  color: #28272a;
`;

export const SubText = styled.div`
  font-size: 10px;
  font-weight: 600;
  line-height: 11.93px;
  color: #636363;
`;
