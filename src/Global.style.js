import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
body {
	font: 14px "Century Gothic", Futura, sans-serif;
	margin: 20px;
}

ol,
ul {
	padding-left: 30px;
}

.board-row:after {
	clear: both;
	content: "";
	display: table;
}

.status {
	margin-bottom: 10px;
}

.square {
	background: #fff;
	border: 1px solid #999;
	float: left;
	font-size: 24px;
	font-weight: bold;
	line-height: 34px;
	height: 58px;
	margin-right: -1px;
	margin-top: -1px;
	padding: 0;
	text-align: center;
	width: 58px;
}

.square:focus {
	outline: none;
}

.kbd-navigation .square:focus {
	background: #ddd;
}

.game {
	display: flex;
	flex-direction: column;
}

.game-info {
	margin-left: 20px;
}
`;

export default GlobalStyle;
