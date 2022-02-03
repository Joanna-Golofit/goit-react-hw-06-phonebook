//return powinien byc w miare ok, brakuje fubkcji dodajacych i sprawdzajacych czy kontakt juz jest

import { nanoid } from "nanoid";
import styled from "styled-components";
// import PropTypes from "prop-types";
import { Label, Input, Button } from "./styles/Form.styled";
// import { useDispatch } from "react-redux";
// import { addToLocalStorage } from "../utils/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../features/actions";
import { useState } from "react";

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state.contact.contacts);
  const state = useSelector((state) => state);

  // const saveContact = (e) => {
  //   e.preventDefault();

  //   // const { name, value } = e.target;
  //   const {
  //     elements: { name, number },
  //   } = e.currentTarget;

  //   dispatch(
  //     addContact({ id: nanoid(), name: name.value, number: number.value })
  //     );
  //     console.log("saveContact", name.value, number.value);
  //     console.log("contacts z Form", contacts);
  //   //brakuje kodu
  // };
  
   const isContactInContacts = (contacts, newContactName) =>
    contacts.some(({ name }) => name === newContactName);
  
   const isContactEmpty = (newContactName, newContactNumber) =>
     newContactName === "" || newContactNumber === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isContactInContacts(contacts, name)) {
      alert(`${name} is already in contacts`);
      return;
    };
    if (isContactEmpty(name, number)) {
      alert(`Please fill in both fields!`);
      return;
    }
      dispatch(addContact({ id: nanoid(), name, number }));
    console.log("z Form - handleSubmit", name, number);
    console.log("z Form - state", state);
    console.log("z Form - contacts z handleSubmit", contacts);
    setName("");
    setNumber("");
  };

  return (
    // <HtmlForm onSubmit={saveContact}>
    // <HtmlForm onSubmit={handleSubmit}>
    <HtmlForm>
      <Label htmlFor="name">Name</Label>
      <Input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        // value={this.state.name}
        value={name}
        placeholder="Name Surname"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="number">Number</Label>
      <Input
        onChange={(e) => setNumber(e.target.value)}
        type="tel"
        name="number"
        value={number}
        // id={this.loginInputId2}
        placeholder="123-456-789"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit" onClick={handleSubmit}>
        Add contact
      </Button>
    </HtmlForm>
  );
};

// ============
// class Form extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   componentDidMount() {
//   //   console.log("Form - Mount");
//   //   addToLocalStorage(this.props.contacts);
//   }

//   // loginInputId1 = nanoid();
//   // loginInputId2 = nanoid();

//   // onChange={this.addToState} dla form
//   addToState = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   // onClick -  dla buttona - przy kliknieciu przesyla wartosc z state.name i state.number do App.jsx
//   sendStateDataBackToApp = (e) => {
//     e.preventDefault();
//     this.props.fromFormToApp({ ...this.state });

//     //RESET stanu
//     this.setState((state) => ({ name: "", number: "" }));
//     //RESET formularza/inputa
//     e.target.closest("form").reset();
//   };

//   render() {

//   }
// }

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
  background-color: rgb(223, 179, 197);
`;
