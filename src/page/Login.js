import React, { Component } from "react";
import { Helmet } from "react-helmet";

import SignIn from "../modules/user/SignIn";
import Grid from "../components/grid/Grid";
import GridCell from "../components/grid/GridCell";
import Tile from "../components/image/Tile";
import { level1 } from "../components/values/shadows";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			password: "",
			error: null
		};
	}

	handleChange = e => {
		e.preventDefault();
		const label = e.target.id;
		const value = e.target.value;
		console.log(label);
		console.log(value);
		this.setState({
			error: value
		});
	};
	render() {
		return (
			<Grid gutter={true} alignCenter={true} style={{ padding: "2em" }}>
				{/* SEO */}
				<Helmet>
					<title>Login to your account</title>
				</Helmet>

				{/* Left Content - Image Collage */}
				<GridCell>
					<Grid gutter={true} alignCenter={true}>
						<GridCell justifyCenter={true}>
							<Tile
								width={300}
								height={530}
								shadow={level1}
								image={"./image/stock/women/1.jpg"}></Tile>
						</GridCell>
						<GridCell>
							<Grid>
								<GridCell justifyCenter={true}>
									<Tile
										width={170}
										height={250}
										shadow={level1}
										image={"./image/stock/women/2.jpg"}></Tile>
								</GridCell>
							</Grid>
							<Grid>
								<GridCell justifyCenter={true}>
									<Tile
										width={170}
										height={250}
										shadow={level1}
										style={{ marginTop: "1.9em" }}
										image={"./image/stock/women/3.jpg"}></Tile>
								</GridCell>
							</Grid>
						</GridCell>
					</Grid>
				</GridCell>

				<GridCell justifyCenter={true} style={{ textAlign: "center" }}>
					<SignIn></SignIn>
				</GridCell>
			</Grid>
		);
	}
}

export default Login;
