export interface ChatBotInfoType {
  chatBotId: number;
  startDate: string;
  name: string;
  badgeUrl: string;
  avatar: string;
  modelName: string;
  totalToken: number;
  level: string;
  exp: number;
  expMax: number;
  dateOfBirth: string;
  gender: string;
  nation: string;
  language: string;
  education: string;
  chatBotPersonalities: string[];
  chatBotExpertises: string[];
  campaignName: string;
  campaignBadge: string;
}

export interface ChatBotIndexType {
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

export interface ChatbotFile {
  fileName: string;
  size: string;
  type: string;
}

export interface ChatBotResourceType {
  fileSlot: number;
  fileSlotMax: number;
  functionSlot: number;
  storage: number;
  storageMax: number;
  storageFile: string;
  chatBotFunctions: ChatBotFunction[];
  chatbotFiles: ChatbotFile[];
}

export interface ChatBotData {
  chatBotInfo: ChatBotInfoType;
  chatBotIndex: ChatBotIndexType;
  chatBotResource: ChatBotResourceType;
}

// export interface ChatBotInfo {
//   chatBotId: number;
//   name: string;
//   avatar: string;
//   badgeUrl: string;
//   modelName: string;
//   totalToken: number;
//   level: string;
//   exp: number;
//   expMax: number;
//   dateOfBirth: string;
//   gender: string;
//   nation: string;
//   language: string;
//   education: string;
//   chatBotPersonalities: string[];
//   chatBotExpertises: string[];
//   campaignName: string;
//   campaignBadge: string;
// }

// export interface ChatBotIndex {
//   customer: number;
//   converts: number;
//   expense: number;
//   costToRevenueRatio: number;
//   costPerOrderRatio: number;
//   costPerCustomerRatio: number;
//   gvm: number;
//   cvr: number;
//   aov: number;
// }

// export interface ChatBotFunction {
//   name: string;
//   badgeUrl: string;
// }

// export interface ChatBotFile {
//   fileName: string;
//   size: string;
//   type: string;
// }

// export interface ChatBotResource {
//   fileSlot: number;
//   fileSlotMax: number;
//   functionSlot: number;
//   storage: number;
//   storageMax: number;
//   storageFile: string;
//   chatBotFunctions: ChatBotFunction[];
//   chatbotFiles: ChatBotFile[];
// }

// export interface ChatBot {
//   chatBotId: number;
//   chatBotInfo: ChatBotInfo;
//   chatBotIndex: ChatBotIndex;
//   chatBotResource: ChatBotResource;
// }
