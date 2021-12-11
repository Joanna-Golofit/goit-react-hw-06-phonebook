import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(4), name: "Rosie Simpson" },
      { id: nanoid(4), name: "Hermione Kline" },
      { id: nanoid(4), name: "Eden Clements" },
    ],
    name: "",
  };

  //  dla inputa - zapisuje kazda zmiane w stane.name
  addNameToStateName = (e) => {
    // console.log(e.target.value); // czyli input
    this.setState((state) => ({ name: e.target.value }));
  };

  //  dla buttona - przy kliknieciu zapisuje wartosc z state.name w state,contacts
  addNameToStateContacts = (e) => {
    e.preventDefault();

    this.setState((state) => ({
      contacts: [
        ...this.state.contacts,
        { id: nanoid(4), name: this.state.name },
      ],
    }));
    // console.log("value", e.target.previousSibling.value); // czyli input
    e.target.previousSibling.value = "";
  };;


  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form
            onClick={this.addNameToStateContacts}
            // onSubmit={this.addContactToList}
            onChange={this.addNameToStateName}
          />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}

export default App;
