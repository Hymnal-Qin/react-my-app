import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';
// UI values
import {white} from '@components/values/colors';
import {primary, secondary} from '@components/values/gradients';
import {level1} from '@components/values/shadows';


const MenuItem = (props) => {
	const isActiveRoute = () => {
		const currentSection = props.location.pathname.split('/')[1];

		return (
			currentSection === props.to.split('/')[1] && currentSection === props.section ||
			props.location.pathname === props.to ||
			props.active
		);
	}
	return(<Link
			to={props.to}
			style={Object.assign(
				{
					padding: '0.6em 1em',
					textTransform: 'uppercase',
					color: white,
					outline: 'none',
					hidefocus: 'hidefocus'
				},
				isActiveRoute()
					? {
						backgroundImage: props.type === 'secondary' ? secondary : primary,
						borderRadius: '1.4em',
						boxShadow: level1,
					}
					: props.style,
			)}>
			{props.children}
		</Link>)
}

// Component Properties
MenuItem.propTypes = {
	to: PropTypes.string.isRequired,
	type: PropTypes.string,
	active: PropTypes.bool,
	style: PropTypes.object,
};
MenuItem.defaultProps = {
	type: 'secondary',
	active: false,
	style: {},
};

export default withRouter(MenuItem);
