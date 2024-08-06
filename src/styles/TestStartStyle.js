import styled from "styled-components";

export const Background = styled.div`
    background-color: #28272a;
`;

export const Test = styled.div``;

export const Nav = styled.div``;

export const Adver = styled.div`
    .AdvText {
        display: flex;
        justify-content: center;
        color: #f7db8d;
        text-align: center;
        margin-top: 10%;
        font-size: 12px;
        font-family: "NanumMyeongjo"; /* 폰트 적용 */
    }
`;
export const InfoDetail = styled.div`
    margin: 20px;
    margin-top: 10%;
    .InfoTitle {
        display: flex;
        color: white;
        font-size: 15px;
        margin: 13px;
    }
    .InfoBox {
        background-color: white;
        border: none;
        border-radius: 20px;
        padding: 10px 20px;
        margin: 10px;
        font-size: 12px;
    }
`;
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
`;
export const Button = styled.div`
    background-color: #751f3f; /* 버튼 배경 색상 */
    color: white; /* 텍스트 색상 */
    border: none; /* 테두리 없음 */
    border-radius: 30px; /* 모서리 둥글게 */
    padding: 10px 20px; /* 내부 여백 */
    font-size: 16px; /* 텍스트 크기 */
    cursor: pointer; /* 마우스 오버 시 포인터 커서 */
    width: 200px; /* 버튼의 너비 */
    display: flex; /* 내용물 정렬을 위한 flexbox 사용 */
    justify-content: center; /* 가로 방향 가운데 정렬 */
    align-items: center; /* 세로 방향 가운데 정렬 */
    margin-bottom: 10px; /* 버튼 간 간격 */

    &:hover {
        background-color: #6a1b3a; /* 호버 시 약간 어두운 색상 */
    }
`;
