export interface ProductInfoType {
  productId: number;
  description: string;
  point: number;
  name: string;
  priceAfterDiscount: number;
  productImages: string[];
  productTags: string[];
  isQuantity: boolean;
  isOwn: boolean;
}
export interface ProductType {
  productInfo: ProductInfoType;
  detailInformation: string;
  userManual: string;
}
