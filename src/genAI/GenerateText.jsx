import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_URL);

export const GenerateText = async(context, profile = {}, skills = {}, experience = {}, projects = {}) => {

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const inputText = `
      Create an impactful, recruiter-friendly and very specific ${context} for a portfolio based on:
      Profile: ${JSON.stringify(profile)}
      Skills: ${JSON.stringify(skills)}
      Experience: ${JSON.stringify(experience)}
      Projects: ${JSON.stringify(projects)}
      Make it concise, engaging, and highlight strengths.
      Length: 30 words
      Make it something that a recruiter would want to see and unique with a personal touch
      `;

    const result = await model.generateContent(inputText);
    const text = result.response.text();
    return text;
  } catch (error) {
    console.log("Something went wrong, please try again.", error);
    return null;
  }
};
