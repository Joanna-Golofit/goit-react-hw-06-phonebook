import { configureStore } from "@reduxjs/toolkit";
import { contacts } from "./reducer";

export const store = configureStore({
  reducer: {
    contacts,
  },
});
