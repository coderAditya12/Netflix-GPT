import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResult, movieNames } = useSelector((store) => store.gpt);
  // console.log("movieNames:", movieNames);
  // console.log("movieResults:", movieResult);

  if (
    !movieNames ||
    movieNames.length === 0 ||
    !movieResult ||
    movieResult.length === 0
  ) {
    return null;
  }

  // Filter out movies with null poster_path
  // const filteredResults = movieResult.filter(
  //   (movie) => movie.poster_path !== null
  // );

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-75 ">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
