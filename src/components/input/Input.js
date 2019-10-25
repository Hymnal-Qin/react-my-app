import React from "react";
import styled from "styled-components";

import { black, grey2, grey4 } from "../values/colors";
import PropTypes from "prop-types";

const Input = styled.input`
	outline: none;
	padding-top: 0.8em;
	padding-bottom: 0.4em;
	font-size: 1em;
	border: none;
	background-color: transparent;
	color: ${black};
	border-bottom: 1px solid ${grey2};
	width: ${props => (props.fullWidth ? "100%" : "auto")};

	:hover {
		border-bottom: 1px solid ${grey4};
	}
	:active {
		border-bottom: 1px solid ${grey4};
	}
`;

// const Input = props => {
// 	const { type, fullWidth, ...other } = props;

// 	return (
// 		<div>
// 			<input type={type} {...other} />
// 			{/* css */}
// 			<style jsx>{`
// 				input {
// 					outline: none;
// 					padding-top: 0.8em;
// 					padding-bottom: 0.4em;
// 					font-size: 1em;
// 					border: none;
// 					background-color: transparent;
// 					color: ${black};
// 					border-bottom: 1px solid ${grey2};
// 					width: ${fullWidth ? "100%" : "auto"};
// 				}
// 				input:hover {
// 					border-bottom: 1px solid ${grey4};
// 				}
// 				input:active {
// 					border-bottom: 1px solid ${grey4};
// 				}
// 			`}</style>
// 		</div>
// 	);
// };

Input.propTypes = {
	type: PropTypes.string,
	fullWidth: PropTypes.bool
};

Input.defaultProps = {
	type: "button",
	fullWidth: false
};

export default Input;
