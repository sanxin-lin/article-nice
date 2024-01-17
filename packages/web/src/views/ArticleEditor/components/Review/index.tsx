import ReactMarkdown from 'react-markdown';
import './index.less';
import useArticleStore from '@/stores/article';

export default function index() {
  const { currentArticleMdContent } = useArticleStore();
  return (
    <div className="relative editor-review-container">
      <ReactMarkdown className="h-full editor-review-wrapper">
        {currentArticleMdContent}
      </ReactMarkdown>
    </div>
  );
}
