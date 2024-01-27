import React from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { AudioRecorder } from 'react-audio-voice-recorder';
import NavbarMo from '../components/NavbarMo';

const Test = () => {

    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement('audio');
        audio.src = url;
        audio.controls = true;
        document.body.appendChild(audio);
    };


    const handleClick = async () => {
        const genAI = new GoogleGenerativeAI("AIzaSyA5pe423GwkXbEUI2v7Nr7yBbDnqgAZ2Qg");
        const generationConfig = {
            temperature: 0.9,
            topK: 1,
            topP: 1,
            maxOutputTokens: 2048,
        };

        // ...

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const parts = [
            { text: "how should one behave in front of parents give answer in 100 words" },
        ];

        const result = await model.generateContent({

            contents: [{ role: "user", parts }],
            generationConfig,

        });

        const response = result.response;
        console.log(response.text());



    }
    const handleFetchUser = () => {

    }

    return (
        // <div>
        //     <AudioRecorder
        //         onRecordingComplete={addAudioElement}
        //         audioTrackConstraints={{
        //             noiseSuppression: true,
        //             echoCancellation: true,
        //             // autoGainControl,
        //             // channelCount,
        //             // deviceId,
        //             // groupId,
        //             // sampleRate,
        //             // sampleSize,
        //         }}
        //         onNotAllowedOrFound={(err) => console.table(err)}
        //         downloadOnSavePress={true}
        //         downloadFileExtension="webm"
        //         mediaRecorderOptions={{
        //             audioBitsPerSecond: 128000,
        //         }}
        //     // showVisualizer={true}
        //     />
        //     <br />
        // </div>
        <div>
            <NavbarMo/>
        </div>
    )
}

export default Test