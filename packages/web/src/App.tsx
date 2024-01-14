import { useRoutes } from 'react-router-dom';
import routes from '@/routers';
import './App.less';

function App() {
  return <div className="app-container">{useRoutes(routes)}</div>;
}

export default App;
