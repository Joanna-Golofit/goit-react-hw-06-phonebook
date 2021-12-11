import styled from "styled-components";

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 20px;
  &:focus,
  &:active {
    outline: 0;
    border: 2px solid transparent;
    box-shadow: 0 0 10px #719ece;
  }
`;

export const Button = styled.button`
  display: block;
  border: 1px solid gray;
  border-radius: 3px;
  font-size: 12px;
  cursor: pointer;
  padding: 5px;
  &:hover {
    background-color: black;
    color: lightgray;
  }
`;
