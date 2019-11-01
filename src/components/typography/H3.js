import styled from "styled-components";
import {primary, secondary} from "../values/fonts";
import PropTypes from "prop-types";

const H3 = styled.h3`
  font-family: ${props =>
    props.font === "primary" ? primary : secondary}, serif;
  font-size: 2em;
`;

// Component Properties
H3.propTypes = {
    font: PropTypes.string
}
H3.defaultProps = {
    font: 'primary'
}

export default H3
