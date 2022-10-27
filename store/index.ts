import { configureStore } from "@reduxjs/toolkit";
import useDispatch from "react-redux";
import postReducer from "./Slices/PostSlice";
const store = configureStore({
  reducer: {
    profilePosts: postReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
