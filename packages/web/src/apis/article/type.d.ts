export declare namespace ArticleRequest {
  export interface FetchListResponse {
    id: number;
    outId: string;
    userId: number;
    title: string;
    markdown: Nullable<string>;
    styleModelList: Nullable<string[]>;
    style: Nullable<string>;
    codeTheme: Nullable<string>;
    isPublic: number;
    createTime: string;
    updateTime: string;
  }
}
