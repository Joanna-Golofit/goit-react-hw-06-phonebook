import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "Name", phone: "123123123" }

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