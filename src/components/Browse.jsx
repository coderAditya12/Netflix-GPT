import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Popular from "../hooks/Popular";
import useTrendingMovie from "../hooks/trending";
import useUpComing from "../hooks/upcoming";
import useTvShows from "../hooks/useTvShows";

const Browse = () => {
  useNowPlaying();
  Popular();
  useTrendingMovie();
  useUpComing();
  useTvShows();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      MainContainer
       - videoBackground
       - Videotitle

      SecondaryContainer
      - MovieList*n
      - cards*n
       - 
      */}
    </div>
  );
};

export default Browse;
