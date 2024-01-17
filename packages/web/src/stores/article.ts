import create from 'zustand';
import { ArticleRequest } from '#/article';
import { fetchArticleList } from '@/apis/article';
import { IPageParams } from '#/request';

interface IArticleStore {
  articleList: ArticleRequest.FetchListResponse[];
  fetchArticleList: (params: IPageParams) => Promise<void>;

  currentArticle: ArticleRequest.FetchListResponse | null;
  currentArticleMdContent: string;
  changeCurrentArticle: (article: ArticleRequest.FetchListResponse) => void;
  changeCurrentArticleMdContent: (content: string) => void;
}

const useArticleStore = create<IArticleStore>(set => ({
  articleList: [],
  fetchArticleList: async (params: IPageParams) => {
    const res = await fetchArticleList(params);
    set({ articleList: res });
  },

  currentArticle: null,
  currentArticleMdContent: '',
  changeCurrentArticle: article => {
    set({ currentArticle: article });
  },
  changeCurrentArticleMdContent: content => {
    set({ currentArticleMdContent: content });
  },
}));

export default useArticleStore;
