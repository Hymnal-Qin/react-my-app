import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Grid, GridCell } from '../../components/grid';
import { Helmet } from 'react-helmet';
import { grey3 } from '../../components/values/colors';

const Dashboard = () => (
	<div>
		<Helmet>
			<title>Dashboard - Admin - Crate</title>
		</Helmet>

		{/* Page Content */}
		<Grid style={{ padding: '2em' }}>
			<GridCell>
				<p style={{ textAlign: 'center', color: grey3 }}>Nothing here yet. Choose an item from admin menu.</p>
			</GridCell>
		</Grid>
	</div>
);

Dashboard.propTypes = {
	user: PropTypes.object.isRequired,
};

const dashboardState = (state) => ({
	user: state.user,
});

export default connect(dashboardState, {})(Dashboard);
