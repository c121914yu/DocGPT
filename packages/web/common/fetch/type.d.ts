export type PaginationProps<T = {}> = T & {
  offset: number;
  pageSize: number;
};
export type PaginationResponse<T = any> = {
  total: number;
  list: T[];
};

export type TokenPaginationProps = {
  pageToken: string;
  pageSize: number;
};

export type TokenPaginationResponse<T = any> = {
  nextPageToken: string;
  list: T[];
};
