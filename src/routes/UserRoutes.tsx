import { RouteObject } from 'react-router';
import UserLayout from '../layout';
import { About, Contact, Home, Services } from '../pages';
import { PageNotFound } from '../components';

const UserRoutes: Array<RouteObject> = [
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: 'about',
        element: <About />,
      },

      {
        path: 'services',
        element: <Services />,
      },

      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },

  {
    path: '*',
    element: <PageNotFound />,
  },
];

export default UserRoutes;
