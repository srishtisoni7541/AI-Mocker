import React from 'react'

const QuestionSection = ({ mockInterviewQuestions }) => {
  return (
    <div className='p-5 border rounded-lg'>
      <div>
        {mockInterviewQuestions && mockInterviewQuestions.map((question, index) => (
          <div key={index} className="mb-4">
            <h2 className="font-bold text-lg">Question {index + 1}:</h2>
            <p className="text-gray-700">{question.question}</p>
            <h3 className="font-semibold mt-2">Answer:</h3>
            <p className="text-gray-600">{question.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionSection
