// import React from "react";

// const QuestionSection = ({ mockInterviewQuestions, activeQuestionIndex }) => {
//   // Flatten if it's nested like [[...]]
//   const questions = Array.isArray(mockInterviewQuestions?.[0])
//     ? mockInterviewQuestions[0]
//     : mockInterviewQuestions;

//   return (
//     <div className="p-5  mt-4 border rounded-lg">
//       <div className=" p-2 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {questions &&
//           questions.map((question, index) => (
//             <div key={index} className="mb-4">
//               <h2
//                className={`font-bold text-lg p-2 rounded-full text-xs md:text-sm text-center cursor-pointer ${
//                 activeQuestionIndex === index
//                   ? "bg-black text-white"
//                   : "bg-secondary"
//               }`}
//               >
//                 Question $ {index + 1}:
//               </h2>
//               {/* <h2>{mockInterviewQuestions[activeQuestionIndex]?.question}</h2> */}
//               <h2>{question.question}</h2>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default QuestionSection;

import { Lightbulb } from "lucide-react";
import React from "react";

const QuestionSection = ({ mockInterviewQuestions, activeQuestionIndex }) => {
  // Flatten if it's nested like [[...]]
  const questions = Array.isArray(mockInterviewQuestions?.[0])
    ? mockInterviewQuestions[0]
    : mockInterviewQuestions;

  const activeQuestion = questions?.[activeQuestionIndex];

  return (
    <div className="p-5 my-10 border rounded-lg">
      {/* Grid of Question Buttons */}
      <div className="p-2 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {questions &&
          questions.map((question, index) => (
            <div key={index} className="mb-4">
              <h2
                className={`font-bold text-lg p-2 rounded-full text-xs md:text-sm text-center cursor-pointer ${
                  activeQuestionIndex === index
                    ? "bg-[#7F57F1] text-white"
                    : "bg-secondary"
                }`}
              >
                Question {index + 1}
              </h2>
            </div>
          ))}
      </div>

      {/* Active Question & Answer Section */}
      {activeQuestion && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-2">
            Question {activeQuestionIndex + 1}:
          </h2>
          <p className="text-gray-700 mb-4 my-2 text-md md:text-lg">
            {activeQuestion.question}
          </p>
          {/* <h3 className="text-md font-semibold">Answer:</h3>
          <p className="text-gray-600">{activeQuestion.answer}</p> */}
        </div>
      )}
      <div className="bg-purple-100 p-5 border rounded-lg my-5">
        <h2 className="flex gap-5 mt-3 items-center text-primary">
          <Lightbulb />
          <strong>NOTE:</strong>
        </h2>
        <h2 className="text-primary my-2">
          Click on Record Answer when you want to answer the question. At the
          end of Interview we will give you the feedback along with correct
          answers for each of question and your answer to compare it.
        </h2>
      </div>
    </div>
  );
};

export default QuestionSection;
