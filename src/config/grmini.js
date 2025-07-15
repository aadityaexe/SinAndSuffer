/* eslint-disable no-unused-vars */
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
console.log("API Key:", apiKey);
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  try {
    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());
    return response.text();
  } catch (error) {
    console.error("Error in run function:", error);
    throw error;
  }
}

export default run;
