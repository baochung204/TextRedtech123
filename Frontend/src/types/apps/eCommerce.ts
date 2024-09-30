import { GeneralIcon } from './icon';

export interface ProductType {
  category: any;
  name: string;
  point: number;
  discount: number;
  related: boolean;
  salesPrice: number;
  tag: string[];
  gender: string;
  rating: number;
  stock: boolean;
  qty: number;
  colors: string[];
  thumbnailUrl: string;
  id: number | string;
  created: Date;
  description: string;
}

export interface ProductFiterType {
  id: number;
  filterbyTitle?: string;
  name?: string;
  sort?: string;
  icon?: GeneralIcon | any;
  devider?: boolean;
}

export interface ProductCardProps {
  id?: string | number;
  color?: string;
  like: string;
  star: number;
  value?: string;
}
