import React, {Component} from "react";
import PropTypes from "prop-types";

import {messageShow, messageHide} from "../../services/common/api/actions";

// UI
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Icon from "../../components/icon/Icon";
import Grid from "../../components/grid/Grid";
import GridCell from "../../components/grid/GridCell";
import {white} from "../../components/values/colors";
import H3 from "../../components/typography/H3";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {login} from "../../services/user/api/action";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: "",
                password: ""
            }
        };
    }

    handleChange = e => {
        let user = this.state.user;
        user[e.target.name] = e.target.value;
        this.setState({
            user
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.messageShow("Logging in, please wait...");
        this.props
            .login(this.state.user)//action 中的 login 函数
            .then(response => {
                if (this.props.user.error && this.props.user.error.length > 0) {
                    this.props.messageShow(this.props.user.error);

                    //超时
                    window.setTimeout(() => {
                        this.props.messageHide();
                    }, 5000);
                } else {
                    this.props.messageHide();
                }
            })
            .catch(error => {
                this.props.messageShow(this.props.user.error);

                window.setTimeout(() => {
                    this.props.messageHide();
                }, 5000);
            });
    };

    render() {
        const {isLoading, error} = this.props.user;
        return (
            <Grid gutter={true} alignCenter={true} style={{padding: "2em"}}>
                <GridCell style={{textAlign: "center"}}>
                    <H3 font='secondary' style={{marginBottom: "1em"}}>
                        Login to your account
                    </H3>

                    {/* Login Form */}
                    <form onSubmit={this.onSubmit}>
                        <div style={{width: "25em", margin: "0 auto"}}>
                            <Input
                                type='email'
                                fullWidth={true}
                                placeholder='Email'
                                required='required'
                                name='email'
                                style={{marginTop: "1em"}}
                                value={this.state.user.email}
                                onChange={this.handleChange}
                            />
                            <Input
                                type='password'
                                fullWidth={true}
                                placeholder='Password'
                                required='required'
                                name='password'
                                style={{marginTop: "1em"}}
                                value={this.state.user.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div style={{marginTop: "2em"}}>
                            <Button type='button' style={{marginRight: "0.5em"}}>
                                Sign Up
                            </Button>
                            {/* Form submit 触发 submit 事件 */}
                            <Button type='submit' theme='secondary' disabled={isLoading}>
                                Sign In
                                <Icon size={1.2} style={{color: white}}>
                                    navigate_next
                                </Icon>
                            </Button>
                        </div>
                    </form>
                </GridCell>
            </Grid>
        );
    }
}

Login.propTypes = {
    user: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    messageShow: PropTypes.func.isRequired,
    messageHide: PropTypes.func.isRequired
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
const loginState = (state) => {
    return {
        user: state.user
    }
}
// map state to props 将state中的某个数据映射到props中
// mapDispatchToProps 把各种dispatch也变成了props让你可以直接使用
//connect(mapStateToProps, mapDispatchToProps)(MyComponent)

export default connect(
    loginState,
    {login, messageShow, messageHide}
)(withRouter(Login));
