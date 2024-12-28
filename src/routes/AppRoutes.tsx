import { createBrowserRouter } from 'react-router';
import UserRoutes from './UserRoutes';

const AppRoutes = createBrowserRouter([...UserRoutes]);

export default AppRoutes;
