import React from "react";
import Todo from "../modules/Todo";
import JX from "../modules/JX";
import $ from "jquery";

const Search = () => {
    return (
        <div>
            <Todo/>
            <JX
                promise={$.getJSON(
                    "https://api.github.com/search/repositories?q=javascript&sort=stars"
                )}
            />
        </div>
    );
}

export default Search;