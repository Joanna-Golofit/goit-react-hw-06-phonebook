import { nanoid } from "nanoid";

const saveToLocalStore = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const loadLocalStore = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

if (loadLocalStore("CONTACTS") === undefined) {
  saveToLocalStore("CONTACTS", [
    { id: nanoid(4), name: "RRRosie Simpson", number: "123-12-12" },
    { id: nanoid(4), name: "Hermione Kline", number: "456-45-45" },
    { id: nanoid(4), name: "Eden Clements", number: "789-78-78" },
    { id: nanoid(4), name: "Annie Copeland", number: "227-91-26" },
  ]);
}

const initialContacts = loadLocalStore("CONTACTS");
export { saveToLocalStore, loadLocalStore, initialContacts };
