//fetch data from tmdb API and update the store
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addUpComingMovie } from "../utils/movieSlice";

import { useEffect } from "react";

const useUpComing = () => {
  const dispatch = useDispatch();
  const upcoming = useSelector((store) => store.v);
  const getUpComing = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      options
    );
    const json = await data.json();
    // console.log(json);
    // console.log(json.results);
    dispatch(addUpComingMovie(json.results));
  };
  useEffect(() => {
    if (!upcoming) getUpComing();
  }, []);
};

export default useUpComing;
