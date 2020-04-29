// Imports
import React from "react";
import {Link} from "react-router-dom";
// UI values
import {secondary} from "../../components/values/fonts";
import {white} from "../../components/values/colors";
import {level1} from "../../components/values/shadows";
// route
import {routes} from "../../routes";

const homePath = () => routes.home.path;

const Logo = props => {
    const {...others} = props;
    return (
        <Link to={homePath()} {...others}>
			<span
                style={{
                    fontFamily: secondary,
                    fontSize: "2em",
                    color: white,
                    textShadow: level1
                }}>
				React
			</span>
        </Link>
    );
};

export default Logo;
