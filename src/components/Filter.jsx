import { nanoid } from "nanoid";
import { Label, Input } from "./styles/Form.styled";
import PropTypes from "prop-types";


const Filter = ({ onChange }) => {
  const loginInputId = nanoid();

  return (
    <>
      <Label htmlFor={loginInputId}>Find contacts by name</Label>
      <Input type="text" name="filter" id={loginInputId}  onChange={onChange} />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func,
};