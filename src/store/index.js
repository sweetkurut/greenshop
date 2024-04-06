import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slices/plantsSlice";

const store = configureStore({
  reducer: {
    plants: cardSlice,
  },
});

export default store;
