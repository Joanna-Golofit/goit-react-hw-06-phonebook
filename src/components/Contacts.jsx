// import React from 'react'
// import PropTypes from "prop-types";
// import styled from "styled-components";


function Contacts({contacts}) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}
        </li>
      ))}
    </ul>
  );
}

export default Contacts
