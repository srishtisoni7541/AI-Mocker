

// import { GoogleGenerativeAI } from "@google/generative-ai";

// const ai = new GoogleGenerativeAI("AIzaSyCV-6cC8w9_uYcHj9Xb-LQJwjdnXx2trf0");

// async function generateInterviewQuestions({ jobRole, experience, techStack }) {
//   const prompt = `
//     You are an interviewer.

//     Based on the following candidate information:
//     - Job Role: ${jobRole}
//     - Experience: ${experience}
//     - Tech Stack: ${techStack}

//     Generate 5 interview questions and their detailed answers.

//     IMPORTANT:
//     - Return the response strictly in pure JSON array format.
//     - Each object in array should have two fields: "question" and "answer".
//     - Do NOT include any extra explanation or formatting outside the JSON.

//     Example format:
//     [
//       {
//         "question": "What is React?",
//         "answer": "React is a JavaScript library for building user interfaces."
//       },
//       {
//         "question": "Explain Virtual DOM.",
//         "answer": "The Virtual DOM is a lightweight JavaScript object which is a copy of the real DOM."
//       }
//     ]

//     Keep the language simple and beginner friendly.
//   `;

//   const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   let text = await response.text();

//   // CLEANING Gemini response: Remove ``` and ```json if present
//   text = text.replace(/```json|```/g, '').trim();

//   // Now parse
//   let parsedData;
//   try {
//     parsedData = JSON.parse(text);
//   } catch (error) {
//     console.error("Failed to parse JSON from Gemini:", error);
//     throw new Error("Invalid JSON response from Gemini");
//   }

//   return parsedData;
// }

// export default generateInterviewQuestions;



import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI("AIzaSyCV-6cC8w9_uYcHj9Xb-LQJwjdnXx2trf0");

async function generateInterviewQuestions({ jobRole, experience, techStack }) {
  const prompt = `
    You are an interviewer.

    Based on the following candidate information:
    - Job Role: ${jobRole}
    - Experience: ${experience}
    - Tech Stack: ${techStack}

    Generate 5 interview questions and their detailed answers.

    IMPORTANT:
    - Return the response strictly in pure JSON array format.
    - Each object in array should have two fields: "question" and "answer".
    - Do NOT include any extra explanation or formatting outside the JSON.

    Example format:
    [
      {
        "question": "What is React?",
        "answer": "React is a JavaScript library for building user interfaces."
      },
      {
        "question": "Explain Virtual DOM.",
        "answer": "The Virtual DOM is a lightweight JavaScript object which is a copy of the real DOM."
      }
    ]

    Keep the language simple and beginner friendly.
  `;

  const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  let text = await response.text();

  console.log("Raw Response from Gemini:", text);

  text = text.replace(/```json|```/g, '').trim();

  try {
    const parsedData = JSON.parse(text);

    if (!Array.isArray(parsedData)) {
      throw new Error("Gemini response is not an array");
    }

    // ✅ Return as single JSON string for DB or frontend
    return JSON.stringify(parsedData);
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    throw new Error("Invalid JSON response from Gemini");
  }
}

export default generateInterviewQuestions;
