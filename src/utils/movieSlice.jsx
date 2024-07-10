import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    trailerVideo: null,
    PopularMovie: null,
    trendingMovie: null,
    upComingMovie: null,
    TvShows: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.PopularMovie = action.payload;
    },
    addTrendingMovie: (state, action) => {
      state.trendingMovie = action.payload;
    },
    addUpComingMovie: (state, action) => {
      state.upComingMovie = action.payload;
    },
    addTvShows: (state, action) => {
      state.TvShows = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const {
  addNowPlaying,
  addTrailerVideo,
  addPopularMovie,
  addTrendingMovie,
  addUpComingMovie,
  addTvShows,
} = movieSlice.actions;
