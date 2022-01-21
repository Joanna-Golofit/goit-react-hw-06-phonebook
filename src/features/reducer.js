import { createReducer } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { addContact, deleteContact, filterContacts } from "./actions";

const initialState = {
  contacts: [
    { id: nanoid(4), name: "Rosie Simpson", number: "123-12-12" },
    { id: nanoid(4), name: "Hermione Kline", number: "456-45-45" },
    { id: nanoid(4), name: "Eden Clements", number: "789-78-78" },
    { id: nanoid(4), name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

export const contacts = createReducer(initialState, {
  [addContact]: (state, action) => ({
    ...state,
    contacts: [...state.contacts, action.payload],
  }),
  [deleteContact]: (state, action) => ({
    ...state,
    contacts: [...state.contacts.filter(({ id }) => id !== action.payload)],
  }),
  [filterContacts]: (state, action) => ({ ...state, filter: action.payload }),
});
