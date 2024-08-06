export const CallGPT = async (inputValue) => {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: inputValue }],
            temperature: 0.5,
            max_tokens: 1000,
        }),
    });
    const responseData = await response.json();
    return responseData;
};
