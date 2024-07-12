import React, { useRef } from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const handleSearch = async () => {
    console.log(searchText.current.value);
    // make an api call to gemini to get movie result
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Write a story about a magic backpack.";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  };
  return (
    <div className="pt-[7%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12 bg-opacity-60"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-3 col-span-9 bg-gray-500 bg-opacity-60 text-white rounded-lg font-semibold"
          placeholder={language[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-md
col-span-3  m-2"
          onClick={handleSearch}
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
