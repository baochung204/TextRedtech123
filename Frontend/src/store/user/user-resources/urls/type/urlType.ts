export interface DataType {
  urlId: number;
  url: string;
  description: string;
  title: string;
}
export interface UrlType {
  content: DataType[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}
