import React, { useState } from "react";

const SelectableButton = ({ label, onClick, isSelected }) => {
    const handleButtonClick = () => {
        onClick(label); // 클릭 시 부모 컴포넌트에 선택된 버튼 정보 전달
    };

    return (
        <button
            onClick={handleButtonClick}
            style={{
                backgroundColor: isSelected ? "#79212F" : "#FFFFFF", // 선택되었을 때 색상 변경
                color: isSelected ? "#FFFFFF" : "#79212F", // 선택된 버튼의 텍스트 색상 변경
                border: "1px solid #79212F",
                borderRadius: "20px",
                width: "90px",
                height: "40px",
                margin: "3px",

                cursor: "pointer",
                fontSize: "11px",
                fontWeight: "bold",
                textAlign: "center", // 텍스트 가운데 정렬
                lineHeight: "normal", // 텍스트 줄간격 조정
            }}
        >
            {label}
        </button>
    );
};

export default SelectableButton;
