import React, {Component} from "react";
import PropTypes from "prop-types";

import {messageShow, messageHide} from "../common/api/actions";

// UI
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Icon from "../../components/icon/Icon";
import Grid from "../../components/grid/Grid";
import GridCell from "../../components/grid/GridCell";
import {white} from "../../components/values/colors";
import H3 from "../../components/typography/H3";

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
            .login(this.state.user)
            .then(response => {
                if (this.props.user.error && this.props.user.error.length > 0) {
                    this.props.messageShow(this.props.user.error);

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

                    <form onSubmit={this.onSubmit}>
                        <div style={{width: "25em", margin: "0 auto"}}>
                            <Input
                                type='email'
                                fullWidth={true}
                                placeholder='Email'
                                required='required'
                                name='email'
                                style={{marginTop: "1em"}}
                                value={this.props.name}
                                onChange={this.handleChange}
                            />
                            <Input
                                type='password'
                                fullWidth={true}
                                placeholder='Password'
                                required='required'
                                name='password'
                                style={{marginTop: "1em"}}
                                value={this.props.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div style={{marginTop: "2em"}}>
                            <Button type='button' style={{marginRight: "0.5em"}}>
                                Sign Up
                            </Button>
                            <Button type='submit' theme='secondary' disabled={false}>
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

Login.defaultProps = {
    user: {},
    login: loginState,
    messageShow: messageShow,
    messageHide: messageHide
};

function loginState(state) {
    return {
        user: state.user
    };
}

export default Login;
// export default connect(
// 	loginState,
// 	{ messageShow, messageHide }
// )(withRouter(Login));
