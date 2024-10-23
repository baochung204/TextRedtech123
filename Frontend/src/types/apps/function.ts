export interface Functions {
    functionId: string;
    functionName: string;
    badgeUrl: string;
    level: string;
    summary: string;
    groupFunctionName: string;
}
export interface Result {
    content: Functions[];
    last: boolean;
    pageNo: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
}
