export interface Column {
    title: string | JSX.Element;
    dataIndex: string;
    render?: (value: any, record: any, rowIndex: number) => React.ReactNode;
    sort?: boolean;
    isValids?: boolean;
}