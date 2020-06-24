import styled from 'styled-components';
import { primary, secondary } from '../values/fonts';
import PropTypes from 'prop-types';

const H6 = styled.h6`
	font-family: ${(props) => (props.font === 'primary' ? primary : secondary)}, serif;
	font-size: 1.25em;
`;

// Component Properties
H6.propTypes = {
	font: PropTypes.string,
};

H6.defaultProps = {
	font: 'primary',
};

export default H6;
