import styled from 'styled-components';
import { primary, secondary } from '../values/fonts';
import PropTypes from 'prop-types';

const H4 = styled.h4`
	font-family: ${(props) => (props.font === 'primary' ? primary : secondary)}, serif;
	font-size: 1.75em;
`;

// Component Properties
H4.propTypes = {
	font: PropTypes.string,
};

H4.defaultProps = {
	font: 'primary',
};

export default H4;
