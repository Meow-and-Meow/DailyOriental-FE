import styled from "styled-components";

export const Background = styled.div`
    background-color: #28272a;
`;

export const AI = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 312px;
    height: 105px;
    border-radius: 20px;
    border: 2px solid #f5f5f5;
    margin-top: 16px;
`;

export const title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 106px;
    height: 24px;
    font-weight: 600;
    font-size: 10px;
    line-height: 11.93px;
    color: #f5f5f5;
    margin-top: -1.6rem;
    box-sizing: borderbox;
    background-color: #28272a;
`;

export const content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 60px;
    height: 60px;
    border-radius: 20px;
    background-color: #f5f5f5;
    border: none;
    margin: 16px 8px 0 8px;
    box-sizing: borderbox;
    font-weight: 600;
    font-size: 12px;
    line-height: 14.32px;
    color: #3a2929;
    background-color: ${(props) => (props.selected ? "#79212f" : "#f5f5f5")};
    color: ${(props) => (props.selected ? "#f5f5f5" : "#3a2929")};
`;

export const search = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 312px;
    height: 32px;
    box-sizing: border-box;
    border-radius: 20px;
    border: 2px solid #f5f5f5;
    padding: 4px 18px;
    margin-top: 36px;
`;

export const search_icon = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 14.32px;
    color: #f5f5f5;
`;

export const input = styled.input`
    display: flex;
    text-align: center;
    width: 241.02px;
    height: 24px;
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    &::placeholder {
        text-align: center;
        font-weight: 600;
        font-size: 12px;
        line-height: 14.32px;
        color: #f5f5f5;
    }
    color: #f5f5f5;
    font-weight: 600;
    font-size: 12px;
    line-height: 14.32px;
    margin-left: 18.04px;
`;

export const tip = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: center;
    box-sizing: border-box;
    width: 190px;
    height: 103px;
    padding: 17px 0;
    position: absolute;
    top: 289px;
    margin-left: -100px;
`;

export const tip_text = styled.div`
    color: #f7db8d;
    font-weight: 600;
    font-size: 10px;
    line-height: 11.93px;
`;

export const answer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    width: 360px;
    height: 70vh;
    margin-top: 77px;
`;

export const doctor = styled.div`
    display: flex;
    width: 53px;
    height: 62px;
    position: absolute;
    margin-left: 15rem;
`;

export const polygon = styled.div`
    display: flex;
    width: 57.05px;
    height: 27.39px;
    position: absolute;
    margin-left: 5rem;
    top: 24.1rem;
`;

export const answer_container = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 100vh;
    box-sizing: border-box;
    border-radius: 20px 20px 0 0;
    background-color: #f5f5f5;
    padding: 17px 15px 0 34px;
    margin-top: 62px;
`;

export const answer_text = styled.div`
    color: rgba(0, 0, 0, 0.25);
    font-weight: 600;
    font-size: 15px;
    line-height: 17.9px;
    padding-right: 27px;
    padding-top: 17px;
    max-height: 340px;
    overflow-y: scroll;


    ::-webkit-scrollbar {
        width: 10px; /* 스크롤바의 너비 */
    }

    ::-webkit-scrollbar-track {
        background: #d9d9d9; /* 스크롤바 트랙의 배경 색상 */
        border-radius: 10px; /* 스크롤바 트랙의 둥근 모서리 */
    }

    }
    ::-webkit-scrollbar-thumb {
        background-color: #79212f; /* 스크롤바 핸들의 기본 색상 */
        border-radius: 10px; /* 스크롤바 핸들의 둥근 모서리 */
        border: 3px solid #d9d9d9; /* 스크롤바 핸들의 테두리 (트랙과의 간격) */
    }

`;
