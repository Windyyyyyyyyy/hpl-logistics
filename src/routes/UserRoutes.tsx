import { RouteObject } from 'react-router';
import UserLayout from '../layout';
import { About, Contact, Home, RequestQuote, Services } from '../pages';
import { PageNotFound } from '../components';
import FaqPage from '../pages/FAQ';
import GlobalLogistics from '../pages/Services/subcomponents/global-logistics';
import TransportationServices from '../pages/Services/subcomponents/transport-services';
import TruckingPackingServices from '../pages/Services/subcomponents/trucking-packing';
import WarehouseSolutions from '../pages/Services/subcomponents/warehourse-storage';

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
        children: [
          {
            path: '',
            element: <GlobalLogistics />,
          },
          {
            path: 'transport-services',
            element: <TransportationServices />,
          },
          {
            path: 'truck-pack',
            element: <TruckingPackingServices />,
          },
          {
            path: 'warehourse-storage',
            element: <WarehouseSolutions />,
          }
        ]
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
