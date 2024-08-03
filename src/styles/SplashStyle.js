import styled, { keyframes } from "styled-components";

export const Background = styled.div`
    background-color: #28272a;
`;

export const Splash = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const moveTop = (y, translateY) => keyframes`
0% {
        transform: translateY(${y}px);
    }
    50% {
        transform: translateY(${translateY}px);
    }
    100% {
        transform: translateY(${y}px);
    }
`;

export const logo = styled.div`
    width: 160px;
    height: 160px;
    z-index: 4;
    position: absolute;
    display: flex;
    justisfy-content: center;
    animation: ${moveTop(320, 278)} 1s ease-in-out forwards;
`;
