import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  post: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  //Reducer is a combination of all function that change initial state!

  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },

    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("User Friends non-existent:(");
      }
    },
    setPosts: (state, action) => {
      state.post = action.payload.posts;
    },
  },
  setPost: (state, action) => {
    const updatedPosts = state.posts.map((post) => {
      if (post._id === action.payload.post_id) return action.payload.post;
      return post;
    });
    state.post = updatedPosts;
  },
});

export const { setMode, setLogin, setLogout, setPost, setPosts } =
  authSlice.actions;

export default authSlice.reducer;
