import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import { iceCreamReducer } from "../features/icecream/icecreamSlice";

//combine reducers is used under the hood:
const store = configureStore({
  reducer: {
    'cake': cakeReducer,
    'icecream': iceCreamReducer
  },
});

export default store;

// Infer the `RootState` type from the store  getState
export type RootState = ReturnType<typeof store.getState>
