interface DataType {
  campaignId: number;
  campaignName: string;
  level: string;
  badgeUrl: string;
  summary: string;
  groupCampaignName: string;
}
export interface CampaignsType {
  content: DataType[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}
