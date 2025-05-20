
'use client';

import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import QuestionSection from './_components/QuestionSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { useRouter } from 'next/navigation';

const StartInterview = ({ params }) => {
  const [interviewData, setInterviewData] = useState(null);
  const [mockInterviewQuestions, setMockInterviewQuestions] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    getInterviewDetails();
  }, [params.interview]);

  const getInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interview));

      if (result.length > 0) {
        const jsonMockRes = result[0].jsonMockRes;

        try {
          let cleanedJsonMockRes = jsonMockRes.replace(/\\"/g, '"');
          cleanedJsonMockRes = cleanedJsonMockRes.replace(/}{/g, '},{');
          const parsedMockRes = JSON.parse(`[${cleanedJsonMockRes}]`);
          setMockInterviewQuestions(parsedMockRes);
          setInterviewData(result[0]);
        } catch (parseError) {
          console.error('Error parsing jsonMockRes:', parseError);
        }
      } else {
        console.error('No interview data found');
      }
    } catch (fetchError) {
      console.error('Error fetching interview data:', fetchError);
    }
  };

  // ✅ Auto-submit function
  const handleAutoSubmit = async () => {
    try {
      await fetch('/api/submit-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          interviewId: params.interview,
          status: 'auto-submitted',
        }),
      });
      router.push('/test-submitted');
    } catch (error) {
      console.error('Auto submission failed:', error);
    }
  };

  // ✅ Tab switch / minimize detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleAutoSubmit();
      }
    };

    const handleWindowBlur = () => {
      handleAutoSubmit();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, []);

  return (
    <div>
      {/* ⚠️ Warning */}
      <div className="bg-red-100 text-red-800 p-3 text-center font-semibold">
        ⚠️ Don’t switch tabs or minimize the window — your mock test will be auto-submitted.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <QuestionSection
          mockInterviewQuestions={mockInterviewQuestions}
          activeQuestionIndex={activeQuestionIndex}
        />
        <RecordAnswerSection
          mockInterviewQuestions={mockInterviewQuestions}
          activeQuestionIndex={activeQuestionIndex}
          setActiveQuestionIndex={setActiveQuestionIndex}
          interviewData={interviewData}
        />
      </div>
    </div>
  );
};

export default StartInterview;


