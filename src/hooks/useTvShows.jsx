//fetch data from tmdb API and update the store
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addTvShows } from "../utils/movieSlice";

import { useEffect } from "react";

const useTvShows = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector((store) => store.TvShows);
  const getTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      options
    );
    const json = await data.json();
    // console.log(json);
    // console.log(json.results);
    dispatch(addTvShows(json.results));
  };
  useEffect(() => {
    if (!tvShows) getTvShows();
  }, []);
};

export default useTvShows;
