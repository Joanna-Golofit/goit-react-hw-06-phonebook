//tu juz zaczelam przerabiac...
// import PropTypes from "prop-types";
import styled from "styled-components";
// import { addToLocalStorage } from "../utils/localStorage";
import { useDispatch } from "react-redux";
import { deleteContact } from "../features/actions";
import { useSelector } from "react-redux";


const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts);
  //proby local storage:
  //   const contactsFromStorage = [];

  //   const loadLocalStore = (key) => {
  //   try {
  //     const serializedState = localStorage.getItem(key);
  //     return serializedState === null ? undefined : JSON.parse(serializedState);
  //   } catch (error) {
  //     console.error("Get error: ", error.message);
  //   }
  // };

  const state = useSelector((state) => state);
  console.log("z Contacts - contacts", contacts);
  console.log("z Contacts - state", state);
  console.log("z Contacts - state.contact.contacts", state.contact.contacts);

  const handleDelete = (id) => {
    dispatch(deleteContact({ id }));
    console.log("z Contacts - handleDelete", id);
  };
  const filter = useSelector((state) => state.contact.filter);

  return (
    <ul>
      {contacts
        .filter(({ name }) =>
          filter !== ""
            ? name.toLowerCase().includes(filter.toLowerCase())
            : true
        )
        .map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            {/* <BtnDelete onClick={() => {dispatch(deleteContact(id))}}> */}
            <BtnDelete onClick={() => handleDelete(id)}>Delete</BtnDelete>
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