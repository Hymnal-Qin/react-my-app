import styled from 'styled-components';
import { primary, secondary } from '../values/fonts';
import PropTypes from 'prop-types';

const H1 = styled.h1`
	font-family: ${(props) => (props.font === 'primary' ? primary : secondary)}, serif;
	font-size: 4em;
`;

// Component Properties
H1.propTypes = {
	font: PropTypes.string,
};

H1.defaultProps = {
	font: 'primary',
};

export default H1;
