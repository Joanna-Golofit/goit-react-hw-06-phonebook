import { createAction } from "@reduxjs/toolkit";


//tak jak name: "contact" w contactSlice
const addContact = createAction("contact/addContact");
const deleteContact = createAction("contact/deleteContact");
const filterContacts = createAction("contact/filterContacts");

export { addContact, deleteContact, filterContacts };
