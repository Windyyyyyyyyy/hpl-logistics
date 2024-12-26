import { createBrowserRouter } from 'react-router';
import UserRoutes from './UserRoutes';
import AdminRoutes from './AdminRoutes';

const AppRoutes = createBrowserRouter([...UserRoutes, ...AdminRoutes]);

export default AppRoutes;
