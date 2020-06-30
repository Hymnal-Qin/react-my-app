import React, { Component, useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { login } from "@/store/user/actions";
import userRoutes from "@/routes/user";

// UI
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import Icon from "@/components/icon/Icon";
import Grid from "@/components/grid/Grid";
import GridCell from "@/components/grid/GridCell";
import { white } from "@/components/values/colors";
import H3 from "@/components/typography/H3";

const SignIn = (props) => {
	const [state, setState] = useState({
		user: {
			username: "18339989537",
			password: "123456"
		}
	});

	const handleChange = (e) => {
		const { user } = state;
		user[e.target.name] = e.target.value;
		setState({ user });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		props.login(state.user); // action 中的 login 函数
	};

	return (
		<Grid gutter alignCenter style={{ padding: "2em" }}>
			<GridCell gutter style={{ textAlign: "center" }}>
				<H3 font="secondary" style={{ marginBottom: "1em" }}>
					Login to your account
				</H3>

				{/* Login Form */}
				<form onSubmit={(e) => onSubmit(e)}>
					<div style={{ width: "25em", margin: "0 auto" }}>
						<Input
							type="text"
							fullWidth
							placeholder="Username/Email"
							required="required"
							name="username"
							autocomplete="username"
							style={{ marginTop: "1em" }}
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
							style={{ marginTop: "1em" }}
							value={state.user.password}
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div style={{ marginTop: "2em" }}>
						{/* Register link */}
						<Link to={userRoutes.register.path}>
							<Button type="button" style={{ marginRight: "0.5em" }}>
								Sign Up
							</Button>
						</Link>

						{/* Form submit 触发 submit 事件 */}
						<Button type="submit" theme="secondary" disabled={props.user.isLoading}>
							Sign In
							<Icon size={1.2} style={{ color: white }}>
								navigate_next
							</Icon>
						</Button>
					</div>
				</form>
			</GridCell>
		</Grid>
	);

};

SignIn.propTypes = {
	user: PropTypes.object.isRequired,
	login: PropTypes.func.isRequired
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
const loginState = (state) => ({
	user: state.user
});
// map state to props 将state中的某个数据映射到props中
// mapDispatchToProps 把各种dispatch也变成了props让你可以直接使用
// connect(mapStateToProps, mapDispatchToProps)(MyComponent)

export default connect(loginState, { login })(withRouter(SignIn));
