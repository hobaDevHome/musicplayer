// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./slice/tracksSlice";

import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
