import useArticleStore from '@/stores/article';

import Sider from './components/Sider';
import Main from './components/Main';
import './index.less';
import useMount from '@/hooks/useMount';

export default function Index() {
  const { fetchArticleList } = useArticleStore();

  useMount(() => {
    fetchArticleList({
      currentPage: 1,
      pageSize: 40,
    });
  });

  return (
    <div className="flex w-full h-full editor-container">
      <Sider />
      <Main />
    </div>
  );
}
