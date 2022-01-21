import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const initialStateValue = {
  contacts: [
    { id: nanoid(4), name: "Rosie Simpson", number: "123-12-12" },
    { id: nanoid(4), name: "Hermione Kline", number: "456-45-45" },
    { id: nanoid(4), name: "Eden Clements", number: "789-78-78" },
    { id: nanoid(4), name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: { value: initialStateValue },
  reducers: {
    addContact: (state, action) => {
      state.value = action.payload;
    },
    deleteContact: (state, action) => {
      state.value = initialStateValue;
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;