import React, { useState } from 'react';

const ExtractNumbersInput = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    // Function to extract numbers from the input text
    const extractNumbers = (input) => {
        return input.replace(/\D/g, ''); // Replace all non-digit characters with an empty string
    };

    // Handle input change and process the output
    const handleChange = (event) => {
        const input = event.target.value;
        setInputText(input);
        setOutputText(extractNumbers(input));
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h1>Number Extractor</h1>
            <label htmlFor="inputText" style={{ display: 'block', marginBottom: '10px' }}>
                Enter text:
            </label>
            <input
                id="inputText"
                type="text"
                value={inputText}
                onChange={handleChange}
                placeholder="Type something here..."
                style={{
                    padding: '10px',
                    width: '100%',
                    maxWidth: '400px',
                    marginBottom: '20px',
                    fontSize: '16px',
                }}
            />
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                Output (numbers only): <span style={{ color: 'green' }}>{outputText}</span>
            </p>
        </div>
    );
};

export default ExtractNumbersInput;