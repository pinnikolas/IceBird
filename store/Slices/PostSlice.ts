import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost(state, action) {
      console.log(state);
      console.log(action);
      state.posts.push({
        id: new Date().toISOString(),
        text: action.payload.text,
      });
    },
    deletePost(state, action) {},
  },
});

export const { addPost, deletePost } = PostSlice.actions;

export default PostSlice.reducer;
