import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const InterviewItemCard = ({ interview }) => {
  let questions = [];
  const router = useRouter();
  const onStart=()=>{
    router.push(`/dashboard/interview/${interview.mockId}`);

  }
  const onFeedback=()=>{
    router.push(`/dashboard/interview/${interview?.mockId}/feedback`)
  }

  try {
    if (typeof interview.jsonMockRes === "string") {
      questions = JSON.parse(interview.jsonMockRes || "[]");
    } else {
      questions = interview.jsonMockRes || [];
    }
    console.log("Parsed Questions:", questions);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  return (
    <div className="bg-white flex rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border  border-gray-200 space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-purple-700">
          {interview.jobPosition}
        </h2>
        <p className="text-gray-700 text-sm">{interview.jobDescription}</p>
        <p className="text-gray-500 text-xs">
          Experience: {interview.jobExperience} years
        </p>
        <div className=" w-full mt-3 flex gap-3  items-center justify-between">

           
            <Button onClick={onFeedback} size="sm" variant="outline">
              Feedback
            </Button>
        
          <Button onClick={onStart} className="bg-purple-500">Start</Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewItemCard;
