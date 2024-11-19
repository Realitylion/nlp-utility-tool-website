import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const KeywordExtraction = () => {
    const [text, setText] = useState('');
    const [keywords, setKeywords] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const body = {
            data: {
                text: text
            }
        };
        console.log(body);
        const response = await fetch("http://127.0.0.1:5000/noun/nounExtraction", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
        if (response.ok) {
            const data = await response.json();
            console.log('Response:', data);
            setKeywords(data.result);
            console.log('Response:', data);
        } else {
            console.error('Error in response', response.statusText);
        }
    };

    return (
        <>
            <NavBar />
            <div className="container mx-auto p-4 lg:w-1/2">
                <h1 className="text-2xl font-bold mb-4">Keyword Extraction</h1>
                <form onSubmit={handleSubmit} className="mb-4">
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text here"
                        rows="10"
                        cols="50"
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                    />
                    <br />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Extract Keywords
                    </button>
                </form>
                {keywords.length > 0 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Extracted Keywords:</h2>
                        <ul className="list-disc list-inside">
                            {keywords.map((keyword, index) => (
                                <li key={index} className="mb-1">{keyword}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default KeywordExtraction;