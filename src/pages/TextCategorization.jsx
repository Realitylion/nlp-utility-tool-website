import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const TextCategorization = () => {
    const [model, setModel] = useState('lstm_sentiment_classifier');
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            model_name: model,
            data: {
                text: text
            }
        };
        console.log(body);
        const response = await fetch("http://127.0.0.1:5000/predict/sentimentAnalysis", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        setResult(response.result);
        if (response.ok) {
            const data = await response.json();
            console.log('Response:', data);
            setResult(data.result);
        } else {
            setResult("Profanity detected in the input text. Please try again with a different input.");
            console.error('Error in response', response.statusText);
        }
    };

    return (
        <>
            <NavBar />
            <div className="max-w-lg mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Text Categorization</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="model" className="block text-sm font-medium text-gray-700">Model:</label>
                        <select
                            id="model"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="lstm_sentiment_classifier">LSTM Sentiment Classifier</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">Text:</label>
                        <input
                            type="text"
                            id="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </form>
                {result && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        <h2 className="text-xl font-semibold">Result:</h2>
                        <p>{result}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default TextCategorization;