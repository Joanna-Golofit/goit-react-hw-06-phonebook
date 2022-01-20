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
      ? alert(`Sorry, but ${name} is already in contacts.`)
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
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    }));
  };

  addToLocalStorage = () => {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  };

  componentDidUpdate() {
    this.addToLocalStorage();
  }

  componentDidMount() {
    console.log("App - Mount");
  let contactsFromStorage = localStorage.getItem("contacts");
  contactsFromStorage
    ? this.setState({ contacts: JSON.parse(contactsFromStorage) })
    : this.addToLocalStorage();
  }

  render() {
    //tak trzeba bo chce wynik funkcji przekazac,a nie funkcje
    const updateFilteredContacts = this.updateFilteredContacts();
    // const addToLocalStorage = this.addToLocalStorage();
    return (
      <>
        <Section title="Phonebook 6 with redux toolkit">
          <Form
            fromFormToApp={this.addToStateContacts}
            // onSubmit={this.addToLocalStorage} // nie tak?
            // onSubmit={addToLocalStorage}
          />
        </Section>
        <Section title="Contacts">
          <Filter onChange={this.addFilterToState} />
          <Contacts
            contacts={updateFilteredContacts}
            onClick={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
