import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(100vh);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
`;

export const ModalWrap = styled.div`
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 250px;
    height: 120px;
    z-index: 2;
    background-color: #28272a;
    animation: ${(props) => (props.$isModalVisible2 ? slideUp : slideDown)} 0.4s ease-in-out;
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

export const ModalText = styled.div`
    font-size: 12px;
    font-weight: 600;
    line-height: 14.32px;
    text-align: center;
    margin-top: 25px;
    color: #f5f5f5;
    white-space: pre-line;
`;

export const Close = styled.div`
    display: flex;
    flex-direction: row;
`;

export const CloseBtn = styled.div`
    margin-top: 20px;
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
