export interface ChatBotInfo {
  chatBotId: number;
  name: string;
  avatar: string;
  badgeUrl: string;
  modelName: string;
  totalToken: number;
  level: string;
  exp: number;
  expMax: number;
  dateOfBirth: string; // ISO date format
  gender: string;
  nation: string;
  language: string;
  education: string;
  chatBotPersonalities: string[];
  chatBotExpertises: string[];
  campaignName: string;
  campaignBadge: string;
}

export interface ChatBotIndex {
  customer: number;
  converts: number;
  expense: number;
  costToRevenueRatio: number;
  costPerOrderRatio: number;
  costPerCustomerRatio: number;
  gvm: number;
  cvr: number;
  aov: number;
}

export interface ChatBotFunction {
  name: string;
  badgeUrl: string;
}

export interface ChatBotFile {
  fileName: string;
  size: string;
  type: string;
}

export interface ChatBotResource {
  fileSlot: number;
  fileSlotMax: number;
  functionSlot: number;
  storage: number;
  storageMax: number;
  storageFile: string;
  chatBotFunctions: ChatBotFunction[];
  chatbotFiles: ChatBotFile[];
}

export interface ChatBot {
  chatBotId: number;
  chatBotInfo: ChatBotInfo;
  chatBotIndex: ChatBotIndex;
  chatBotResource: ChatBotResource;
}

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
