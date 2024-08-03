import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
`;

export const Alarm = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 0 0 0 30px;
  background-color: #28272a;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20px;
    padding-left: 1px;
  }
`;
