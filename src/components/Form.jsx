// import React from 'react';
import { nanoid } from "nanoid";
import styled from "styled-components";

function Form() {
  const loginInputId = nanoid();

  return (
    <HtmlForm>
      <Label htmlFor={loginInputId}>Name</Label>
      <Input
        type="text"
        name="name"
        id={loginInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Button type="submit">Add contact</Button>
    </HtmlForm>
  );
}

export default Form;

const HtmlForm = styled.form`
  border: 1px solid black;
  padding: 15px;
  width: 40%;
`;

const Label = styled.label`
  display: block;
`;

const Button = styled.button`
  display: block;
  border: 1px solid lightgray;
  border-radius: 3px;
  /* background-color: #a8a6a6; */
  font-size: 10px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: lightgray;
  }
`;

const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 20px;
  &:focus {
    /* outline-style: none !important; */
    /* outline: none !important; */
    outline-color: #719ece;
    /* border-color: #719ece; */
    box-shadow: 0 0 10px #719ece;
  }
`;