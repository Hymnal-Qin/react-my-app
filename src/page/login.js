import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import Card from "../components/card/Card";

const Wrapper = styled.section`
	.sign {
		padding: 50px 0;
	}
	.title {
		text-align: center;
		margin-bottom: 20px;
		font-size: 24px;
	}
	.content {
    margin: 20px
		padding: 10px;
		background-color: #ffffff;
		border-radius: 5px;
		border: 1px solid #d1d2d3;
		flex-direction: column;
    display: flex;
	}
	.btn {
    padding: 4px;
		margin-top: 20px;
		background-color: #3f11a8;
		color: #ffffff;
    border-radius: 5px;
	}
`;

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			password: "",
			error: null
		};
	}

	handleChange = (e) => {
		e.preventDefault();
		const label = e.target.id;
		const value = e.target.value;
		console.log(label);
		console.log(value);
		this.setState({
			error: value
		});
	}
	render() {
		return (
			<Wrapper>
				<Container className='sign'>
					<Row>
						<Col md={{ size: 4, offset: 4 }}>
							<div className='title'>Sign in</div>
						</Col>
					</Row>
					<Row>
						<Col md={{ size: 4, offset: 4 }}>
							<div className='content'>
								<Input
									type='email'
									value={this.props.name}
									onChange={this.handleChange}
								/>
								<Input
									type='password'
									value={this.props.password}
									onChange={this.handleChange}
								/>
								{this.state.error != null && <h4>{this.state.error}</h4>}
								<Button theme='primary'>Sign In</Button>
								<Button theme='primary'>Sign Up</Button>
							</div>
						</Col>
					</Row>
				</Container>
			</Wrapper>
		);
	}
}

export default Login;
