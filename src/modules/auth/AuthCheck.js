import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import adminRoutes from '@routes/admin';
import crateRoutes from '@routes/crate';

const AuthCheck = (props) =>
	props.user.isAuthenticated
		? props.user.detail.role === 'ADMIN'
			? <Redirect to={adminRoutes.dashboard.path}/>
			: <Redirect to={crateRoutes.list.path}/>
		: ''
;

AuthCheck.propTypes = {
	user: PropTypes.object.isRequired,
};

const authCheckState = (state) => ({
	user: state.user,
});

export default connect(authCheckState, {})(AuthCheck);
