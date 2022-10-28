import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "profilePosts",
  initialState: {
    profilePosts: [
      {
        id: new Date().toISOString(),
        profilePostsText:
          "something Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis unde illum corporis deserunt voluptatibus. Dicta officiis doloremque ex facilis quidem qui laboriosam nesciunt? Voluptates unde, esse minus voluptas debitis quas!",
        name: "Nikolay",
        surname: "Talsih",
        date: "12 Oct 2021",
      },
    ],
  },
  reducers: {
    addPost(state, action) {
      state.profilePosts.push({
        id: new Date().toISOString(),
        profilePostsText: action.payload.profilePostsText,
        name: "Nikolay",
        surname: "Talsih",
        date: new Date().toISOString(),
      });
    },
    deletePost(state, action) {
      state.profilePosts = state.profilePosts.filter(
        (post) => post.id !== action.payload.id
      );
    },
  },
});

export const { addPost, deletePost } = PostSlice.actions;

export default PostSlice.reducer;
