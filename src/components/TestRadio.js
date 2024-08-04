import React from "react";

function TestRadio({ question, options, selectedOption, onOptionChange }) {
    return (
        <div className="CategoryBox">
            <div className="Category">{question}</div>
            <div className="Selections">
                {options.map((option, index) => (
                    <div className="radio" key={index}>
                        <input
                            type="radio"
                            name={question}
                            id={`${question}${index}`}
                            value={option.value}
                            checked={selectedOption === option.value}
                            onChange={(e) => onOptionChange(e.target.value)}
                        />
                        <label htmlFor={`${question}${index}`}>
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TestRadio;
