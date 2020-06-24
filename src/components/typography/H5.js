import styled from 'styled-components';
import { primary, secondary } from '../values/fonts';
import PropTypes from 'prop-types';

const H5 = styled.h5`
	font-family: ${(props) => (props.font === 'primary' ? primary : secondary)}, serif;
	font-size: 1.5em;
`;

// Component Properties
H5.propTypes = {
	font: PropTypes.string,
};

H5.defaultProps = {
	font: 'primary',
};

export default H5;
