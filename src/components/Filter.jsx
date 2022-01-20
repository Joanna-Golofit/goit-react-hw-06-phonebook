import { Label, Input } from "./styles/Form.styled";
import { useDispatch } from "react-redux";
import { filterContacts } from "react-redux";


const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        onChange={(e) => dispatch(filterContacts(e.target.value))}
        title="Please provide a name."
      />
    </>
  );
};

export default Filter;
