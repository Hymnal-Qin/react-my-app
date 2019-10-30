import React from "react";
import { black, white } from "../../../components/values/colors";
import Grid from "../../../components/grid/Grid";
import GridCell from "../../../components/grid/GridCell";
import Clock from "../../Clock";

const Footer = props => {
	return (
		<footer>
			<Grid alignCenter={true} style={{ marginTop: "1.5em" }}>
				<GridCell style={{ textAlign: "right", paddingRight: "1.0em" }}>
					© 2019 App, Inc.
				</GridCell>

				<GridCell style={{ textAlign: "left", paddingLeft: "1.0em" }}>
					<Clock />
				</GridCell>
			</Grid>
		</footer>
	);
};

export default Footer;
