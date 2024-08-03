import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 52px);
  padding: 0 26px;
  height: 30px;
  margin: 25px 0;
`;

export const Arrow = styled.div`
  width: 12px;
  cursor: pointer;
`;

export const ArrowSpace = styled.div`
  width: 12px;
  height: 100%;
`;

export const TitleImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;

  img {
    width: 30px;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  text-align: center;
`;

export const MainTitle = styled.div`
  font-size: 15px;
  line-height: 17.9px;
  color: #ffffff;
`;

export const SubTitle = styled.div`
  font-size: 9px;
  line-height: 10.74px;
  color: #f7db8d;
  margin-top: 2px;
`;

export const SubName = styled.div`
  font-size: 9px;
  line-height: 10.74px;
  color: #ffffff;
  margin-top: 2px;
  text-align: left;
`;
