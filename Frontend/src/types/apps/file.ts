export interface File {
    fileId: number;
    name: string;
    size: string;
    date: string;  // or Date if you'd like to handle it as a Date object
    type: string;
    action: boolean;
}
export interface Result {
    pageNo: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
    content: File[];  // Generic type for content
}

export interface ApiResponse {
    code: number;
    message: string;
    result: Result[];
}