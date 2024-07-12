import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const REACT_APP_GEMINI_API_KEY = "...";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(REACT_APP_GEMINI_API_KEY);

// ...

// The Gemini 1.5 models are versatile and work with most use cases
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
