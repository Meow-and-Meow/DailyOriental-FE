import styled from "styled-components";

export const Background = styled.div`
    background: linear-gradient(to bottom, #cee5db 50%, #f7db8d 50%);
`;

export const Test = styled.div`
    .Navstyle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: calc(100% - 52px);
        padding: 0 26px;
        height: 30px;
        margin: 25px 0;
    }
`;

export const Nav = styled.div``;

export const ImgTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative; /* Ensure it can stack with z-index */
    top: -50px;
    z-index: 2; /* Higher than the Detail box */
`;

export const Detail = styled.div`
    background: #f7db8d;
    border-radius: 30px 30px 0 0;
    position: relative; /* Allows for positioning relative to its normal position */
    top: -80px; /* Moves the element upwards, overlapping the above element */
    z-index: 1; /* Ensures the Detail box is above other content */

    .DetailIntro {
        text-align: center;
        align-items: center;
        margin-bottom: 10%;
        margin: 10px;
        font-size: 11px;
        font-weight: 550;
    }
    .Detailelements {
        padding-right: 30px;
        padding-left: 30px;
        padding-top: 50px;
    }
    .Detailtitle {
        color: #79212f;
        font-size: 20px;
        font-weight: 700;
        margin: 10px;
        font-size: 15px;
    }
    .Deatilinfomation1 {
        margin: 10px;
        font-size: 11px;
        font-weight: 550;
    }
    .Deatilinfomation2 {
        margin: 10px;
        font-size: 11px;
        font-weight: 550;
    }
    .Deatilinfomation3 {
        margin: 10px;
        font-size: 11px;
        font-weight: 550;
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
    font-size: 12px; /* 텍스트 크기 */
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
