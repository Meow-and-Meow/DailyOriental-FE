import styled from "styled-components";

export const Background = styled.div`
    background-color: #f5f5f5;
`;

export const Join = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const title = styled.div`
    display: flex;
`;

export const sub_title = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 280px;
    height: 24px;
    font-weight: 600;
    font-size: 20px;
    line-height: 23.87px;
    color: #28272a;
`;

export const logo_title = styled.div``;

export const login = styled.form`
    display: flex;
    flex-direction: column;
`;

export const login_content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 203px;
    height: 32px;
    box-sizing: border-box;
    border-radius: 20px;
    border: 2px solid #79212f;
    background-color: #f5f5f5;
    padding: 4px 16px;
    margin-top: 15px;
`;

export const label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 24px;
    font-weight: 600;
    font-size: 15px;
    line-height: 17.9px;
    color: #79212f;
`;

export const input = styled.input`
    display: flex;
    text-align: center;
    width: 127px;
    height: 24px;
    box-sizing: border-box;
    border: none;
    background-color: #f5f5f5;
    &::placeholder {
        color: rgb(99, 99, 99, 0.5);
        text-align: center;
        font-weight: 600;
        font-size: 15px;
        line-height: 17.9px;
    }
    color: #28272a;
    font-weight: 600;
    font-size: 15px;
    line-height: 17.9px;
`;

export const btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 203px;
    height: 32px;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #79212f;
    border: none;
    margin-top: 15px;
    font-weight: 600;
    font-size: 12px;
    line-height: 14.32px;
    color: #28272a;
    cursor: pointer;
`;

export const line = styled.div`
    display: flex;
    width: 180px;
    height: 1px;
    background-color: #28272a;
    margin: 24px 0 17px 0;
`;

export const easy_login = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const login_title = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 14.32px;
    color: #28272a;
`;

export const other_func = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 203px;
    height: 24px;
    margin-top: 25px;
`;

export const content = styled.div`
    display: flex;
    font-weight: 600;
    font-size: 12px;
    line-height: 14.32px;
    color: #79212f;
`;

export const content_line = styled.div`
    display: flex;
    font-weight: 600;
    font-size: 12px;
    line-height: 14.32px;
    color: #79212f;
    margin: 0 8px;
`;

export const non_member = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 203px;
    height: 24px;
    margin-top: 15px;
    font-weight: 600;
    font-size: 12px;
    line-height: 14.32px;
    color: #28272a;
`;
