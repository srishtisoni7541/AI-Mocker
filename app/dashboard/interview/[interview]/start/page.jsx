
'use client';

import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { use, useEffect, useState } from 'react';
import QuestionSection from './_components/QuestionSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { useRouter } from 'next/navigation';

// // WebcamFaceDetection lazy import to prevent SSR issues
// const WebcamFaceDetection = dynamic(() => import('./_components/WebcamFaceDetection'), { ssr: false })

const StartInterview = ({ params }) => {
  const [interviewData, setInterviewData] = useState(null);
  const [violationCount, setViolationCount] = useState(0);

  const [mockInterviewQuestions, setMockInterviewQuestions] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const router = useRouter();
    const unwrappedParams = use(params);  
  const interviewId = unwrappedParams.interview;

    useEffect(() => {
      getInterviewDetails();
    }, [interviewId]);

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

  // // ✅ Auto-submit function
  // const handleAutoSubmit = async () => {
  //   try {
  //     await fetch('/api/submit-test', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         interviewId: params.interview,
  //         status: 'auto-submitted',
  //       }),
  //     });
  //     router.push('/test-submitted');
  //   } catch (error) {
  //     console.error('Auto submission failed:', error);
  //   }
  // };



const handleAutoSubmit = (type = "face") => {
  if (type === "tab") {
    // 🟢 Immediate auto-submit on tab switch
    fetch('/api/submit-test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        interviewId: params.interview,
        status: 'auto-submitted',
      }),
    })
      .then(() => {
        router.push('/test-submitted');
      })
      .catch((error) => {
        console.error('Auto submission failed:', error);
      });
    return;
  }

  // 🟡 Face violation (give 2 warnings, then auto-submit)
  setViolationCount((prev) => {
    const newCount = prev + 1;

    if (newCount >= 3) {
      fetch('/api/submit-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          interviewId: params.interview,
          status: 'auto-submitted',
        }),
      })
        .then(() => {
          router.push('/test-submitted');
        })
        .catch((error) => {
          console.error('Auto submission failed:', error);
        });
    } else {
      console.warn(`⚠️ Face not detected! Warning ${newCount}/2`);
    }

    return newCount;
  });
};


  // // ✅ Tab switch / minimize detection
  // useEffect(() => {
  //   let blurTimeout;

  //   const handleVisibilityChange = () => {
  //     if (document.visibilityState === 'hidden') {
  //       blurTimeout = setTimeout(() => {
  //         handleAutoSubmit();
  //       }, 1000);
  //     }
  //   };

  //   const handleWindowBlur = () => {
  //     blurTimeout = setTimeout(() => {
  //       if (document.visibilityState === 'hidden') {
  //         handleAutoSubmit();
  //       }
  //     }, 1000);
  //   };

  //   document.addEventListener('visibilitychange', handleVisibilityChange);
  //   window.addEventListener('blur', handleWindowBlur);

  //   return () => {
  //     document.removeEventListener('visibilitychange', handleVisibilityChange);
  //     window.removeEventListener('blur', handleWindowBlur);
  //     clearTimeout(blurTimeout);
  //   };
  // }, []);

// useEffect(() => {
//   let blurTimeout;

//   const handleVisibilityChange = () => {
//     if (document.visibilityState === 'hidden') {
//       blurTimeout = setTimeout(() => {
//         handleAutoSubmit("tab"); // 🔴 Immediate submission on tab hide
//       }, 1000);
//     }
//   };

//   const handleWindowBlur = () => {
//     blurTimeout = setTimeout(() => {
//       if (document.visibilityState === 'hidden') {
//         handleAutoSubmit("tab"); // 🔴 Immediate submission on blur
//       }
//     }, 1000);
//   };

//   document.addEventListener('visibilitychange', handleVisibilityChange);
//   window.addEventListener('blur', handleWindowBlur);

//   return () => {
//     document.removeEventListener('visibilitychange', handleVisibilityChange);
//     window.removeEventListener('blur', handleWindowBlur);
//     clearTimeout(blurTimeout);
//   };
// }, []);


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
           handleAutoSubmit={handleAutoSubmit} 
        />
      </div>
    </div>
  );
};

export default StartInterview;
