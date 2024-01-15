import { IPageParams } from '#/request';
import { defHttp } from '@/utils/http';
import { ArticleRequest } from '#/article';
import { isArray } from 'lodash-es';
import articleJosn from '@/mocks/articles.json';

export const fetchArticleList = async (params: IPageParams) => {
  try {
    throw new Error();
    const res = await defHttp.get<ArticleRequest.FetchListResponse[]>({
      url: '',
      params,
    });
    if (isArray(res)) {
      return res;
    }
    throw new Error();
  } catch (e) {
    // console.log(e);
    console.log(88);
    return [...articleJosn.data];
  }
};
