import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tile = styled.div`
	${({ height, width, style }) => Object.assign({ height, width }, style)};
	background-image: url(${(props) => props.image});
	background-size: 100% auto;
	box-shadow: ${(props) => (props.shadow ? props.shadow : 'none')};
`;

//const Div = styled.div`
//	background-image: url(${props => props.image});
//	background-size: 100% auto;
//	box-shadow: ${props => props.shadow ? props.shadow : 'none'};
//`;
//
//const Tile = props => {
//	const { children, image, width, height, style, shadow, ...others } = props;
//
//	return (
//		<Div style={Object.assign({ height, width }, style)} image={image} shadow={shadow} {...others}>
//			{children}
//		</Div>
//	);
//};

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
	width: PropTypes.number,
	height: PropTypes.number,
	shadow: PropTypes.string,
};

Tile.defaultProps = {
	style: {},
	width: '100%',
	height: '100%',
};
export default Tile;
