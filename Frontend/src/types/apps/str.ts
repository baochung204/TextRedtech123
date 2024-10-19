export interface Str {
    campaignName: string;
    badgeUrl: string;
    campaignId: number;
    level: string;
    summary: string;
    groupCampaignName: string;
}


export interface ApiResponse {
    content: Str[];
    last: boolean;
    pageNo: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
}