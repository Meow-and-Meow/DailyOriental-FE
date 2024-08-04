import styled from "styled-components";

export const Background = styled.div`
    background-color: #28272a;
`;

export const SignUp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const sub_background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 360px;
    height: 100vh;
    background-color: #f5f5f5;
    border-radius: 15rem 0 0 0;
    box-shadow: inset 7px -8px 4px rgba(0, 0, 0, 0.15);
    position: absolute;
    top: 0;
`;

export const title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    margin-top: 46px;
`;

export const logo_title = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 280px;
    height: 42px;
`;

export const sub_title = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 280px;
    height: 24px;
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 20px;
    line-height: 23.87px;
    color: #28272a;
    margin-right: 15px;
`;

export const signup = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const label = styled.label`
    display: flex;
    width: 64px;
    height: 24px;
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 15px;
    line-height: 17.9px;
    color: #28272a;
`;

export const input = styled.input`
    display: flex;
    text-align: center;
    width: 203px;
    height: 32px;
    box-sizing: border-box;
    border-radius: 20px;
    border: 2px solid #79212f;
    background-color: #f5f5f5;
    padding: 4px 16px;
    margin-bottom: 15px;
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 12px;
    line-height: 14.32px;
    &::placeholder {
        color: rgb(99, 99, 99, 0.5);
        font-family: "Pretendard";
        text-align: center;
        font-weight: 600;
        font-size: 12px;
        line-height: 14.32px;
    }
`;

export const gender = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 203px;
    margin-bottom: 15px;
`;

export const gender_btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 97px;
    height: 32px;
    box-sizing: border-box;
    border-radius: 20px;
    border: 2px solid #79212f;
    background-color: #f5f5f5;
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 12px;
    line-height: 14.32px;
    color: #28272a;
`;

export const select = styled.select`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 203px;
    height: 32px;
    box-sizing: border-box;
    border-radius: 20px;
    border: 2px solid #79212f;
    background-color: #f5f5f5;
    margin-bottom: 15px;
`;

export const option = styled.option`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 203px;
    height: 214px;
    box-sizing: border-box;
    border-radius: 20px;
    border: 2px solid #79212f;
    background-color: #f5f5f5;
`;

export const btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 123px;
    height: 32px;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #79212f;
    border: none;
    margin-top: 85px;
    margin-left: 143.5px;
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 12px;
    line-height: 14.32px;
    color: #f5f5f5;
    cursor: pointer;
`;
