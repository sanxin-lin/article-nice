import { type RouteObject } from 'react-router-dom';
import ArticleEditor from '@/views/ArticleEditor';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <ArticleEditor />,
  },
];

export default routes;
