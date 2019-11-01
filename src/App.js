import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import {routes} from "./settings/routes";

import Layout from "./modules/common/Layout";

const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            {/* Layout 带自定义头部的布局 */}
            <Layout>
                {/* route 路由 */}
                <Switch>
                    {Object.values(routes).map((route, index) => (
                        //遍历注册路由
                        <Route
                            {...route}
                            key={index}
                            path={
                                typeof route.path === "function" ? route.path() : route.path
                            }></Route>
                    ))}
                </Switch>
            </Layout>
        </Router>
    );
};
export default App;
