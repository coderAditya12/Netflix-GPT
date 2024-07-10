//fetch data from tmdb API and update the store
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTvShows } from "../utils/movieSlice";

import { useEffect } from "react";

const useTvShows = () => {
  const dispatch = useDispatch();
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
    getTvShows();
  }, []);
};

export default useTvShows;
