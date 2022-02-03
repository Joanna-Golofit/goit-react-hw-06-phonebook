import "./App.css";
// import { useSelector } from "react-redux";
import Section from "./components/Section";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
// import { nanoid } from "nanoid";
import Filter from "./components/Filter";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";

const App = () => {
  //proby local storage:
  // const contacts = useSelector((state) => state.contact.contacts);
  //  useEffect(() => {
  //    localStorage.setItem("contacts", JSON.stringify(contacts));
  //  }, [contacts]);
  return (
    <>
      <Section title="Phonebook 6 (with redux toolkit)">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts  />
      </Section>
    </>
  );
};

export default App;
