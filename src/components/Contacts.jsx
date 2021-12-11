import PropTypes from "prop-types";
import styled from "styled-components";


function Contacts({ contacts, onClick }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <BtnDelete onClick={() => onClick(id)}>Delete</BtnDelete>
        </li>
      ))}
    </ul>
  );
}

export default Contacts

Contacts.propTypes = {
  contacts: PropTypes.array,
  onClick: PropTypes.func,
};

const BtnDelete = styled.button`
  padding: 1px;
  font-size: 12px;
  margin-left: 10px;
  margin-bottom: 5px;
  &:hover {
    background-color: black;
    color: lightgray;
  }
`