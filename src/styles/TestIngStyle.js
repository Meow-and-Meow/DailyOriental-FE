import styled from "styled-components";

export const Background = styled.div`
    background-color: #28272a;
`;

export const Test = styled.div``;

export const Nav = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .Title {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .TopTitle {
        color: #ffffff;
        font-size: 15px;
    }
    .TitleInfo {
        color: #f7db8d;
        font-size: 9px;
    }
`;

export const Adver = styled.div`
    .AdvText {
        display: flex;
        justify-content: center;
        color: #f7db8d;
        text-align: center;
        margin-top: 10%;
        fo2746nt-size: 12px;
    }
`;
export const TestQuestion = styled.div`

    display: flex;
    margin:13%;
    flex-direction:column;
    

    .Category{
        color: #F7DB8D;
        font-size:15px;
    }
    .Selections{
        margin: 5px;
    margin-top: 10px;
     margin-bottom: 20px;
    }
    .radio {
        display: flex;
        align-items: center;
        margin-bottom: 4px;
        
    }

    .radio input[type="radio"] {
        display: none; /* 기본 라디오 버튼 숨기기 */
    }

    .radio label {
        position: relative;
        padding-left: 25px;
        cursor: pointer;
        font-size: 11px;
        color: #ffffff; /* 텍스트 색상 */
    }

    .radio label:before {
        content: "";
        position: absolute;
        left: 4px;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
        border: 2px solid #ffffff;
        border-radius: 50%;
        background:#ffffff;
    }

    .radio input[type="radio"]:checked + label:before {
        background:#ffffff /* 선택된 상태의 배경색 */
        border-color: #ffffff;
    }

    .radio input[type="radio"]:checked + label:after {
        content: "";
        position: absolute;
        left: 6px;
        top: 50%;
        transform: translateY(-50%);
        width:6px;
        height: 6px;
        border-radius: 50%;
        background: #6a1b3a;
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
