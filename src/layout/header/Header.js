import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// UI
import {primary} from "../../components/values/gradients";
import {level1} from "../../components/values/shadows";
import {Grid, GridCell} from "../../components/grid";
// Module
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Logo from "./Logo";
// route
import {routes} from "../../routes";

const loginPath = () => routes.login.path;
const search = () => routes.search.path;

const Header = props => {
    const Header = styled.header`
		background-image: ${primary};
		box-shadow: ${level1};
		padding: 0 2em;
		height: 5em;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
	`;

    return (
        <Header>
            <Grid alignCenter={true} style={{marginTop: "1.5em"}}>
                <GridCell>
                    {/* Logo */}
                    <Logo style={{float: "left"}}/>
                    {/* Left Menu */}
                    <Menu
                        style={{float: "left", marginTop: "0.5em", marginLeft: "2em"}}>
                        <MenuItem to={search()}>Men</MenuItem>

                        <MenuItem to={search()}>Women</MenuItem>

                        <MenuItem to={search()}>How It Works</MenuItem>

                        <MenuItem to={search()}>What's New</MenuItem>
                    </Menu>
                </GridCell>

                <GridCell style={{textAlign: "right"}}>
                    {/* Right Menu */}
                    <Menu>
                        <MenuItem to={loginPath()}>SignIn</MenuItem>

                        <MenuItem to={search()}>SignUp</MenuItem>
                    </Menu>
                </GridCell>
            </Grid>
        </Header>
    );
};

// Component Properties
Header.propTypes = {
    user: PropTypes.object.isRequired
};

Header.defaultProps = {
    user: {}
};

export default Header;
