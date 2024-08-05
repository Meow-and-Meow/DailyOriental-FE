import styled from "styled-components";

export const Background = styled.div`
    background-color: #28272a;
`;

export const Acupressure = styled.div``;

export const Nav = styled.div``;
export const Selection = styled.div`
    color: #f7db8d;
    font-size: 12px;

    .Top {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .SelectionOption {
        display: flex;
        flex-direction: row;
    }
`;

export const SelectionsBtns = styled.div`
    margin: 15px;
    .scroll {
        max-height: 150px; /* 최대 높이 설정 */
        overflow-y: scroll; /* 스크롤 활성화 */

        box-sizing: border-box;
    }

    /* 스크롤바 전체 */
    .scroll::-webkit-scrollbar {
        width: 11px; /* 스크롤바의 너비 */
    }

    /* 스크롤바의 트랙 (스크롤 가능한 영역) */
    .scroll::-webkit-scrollbar-track {
        background: #f0f0f0; /* 스크롤바 트랙의 배경 색상 */
        border-radius: 10px; /* 스크롤바 트랙의 둥근 모서리 */
    }

    /* 스크롤바의 핸들 (실제 움직이는 바) */
    .scroll::-webkit-scrollbar-thumb {
        background-color: #8a1538; /* 스크롤바 핸들의 기본 색상 */
        border-radius: 10px; /* 스크롤바 핸들의 둥근 모서리 */
        border: 3px solid #f0f0f0; /* 스크롤바 핸들의 테두리 (트랙과의 간격) */
    }

    .scroll::-webkit-scrollbar-thumb:hover {
        background-color: #751229; /* 스크롤바 핸들을 클릭했을 때의 색상 */
    }
`;

export const Show = styled.div``;
export const Btn = styled.div``;
export const Bottom = styled.div`
    display: flex;
    justify-content: center;
`;
