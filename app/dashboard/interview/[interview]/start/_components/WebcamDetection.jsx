'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import * as faceapi from 'face-api.js';
import Webcam from 'react-webcam';

const WebcamFaceDetection = ({ onViolation }) => {
  const webcamRef = useRef(null);
  const warningCount = useRef(0);

  // ✅ Speak warning
  const speak = useCallback((msg) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(msg);
    synth.speak(utterance);
  }, []);

  // ✅ Load face-api models
  const loadModels = async () => {
    const MODEL_URL = '/models';
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
  };

  useEffect(() => {
    loadModels();

    const interval = setInterval(async () => {
      if (
        webcamRef.current &&
        webcamRef.current.video.readyState === 4
      ) {
        const video = webcamRef.current.video;
        const detections = await faceapi.detectSingleFace(
          video,
          new faceapi.TinyFaceDetectorOptions()
        );

        if (!detections) {
          warningCount.current += 1;

          if (warningCount.current <= 2) {
            speak('Warning! Face not visible properly. Look at the screen.');
          } else {
            onViolation(); 
          }
        } else {
          warningCount.current = 0;
        }
      }
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, [speak, onViolation]);

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden w-[300px] h-[220px] mx-auto my-4">
      <Webcam ref={webcamRef} audio={false} width={300} height={220} />
    </div>
  );
};

export default WebcamFaceDetection;
