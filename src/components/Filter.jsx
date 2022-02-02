import { Label, Input } from "./styles/Form.styled";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../features/actions";


const Filter = () => {
  const dispatch = useDispatch();
const filter = useSelector((state) => state.contact.filter);
  
  return (
    <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(filterContacts(e.target.value))}
        title="Please provide a name."
      />
    </>
  );
};

export default Filter;
