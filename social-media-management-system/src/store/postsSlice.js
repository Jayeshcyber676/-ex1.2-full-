import { createSlice, nanoid } from "@reduxjs/toolkit";

// Sample starting data so the app isn't empty on first load
const initialState = [
  {
    id: nanoid(),
    title: "Product Launch Announcement",
    content: "Excited to launch our new product this Friday!",
    platform: "Instagram",
  },
  {
    id: nanoid(),
    title: "Weekly Tech Tips",
    content: "5 productivity hacks every developer should know.",
    platform: "LinkedIn",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, platform) => ({
        payload: { id: nanoid(), title, content, platform },
      }),
    },
    editPost: (state, action) => {
      const { id, title, content, platform } = action.payload;
      const post = state.find((p) => p.id === id);
      if (post) {
        post.title = title;
        post.content = content;
        post.platform = platform;
      }
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, editPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
