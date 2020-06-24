// Global
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import BodyBg from '../assets/img/bg.texture.png';

const GlobalStyle = createGlobalStyle`
	*${reset}
	*{
		box-sizing:border-box;
		user-select:none;
		outline:none;
		-webkit-text-size-adjust: none;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		color:#FFFFFF;
		touch-action: manipulation
	}

	html {
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
	body::-webkit-scrollbar{
		width:0;
	}
`;

export default GlobalStyle;
