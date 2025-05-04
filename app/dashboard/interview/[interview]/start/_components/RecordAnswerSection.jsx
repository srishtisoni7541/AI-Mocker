

'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Webcam from 'react-webcam'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { Mic } from 'lucide-react'

const RecordAnswerSection = () => {
  const [userAnswer,setUserAnswer]=useState("");
  const {
    transcript,
    listening,
    resetTranscript,
    results,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()
  const saveUserAnswer=()=>{
    if(isRecording){
      handleStop();
      if(userAnswer?.length<10){
        return ;
      }
    }
    else{
      handleStart();
    }
  }

  const [isRecording, setIsRecording] = useState(false); // State to manage recording status

  // console.log(transcript);
  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition.</span>
  }

  const handleStart = () => {
    console.log('Start clicked')
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-IN',
    })
    setIsRecording(true); // Set isRecording to true when recording starts
  }

  const handleStop = () => {
    console.log('Stop clicked')
    SpeechRecognition.stopListening()
    setIsRecording(false); // Set isRecording to false when recording stops
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center bg-black rounded-lg p-4 mt-20 ml-5">
        <Webcam />
      </div>

      <Button 
        onClick={saveUserAnswer} // Only one onClick handler
        variant="outline" 
        className="mt-4 ml-4"
      >
        {isRecording ? 
          <h2>
            <Mic /> Recording...
          </h2> : 
          "Record Answer"
        }
      </Button>

      <div className="mt-4 flex flex-col gap-2 items-center">
        <p className="mt-4 text-center w-[80%] font-medium">
          <strong>Transcript:</strong> {transcript}
        </p>
      </div>
    </div>
  )
}

export default RecordAnswerSection


