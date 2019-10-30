// Imports
import PropTypes from "prop-types";
import styled from "styled-components";
import { level1, level2, level3, level4 } from "../values/shadows";
import { className } from "postcss-selector-parser";

// 修改样式的同时添加属性，同时也可以通过这种方法引入第三方的样式，只需要设置className属性即可
const Icon = styled.i.attrs({ className: "material-icons" })`
	font-size: ${props => props.size}em;
	line-height: inherit;
	vertical-align: middle;
	// cursor: pointer;
	// display: flex;
	// justify-content: center;
	// align-items: center;
`;
// // Component
// const Icon = props => {
// 	const { children, size, ...other } = props;

// 	return (
// 		<i className='material-icons' {...other}>
// 			{children}

// 			{/* language=CSS */}
// 			<style jsx>{`
// 				i {
// 					font-size: ${size}em;
// 					line-height: inherit;
// 					vertical-align: middle;
// 				}
// 			`}</style>
// 		</i>
// 	);
// };

// Component Properties
Icon.propTypes = {
	size: PropTypes.number
};
Icon.defaultProps = {
	size: 1
};

export default Icon;
