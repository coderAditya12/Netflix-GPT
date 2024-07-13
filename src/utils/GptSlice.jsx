import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResult: [],
    movieNames: [],
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptResult: (state, action) => {
      const { movieNames, movieResult } = action.payload;
      console.log("Reducer received payload:", action.payload); // Add this line for debugging
      state.movieResult = movieResult;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGptSearch, addGptResult } = gptSlice.actions;
export default gptSlice.reducer;
