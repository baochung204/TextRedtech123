export interface DataType {
  imageId: number;
  name: string;
  title: string;
  imageUrl: string;
  description: string;
  date: string;
}
export interface ImageType {
  content: DataType[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}
