import Box from '@mui/material/Box';
import {
    IconBrandFlutter,
    IconEye,
    IconFunction,
    IconMessageChatbot,
    IconTrash,
    IconUserStar
} from '@tabler/icons-react';
import { HeadCell } from "../types/HeadCell";
import { IconButton } from '@mui/material';
export const Function = [
    {
        bgColor: 'primary.light',
        color: 'primary.main',
        title: 'Nhóm Function',
        total: '52',
        icons: (
            <>
                <Box
                    bgcolor="primary.main"
                    textAlign="center"
                    padding={1}
                    sx={{
                        width: 40,
                        height: 40,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <IconFunction color="white" size={30} />
                </Box>
            </>
        ),
    },
    {
        bgColor: 'secondary.light',
        color: 'secondary.main',
        title: 'Functions',
        total: '189',
        icons: (
            <>
                <Box
                    bgcolor="secondary.main"
                    textAlign="center"
                    padding={1}
                    sx={{
                        width: 40,
                        height: 40,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <IconBrandFlutter color="white" size={30} />
                </Box>
            </>
        ),
    },
    {
        bgColor: 'warning.light',
        color: 'warning.main',
        title: 'Khách hàng sở hữu',
        total: '32.415',
        icons: (
            <>
                <Box
                    bgcolor="warning.main"
                    textAlign="center"
                    padding={1}
                    sx={{
                        width: 40,
                        height: 40,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <IconUserStar color="white" size={30} />
                </Box>
            </>
        ),
    },
    {
        bgColor: 'error.light',
        color: 'error.main',
        title: 'Trợ lý áp dụng',
        total: '11.415',
        icons: (
            <>
                <Box
                    bgcolor="error.main"
                    textAlign="center"
                    padding={1}
                    sx={{
                        width: 40,
                        height: 40,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <IconMessageChatbot color="white" size={30} />
                </Box>
            </>
        ),
    },
];
export const FunctionCells: HeadCell[] = [
    {
        dataIndex: 'id',
        numeric: false,
        disablePadding: false,
        label: 'ID Function',
    },
    {
        dataIndex: 'creationTime',
        numeric: false,
        disablePadding: false,
        label: 'Ngày tạo',
    },
    {
        dataIndex: 'functionGroup',
        numeric: false,
        disablePadding: false,
        label: 'Nhóm Function',
    },
    {
        dataIndex: 'level',
        numeric: false,
        disablePadding: false,
        label: 'Level',
    },
    {
        dataIndex: 'ownedCustomers',
        numeric: false,
        disablePadding: false,
        label: 'Khách hàng sở hữu (sl)',
    },
    {
        dataIndex: 'appliedAssistants',
        numeric: false,
        disablePadding: false,
        label: 'Trợ lý áp dụng (sl)',
    },
    {
        dataIndex: 'summary',
        numeric: false,
        disablePadding: false,
        label: 'Tóm tắt',
    },
    {
        dataIndex: 'functionCode',
        numeric: false,
        disablePadding: false,
        label: 'Code Function',
    },
    {
        dataIndex: 'creator',
        numeric: false,
        disablePadding: false,
        label: 'Người tạo',
    },
    {
        dataIndex: 'actions',
        numeric: false,
        disablePadding: false,
        label: 'Hoạt động',
    },
];

export const FunctionRows = [
    {
        id: 'FUNC001',
        creationTime: '2024-09-01 08:30',
        functionGroup: 'Nhóm A',
        level: 'Cấp 1',
        ownedCustomers: 25,
        appliedAssistants: 3,
        summary: 'Hỗ trợ phân tích dữ liệu',
        functionCode: 'analyzeData2024()',
        creator: 'Nguyễn Văn A',
        actions: (
            <>
                <IconButton>
                    <IconEye stroke={2} style={{ color: '#5D87FF' }} />
                </IconButton>
                <IconButton>
                    <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                </IconButton>
            </>
        ),
    },
    {
        id: 'FUNC002',
        creationTime: '2024-09-02 09:15',
        functionGroup: 'Nhóm B',
        level: 'Cấp 2',
        ownedCustomers: 15,
        appliedAssistants: 4,
        summary: 'Quản lý khách hàng tự động',
        functionCode: 'autoManageCustomer()',
        creator: 'Trần Thị B',
        actions: (
            <>
                <IconButton>
                    <IconEye stroke={2} style={{ color: '#5D87FF' }} />
                </IconButton>
                <IconButton>
                    <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                </IconButton>
            </>
        ),
    },
    {
        id: 'FUNC003',
        creationTime: '2024-09-03 10:40',
        functionGroup: 'Nhóm A',
        level: 'Cấp 1',
        ownedCustomers: 10,
        appliedAssistants: 2,
        summary: 'Phân tích và dự đoán xu hướng',
        functionCode: 'trendPrediction()',
        creator: 'Lê Văn C',
        actions: (
            <>
                <IconButton>
                    <IconEye stroke={2} style={{ color: '#5D87FF' }} />
                </IconButton>
                <IconButton>
                    <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                </IconButton>
            </>
        ),
    },
    {
        id: 'FUNC004',
        creationTime: '2024-09-04 11:20',
        functionGroup: 'Nhóm C',
        level: 'Cấp 3',
        ownedCustomers: 30,
        appliedAssistants: 5,
        summary: 'Phát triển kênh phân phối',
        functionCode: 'channelDevelopment()',
        creator: 'Hoàng Thị D',
        actions: (
            <>
                <IconButton>
                    <IconEye stroke={2} style={{ color: '#5D87FF' }} />
                </IconButton>
                <IconButton>
                    <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                </IconButton>
            </>
        ),
    },
    {
        id: 'FUNC005',
        creationTime: '2024-09-05 14:05',
        functionGroup: 'Nhóm B',
        level: 'Cấp 2',
        ownedCustomers: 20,
        appliedAssistants: 3,
        summary: 'Tối ưu hóa quy trình vận hành',
        functionCode: 'optimizeOperation()',
        creator: 'Phạm Văn E',
        actions: (
            <>
                <IconButton>
                    <IconEye stroke={2} style={{ color: '#5D87FF' }} />
                </IconButton>
                <IconButton>
                    <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                </IconButton>
            </>
        ),
    },
    {
        id: 'FUNC006',
        creationTime: '2024-09-06 15:30',
        functionGroup: 'Nhóm A',
        level: 'Cấp 3',
        ownedCustomers: 40,
        appliedAssistants: 6,
        summary: 'Nâng cao thương hiệu',
        functionCode: 'enhanceBranding()',
        creator: 'Ngô Thị F',
        actions: (
            <>
                <IconButton>
                    <IconEye stroke={2} style={{ color: '#5D87FF' }} />
                </IconButton>
                <IconButton>
                    <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                </IconButton>
            </>
        ),
    },
];