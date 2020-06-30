import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Helmet } from "react-helmet/es/Helmet";
import { Grid, GridCell } from "@components/grid";
import { grey, grey2 } from "@components/values/colors";
import H3 from "@components/typography/H3";

import Loading from "@layout/Loading";
import EmptyMessage from "@layout/EmptyMessage";
import CrateItem from "@modules/crate/Item";

import { getList as getCratesList } from "@store/crate/actions";

const List = (props) => {

	useEffect(() => {
		props.getCratesList('ASC')
	}, [])

	return (
		<div>
			{/* SEO */}
			<Helmet>
				<title>Crates for everyone! - Crate</title>
			</Helmet>

			{/* Top title bar */}
			<Grid style={{ backgroundColor: grey }}>
				<GridCell style={{ padding: '2em', textAlign: 'center' }}>
					<H3 font='secondary'>Crates for everyone!</H3>

					<p style={{ marginTop: '1em', color: grey2 }}>You can choose crate which suits your need. You can also
						subscribe to multiple crates.</p>
				</GridCell>

				{/* Crate List */}
				<Grid>
					<GridCell>
						{props.crates.isLoading
							? <Loading/>
							: props.crates.list.length > 0
								? props.crates.list.map(crate => (
									<div key={crate.id} style={{ margin: '2em', float: 'left' }}>
										<CrateItem crate={crate}/>
									</div>
								))
								: <EmptyMessage message='No crates to show'/>
						}
					</GridCell>
				</Grid>
			</Grid>
		</div>
	)
}

List.propTypes = {
  crates: PropTypes.object.isRequired,
  getCratesList: PropTypes.func.isRequired,
};

const listState = (state) => ({
  crates: state.crates,
});

export default connect(listState, { getCratesList })(List);
