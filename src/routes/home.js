import Home from '../pages/home/Home';
import Men from '../pages/home/Men';
import Women from '../pages/home/Women';
import HowItWorks from '../pages/home/HowItWorks';
import WhatsNew from '../pages/home/WhatsNew';
// 注册路由
export default {
  home: {
    path: '/',
    component: Home,
    exact: true,
  },
  men: {
    path: '/men',
    component: Men,

  },
  women: {
    path: '/women',
    component: Women,
  },
  howItWorks: {
    path: '/how-it-works',
    component: HowItWorks,
  },
  whatsNew: {
    path: '/whats-new',
    component: WhatsNew
  }
};
