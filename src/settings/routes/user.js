import Login from "../../page/user/Login";
import Detail from "../../page/user/Detail";

export default  {
  login: {
    path: '/user/login',
    component: Login
  },
  detail: {
    path: (slug = ":slug") => `/user/${slug}`,
    component: Detail
  }
}