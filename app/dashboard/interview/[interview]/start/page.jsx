'use client';

import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import QuestionSection from './_components/QuestionSection';
import RecordAnswerSection from './_components/RecordAnswerSection';

const StartInterview = ({ params }) => { // ✅ Capital S

  const [interviewData, setInterviewData] = useState(null);
  const [mockInterviewQuestions, setMockInterviewQuestions] = useState([]);
  const [activeQuestionIndex,setActiveQuestionIndex]=useState(0);
  console.log(mockInterviewQuestions);

  useEffect(() => {
    getInterviewDetails();
  }, [params.interview]);  // ✅ params.interview add kiya dependency mein

  const getInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interview));


      if (result.length > 0) {
        const jsonMockRes = result[0].jsonMockRes;


        try {
          // Step 1: Clean the JSON string
          let cleanedJsonMockRes = jsonMockRes.replace(/\\"/g, '"');
          cleanedJsonMockRes = cleanedJsonMockRes.replace(/}{/g, '},{');

          // Step 2: Make it an array format
          const parsedMockRes = JSON.parse(`[${cleanedJsonMockRes}]`);


          // Step 3: Set the parsed data
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

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <QuestionSection mockInterviewQuestions={mockInterviewQuestions}
        activeQuestionIndex={activeQuestionIndex}
        />
        <RecordAnswerSection mockInterviewQuestions={mockInterviewQuestions}
        activeQuestionIndex={activeQuestionIndex}
      setActiveQuestionIndex={setActiveQuestionIndex}
        interviewData={interviewData}/>


      </div>
    </div>
  );
};

export default StartInterview; // ✅ Correct




