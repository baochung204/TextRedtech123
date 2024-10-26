export interface ProductInfoType {
  productId: number;
  name: string;
  description: string;
  category: string;
  point: number;
  priceAfterDiscount: number;
  productImages: string[];
  productTags: string[];
  isQuantity: boolean;
  isOwn: boolean;
}

export interface Campaign {
  badgeUrl: string;
  campaignName: string;
  groupCampaign: string;
  level: number;
}

export interface Model {
  modelName: string;
  baseModel: string;
  trainedToken: number;
}

export interface FunctionDetail {
  name: string;
  badgeUrl: string;
}

export interface KnowledgeFile {
  fileName: string;
  size: string;
  type: string;
}

export interface AssistantPack {
  name: string;
  gender: string;
  dateOfBirth: string;
  education: string;
  nation: string;
  language: string;
  maxFileQuantity: string;
  maxStorage: string;
  expertise: string[];
  personality: string[];
  fileNames: string[];
  functionNames: string[];
  model: Model;
  campaign: Campaign;
}

export interface DetailInformationType {
  detailInformation: string;
  campaign: Campaign;
  model: Model;
  function: FunctionDetail;
  knowledgeFile: KnowledgeFile;
  assistantPack: AssistantPack;
  unit: string;
}

export interface ProductType {
  productInfo: ProductInfoType;
  userManual: string;
  detailInformation: DetailInformationType;
}
