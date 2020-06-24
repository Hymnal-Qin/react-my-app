import styled from 'styled-components';
import { primary, secondary } from '../values/fonts';
import PropTypes from 'prop-types';

const H2 = styled.h2`
	font-family: ${(props) => (props.font === 'primary' ? primary : secondary)}, serif;
	font-size: 3em;
`;

// Component Properties
H2.propTypes = {
	font: PropTypes.string,
};

H2.defaultProps = {
	font: 'primary',
};

export default H2;
