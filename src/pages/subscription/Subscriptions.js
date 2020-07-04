import React, { PureComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet/es/Helmet';
import { Grid, GridCell } from '@components/grid';
import { grey, grey2 } from '@components/values/colors';
import { H3 } from '@components/typography';
import Loading from '@layout/Loading';
import EmptyMessage from '@layout/EmptyMessage';
import SubscriptionItem from '@modules/subscriptions/Item';

import { getListByUser } from '@store/subscriptions/actions';

const Subscriptions = (props) => {

	useEffect(() => {
		props.getListByUser();
	}, []);

	const { isLoading, list } = props.subscriptions;
	return (
		<div>
			{/* SEO */}
			<Helmet>
				<title>My Subscriptions - Crate</title>
			</Helmet>

			{/* Top title bar */}
			<Grid style={{ backgroundColor: grey }}>
				<GridCell style={{ padding: '2em', textAlign: 'center' }}>
					<H3 font="secondary">My subscriptions</H3>

					<p style={{ marginTop: '1em', color: grey2 }}>The crates you are subscribed to are listed here. You can
						cancel
						anytime.</p>
				</GridCell>
			</Grid>

			{/* Product list */}
			<Grid>
				<GridCell>
					{isLoading
						? <Loading/>
						: list.length
							? list.map((subscription) => (
								<div key={subscription.id} style={{ margin: '2em', float: 'left' }}>
									<SubscriptionItem subscription={subscription}/>
								</div>
							))
							: <EmptyMessage message="You are not subscribed to any crates yet."/>
					}
				</GridCell>
			</Grid>
		</div>
	);
};

Subscriptions.propTypes = {
	subscriptions: PropTypes.object.isRequired,
	getListByUser: PropTypes.func.isRequired,
};

const subscriptionsState = (state) => ({
	subscriptions: state.subscriptionsByUser,
});

export default connect(subscriptionsState, { getListByUser })(Subscriptions);
