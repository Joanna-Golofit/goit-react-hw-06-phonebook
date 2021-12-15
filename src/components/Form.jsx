import React, { Component } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
// import PropTypes from "prop-types";
import { Label, Input, Button } from "./styles/Form.styled";
// import { addToLocalStorage } from "../utils/localStorage";


class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  componentDidMount() {
  //   console.log("Form - Mount");
  //   addToLocalStorage(this.props.contacts);
  }
  
    // componentDidMount() {
    //   console.log("Form - heja from componentDidMount");
    // }
    // componentDidUpdate() {
    //   console.log("Form - heja from componentDidUpdate");
    // }

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
    this.props.fromFormToApp({ ...this.state });

    //RESET stanu
    this.setState((state) => ({ name: "", number: "" }));
    //RESET formularza/inputa
    e.target.closest("form").reset();
  };

  render() {
    return (
      // <HtmlForm onChange={this.addToState} onSubmit={this.props.onSubmit}>
      <HtmlForm>
        <Label htmlFor={this.loginInputId1}>Name</Label>
        <Input
          onChange={this.addToState}
          type="text"
          name="name"
          value={this.state.name}
          id={this.loginInputId1}
          placeholder="Joanna Gołofit"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor={this.loginInputId2}>Number</Label>
        <Input
          onChange={this.addToState}
          type="tel"
          name="number"
          id={this.loginInputId2}
          placeholder="123-456-789"
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
  min-width: 200px;
  background-color: rgb(216, 213, 213);
  
`;
