import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  //   initialState: initialState,
  initialState,
  name: "icecream",
  reducers: {
    ordered: (state) => {
      state.numberOfIceCreams--;
    },
    restock: (state, action) => {
      state.numberOfIceCreams += action.payload;
    },
  },
});

//named export:
export const iceCreamActions = iceCreamSlice.actions;
export const iceCreamReducer = iceCreamSlice.reducer;
//default export:
export default iceCreamSlice.reducer;
