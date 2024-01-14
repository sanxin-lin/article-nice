import { IPageParams } from '#/request';
import { defHttp } from '@/utils/http';
import { ArticleRequest } from './type';
import { isArray } from 'lodash-es';
import articleJosn from '@/mocks/articles.json';

export const fetchArticleList = async (params: IPageParams) => {
  try {
    const res = await defHttp.get<ArticleRequest.FetchListResponse[]>({
      url: '',
      params,
    });
    if (isArray(res)) {
      return res;
    }
    throw new Error();
  } catch (e) {
    console.log(e);
    return [...articleJosn.data];
  }
};
