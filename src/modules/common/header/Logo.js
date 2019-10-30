// Imports
import React from "react";
import { Link } from "react-router-dom";
import home from "../../../settings/routes/home";
import { secondary } from "../../../components/values/fonts";
import { white } from "../../../components/values/colors";
import { level1 } from "../../../components/values/shadows";

const Logo = props => {
	const { ...others } = props;
	return (
		<Link to={home.home.path} {...others}>
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
