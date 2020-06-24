import styled from 'styled-components';

import { level1 } from '../values/shadows';

const Card = styled.div`
	border-radius: 0.2em;
	font-family: 'Roboto', sans-serif;
	box-shadow: ${level1};
`;

// const Card = props => {
// 	const { children, ...other } = props;
// 	return (
// 		<div {...other}>
// 			{children}
// 			{/* css  */}
// 			<style jsx>{`
// 				.div {
// 					border-radius: 0.2em;
// 					font-family: "Roboto", sans-serif;
// 					box-shadow: ${level1};
// 				}
// 			`}</style>
// 		</div>
// 	);
// };
export default Card;
