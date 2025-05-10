import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI("AIzaSyCV-6cC8w9_uYcHj9Xb-LQJwjdnXx2trf0");

async function generateFeedback({ question, answer }) {
  const prompt = `
    Question: ${question}
    Answer: ${answer}

    Based on the question and answer above, provide:
    - A rating out of 5
    - Feedback for improvement

    Format strictly as JSON:
    {
      "rating": 4,
      "feedback": "Your answer is mostly correct but could include more examples."
    }
  `;

  const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  let text = await response.text();

  text = text.replace(/```json|```/g, '').trim();

  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("Failed to parse feedback JSON:", err);
    throw new Error("Invalid JSON feedback from Gemini");
  }
}

export default generateFeedback;
