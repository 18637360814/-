export default [
  {
    path: '/user',
    component: '@/layouts/UserLayout',
    routes: [
      {
        path: '/user/login',
        component: '@/pages/Login/index',
      },
      { component: '404' },
    ],
  },
  {
    path: '/',
    component: '@/layouts/IndexLayout',
    routes: [
      {
        path: '/',
        component: '@/pages/Homepage/index',
      },
      {
        path: '/news',
        component: '@/pages/News/index',
      },
      // {
      //   path: '/product',
      //   component: '@/pages/Product/index',
      // },
      // {
      //   path: '/data',
      //   component: '@/pages/Data/index',
      // },
      // {
      //   path: '/quality',
      //   component: '@/pages/Quality/index',
      // },
      // {
      //   path: '/standard',
      //   component: '@/pages/Standard/index',
      // },
      // {
      //   path: '/app',
      //   component: '@/pages/App/index',
      // },
      // {
      //   path: '/expert',
      //   component: '@/pages/Expert/index',
      // },
      // {
      //   path: '/contact',
      //   component: '@/pages/Contact/index',
      // },
      { component: '404' },
    ],
  },

  { component: '404' },
];
