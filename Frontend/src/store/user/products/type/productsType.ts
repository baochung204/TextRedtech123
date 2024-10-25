interface DataType {
  productId: number;
  productName: string;
  categoryName: string;
  price: number;
  discount: number;
  imageUrl: string;
  isOwn: boolean;
}
export interface ProductsType {
  content: DataType[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}
