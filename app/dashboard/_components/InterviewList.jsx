"use client";

import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import InterviewItemCard from "./InterviewItemCard";
import { Button } from "@/components/ui/button";

const InterviewList = () => {
  const { user } = useUser();
  const [interviewList,setInterviewList]=useState([]);
  useEffect(()=>{
   user&&GetInterviewList();
  },[user])
  const GetInterviewList = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(
        eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress)
      )
      .orderBy(desc(MockInterview.id));
      console.log(result);
      setInterviewList(result);
  };
  return (
    <div className="py-4">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Previous Mock Interviews</h2>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {interviewList.length === 0 ? (
        <p className="text-gray-600">No interviews found.</p>
      ) : (
        interviewList.map((interview, index) => (
          <InterviewItemCard interview={interview} key={index} />
        ))
      )}
    
    </div>
  </div>
  
  );
};

export default InterviewList;
