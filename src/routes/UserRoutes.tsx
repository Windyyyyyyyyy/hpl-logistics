import { RouteObject } from 'react-router';
import UserLayout from '../layout';
import { About, Contact, Home, RequestQuote, Services } from '../pages';
import { PageNotFound } from '../components';
import FaqPage from '../pages/FAQ';

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
        path: 'FAQ',
        element: <FaqPage />,
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
