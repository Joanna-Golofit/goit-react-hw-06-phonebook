import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section";
import Form from "./components/Form";
import Contacts from "./components/Contacts";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form />
        </Section>
        <Section title="Contacts">
          <Contacts />
        </Section>
      </>
    );
  }
}

export default App;
