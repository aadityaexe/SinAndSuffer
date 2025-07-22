/* eslint-disable no-unused-vars */
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // Better: use env variable
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // or "gemini-1.5-pro" for better quality
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const chatSessionOptions = {
  generationConfig,
  history: [], // you can add memory if you want multi-turn conversations
};

async function run(prompt) {
  try {
    const chatSession = model.startChat(chatSessionOptions);
    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    return response.text().trim();
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("Gemini API call failed");
  }
}

export default run;
