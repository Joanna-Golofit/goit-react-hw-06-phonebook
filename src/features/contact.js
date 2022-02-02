import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  contacts: [
    { id: nanoid(4), name: "RRRosie Simpson", number: "123-12-12" },
    { id: nanoid(4), name: "Hermione Kline", number: "456-45-45" },
    { id: nanoid(4), name: "Eden Clements", number: "789-78-78" },
    { id: nanoid(4), name: "Annie Copeland", number: "227-91-26" },
  ],
  // filter: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    // WEAZNE action.type: "contact/addContact" tak jak name z contactSlice i metoda - actions
    addContact: (state, action) => {
      // console.log(addContact- state", state);
      // console.log(addContact- action", action)

      state.contacts.push(action.payload);
    },
    // addContact: (state, action) => ({
    //  ...state,
    // contacts: [...state.contacts, action.payload],
    // }),
    deleteContact: (state, action) => {
      console.log("deleteContact - action", action);
      // console.log("state.contacts", state.contacts);
      console.log("deleteContact - action.payload.id", action.payload.id);
      state.contacts = state.contacts.filter(
        (user) => user.id !== action.payload.id
      );
      // state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    filterContacts: (state, action) => {
      console.log("filterContacts - action", action);
      state.contacts = state.contacts.filter((user) =>
        user.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
