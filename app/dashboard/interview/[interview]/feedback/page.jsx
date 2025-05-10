"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const FeedBack = ({ params }) => {
    console.log("Interview ID:", params.interview);

    
  const [feedBackList, setFeedBackList] = useState([]);
  console.log(feedBackList);
  useEffect(() => {
    GetFeedback();
  }, []);
  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interview))
      .orderBy(UserAnswer.id);
    console.log(result);
    setFeedBackList(result);
  };
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-purple-600">Congratulations!</h2>
      <h2 className="font-bold text-xl">Here is your interview Feedback</h2>
      <h3 className="my-3 text-lg">
        Your overall Interview Rating : <strong>7/10</strong>
      </h3>
      <h2 className="text-sm text-gray-500">
        Find below interview questions with correct answer , Your answer and
        feedBack for improvement
      </h2>
      {feedBackList?.length > 0 &&
        feedBackList.map((item, index) => (
          <Collapsible key={index}>
            <CollapsibleTrigger className="text-left text-base font-semibold border px-4 py-2 rounded-md">
              {item.question}
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 text-sm text-gray-700 bg-gray-100 p-3 rounded-md">
              <p>
                <strong>Your Answer:</strong> {item.userAns}
              </p>
              <p>
                <strong>Feedback:</strong> {item.feedBack}
              </p>
              <p>
                <strong>Rating:</strong> {item.rating}
              </p>
            </CollapsibleContent>
          </Collapsible>
        ))}
    </div>
  );
};

export default FeedBack;
