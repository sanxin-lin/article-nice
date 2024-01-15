// import { ArticleRequest } from '#/article';
// import useArticleStore from '@/stores/article';
// import { List } from 'antd';
// import { LockOutlined } from '@ant-design/icons';
// import SettingMenu from '../SettingMenu';

// import './index.less';

// const renderArticle = (item: ArticleRequest.FetchListResponse) => {
//   return (
//     <List.Item className="flex-col justify-between article-item">
//       <div className="flex items-center article-item-top">
//         <div className="flex items-center">
//           <LockOutlined className="article-lock-icon" />
//           <div className="article-title">{item.title}</div>
//         </div>
//         <SettingMenu />
//       </div>
//       <div className="article-time">{item.updateTime}</div>
//     </List.Item>
//   );
// };

// export default function index() {
//   const { articleList } = useArticleStore();

//   return (
//     <List
//       className="cursor-pointer article-list-container"
//       size="small"
//       split
//       dataSource={articleList}
//       renderItem={renderArticle}
//     />
//   );
// }
