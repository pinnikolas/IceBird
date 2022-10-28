import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Slices/PostSlice";
const store = configureStore({
  reducer: {
    profilePosts: postReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
