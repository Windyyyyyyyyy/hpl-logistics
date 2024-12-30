import { RouteObject } from 'react-router';
import UserLayout from '../layout';
import { About, Contact, Home, RequestQuote, Services } from '../pages';
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

      {
        path: 'request-quote',
        element: <RequestQuote />,
      },
    ],
  },

  {
    path: '*',
    element: <PageNotFound />,
  },
];

export default UserRoutes;
