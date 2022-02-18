import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
import { initialContacts } from "../utils/localStorage";

const initialState = {
  contacts: initialContacts,
  // contacts: [
  //   { id: nanoid(4), name: "RRRosie Simpson", number: "123-12-12" },
  //   { id: nanoid(4), name: "Hermione Kline", number: "456-45-45" },
  //   { id: nanoid(4), name: "Eden Clements", number: "789-78-78" },
  //   { id: nanoid(4), name: "Annie Copeland", number: "227-91-26" },
  // ],
  filter: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    // WEAZNE action.type: "contact/addContact" tak jak name z contactSlice i metoda - actions
    addContact: (state, action) => ({
      ...state,
      contacts: [...state.contacts, action.payload],
    }),
    // addContact: (state, action) => {
    //   state.contacts.push(action.payload);
    // },

    // deleteContact: (state, action) => {
    //   console.log("deleteContact - action", action);
    //   // console.log("state.contacts", state.contacts);
    //   console.log("deleteContact - action.payload.id", action.payload.id);
    //   state.contacts = state.contacts.filter(
    //     (user) => user.id !== action.payload.id
    //   );
    // },

    deleteContact: (state, action) => ({
      ...state,
      contacts: [
        ...state.contacts.filter(({ id }) => id !== action.payload.id),
      ],
    }),

    // filterContacts: (state, action) => {
    //   console.log("filterContacts - action", action);
    //   // const oldContacts = {...state.contacts};
    //   state.contacts = !action.payload
    //     ? state.contacts
    //     : state.contacts.filter((user) =>
    //         user.name.toLowerCase().includes(action.payload.toLowerCase())
    //       );
    // },

    filterContacts: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
  },
});
console.log("contacts.js - contactSlice", contactSlice);

export const { addContact, deleteContact, filterContacts } = contactSlice.actions;
export default contactSlice.reducer;
