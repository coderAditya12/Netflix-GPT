//fetch data from tmdb API and update the store
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovie } from "../utils/movieSlice";

import { useEffect } from "react";

const Popular = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    const json = await data.json();
    // console.log(json);
    // console.log(json.results);
    dispatch(addPopularMovie(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default Popular;
