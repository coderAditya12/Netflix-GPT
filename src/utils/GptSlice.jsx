import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResult: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptResult: (state, action) => {
      const { movieName, movieResult } = action.payload;
      state.movieResult = action.payload;
      state.movieNames = action.payload;
    },
  },
});
export const { toggleGptSearch, addGptResult } = gptSlice.actions;
export default gptSlice.reducer;
