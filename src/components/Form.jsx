import React, { Component } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
// import PropTypes from "prop-types";
import { Label, Input, Button } from "./styles/Form.styled";

class Form extends Component {
  // ({ onClick, onChange }) {
  state = {
    name: "",
    number: "",
  };

  loginInputId1 = nanoid();
  loginInputId2 = nanoid();

  // onChange={this.addToState} dla form
  addToState = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // onClick -  dla buttona - przy kliknieciu przesyla wartosc z state.name i state.number do App.jsx
  sendStateDataBackToApp = (e) => {
    e.preventDefault();
    this.props.fromFormToApp({...this.state});

    //RESET stanu
    this.setState((state) => ({ name: "", number: "" }));
    //RESET formularza/inputa
    e.target.closest("form").reset();
  };

  render() {
    return (
      <HtmlForm onChange={this.addToState}>
        <Label htmlFor={this.loginInputId1}>Name</Label>
        <Input
          type="text"
          name="name"
          id={this.loginInputId1}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor={this.loginInputId2}>Number</Label>
        <Input
          type="tel"
          name="number"
          id={this.loginInputId2}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit" onClick={this.sendStateDataBackToApp}>
          Add contact
        </Button>
      </HtmlForm>
    );
  }
}

export default Form;

// Form.propTypes = {
//   onClick: PropTypes.func,
//   onChange: PropTypes.func,
// };

const HtmlForm = styled.form`
  border: 1px solid black;
  padding: 15px;
  width: 40%;
  background-color: rgb(216, 213, 213);
  
`;
