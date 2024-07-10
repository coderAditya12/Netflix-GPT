import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";



const Browse = () => {

 useNowPlaying();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
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
