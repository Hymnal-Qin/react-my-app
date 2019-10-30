import Login from "../../page/Login";
import Home from "../../page/Home";
// 注册路由
export default {
	home: {
		path: "/",
		component: Home,
		exact: true
	},
	login: {
		path: "/login",
		component: Login
	}
};