 //fetch data from tmdb API and update the store
 import { useDispatch } from "react-redux";
 import { options } from "../utils/constants";
 import { addNowPlaying} from "../utils/movieSlice";

 
 import { useEffect } from 'react'
 
 const useNowPlaying = () => {
    const dispatch = useDispatch();
    const getNowMovies = async ()=>{
      const data = await 
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      const json = await data.json();
      // console.log(json);
      // console.log(json.results);
      dispatch(addNowPlaying(json.results));
    };
    useEffect(()=>{
      getNowMovies();
    },[]);
 }
 
 export default useNowPlaying;
 