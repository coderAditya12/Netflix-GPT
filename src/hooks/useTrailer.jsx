import React from "react";
import { options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailer = (movieId) => {
  //fetch trailer video
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      options
    );
    const json = await response.json();
    const filterData = json.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );

    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useTrailer;
