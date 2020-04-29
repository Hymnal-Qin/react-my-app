import Login from "../pages/user/Login";
import Detail from "../pages/user/Detail";

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
