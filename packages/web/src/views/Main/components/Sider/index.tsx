import useRequest from '@/hooks/useRequest';
import { fetchArticleList } from '@/apis/article';
import useMount from '@/hooks/useMount';

import './index.less';
import AddButton from '../AddButton';

export default function Index() {
  const { run, data } = useRequest(fetchArticleList, {
    manual: true,
  });

  useMount(() => {
    run({
      pageSize: 40,
      currentPage: 1,
    });
  });

  return (
    <div className="flex-col h-full main-sider-container">
      <AddButton />
    </div>
  );
}
