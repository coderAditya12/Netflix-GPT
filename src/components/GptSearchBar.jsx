import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[7%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12 bg-opacity-60">
        <input
          type="text"
          className="p-2 m-3 col-span-9 bg-gray-500 bg-opacity-60 text-white rounded-lg font-semibold"
          placeholder={language[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-md
col-span-3  m-2  "
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
