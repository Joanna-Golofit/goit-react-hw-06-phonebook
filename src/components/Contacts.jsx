import PropTypes from "prop-types";
// import styled from "styled-components";

function Contacts({contacts}) {
  return (
    <ul>
      {contacts.map(({id, name, number}) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
}

export default Contacts

Contacts.propTypes = {
  contacts: PropTypes.array,
};