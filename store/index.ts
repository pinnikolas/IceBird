import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Slices/PostSlice";
export default configureStore({
  reducer: {
    profilePosts: postReducer,
  },
});
