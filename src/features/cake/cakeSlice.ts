import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buyCake: (state, action) => {
      //RTK FEATURE: the reducer does not have to be pure! (immer is used behind the scenes)
      state.numberOfCakes -= action.payload;
    },
    reStock: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;
