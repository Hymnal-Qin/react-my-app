import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./page/index";
import Share from "./page/share";
import GlobalStyle from "./Global.style";

class App extends Component {
	render() {
		return (
			<div>
				<GlobalStyle />
				<Router>
					<Switch>
						<Route path={`/`} exact component={Home} />
						<Route path={`/share/`} component={Share} />
						<Route path={`/s`} component={Share} />
					</Switch>
				</Router>
			</div>
		);
	}
}
export default App;
