import create from 'zustand';
import { ArticleRequest } from '#/article';
import { fetchArticleList } from '@/apis/article';
import { IPageParams } from '#/request';

interface IArticleStore {
  articleList: ArticleRequest.FetchListResponse[];
  fetchArticleList: (params: IPageParams) => Promise<void>;
}

const useArticleStore = create<IArticleStore>(set => ({
  articleList: [],
  fetchArticleList: async (params: IPageParams) => {
    const res = await fetchArticleList(params);
    set({ articleList: res });
  },
}));

export default useArticleStore;
