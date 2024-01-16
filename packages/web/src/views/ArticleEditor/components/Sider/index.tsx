import { useRef, useEffect, useCallback } from 'react';
import './index.less';
import AddButton from '../AddButton';
import { ArticleRequest } from '#/article';
import useArticleStore from '@/stores/article';
import { List } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import SettingMenu from '../SettingMenu';
import useVirtualList from '@/hooks/useVirtualList';

import './index.less';
import useCreation from '@/hooks/useCreation';

export default function Index() {
  const { articleList } = useArticleStore();

  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  const [_virtualList] = useVirtualList(articleList, {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: 60,
    overscan: 50,
  });

  useEffect(() => {
    console.log(_virtualList);
  }, [_virtualList]);

  const virtualList = useCreation(
    () => _virtualList.map(({ data }) => ({ ...data })),
    [_virtualList],
  );

  const renderArticle = useCallback((item: ArticleRequest.FetchListResponse) => {
    return (
      <List.Item className="flex-col justify-between article-item">
        <div className="flex items-center article-item-top">
          <div className="flex items-center">
            <LockOutlined className="article-lock-icon" />
            <div className="article-title">{item.title}</div>
          </div>
          <SettingMenu />
        </div>
        <div className="article-time">{item.updateTime}</div>
      </List.Item>
    );
  }, []);

  return (
    <div className="flex flex-col h-full overflow-auto editor-sider-container">
      <AddButton />
      <div ref={containerRef} className="overflow-y-auto cursor-pointer article-list-container">
        <div ref={wrapperRef}>
          <List
            ref={wrapperRef}
            size="small"
            split
            dataSource={virtualList}
            renderItem={renderArticle}
          />
        </div>
      </div>
    </div>
  );
}
