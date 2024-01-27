import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    topRatedMovies: null,
    popularMovies: null,
    upComingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addTopRatedMovies,
  addPopularMovies,
  addUpComingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
