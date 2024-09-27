export interface ProductTag {
    tagId: number;
    tagName: string;
}

export interface Product {
    shopProductId: number;
    shopProductName: string;
    shopProductImageUrl: string;
    price: number;
    discount: number;
    productTag: ProductTag[];
}