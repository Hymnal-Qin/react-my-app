import React, { Suspense, lazy, Component } from "react";
import Game from "../modules/Game";
import Clock from "../modules/Clock";
import Button from "../components/button/Button";
import { Helmet } from "react-helmet";

import Select from "../components/input/Select";
import File from "../components/input/File";
import Textarea from "../components/input/Textarea";
import Tile from "../components/image/Tile";
import { level1 } from "../components/values/shadows";
import GridCell from "../components/grid/GridCell";
import Grid from "../components/grid/Grid";
import home from "../settings/routes/home";

const IconImage = lazy(() => import("../components/icon/IconImage"));

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: "Sign In 登录"
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("跳转登录");
		const username = "qxj"; //e.target.elements[0].value;
		const path = home.login.path;
		this.props.history.push(path);
	}

	render() {
		return (
			<Suspense fallback={<div>Loading</div>}>
				<Grid gutter={true} alignCenter={true} style={{ padding: "2em" }}>
					<Helmet>
						<title>Home</title>
					</Helmet>
					<GridCell>
						<IconImage
							url={"../../public/image/favicon/favicon.ico"}
							path={`share/`}
						/>
						<Button
							type='button'
							theme='primary'
							disabled={false}
							onClick={() => this.props.history.push(home.login.path)}>
							{this.state.login}
						</Button>
						<Select fullWidth={true}>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
						</Select>
						<File></File>
						<Textarea fullWidth={true}></Textarea>
					</GridCell>

					<GridCell>
						<Clock />
					</GridCell>

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
										image={"./image/stock/women/1.jpg"}></Tile>
								</GridCell>
							</Grid>
							<Grid>
								<GridCell justifyCenter={true}>
									<Tile
										width={170}
										height={250}
										shadow={level1}
										style={{ marginTop: "1.9em" }}
										image={"./image/stock/women/1.jpg"}></Tile>
								</GridCell>
							</Grid>
						</GridCell>
					</Grid>
				</Grid>
			</Suspense>
		);
	}
}

// function Index() {
//   return (<div></div>);
// }

export default Home;
