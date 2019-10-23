import React, { Suspense } from "react";
import Game from "../components/Game";
import Clock from "../components/Clock";
import IconImage from "../components/IconImage";
import styled from "styled-components";

const Wrapper = styled.section`
	height: 100vh;
	display: flex;
	align-items: flex-start;
	padding: 1rem 0.5rem;
	justify-content: space-evenly;
	transition: all 0.9s;
	.params {
		margin-right: 1rem;
	}
	.colorSet {
		position: fixed;
		bottom: 1rem;
		right: 3rem;
		padding: 0 1rem;
		z-index: 999;
	}
	.colorNav {
		position: relative;
		height: 100vh;
		width: 11.8rem;
		margin-right: 1.5rem;
		.colors {
			display: flex;
			flex-wrap: wrap;
			align-content: flex-start;
			height: 100vh;
			overflow-y: scroll;
		}
	}
	.btns {
		position: fixed;
		top: 1rem;
		right: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;

const Index = () => {
	return (
		<Suspense fallback={<div>Loading</div>}>
			<Wrapper>
				<section className='btns'>
					<IconImage path={`share/`} />
				</section>

				<Clock />
				<Game />
			</Wrapper>
		</Suspense>
	);
};

// function Index() {
//   return (<div></div>);
// }

export default Index;
