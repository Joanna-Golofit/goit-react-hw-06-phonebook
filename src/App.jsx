import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(4), name: "Rosie Simpson", number: "123-12-12"},
      { id: nanoid(4), name: "Hermione Kline",number: "456-45-45" },
      { id: nanoid(4), name: "Eden Clements", number: "789-78-78"},
    ],
    name: "",
    number: "",
  };

  // onChange={this.addToState}
  //  dla form - zapisuje kazda zmiane w stane.name
  addToState = (e) => {
    // console.log(e.target.name); // czyli ktorys z inputow
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
 
  // onClick={this.addToStateContacts}
  //  dla buttona - przy kliknieciu zapisuje wartosc z state.name i state.contacts
  addToStateContacts = (e) => {
    e.preventDefault();

    this.setState((state) => ({
      contacts: [
        ...this.state.contacts,
        { id: nanoid(4), name: this.state.name, number: this.state.number },
      ],
    }));

    //RESET stanu
    this.setState((state) => ({ name: "", number: "" }));

    //RESET formularza/inputa
    e.target.closest("form").reset();
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form
            onClick={this.addToStateContacts}
            onChange={this.addToState}
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
