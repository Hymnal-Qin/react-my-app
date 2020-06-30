import React from "react";
import PropTypes from "prop-types";

import {level2} from "@components/values/shadows";
import {black, white} from "@components/values/colors";
import {Icon} from "@components/icon";

const AlertMessage = ({text, onClick}) => (
	<div style={{
		boxShadow: level2,
		position: 'fixed',
		right: '2em',
		bottom: '2em',
		backgroundColor: black,
		color: white,
		borderRadius: '3em',
		maxWidth: '30em',
	}}>
        <span style={{
			float: 'left',
			padding: '1em 0em 1em 2em',
			marginRight: '4em',
			color: white,
		}}>
          {text}
        </span>

		<Icon
			size={1.2} style={{
			position: 'absolute',
			padding: '0.9em',
			cursor: 'pointer',
			right: '0.5em',
			top: 0,
			color: white,
		}} onClick={onClick}>
			close
		</Icon>
	</div>
)

AlertMessage.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default AlertMessage;


