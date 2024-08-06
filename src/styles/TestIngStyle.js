import styled from "styled-components";

export const Background = styled.div`
    background-color: #28272a;
    min-height: 100vh;
`;

export const Test = styled.div`
    padding: 20px;
`;

export const Nav = styled.div``;

export const TestQuestion = styled.div`
    margin: 4%;
    color: #ffffff;
    font-family: "Arial", sans-serif;

    .Qtitle {
        color: #f7db8d;
        font-size: 15px;

        margin-bottom: 10px;
        margin-top: 20px;
    }

    label {
        display: block;
        margin-bottom: 5px;
        font-size: 14px;
        cursor: pointer;
        font-size: 12px;
    }

    input[type="radio"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        border: 2px solid #ccc;
        background-color: #ccc;
        cursor: pointer;
        position: relative;
        margin-right: 5px;
    }

    input[type="radio"]:checked {
        background-color: #ccc;
        border-color: #ccc;
    }

    input[type="radio"]:checked::before {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #751f3f;
        position: absolute;
        top: -0.3px;
        left: -0.3px;
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
