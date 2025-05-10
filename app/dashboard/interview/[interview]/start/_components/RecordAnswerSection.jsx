"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Webcam from "react-webcam";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Mic } from "lucide-react";
import { toast } from "sonner";
import generateFeedback from "@/utils/GenerateFeedback";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { UserAnswer } from "@/utils/schema";
import Link from "next/link";

const RecordAnswerSection = ({
  mockInterviewQuestions,
  activeQuestionIndex,
  interviewData,
  setActiveQuestionIndex,
}) => {
  console.log(interviewData);
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const questions = Array.isArray(mockInterviewQuestions?.[0])
    ? mockInterviewQuestions[0]
    : Array.isArray(mockInterviewQuestions)
    ? mockInterviewQuestions
    : [];

  const activeQuestion = questions[activeQuestionIndex];

  const handleStart = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-IN",
    });
    setIsRecording(true);
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
    setIsRecording(false);
  };

  const saveUserAnswer = async () => {
    if (isRecording) {
      setLoading(true);
      handleStop();

      const finalTranscript = transcript.trim();

      if (finalTranscript.length < 10) {
        toast("Error while saving your answer, Please record again!");
        setLoading(false);
        return;
      }

      try {
        const feedback = await generateFeedback({
          question: activeQuestion?.question,
          answer: finalTranscript,
        });
        console.log(feedback);
        console.log("datta:",interviewData.mockId);

        await db.insert(UserAnswer).values({
          mockIdRef: interviewData?.mockId,
          question: activeQuestion?.question,
          correctAns: finalTranscript,
          userAns: finalTranscript,
          feedBack: feedback?.feedback,
          rating: feedback?.rating,
          userEmail: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-YYYY"),
        });

        toast("User Answer Recorded Successfully!");
        resetTranscript();
      } catch (err) {
        console.error("Error saving answer:", err);
        toast("Failed to save answer");
      }

      setLoading(false);
    } else {
      resetTranscript();
      handleStart();
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center bg-black rounded-lg p-4 mt-10 ml-5">
        <Webcam mirrored={true} />
      </div>

      <Button
        disabled={loading}
        onClick={saveUserAnswer}
        variant="outline"
        className="mt-4 ml-4"
      >
        {isRecording ? (
          <span className="flex items-center gap-2">
            <Mic size={18} /> Recording...
          </span>
        ) : (
          "Record Answer"
        )}
      </Button>

      <div className="flex items-center justify-end gap-5 mt-4">
        {activeQuestionIndex > 0 && (
          <Button
            className="py-2 px-6"
            onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
          >
            Prev
          </Button>
        )}
        {activeQuestionIndex < questions.length - 1 && (
          <Button
            className="py-2 px-6"
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
          >
            Next
          </Button>
        )}
        {activeQuestionIndex === questions.length - 1 && (
         <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
          <Button className="py-2 px-6">End Interview</Button>
         </Link>
        )}
      </div>
    </div>
  );
};

export default RecordAnswerSection;
