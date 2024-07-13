import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (movies == null) return <p>no movie available</p>;
  return (
    // movies && (
    <div className="p-2">
      <h1 className="text-lg py-2  px-2 md:text-3xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
  // );
};

export default MovieList;
