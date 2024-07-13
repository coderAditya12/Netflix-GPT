//fetch data from tmdb API and update the store
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlaying } from "../utils/movieSlice";

import { useEffect } from "react";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.nowPlaying);

  const getNowMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const json = await data.json();
    // console.log(json);
    // console.log(json.results);
    dispatch(addNowPlaying(json.results));
  };
  useEffect(() => {
    if (!nowPlaying) getNowMovies();
  }, []);
};

export default useNowPlaying;
