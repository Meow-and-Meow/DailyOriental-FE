import styled from "styled-components";

export const Background = styled.div`
    background-color: #28272a;
    min-height: 100vh;
`;

export const Test = styled.div`
    padding: 20px;
`;

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

export const TestQuestion = styled.div`
    margin: 4%;
    color: #ffffff;
    font-family: "Arial", sans-serif;

    h3 {
        color: #f7db8d;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    label {
        display: block;
        margin-bottom: 10px;
        font-size: 14px;
        cursor: pointer;
    }

    input[type="radio"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #ccc;
        background-color: #ccc;
        cursor: pointer;
        position: relative;
        margin-right: 10px;
    }

    input[type="radio"]:checked {
        background-color: #ccc;
        border-color: #ccc;
    }

    input[type="radio"]:checked::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #751f3f;
        position: absolute;
        top: 3px;
        left: 3px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
`;

export const Button = styled.div`
    background-color: #751f3f;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    &:hover {
        background-color: #6a1b3a;
    }
`;
