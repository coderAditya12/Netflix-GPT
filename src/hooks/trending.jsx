//fetch data from tmdb API and update the store
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlaying, addTrendingMovie } from "../utils/movieSlice";

import { useEffect } from "react";

const useTrendingMovie = () => {
  const dispatch = useDispatch();
  const getTrendingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      options
    );
    const json = await data.json();
    // console.log(json);
    // console.log(json.results);
    dispatch(addTrendingMovie(json.results));
  };
  useEffect(() => {
    getTrendingMovie();
  }, []);
};

export default useTrendingMovie;
