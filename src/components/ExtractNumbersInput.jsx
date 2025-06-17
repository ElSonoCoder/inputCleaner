import React, { useState } from 'react';

const ExtractNumbersInput = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    // Function to extract numbers from the input text
    const extractNumbers = (input) => {
        return input.replace(/[^a-zA-Z0-9]/g, ''); // Replace all non-digit characters with an empty string
    };

    // Handle input change and process the output
    const handleChange = (event) => {
        const input = event.target.value;
        setInputText(input);
        setOutputText(extractNumbers(input));
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
                Solo dígitos: <span style={{ color: 'green' }}>{outputText}</span>
            </p>
        </div>
    );
};

export default ExtractNumbersInput;