// Imports
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Icon = styled.i`
	font-size: ${props => props.size}em;
	line-height: inherit;
	vertical-align: middle;
`;
// // Component
// const Icon = props => {
// 	const { children, size, ...other } = props;

// 	return (
// 		<i className='material-icons' {...other}>
// 			{children}

// 			{/* language=CSS */}
// 			<style jsx>{`
// 				i {
// 					font-size: ${size}em;
// 					line-height: inherit;
// 					vertical-align: middle;
// 				}
// 			`}</style>
// 		</i>
// 	);
// };

// Component Properties
Icon.propTypes = {
	size: PropTypes.number
};
Icon.defaultProps = {
	size: 1
};

export default Icon;
