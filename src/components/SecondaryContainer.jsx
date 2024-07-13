import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies);
  return (
    movie.nowPlaying && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-44 relative z-20 md:pl-10 pl-4">
          <MovieList title={"Now Playing"} movies={movie.nowPlaying} />
          <MovieList title={"Top Rated Movies"} movies={movie.trendingMovie} />
          <MovieList title={"Popular"} movies={movie.PopularMovie} />
          <MovieList title={"Up Coming Movies"} movies={movie.upComingMovie} />
          <MovieList title={"TV Shows"} movies={movie.TvShows} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
