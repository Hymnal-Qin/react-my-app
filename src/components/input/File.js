// Imports
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// UI Imports
import { grey2, black, white } from "../values/colors";
import { primary, secondary } from "../values/gradients";
import { level1, level3, level4 } from "../values/shadows";
import Icon from "../icon/Icon";

const Div = styled.div`
	position: relative;
	display: inline-block;
`;

const Label = styled.label`
	display: inline-block;
	padding: 0.8em 1.8em;
	border: none;
	border-radius: 1.4em;
	text-transform: uppercase;
	font-family: "Roboto", sans-serif;
	cursor: pointer;
	outline: none;
	font-size: 1em;
	color: ${black};
	:hover {
		box-shadow: ${level3};
	}
	:active {
		box-shadow: ${level4};
	}
	:disabled {
		color: ${white};
		box-shadow: ${level1};
		background-color: ${grey2};
		background-image: none;
	}
`;

const Input = styled.input`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	font-size: 1;
	width: 0;
	height: 100%;
	opacity: 0;
`;
// Component
const File = props => {
	const { text, style, name, ...other } = props;

	return (
		<Div style={style}>
			<Label htmlFor={`file-upload-${name}`}>
				<Icon size={1.2}>file_upload</Icon> {text}
			</Label>
			<Input type='file' name={name} id={`file-upload-${name}`} {...other} />
		</Div>
	);
};
// const File = props => {
// 	const { text, style, name, ...other } = props;

// 	return (
// 		<div>
// 			<div className='file-upload' style={style}>
// 				<label htmlFor={`file-upload-${name}`} className='file-upload__label'>
// 					<Icon size={1.2}>file_upload</Icon> {text}
// 				</label>
// 				<input
// 					className='file-upload__input'
// 					type='file'
// 					name={name}
// 					id={`file-upload-${name}`}
// 					{...other}
// 				/>
// 			</div>

// 			{/* language=CSS */}
// 			<style jsx>
// 				{`
// 					.file-upload {
// 						position: relative;
// 						display: inline-block;
// 					}

// 					.file-upload__label {
// 						display: block;
// 						padding: 0.8em 1.8em;
// 						border: none;
// 						border-radius: 1.4em;
// 						text-transform: uppercase;
// 						font-family: "Roboto", sans-serif;
// 						cursor: pointer;
// 						outline: none;
// 						font-size: 1em;
// 						color: ${black};
// 					}
// 					.file-upload__label:hover {
// 						box-shadow: ${level3};
// 					}
// 					.file-upload__label:active {
// 						box-shadow: ${level4};
// 					}
// 					.file-upload__label:disabled {
// 						color: ${white};
// 						box-shadow: ${level1};
// 						background-color: ${grey2};
// 						background-image: none;
// 					}

// 					.file-upload__input {
// 						position: absolute;
// 						left: 0;
// 						top: 0;
// 						right: 0;
// 						bottom: 0;
// 						font-size: 1;
// 						width: 0;
// 						height: 100%;
// 						opacity: 0;
// 					}
// 				`}
// 			</style>
// 		</div>
// 	);
// };

// Component Properties
File.propTypes = {
	text: PropTypes.string,
	name: PropTypes.string,
	style: PropTypes.object
};
File.defaultProps = {
	text: "none",
	name: "file",
	style: {}
};

export default File;
