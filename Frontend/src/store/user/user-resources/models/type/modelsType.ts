export interface DataType {
  modelId: number;
  publishDate: string;
  modelName: string;
  baseModel: string;
  trainedToken: number;
}
export interface ModelType {
  content: DataType[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}
