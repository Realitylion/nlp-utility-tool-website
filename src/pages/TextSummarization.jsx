import React, { useState } from 'react';

import NavBar from '../components/NavBar';

const TextSummarization = () => {
    const [modelName, setModelName] = useState('bert_summarization_model');
    const [inputText, setInputText] = useState('');
    const [numSentences, setnumSentences] = useState(3);
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = {
                data: {
                    text: inputText,
                    num_sentences: parseInt(numSentences, 10)
                }
            };
            console.log(body);
            // Make an API request to save the session data
            const response = await fetch("http://127.0.0.1:5000/text/textSummarization", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
    
            // Handle the response from the server
            if (response.ok) {
                const data = await response.json();
                console.log('Response:', data);
                setResponse(data);
            } else {
                console.error('Error in response', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };
    

    return (
        <>
            <NavBar />
            <div className="container mx-auto p-4 lg:w-1/2 w-full">
                <h1 className="text-2xl font-bold mb-4">Emotion Detection</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Model Name:</label>
                        <select
                            value={modelName}
                            onChange={(e) => setModelName(e.target.value)}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="bert_summarization_model">BERT summarization model</option>
                            {/* Add more models here if needed */}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Input Text:</label>
                        <textarea
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Number of sentences:</label>
                        <input
                            type="number"
                            value={numSentences}
                            min="1"
                            onChange={(e) => setnumSentences(e.target.value)}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </form>
                {response && (
                    <div className="mt-6 p-4 border border-gray-300 rounded-md">
                        <h2 className="text-xl font-bold mb-2">Response</h2>
                        <p><strong>Summarized Text:</strong> {response.result}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default TextSummarization;