import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { black, grey2, grey4 } from "../values/colors";

const Select = styled.select`
	outline: none;
	padding-top: 0.8em;
	padding-bottom: 0.4em;
	font-size: 1em;
	border: none;
	background-color: transparent;
	color: ${black};
	border-bottom: 1px solid ${grey2};
	width: ${props => (props.fullWidth ? "100%" : "auto")};
	-webkit-appearance: none;
	border-radius: 0;

	:hover {
		border-bottom: 1px solid ${grey4};
	}
	:active {
		border-bottom: 1px solid ${grey4};
	}
`;

// const Select = props => {
// 	const { children, fullWidth, ...other } = props;

// 	return (
// 		<div>
// 			<select {...other}>{children}</select>
// 			{/* css */}
// 			<style jsx>{`
// 				select {
// 					outline: none;
// 					padding-top: 0.8em;
// 					padding-bottom: 0.4em;
// 					font-size: 1em;
// 					border: none;
// 					background-color: transparent;
// 					color: ${black};
// 					border-bottom: 1px solid ${grey2};
// 					width: ${fullWidth ? "100%" : "auto"};
// 					-webkit-appearance: none;
// 					border-radius: 0;
// 				}
// 				select:hover {
// 					border-bottom: 1px solid ${grey4};
// 				}
// 				select:active {
// 					border-bottom: 1px solid ${grey4};
// 				}
// 			`}</style>
// 		</div>
// 	);
// };

Select.propTypes = {
	type: PropTypes.string,
	fullWidth: PropTypes.bool
};

Select.defaultProps = {
	type: "button",
	fullWidth: false
};

export default Select;
