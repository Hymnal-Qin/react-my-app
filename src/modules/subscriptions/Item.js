import React, { PureComponent, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Card } from "@components/card";
import { black, grey2, white } from "@components/values/colors";
import { routeLocal } from "@routes";
import { Icon } from "@components/icon";
import { Button } from "@components/button";
import { H4 } from "@components/typography";

import { getListByUser, remove } from "@store/subscriptions/actions";

const Item = (props) => {
	const [state, setState] = useState({ isLoading: false });
	const onUnsubscribe = (id) => {
		let check = window.confirm("Are you sure you want to unsubscribe to this crate?");
		if (check) {
			setState({ isLoading: true });

			props.remove({ id })
				.then((data) => {
					if (data) props.getListByUser();
				})
				.then(() => {
					setState({ isLoading: false });
				});

		}
	};
	const { id, crate, createdAt } = props.subscription;
	return (
		<Card style={{ width: "18em", backgroundColor: white }}>
			<p style={{ padding: "2em 3em 0 3em" }}>
				<img src={`${routeLocal}/images/crate.png`} alt={crate.name} style={{ width: "100%" }}/>
			</p>

			<div style={{ padding: "1em 1.2em" }}>
				<H4 font="secondary" style={{ color: black }}>
					{crate.name}
				</H4>

				<p style={{ color: grey2, marginTop: "1em" }}>{crate.description}</p>

				<p style={{ textAlign: "center", marginTop: "1.5em", marginBottom: "1em" }}>
					<Button
						theme="secondary"
						onClick={() => onUnsubscribe(id)}
						type="button"
						disabled={state.isLoading}
					>
						<Icon size={1.2} style={{ color: white }}>
							remove_circle_outline
						</Icon>{" "}
						Unsubscribe
					</Button>
				</p>

				<p style={{ color: grey2, marginTop: "1em", fontSize: "0.8em", textAlign: "center" }}>
					Subscribed on {new Date(parseInt(createdAt)).toDateString()}
				</p>
			</div>
		</Card>
	);
};

Item.propTypes = {
	subscription: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
	remove: PropTypes.func.isRequired,
	getListByUser: PropTypes.func.isRequired
};

const itemState = (state) => ({
	user: state.user
});

export default connect(itemState, { remove, getListByUser })(withRouter(Item));
