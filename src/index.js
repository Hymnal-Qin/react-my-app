import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// css
import GlobalStyle from "./css/Global.style";

// ========================================
const Index = () => {
	return (
		<div>
			{/* Global style */}
			<GlobalStyle />
			<App />
		</div>
	);
};
ReactDOM.render(<Index />, document.getElementById("root"));
