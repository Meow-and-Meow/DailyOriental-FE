import styled from "styled-components";

export const Background = styled.div`
  background-color: #28272a;
`;

export const MyMission = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const CategoryBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  font-size: 11px;
  font-weight: 600;
  line-height: 13.13px;
  color: #f5f5f5;
  cursor: pointer;

  img {
    width: 60px;
  }
`;

export const CategoryTitle = styled.div`
  width: 128px;
  height: 32px;
  border-radius: 20px;
  box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #79212f;
  margin-top: 33px;
  z-index: 20;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: 600;
  line-height: 14.32px;
  color: #f5f5f5;
`;

export const MissionList = styled.div`
  width: 100%;
  min-height: calc(100dvh - 80px - 83px - 33px - 16px);
  margin-top: -16px;
  background-color: #f7db8d;
  border-radius: 20px 20px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Missions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;

  margin-top: 42px;
`;

export const Mission = styled.div`
  width: calc(312px - 52px);
  border-radius: 20px;
  padding: 12px 26px;
  background-color: #f5f5f5;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 13px;
  font-weight: 600;
  line-height: 15.51px;
  color: #28272a;
`;

export const PlusMission = styled.div`
  width: calc(312px - 52px);
  border-radius: 20px;
  padding: 12px 26px;
  background-color: #f5f5f5;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 13px;
  font-weight: 600;
  line-height: 15.51px;
  color: #28272a;
`;

export const DBtn = styled.div`
  width: 20px;
  height: calc(20px - 2px);
  border-radius: 20px;
  cursor: pointer;
  background-color: #79212f;
  margin-right: -13px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 25px;
  font-weight: 400;
  line-height: 30.26px;
  color: #f5f5f5;
  padding-bottom: 2px;
`;

export const MBtn = styled.div`
  width: 40px;
  height: calc(40px - 4px);
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #79212f;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 25px;
  font-weight: 600;
  line-height: 29.83px;
  color: #f5f5f5;
  padding-bottom: 4px;
  margin: 33px 0;
`;
