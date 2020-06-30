import React, { Component, useState } from "react";
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { register } from "@store/user/actions";
import userRoutes from '@routes/user';

// UI
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import Icon from '@components/icon/Icon';
import Grid from '@components/grid/Grid';
import GridCell from '@components/grid/GridCell';
import { white } from "@components/values/colors";
import H3 from '@components/typography/H3';

const SignUp = (props) => {
	const [state, setState] = useState({
		user: {
			username: '',
			email: '',
			password: '',
		},
	})

	const handleChange = (e) => {
		const { user } = state;
		user[e.target.name] = e.target.value;
		setState({ user, });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		props.register(state.user); // action 中的 login 函数
	}
	return (
		<Grid gutter alignCenter style={{ padding: '2em' }}>
			<GridCell gutter style={{ textAlign: 'center' }}>
				<H3 font="secondary" style={{ marginBottom: '1em' }}>
					Create an account
				</H3>

				{/* Login Form */}
				<form onSubmit={(e) => onSubmit(e)}>
					<div style={{ width: '25em', margin: '0 auto' }}>
						<Input
							type="text"
							fullWidth
							placeholder="Username/Email"
							required="required"
							name="username"
							autocomplete="username"
							style={{ marginTop: '1em' }}
							value={state.user.username}
							onChange={(e) => handleChange(e)}
						/>
						<Input
							type="password"
							fullWidth
							placeholder="Password"
							required="required"
							name="password"
							autocomplete="current-password"
							style={{ marginTop: '1em' }}
							value={state.user.password}
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div style={{ marginTop: '2em' }}>
						{/* Register link */}
						<Link to={userRoutes.login.path}>
							<Button type="button" style={{ marginRight: '0.5em' }}>
								Sign In
							</Button>
						</Link>

						{/* Form submit 触发 submit 事件 */}
						<Button type="submit" theme="secondary" disabled={props.isLoading}>
							Sign Up
							<Icon size={1.2} style={{ color: white }}>
								navigate_next
							</Icon>
						</Button>
					</div>
				</form>
			</GridCell>
		</Grid>
	)
}

SignUp.propTypes = {
	user: PropTypes.object.isRequired,
	register: PropTypes.func.isRequired,
};

// redux 统一管理state 并映射到 props 不需要 defaultProps
// Login.defaultProps = {
//     user: {},
//     login: loginState,
//     messageShow: messageShow,
//     messageHide: messageHide
// };

// export default Login;

// map state to props 将state中的某个数据映射到props中
// function loginState(state) {
//     return {
//         user: state.user
//     };
// }
const registerState = (state) => ({
	user: state.user,
});
// map state to props 将state中的某个数据映射到props中
// mapDispatchToProps 把各种dispatch也变成了props让你可以直接使用
// connect(mapStateToProps, mapDispatchToProps)(MyComponent)

export default connect(registerState, { register })(withRouter(SignUp));
