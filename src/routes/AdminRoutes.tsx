import { RouteObject } from 'react-router';
import { AdminLayout } from '../layouts';

const AdminRoutes: Array<RouteObject> = [
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [],
  },
];

export default AdminRoutes;
