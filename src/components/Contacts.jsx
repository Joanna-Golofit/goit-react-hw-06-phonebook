import PropTypes from "prop-types";
import styled from "styled-components";
import React, { Component } from 'react'
// import { addToLocalStorage } from "../utils/localStorage";

   


class Contacts extends Component {
  // ({ contacts, onClick }) {

   componentDidMount() {
    console.log("Contacts - heja from  Mount");
    // addToLocalStorage(this.props.contacts);
  }
   componentDidUpdate() {
    console.log("Contacts - heja from  Update");
  }
   componentWillUnmount() {
    console.log("Contacts - heja from  !! Unmount never happens");
  }



  render() {

    return (
      <ul>
        {this.props.contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <BtnDelete onClick={() => this.props.onClick(id)}>Delete</BtnDelete>
          </li>
        ))}
      </ul>
    );
  }
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