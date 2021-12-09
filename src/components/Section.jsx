import PropTypes from "prop-types";
import styled from "styled-components";

const Section = ({ title, children }) => {
  return (
    <>
      <H1>{title}</H1>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object, // 1 dziecko
  // children: PropTypes.array, // wiecej niz jedno dziecko

  // children: PropTypes.oneOfType([
  //   PropTypes.array,
  //   PropTypes.object,
  // ]),
};

export default Section;

const H1 = styled.h1`
font-size: 30px;
font-weight: 300;
`;
