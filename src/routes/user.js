import Login from '../pages/user/Login';
import Register from '../pages/user/Register';
import Profile from '../pages/user/Profile';
import Subscriptions from '../pages/subscription/Subscriptions';

export default {
  login: {
    path: '/user/login',
    component: Login,
  },
  register: {
    path: '/user/register',
    component: Register,
  },
  //detail: {
  //	path: (slug = ':slug') => `/user/${slug}`,
  //	component: Detail,
  //},
  profile: {
    path: '/user/profile',
    component: Profile,
    auth: true,
  },
  subscriptions: {
    path: '/user/subscriptions',
    component: Subscriptions,
    auth: true,
  },
};
