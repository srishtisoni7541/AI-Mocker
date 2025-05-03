// 'use client'
// import { Button } from '@/components/ui/button'
// import React from 'react'
// import { useSpeechRecognition } from 'react-speech-recognition'
// import Webcam from 'react-webcam'

// const RecordAnswerSection = () => {
//     const Dictaphone = () => {
//         const {
//           transcript,
//           listening,
//           resetTranscript,
//           browserSupportsSpeechRecognition
//         } = useSpeechRecognition()
//     }
    
//   return (
//    <div className='flex items-center justify-center flex-col'>
//      <div className='flex items-center justify-center bg-black  rounded-lg p-4 mt-20 ml-5'>
//       <Webcam/>
//     </div>
//     <Button variant="outline" className="mt-4 ml-4">Record Answer</Button>
//     <div>
//       <button onClick={startListening}>Start</button>
//       <button onClick={SpeechRecognition.abortListening}>Abort</button>
//       <button onClick={resetTranscript}>Reset</button>
//       <p>{transcript}</p>
//     </div>
//    </div>
//   )
// }

// export default RecordAnswerSection



'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { useSpeechRecognition } from 'react-speech-recognition'
import SpeechRecognition from 'react-speech-recognition'
import Webcam from 'react-webcam'

const RecordAnswerSection = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition.</span>
  }

  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center bg-black rounded-lg p-4 mt-20 ml-5'>
        <Webcam />
      </div>

      <Button variant="outline" className="mt-4 ml-4">Record Answer</Button>

      <div className='mt-4'>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.abortListening}>Abort</button>
        <button onClick={resetTranscript}>Reset</button>
        <p className='mt-2 text-center'>Transcript: {transcript}</p>
      </div>
    </div>
  )
}

export default RecordAnswerSection
