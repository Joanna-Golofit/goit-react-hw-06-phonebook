//tu juz zaczelam przerabiac...
// import PropTypes from "prop-types";
import styled from "styled-components";
// import { addToLocalStorage } from "../utils/localStorage";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { deleteContact } from "../features/actions";
import { useSelector } from "react-redux";


const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.value.contacts);
  console.log("contacts z Contacts", contacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
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
  padding: 2px;
  font-size: 12px;
  margin-left: 10px;
  margin-bottom: 5px;
  border-radius: 3px;
  border: 1px solid black;
  background-color: rgb(223, 179, 197);
  &:hover {
    background-color: black;
    color: rgb(223, 179, 197);
  }
`;