export interface DataType {
  fileId: number;
  name: string;
  size: string;
  date: string;
  type: string;
  action: boolean;
}
export interface FilesType {
  content: DataType[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}
