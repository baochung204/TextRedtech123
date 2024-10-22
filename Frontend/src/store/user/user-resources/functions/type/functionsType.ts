export interface DataType {
  functionId: number;
  functionName: string;
  level: string;
  badgeUrl: string;
  summary: string;
  groupFunctionName: string;
}
export interface FunctionsType {
  content: DataType[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}
