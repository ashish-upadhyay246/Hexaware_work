import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./BookSlice";
export const configstore = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default configstore;