import { nanoid } from "nanoid";
import styled from "styled-components";
import PropTypes from "prop-types";

function Form({ onClick, onChange }) {
  const loginInputId1 = nanoid();
  const loginInputId2 = nanoid();

  return (
    <HtmlForm
      onChange={onChange}
    >
      <Label htmlFor={loginInputId1}>Name</Label>
      <Input
        type="text"
        name="name"
        id={loginInputId1}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor={loginInputId2}>Number</Label>
      <Input
        type="tel"
        name="number"
        id={loginInputId2}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit" onClick={onClick}>
        Add contact
      </Button>
    </HtmlForm>
  );
}

export default Form;

Form.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

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
  &:focus,
  &:active {
    outline: 0;
    border-style: none;
    box-shadow: 0 0 10px #719ece;
  }
`;
