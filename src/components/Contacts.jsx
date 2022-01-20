//tu juz zaczelam przerabiac...
// import PropTypes from "prop-types";
import styled from "styled-components";
// import { addToLocalStorage } from "../utils/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/actions";

const Contacts = () => {
  const dispatch = useDispatch();
  return (
    <ul>
      {this.props.contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <BtnDelete onClick={() => dispatch(deleteContact(id))}>
            Delete
          </BtnDelete>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;  



// Contacts.propTypes = {
//   contacts: PropTypes.array,
//   onClick: PropTypes.func,
// };

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