import React, { useRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addGptResult } from "../utils/GptSlice";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

  //search movie in TMDB
  const searchMovie = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    // console.log("json", json);
    return json.results;
  };
  const handleSearch = async () => {
    // console.log(searchText.current.value);
    // make an api call to gemini to get movie result
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const geminiQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      "only give me names of 5 movies ,comma separated like the example result given ahead.Example Result :Gadar,Sholay,Don,golmaal,masti";
    const prompt = geminiQuery;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    const movieList = text.split(",");
    // console.log(movieList);

    const promiseArray = movieList.map((movie) => searchMovie(movie));
    // console.log(promiseArray);
    const tmdbResult = await Promise.all(promiseArray);
    // console.log("tmdbREsult", tmdbResult);
    // dispatch(addGptResult({ movieResult: tmdbResult, movieNames: movieList }));
    const payload = { movieResult: tmdbResult, movieNames: movieList };
    // console.log("Dispatching payload:", payload);
    dispatch(addGptResult(payload)); // Ensure correct naming here
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
