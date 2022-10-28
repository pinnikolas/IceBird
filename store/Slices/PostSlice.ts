import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type Post = {
  id: string;
  profilePostsText: string;
  name: string;
  surname: string;
  date: string;
};
type PostsState = {
  list: Post[];
};
const initialState: PostsState = {
  list: [],
};
const PostSlice = createSlice({
  name: "profilePosts",
  initialState,
  // initialState: {
  //   profilePosts: [
  //     {
  //       id: new Date().toISOString(),
  //       profilePostsText:
  //         "something Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis unde illum corporis deserunt voluptatibus. Dicta officiis doloremque ex facilis quidem qui laboriosam nesciunt? Voluptates unde, esse minus voluptas debitis quas!",
  //       name: "Nikolay",
  //       surname: "Talsih",
  //       date: new Date().toISOString(),
  //     },
  //   ],
  // },
  reducers: {
    addPost(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        profilePostsText: action.payload,
        name: "Nikolay",
        surname: "Talsih",
        date: new Date().toISOString(),
      });
    },
    deletePost(state, action: PayloadAction<string>) {
      state.list = state.list.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, deletePost } = PostSlice.actions;

export default PostSlice.reducer;
