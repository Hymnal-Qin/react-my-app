import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	HashRouter
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./page/index";
import Share from "./page/share";
import GlobalStyle from "./Global.style";
import Login from "./page/login";
const history = createBrowserHistory();
const App = () => {
	return (
		<div>
			<GlobalStyle />
			<Router history={history}>
				<Switch>
					<Route path={`/`} exact component={Home} />
					<Route path={`/share/`} component={Share} />
					<Route path={`/s`} component={Share} />
					<Route path={`/login`} component={Login} />
				</Switch>
			</Router>
		</div>
	);
};
export default App;
