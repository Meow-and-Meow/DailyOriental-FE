import styled from "styled-components";

export const TipBox = styled.div`
  width: calc(100% - 24px - 40px);
  height: calc(75px - 20px);
  background-color: #f5f5f5;
  border-radius: 20px;
  margin: 12px;

  padding: 10px 20px;

  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;

  img {
    width: 50px;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Title = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: #28272a;
  white-space: pre-line;
`;

export const Content = styled.div`
  font-size: 10px;
  font-weight: 600;
  line-height: 11.93px;
  color: #636363;
`;
