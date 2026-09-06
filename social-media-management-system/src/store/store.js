import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice.js";
import platformsReducer from "./platformsSlice.js";

// Centralized Redux store combining all slices/reducers
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    platforms: platformsReducer,
  },
});
