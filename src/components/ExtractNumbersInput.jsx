import React, { useState } from 'react';

const ExtractNumbersInput = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [trimmedOutput, setTrimmedOutput] = useState('');
    const [withDash, setWithDash] = useState('');

    // Function to extract only letters and digits from the input text
    const extractNumbers = (input) => {
        return input.replace(/[^a-zA-Z0-9]/g, ''); 
    };

    // Function to remove first 2 characters and the last character
    const removeFirstTwoAndLast = (text) => {
        if (text.length <= 3) return '';
        return text.substring(2, text.length - 1);
    };

    // Function to remove last 2 characters and add "-" at the beginning
    const removeLastTwoAndAddDash = (text) => {
        if (text.length <= 2) return '';
        return '-' + text.substring(0, text.length - 2);
    };

    const handleChange = (event) => {
        const input = event.target.value;
        const extracted = extractNumbers(input);
        setInputText(input);
        setOutputText(extracted);
        setTrimmedOutput(removeFirstTwoAndLast(extracted));
        setWithDash(removeLastTwoAndAddDash(extracted));
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <input
                id="inputText"
                type="text"
                value={inputText}
                onChange={handleChange}
                placeholder="Pegar tx" 
            />
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                Brasil : <span style={{ color: 'green' }}>{outputText}</span>
            </p>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                Extractor DNI: <span style={{ color: 'blue' }}>{trimmedOutput}</span>
            </p>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                Conciliaciones: <span style={{ color: 'purple' }}>{withDash}</span>
            </p>
        </div>
    );
};

export default ExtractNumbersInput;