import PropTypes from 'prop-types';
import styled from 'styled-components';

import { white, black, primary, secondary, grey2 } from '../values/colors';
import { primary as primaryGradient, secondary as secondaryGradient } from '../values/gradients';
import { level1, level2, level3, level4 } from '../values/shadows';

// 样式组件
const Button = styled.button`
	padding: 0.7em 1.7em;
	border: none;
	border-radius: 1.4em;
	text-transform: uppercase;
	font-family: 'Roboto', sans-serif;
	cursor: pointer;
	outline: none;
  	hidefocus: hidefocus;
	font-size: 1em;
	color: ${(props) => (props.theme !== 'none' ? white : black)};
	box-shadow: ${(props) => (props.theme !== 'none' ? level2 : 'none')};
	background-color: ${(props) =>
		props.theme === 'primary' ? primary : props.theme === 'secondary' ? secondary : 'transparent'};
	background-image: ${(props) =>
		props.theme === 'primary' ? primaryGradient : props.theme === 'secondary' ? secondaryGradient : 'none'};

	:hover {
		box-shadow: ${level3};
	}

	:active {
		box-shadow: ${level4};
	}

	:disabled {
		color: ${white};
		box-shadow: ${level1};
		background-color: ${grey2};
		background-image: none;
	}
`;

// //函数组件写法
// const Button = props => {
// 	//将所有传递的元素取出
// 	//children 传递过来的子标签
// 	//type disabled theme
// 	//...other
// 	const { children, type, disabled, theme, ...other } = props;
// 	return (
//       <button type={type} disabled={disabled} {...other}>
// 			{children}
// 			{/* css样式 */}
// 			<style jsx>
// 				{`
// 					button {
// 						margin: 0.4em;
// 						padding: 0.7em 1.7em;
// 						border: none;
// 						border-radius: 1.4em;
// 						text-transform: uppercase;
// 						font-family: "Roboto", sans-serif;
// 						cursor: pointer;
// 						outline: none;
// 						font-size: 1em;
// 						color: ${theme !== "none" ? white : black};
// 						box-shadow: ${theme !== "none" ? level2 : "none"};
// 						background-color: ${theme === "primary"
// 							? primary
// 							: theme === "secondary"
// 							? secondary
// 							: "transparent"};
// 						background-image: ${theme === "primary"
// 							? primaryGradient
// 							: theme === "secondary"
// 							? secondaryGradient
// 							: "none"};
// 					}
// 					button:hover {
// 						box-shadow: ${level3};
// 					}
// 					button:active {
// 						box-shadow: ${level4};
// 					}
// 					button:disabled {
// 						color: ${white};
// 						box-shadow: ${level1};
// 						background-color: ${grey2};
// 						background-image: none;
// 					}
// 				`}
// 			</style>
// 		</button>

// 	);
// };
//props类型定义
Button.propTypes = {
	type: PropTypes.string,
	disabled: PropTypes.bool,
	theme: PropTypes.string,
};
//props默认值
Button.defaultProps = {
	type: 'button',
	disabled: false,
	theme: 'none',
};

//向外部暴露组件
export default Button;
