// "use client";
// import { Button } from "@/components/ui/button";
// import { db } from "@/utils/db";
// import { MockInterview } from "@/utils/schema";
// import { eq } from "drizzle-orm";
// import { Lightbulb, WebcamIcon } from "lucide-react";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import Webcam from "react-webcam";

// const interview = ({ params }) => {

//   const [interviewData, setInterviewData] = useState();
//   const [WebCamEnabled, setWebCamEnabled] = useState(false);
//   console.log(interviewData);

//   useEffect(() => {
//     console.log(params.interview);
//     GetInterviewDetails();
//   }, []);

//   const GetInterviewDetails = async () => {
//     const result = await db
//       .select()
//       .from(MockInterview)
//       .where(eq(MockInterview.mockId, params.interview));
//     console.log(result);
//     setInterviewData(result[0]);
//   };
//   return (
//     <div className="my-10 flex  flex-col">
//       <h2 className="font-bold text-2xl">Let's Get Started</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         <div className=" flex flex-col gap-4 my-5 ">
//           <div className=" flex flex-col gap-3 p-5 rounded-lg border">
//             <h2>
//               <strong>Job Role / Job Position:</strong>{" "}
//               {interviewData?.jobPosition}
//             </h2>
//             <h2>
//               <strong>Job Description / Tech Stack:</strong>{" "}
//               {interviewData?.jobDescription}
//             </h2>
//             <h2>
//               <strong>Years of Experienc :</strong>{" "}
//               {interviewData?.jobExperience}
//             </h2>
//           </div>
//           <div className="flex flex-col gap-3 p-5 border border-yellow-400 bg-yellow-100 rounded-lg">
//             <h2 className="flex gap-2 items-center text-yellow-500 ">
//               {" "}
//               <Lightbulb /> <strong>Information</strong>
//             </h2>
//             <h3> 
//               Enable Video Web Cam and Microphone to start your AI Generated
//               Mock Interview,It has 5 questions which you can answer and at the
//               last you will get the report on the basis of your answer. NOTE: we
//               never record your video, Web Cam access you can disable at any
//               time if you want{" "}
//             </h3>
//           </div>
//         </div>
//         <div className="w-full">
//           {WebCamEnabled ? (
//             <Webcam
//               onUserMedia={() => setWebCamEnabled(true)}
//               onUserMediaError={() => setWebCamEnabled(false)}
//               mirrored={true}
//               style={{
//                 height: 300,
//                 width: 300,
//               }}
//             />
//           ) : (
//             <>
//               <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border" />
//               <Button className="w-full" onClick={() => setWebCamEnabled(true)}>
//                 Enable Web Cam and Micro Phone
//               </Button>
//             </>
//           )}
//         </div>
//       </div>
//    <div className="flex justify-end items-end mt-4">
//   <Link href={'/dashboard/interview/'+params.interview+'/start'}>
//   <Button>Start Interview</Button>
//   </Link>
//    </div>
//     </div>
//   );
// };

// export default interview;




"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import { useParams } from "next/navigation";

const Interview = () => {
  const [interviewData, setInterviewData] = useState();
  const [WebCamEnabled, setWebCamEnabled] = useState(false);
  const params = useParams(); // ✅ Correct way
  const interviewId = params?.interview;

  useEffect(() => {
    if (interviewId) {
      GetInterviewDetails();
    }
  }, [interviewId]);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, interviewId));
    setInterviewData(result[0]);
  };

  return (
    <div className="my-10 flex flex-col">
      <h2 className="font-bold text-2xl">Let's Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4 my-5">
          <div className="flex flex-col gap-3 p-5 rounded-lg border">
            <h2>
              <strong>Job Role / Job Position:</strong>{" "}
              {interviewData?.jobPosition}
            </h2>
            <h2>
              <strong>Job Description / Tech Stack:</strong>{" "}
              {interviewData?.jobDescription}
            </h2>
            <h2>
              <strong>Years of Experience:</strong>{" "}
              {interviewData?.jobExperience}
            </h2>
          </div>

          <div className="flex flex-col gap-3 p-5 border border-yellow-400 bg-yellow-100 rounded-lg">
            <h2 className="flex gap-2 items-center text-yellow-500">
              <Lightbulb /> <strong>Information</strong>
            </h2>
            <h3>
              Enable Video Web Cam and Microphone to start your AI Generated
              Mock Interview. It has 5 questions which you can answer and at the
              end, you will get a report based on your answers. <br />
              <strong>Note:</strong> We never record your video. Web Cam access
              can be disabled anytime.
            </h3>
          </div>
        </div>

        <div className="w-full">
          {WebCamEnabled ? (
            <Webcam
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              mirrored={true}
              style={{ height: 300, width: 300 }}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border" />
              <Button
                className="w-full"
                onClick={() => setWebCamEnabled(true)}
              >
                Enable Web Cam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-end items-end mt-4">
        <Link href={`/dashboard/interview/${interviewId}/start`}>
          <Button>Start Interview</Button>
        </Link>
      </div>
    </div>
  );
};

export default Interview;
