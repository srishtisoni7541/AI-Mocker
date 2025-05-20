"use client";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useRouter } from "next/navigation";

const FeedBack = ({ params }) => {
  const [feedBackList, setFeedBackList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interview))
      .orderBy(UserAnswer.id);
    setFeedBackList(result);
  };

  const totalRating = feedBackList.reduce(
    (sum, item) => sum + Number(item.rating || 0),
    0
  );

  return (
    <div className="px-4 sm:px-6 md:px-10 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 mb-2">
          🎉 Congratulations!
        </h2>
        <h3 className="text-lg sm:text-xl font-medium text-gray-800">
          Here's your Interview Feedback
        </h3>
        <p className="text-sm sm:text-md text-gray-600 mt-1 sm:mt-2">
          Your overall Interview Rating:{" "}
          <span className="text-purple-600 font-bold">{totalRating}/50</span>
        </p>

        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Review your questions, your answers, and improvement suggestions.
        </p>
      </div>

      {/* Chart */}
      {feedBackList.length > 0 && (
        <div className="mb-10 sm:mb-12">
          <h4 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
            📊 Performance Chart
          </h4>
          <div className="w-full h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={feedBackList}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="question"
                  tick={{ fontSize: 10 }}
                  interval={0}
                  angle={-30}
                  textAnchor="end"
                />
                <YAxis domain={[0, 10]} />
                <Tooltip wrapperStyle={{ fontSize: "0.85rem" }} />
                <Bar dataKey="rating" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Feedback List */}
      <div className="space-y-4">
        {feedBackList.map((item, index) => (
          <Collapsible key={index}>
            <CollapsibleTrigger className="w-full text-left bg-purple-100 text-purple-900 hover:bg-purple-200 px-4 py-3 rounded-lg font-semibold shadow-sm transition duration-200 text-sm sm:text-base">
              Q{index + 1}: {item.question}
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-white shadow-inner border-l-4 border-purple-400 px-4 py-3 sm:p-5 text-sm text-gray-700 rounded-b-lg">
              <p className="mb-2">
                <strong>Your Answer:</strong> {item.userAns}
              </p>
              <p className="mb-2">
                <strong>Feedback:</strong> {item.feedBack}
              </p>
              <p>
                <strong>Rating:</strong>{" "}
                <span className="text-purple-600 font-semibold">
                  {item.rating}/10
                </span>
              </p>
            </CollapsibleContent>
          </Collapsible>
        ))}
        <button onClick={()=>router.replace('/dashboard')} className="p-2 bg-purple-300 rounded-md">Go Home</button>
      </div>
    </div>
  );
};

export default FeedBack;