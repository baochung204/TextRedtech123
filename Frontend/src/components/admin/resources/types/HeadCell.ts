export interface HeadCell {

    title: string;
    dataIndex?: string;
    render?: (value: any, record: any, rowIndex: number) => React.ReactNode;
    sort?: boolean;
    isValids?: boolean;

}