import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const Docs = () => {
    const [selectedOption, setSelectedOption] = useState('emotionDetection');

    const EmotionDetection = () => {
        return (
            <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Emotion Detection API</h2>
            <p className="mb-4">To make a POST request to the Emotion Detection API, follow the instructions below:</p>
            <h3 className="text-xl font-semibold mb-2">Endpoint</h3>
            <p className="mb-4"><code className="bg-gray-200 p-1 rounded">POST /predict/emotionDetection</code></p>
            <h3 className="text-xl font-semibold mb-2">Request Body</h3>
            <p className="mb-4">The request body should be a JSON object with the following structure:</p>
            <pre className="bg-gray-100 p-4 rounded mb-4">
                <code>
{`{
    "model_name": "model_name_here",
    "data": {
        "text": "Your text here",
        "confidenceThreshold": [60-100]
    }
}`}
                </code>
            </pre>
            <h3 className="text-xl font-semibold mb-2">Example Request</h3>
            <pre className="bg-gray-100 p-4 rounded mb-4">
                <code>
{`fetch('/predict/emotionDetection', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "model_name": "bert_emotion_model",
        "data": {
            "text": "i want to eat something",
            "confidenceThreshold": 60
        }
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}
                </code>
            </pre>
            <h3 className="text-xl font-semibold mb-2">Response Structure</h3>
            <p className="mb-4">The response will be a JSON object with the following structure:</p>
            <pre className="bg-gray-100 p-4 rounded mb-4">
                <code>
{`{
    "data": "Your input text here",
    "result": {
        "confidence": "Confidence score here",
        "emotion": "Detected emotion here"
    }
}`}
                </code>
            </pre>
            <h3 className="text-xl font-semibold mb-2">Example Response</h3>
            <pre className="bg-gray-100 p-4 rounded mb-4">
                <code>
{`{
  "data": "I am feeling great today!",
  "result": {
    "confidence": "99.91062",
    "emotion": "joy"
  }
}`}
                </code>
            </pre>
            <h3 className="text-xl font-semibold mb-2">Emotions</h3>
            <p className="mb-4">The possible emotions that can be detected are:</p>
            <ul className="list-disc list-inside mb-4">
                <li>joy</li>
                <li>sadness</li>
                <li>fear</li>
                <li>anger</li>
                <li>disgust</li>
                <li>surprise</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Confidence Threshold</h3>
            <p className="mb-4">The confidence threshold is a number between 60 and 100 that determines the minimum confidence score required for an emotion to be detected. If the confidence score is below the threshold, the API will return the predicted emotion as "neutral", with a negative confidence score.</p>
            <pre className="bg-gray-100 p-4 rounded mb-4">
                <code>
{`{
  "data": "The sun rises in the East",
  "result": {
    "confidence": "-61.454693",
    "emotion": "neutral"
  }
}`}
                </code>
            </pre>
            <h3 className="text-xl font-semibold mb-2">Example Code</h3>
            <p className="mb-4">Here is an example of how you can use the Emotion Detection API in a React component:</p>
            <pre className="bg-gray-100 p-4 rounded mb-4">
                <code>
{`import React, { useState } from 'react';

const EmotionDetectionInstructions = () => {
    const [text, setText] = useState('');
    const [emotion, setEmotion] = useState('');

    const detectEmotion = () => {
    fetch('/predict/emotionDetection', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        text
        })
    })
    .then(response => response.json())
    .then(data => setEmotion(data.emotion))
    .catch(error => console.error('Error:', error));
    };

    return (
    <div>
        <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="border p-2 mb-4 w-full"
        />
        <button onClick={detectEmotion} className="bg-blue-500 text-white p-2 rounded">Detect Emotion</button>
        {emotion && <p className="mt-4">Detected Emotion: {emotion}</p>}
    </div>
    );
};

export default EmotionDetectionInstructions;`}
                </code>
            </pre>
            </div>
        )
    }

    const TextSummarization = () => {
        return (
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Text Summarization API</h2>
                <p className="mb-4">To make a POST request to the Text Summarization API, follow the instructions below:</p>
                <h3 className="text-xl font-semibold mb-2">Endpoint</h3>
                <p className="mb-4"><code className="bg-gray-200 p-1 rounded break-all">POST /text/textSummarization</code></p>
                <h3 className="text-xl font-semibold mb-2">Request Body</h3>
                <p className="mb-4">The request body should be a JSON object with the following structure:</p>
                <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
                    <code>
{`{
    "data": {
        "text": "Your text here",
        "num_sentences": 7
    }
}`}
                    </code>
                </pre>
                <h3 className="text-xl font-semibold mb-2">Example Request</h3>
                <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
                    <code>
{`fetch('/text/textSummarization', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "data": {
            "text": "Life is a journey filled with unexpected twists and turns, each moment offering a lesson to learn. The sunrise paints the sky with hues of gold, reminding us of the beauty in beginnings. Every step we take is a chance to grow, to discover new strengths hidden within. Challenges may cast shadows over our path, but they also shape us into resilient individuals. A kind word or a helping hand can create ripples of positivity that extend far beyond what we can see. Dreams whisper to us in quiet moments, urging us to chase them with passion and courage. The laughter of loved ones fills our hearts with warmth, anchoring us in the chaos of life. Nature, in its quiet splendor, teaches us patience and the art of renewal. Time, relentless and swift, moves forward, urging us to savor the present. And in the end, it is the memories we create, the lives we touch, and the love we share that truly define our journey.",
            "num_sentences": 7
        }
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}
                    </code>
                </pre>
                <h3 className="text-xl font-semibold mb-2">Response Structure</h3>
                <p className="mb-4">The response will be a JSON object with the following structure:</p>
                <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
                    <code>
{`{
    "data": "Your input text here",
    "result": "Summarized text here"
}`}
                    </code>
                </pre>
                <h3 className="text-xl font-semibold mb-2">Example Response</h3>
                <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
                    <code>
{`{
    "data": "Life is a journey filled with unexpected twists and turns, each moment offering a lesson to learn. The sunrise paints the sky with hues of gold, reminding us of the beauty in beginnings. Every step we take is a chance to grow, to discover new strengths hidden within. Challenges may cast shadows over our path, but they also shape us into resilient individuals. A kind word or a helping hand can create ripples of positivity that extend far beyond what we can see. Dreams whisper to us in quiet moments, urging us to chase them with passion and courage. The laughter of loved ones fills our hearts with warmth, anchoring us in the chaos of life. Nature, in its quiet splendor, teaches us patience and the art of renewal. Time, relentless and swift, moves forward, urging us to savor the present. And in the end, it is the memories we create, the lives we touch, and the love we share that truly define our journey.",
    "result": "Life is a journey filled with unexpected twists and turns, each moment offering a lesson to learn. And in the end, it is the memories we create, the lives we touch, and the love we share that truly define our journey. A kind word or a helping hand can create ripples of positivity that extend far beyond what we can see. Dreams whisper to us in quiet moments, urging us to chase them with passion and courage. The laughter of loved ones fills our hearts with warmth, anchoring us in the chaos of life. Time, relentless and swift, moves forward, urging us to savor the present. The sunrise paints the sky with hues of gold, reminding us of the beauty in beginnings."
}`}
                    </code>
                </pre>
            </div>
        );
    };

    const renderContent = () => {
        switch (selectedOption) {
            case 'emotionDetection':
                return  <EmotionDetection />;
            case 'textGeneration':
                return <div>Text Generation API: Placeholder content</div>;
            case 'textSummarization':
                return <TextSummarization />;
            case 'promptClassification':
                return <div>Prompt Classification API: Placeholder content</div>;
            case 'textClassification':
                return <div>Text Classification API: Placeholder content</div>;
            case 'keywordExtraction':
                return <div>Keyword Extraction API: Placeholder content</div>;
            default:
                return <div>Select an option from the sidebar</div>;
        }
    };

    return (
        <>
            <NavBar />
            <div className="flex">
                <div className="w-64 border-r border-gray-300 p-4 bg-gray-100 h-screen fixed">
                    <ul className="list-none p-0">
                        <li className={`cursor-pointer p-2 hover:bg-gray-200 ${selectedOption === 'emotionDetection' ? 'bg-gray-300' : ''}`} onClick={() => setSelectedOption('emotionDetection')}>Emotion Detection</li>
                        <li className={`cursor-pointer p-2 hover:bg-gray-200 ${selectedOption === 'textGeneration' ? 'bg-gray-300' : ''}`} onClick={() => setSelectedOption('textGeneration')}>Text Generation</li>
                        <li className={`cursor-pointer p-2 hover:bg-gray-200 ${selectedOption === 'textSummarization' ? 'bg-gray-300' : ''}`} onClick={() => setSelectedOption('textSummarization')}>Text Summarization</li>
                        <li className={`cursor-pointer p-2 hover:bg-gray-200 ${selectedOption === 'promptClassification' ? 'bg-gray-300' : ''}`} onClick={() => setSelectedOption('promptClassification')}>Prompt Classification</li>
                        <li className={`cursor-pointer p-2 hover:bg-gray-200 ${selectedOption === 'textClassification' ? 'bg-gray-300' : ''}`} onClick={() => setSelectedOption('textClassification')}>Text Classification</li>
                        <li className={`cursor-pointer p-2 hover:bg-gray-200 ${selectedOption === 'keywordExtraction' ? 'bg-gray-300' : ''}`} onClick={() => setSelectedOption('keywordExtraction')}>Keyword Extraction</li>
                    </ul>
                </div>
                <div className="p-4 flex-1 ml-64 overflow-y-auto" style={{ height: 'calc(100vh - 64px)' }}>
                    {renderContent()}
                </div>
            </div>
        </>
    );
};

export default Docs;