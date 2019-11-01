import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// css
import GlobalStyle from "./css/Global.style";
import {APP_URL, NODE_ENV} from "./settings/config/env";

// ========================================
const Index = () => {

    // require("dotenv").config();
    console.log(`host:${APP_URL} model: ${NODE_ENV}`);
    return (
        <div>
            {/* Global style */}
            <GlobalStyle/>
            <App/>
        </div>
    );
};
ReactDOM.render(<Index/>, document.getElementById("root"));