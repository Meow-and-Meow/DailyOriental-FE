import styled from "styled-components";

export const ModalWrap = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 350px;
  height: 227px;
  z-index: 2;
  background-color: #28272a;
`;

export const ModalSpace = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
`;

export const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 75px;
  margin-top: 25px;

  img {
    width: 15px;
    cursor: pointer;
  }
`;

export const Empty = styled.div`
  width: 15px;
`;

export const ModalText = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 16.71px;
  text-align: center;
  color: #f5f5f5;
`;

export const Field = styled.textarea`
  width: calc(292px - 24px);
  height: calc(100px - 30px);
  border-radius: 20px;
  border: 2px solid #f5f5f5;
  background-color: #28272a;
  outline: none;
  resize: none;
  margin-top: 20px;
  padding: 15px 12px;

  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  line-height: 16.71px;
  color: #f5f5f5;
`;

export const CloseBtn = styled.div`
  margin-top: 10px;
  width: 93px;
  height: 36px;
  border-radius: 15px;
  color: #f5f5f5;
  cursor: pointer;

  font-size: 12px;
  font-weight: 600;
  line-height: 14.32px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 300ms ease-out;

  &:hover {
    background-color: #f5f5f5;
    color: #79212f;
    transition: all 300ms ease-out;
  }
`;
