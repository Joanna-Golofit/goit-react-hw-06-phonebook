import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import { nanoid } from "nanoid";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(4), name: "Rosie Simpson", number: "123-12-12" },
      { id: nanoid(4), name: "Hermione Kline", number: "456-45-45" },
      { id: nanoid(4), name: "Eden Clements", number: "789-78-78" },
      { id: nanoid(4), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  //  onChange  -  dla filter - zapisuje kazda zmiane w state.filter
  addFilterToState = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // onClick - dla buttona - przy kliknieciu zapisuje wartosc z state.name i state.number ktora "wrócila" z Form.jsx
  addToStateContacts = ({ name, number }) => {
    [...this.state.contacts].some((contact) => contact.name === name)
      ? alert(`Sorry, but ${name} is alredy in contacts.`)
      : this.setState((state) => ({
          contacts: [...this.state.contacts, { id: nanoid(4), name, number }],
        }));
  };

  updateFilteredContacts = () => {
    const filteredContacts = [...this.state.contacts].filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return filteredContacts;
  };

  deleteContact = (id) => {
    this.setState((state) => ({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const updateFilteredContacts = this.updateFilteredContacts();
    return (
      <>
        <Section title="Phonebook">
          <Form fromFormToApp={this.addToStateContacts} />
        </Section>
        <Section title="Contacts">
          <Filter onChange={this.addFilterToState} />
          <Contacts contacts={updateFilteredContacts} onClick={this.deleteContact} />
        </Section>
      </>
    );
  }
}

export default App;
