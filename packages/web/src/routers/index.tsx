import { type RouteObject } from 'react-router-dom';
import Main from '@/views/Main';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
  },
];

export default routes;
