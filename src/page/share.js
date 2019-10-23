import React from "react";
import Todo from "../components/TodoApp";
import JX from "../components/JX";
import $ from "jquery";

const Share = () => {
return (
	<div>
		<Todo />
		<JX
			promise={$.getJSON(
				"https://api.github.com/search/repositories?q=javascript&sort=stars"
			)}
		/>
	</div>
);
}

export default Share;