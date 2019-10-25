import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import BodyBg from "./assets/img/bg.texture.png";

const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing:border-box;
    user-select:none;
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color:#000000;
    touch-action: manipulation
  }

html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:"Fangzheng ZY", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
}

body {
	font: 14px "Century Gothic", Futura, sans-serif;
	margin:0 auto;
	background-image: url(${BodyBg});
  transition:background-color 1.6s;
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
