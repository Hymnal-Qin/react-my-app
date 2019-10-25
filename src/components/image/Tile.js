import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Tile = props => {
	const { children, image, width, height, style, shadow, ...others } = props;
	const Div = styled.div`
		width: ${width};
		height: ${height};
		background-image: url(${image});
		background-size: 100% auto;
		box-shadow: ${shadow ? shadow : "none"};
	`;
	return (
		<Div style={Object.assign({ height, width }, style)} {...others}>
			{children}
		</Div>
	);
};

// const Tile = props => {
// 	const { children, image, width, height, style, shadow, ...others } = props;

// 	return (
// 		<div style={Object.assign({ height, width }, style)} {...others}>
// 			{children}

// 			{/* language=CSS */}
// 			<style jsx>{`
//         div {
//           background-image:url('${image}');
//           background-size: 100% auto;
//           box-shadow: ${shadow ? shadow : "none"};
//         }
//       `}</style>
// 		</div>
// 	);
// };

Tile.propTypes = {
	image: PropTypes.string.isRequired,
	style: PropTypes.object,
	width: PropTypes.string,
	height: PropTypes.string,
	shadow: PropTypes.string
};

Tile.defaultProps = {
	style: {},
	width: "100px",
	height: "100px"
};
export default Tile;
