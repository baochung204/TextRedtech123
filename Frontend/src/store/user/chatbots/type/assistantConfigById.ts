export interface ChatBotInfoInConfigResponse {
  chatBotId: number;
  name: string;
  avatar: string;
  modelName: string;
  dateOfBirth: string;
  institution: string;
  gender: string;
  nation: string;
  language: string;
  education: string;
  campaignName: string;
  campaignBadge: string;
  chatBotPersonalities: string[];
  chatBotExpertises: string[];
}

export interface ChatBotConvertResponse {
  rate: boolean;
  note: boolean;
  email: boolean;
  address: boolean;
  phoneNumber: boolean;
  customerName: boolean;
  orderInfo: boolean;
}

export interface File {
  id: number;
  fileName: string;
  size: string;
  type: string;
}

export interface ChatBotFunction {
  name: string;
  badgeUrl: string;
}

export interface Image {
  imageUrl: string;
  fileName: string;
}

export interface Tag {
  tag_id: number;
  tag_name: string;
}

export interface Product {
  product_id: number;
  name: string;
  point: number;
  price_after_discount: number;
  amount_discount: number;
  discount: number;
  image_url: string;
  quantity: number;
  tags: Tag[];
  category_id: number;
  category_name: string;
  total_buy: number;
  total_revenue: number;
  revenue_share: number;
}

export interface ChatBotResourceInConfigResponse {
  fileSlotRemaining: number;
  storageSlotRemaining: number;
  fileSlot: number;
  storage: number;
  files: File[];
  functions: ChatBotFunction[];
  images: Image[];
  urls: string[];
  products: Product[];
}

export interface IntegrationResponse {
  integrationId: number;
  integrationName: string;
  isActive: boolean;
}
export interface chatbotConfigType {
  chatBotInfoInConfigResponse: ChatBotInfoInConfigResponse;
  chatBotConvertResponse: ChatBotConvertResponse;
  chatBotResourceInConfigResponse: ChatBotResourceInConfigResponse;
  integrationResponses: IntegrationResponse[];
  productResponses: Product[];
}
