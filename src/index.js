import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// css
import GlobalStyle from "./css/Global.style";
import {Provider} from "react-redux";
import {store} from "./modules/store";

// ========================================
const Index = () => {
    return (
        <Provider store={store} key="provider">
            {/* Global style */}
            <GlobalStyle/>
            <App/>
        </Provider>
    );
};
ReactDOM.render(<Index/>, document.getElementById("root"));