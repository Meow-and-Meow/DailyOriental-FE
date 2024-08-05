import styled from "styled-components";

export const container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 312px;
    height: 85px;
    margin-top: 32px;
`;

export const title = styled.div`
    display: flex;
    text-align: center;
    justify-content: start;
    margin-left: 8px;
    margin-bottom: 7px;
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 15px;
    line-height: 17.9px;
    color: #f5f5f5;
`;

export const result = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 312px;
    height: 82px;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #f5f5f5;
`;

export const result_img = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 122px;
    height: 44px;
    position: absolute;
    top: 137px;
    margin-left: 189px;
`;

export const result_text = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 312px;
    height: 24px;
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 20px;
    line-height: 23.87px;
    color: #79212f;
`;

export const sub_container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 312px;
    height: 218px;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #f5f5f5;
    padding: 0 13px 0 18px;
`;

export const content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 281px;
    height: 24px;
    margin: 8px 0 8px 0;
`;

export const sub_title = styled.div`
    display: flex;
    text-align: center;
    justify-content: start;
    align-items: center;
    width: 95px;
    height: 24px;
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 15px;
    line-height: 17.9px;
    color: #28272a;
`;

export const text = styled.div`
    display: flex;
    text-align: center;
    justify-content: end;
    align-items: center;
    width: 113px;
    height: 24px;
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 15px;
    line-height: 17.9px;
    color: rgba(121, 33, 47, 0.8);
`;

export const btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 312px;
    height: 36px;
    box-sizing: border-box;
    border-radius: 15px;
    background-color: #f5f5f5;
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 15px;
    line-height: 17.9px;
    color: #79212f;
    cursor: pointer;
`;

export const other_func = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 312px;
    height: 24px;
    color: #f5f5f5;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 12px;
    font-weight: 600;
    line-height: 14.32px;

    margin: 5px 0;
`;
