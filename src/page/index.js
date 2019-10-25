import React, { Suspense, lazy, Component } from "react";
import Game from "../components/Game";
import Clock from "../components/Clock";
import styled from "styled-components";
import Button from "../components/button/Button";
import PropTypes from "prop-types";
import Select from "../components/input/Select";
import File from "../components/input/File";
import Textarea from "../components/input/Textarea";
import { white } from "../components/values/colors";
import Tile from "../components/image/Tile";

const IconImage = lazy(() => import("../components/IconImage"));

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

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: "Sign In 登录"
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("跳转登录");
		const username = "qxj"; //e.target.elements[0].value;
		const path = `/login`;
		this.props.history.push(path);
	}

	render() {
		return (
			<Suspense fallback={<div>Loading</div>}>
				<Wrapper>
					<section className='btns'>
						<IconImage path={`share/`} />
						<Button
							type='button'
							theme='primary'
							disabled={false}
							onClick={() => this.props.history.push(`login`)}>
							{this.state.login}
						</Button>
						<Select fullWidth={true}>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
						</Select>
						<File></File>
						<Textarea fullWidth={true}></Textarea>
						<Tile
							image={"http://localhost:7000/images/stock/women/1.jpg"}></Tile>
					</section>

					<Clock />
					<Game />
				</Wrapper>
			</Suspense>
		);
	}
}

// function Index() {
//   return (<div></div>);
// }

export default Index;
