import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  min-height: calc(100dvh - 80px - 19.5px);
  margin-top: -19.5px;
  background-color: #f7db8d;
  border-radius: 20px 20px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Time = styled.div`
  margin-top: 42px;
  display: flex;
  align-items: flex-end;
  gap: 7px;

  font-size: 12px;
  font-weight: 600;
  line-height: 14.32px;
  color: #28272a;
`;

export const Small1 = styled.div`
  padding-bottom: 5px;
  width: 45px;
  text-align: right;
`;

export const Small2 = styled.div`
  padding-bottom: 5px;
  width: 45px;
`;

export const Big = styled.div`
  font-size: 28px;
  font-weight: 600;
  line-height: 33.41px;
  width: 210px;
  text-align: center;
`;

export const Btns = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 22px;
`;

export const MainBtns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;

  img {
    width: 160px;
  }
`;

export const moodBtn = styled.div`
  height: 160px;
`;

export const exerciseBtn = styled.div`
  height: 160px;
`;

export const happinessBtn = styled.div`
  height: 160px;
`;

export const dietBtn = styled.div`
  height: 160px;
`;

export const BtnText = styled.div`
  position: relative;
  z-index: 20;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.32px;
  text-align: center;

  width: 50px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 표시할 줄 수를 변경할 수 있습니다 */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  margin-top: -50%;
  margin-left: 30%;
`;

export const BtnText2 = styled.div`
  position: relative;
  z-index: 20;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.32px;
  text-align: center;

  width: 50px;
  height: 30px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 표시할 줄 수를 변경할 수 있습니다 */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  margin-top: -55%;
  margin-left: 40%;
`;

export const BtnText3 = styled.div`
  position: relative;
  z-index: 20;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.32px;
  text-align: center;

  width: 50px;
  height: 30px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 표시할 줄 수를 변경할 수 있습니다 */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  margin-top: -55%;
  margin-left: 30%;
`;

export const ToList = styled.div`
  text-align: center;
  margin-top: -211px;
  cursor: pointer;

  img {
    width: 100px;
    padding-left: 4px;
  }
`;

export const DateBtn = styled.div`
  margin-top: calc(211px - 90px + 12px);

  width: 128px;
  height: 32px;
  border-radius: 20px;
  background-color: #79212f;
  box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: 600;
  line-height: 14.32px;
  color: #f5f5f5;
`;

export const DateList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 20px;

  img {
    width: 30px;
  }
`;

export const CalenderSpace = styled.div`
  width: 100%;
  border-radius: 20px 20px 0 0;
  background-color: #f5f5f5;
  margin-top: 14px;
`;
