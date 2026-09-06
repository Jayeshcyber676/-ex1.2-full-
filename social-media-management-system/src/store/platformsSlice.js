import { createSlice, nanoid } from "@reduxjs/toolkit";

// Sample starting data so the app isn't empty on first load
const initialState = [
  { id: nanoid(), name: "Instagram" },
  { id: nanoid(), name: "Twitter (X)" },
  { id: nanoid(), name: "LinkedIn" },
];

const platformsSlice = createSlice({
  name: "platforms",
  initialState,
  reducers: {
    addPlatform: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      // prepare lets us generate the id here, keeping components simple
      prepare: (name) => ({
        payload: { id: nanoid(), name },
      }),
    },
    deletePlatform: (state, action) => {
      return state.filter((platform) => platform.id !== action.payload);
    },
  },
});

export const { addPlatform, deletePlatform } = platformsSlice.actions;
export default platformsSlice.reducer;
