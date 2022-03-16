import { VISITOR, ADMIN, LOGGED_IN } from './auth-types';

export default [
  {
    path: '/dashboard',
    pageName: 'DashboardLayout',
    auth: LOGGED_IN,
    children: [
      {
        path: null,
        pageName: 'ProfilePage',
        auth: LOGGED_IN,
      },
      {
        path: 'products',
        pageName: 'ProductsPanelPage',
        auth: ADMIN,
      },
      {
        path: 'product-form',
        pageName: 'ProductFormPage',
        auth: ADMIN,
      },
    ],
  },
  {
    path: '/',
    pageName: 'PageLayout',
    children: [
      {
        path: null,
        pageName: 'HomePage',
      },
      {
        path: 'servicePage',
        pageName: 'ServicePage',
      },
      {
        path: 'login',
        pageName: 'LoginPage',
        auth: VISITOR,
      },
      {
        path: 'register',
        pageName: 'RegisterPage',
        auth: VISITOR,
      },
      {
        path: '*',
        pageName: 'ErrorPage',
      },
    ],
  },
];
