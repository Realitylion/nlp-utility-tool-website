import React from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <NavBar />
            <div className="container mx-auto p-4 lg:w-1/2 w-full">
                <h1 className="text-4xl font-bold mb-4">Welcome to the NLP Utility Tool</h1>
                <p className="text-lg mb-6">Choose which NLP models you would like to explore</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <button onClick={() => navigate('/emotion-detection')} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Emotion Detection</button>
                    <button onClick={() => navigate('/text-generation')} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Text Generation</button>
                    <button onClick={() => navigate('/text-summarization')} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Text Summarization</button>
                    <button onClick={() => navigate('/prompt-categorization')} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Prompt Categorization</button>
                    <button onClick={() => navigate('/text-categorization')} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Text Categorization</button>
                    <button onClick={() => navigate('/keyword-identification')} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Keyword Identification</button>
                </div>
            </div>
        </>
    );
};

export default HomePage;