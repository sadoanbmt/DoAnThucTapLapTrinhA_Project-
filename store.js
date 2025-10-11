import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slices/bookSlice";
import accountSlice from "./slices/accountSlice";
import creationSlice from "./slices/creationSlice";

export const store = configureStore({
  reducer: {
    account: accountSlice,
    books: bookSlice,
    creation: creationSlice
  },
});