import Box from '@mui/material/Box';
import {
    IconEye,
    IconFile3d,
    IconMessageChatbot,
    IconTrash,
    IconUsersGroup,
    IconUserStar
} from '@tabler/icons-react';
import { HeadCell } from '../types/HeadCell';
import { IconButton } from '@mui/material';
export const Model = [
    {
        bgColor: 'primary.light',
        color: 'primary.main',
        title: 'Model',
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
                    <IconFile3d color="white" size={30} />
                </Box>
            </>
        ),
    },
    {
        bgColor: 'secondary.light',
        color: 'secondary.main',
        title: 'Tranning tokens',
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
                    <IconUsersGroup color="white" size={30} />
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
export const ModelCells: HeadCell[] = [
    {
        dataIndex: 'id',
        numeric: false,
        disablePadding: false,
        label: 'ID Model',
    },
    {
        dataIndex: 'creationTime',
        numeric: false,
        disablePadding: false,
        label: 'Ngày tạo',
    },
    {
        dataIndex: 'modelName',
        numeric: false,
        disablePadding: false,
        label: 'Tên Model',
    },
    {
        dataIndex: 'baseModel',
        numeric: false,
        disablePadding: false,
        label: 'Model Gốc',
    },
    {
        dataIndex: 'trainingTokens',
        numeric: false,
        disablePadding: false,
        label: 'Training Tokens',
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
        dataIndex: 'actions',
        numeric: false,
        disablePadding: false,
        label: 'Hoạt động',
    },
];

export const ModelRows = [
    {
        id: 'MDL001',
        creationTime: '2024-09-01',
        modelName: 'Model Dự đoán Doanh thu',
        baseModel: 'GPT-4',
        trainingTokens: 1000000,
        ownedCustomers: 12,
        appliedAssistants: 3,
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
        id: 'MDL002',
        creationTime: '2024-09-02',
        modelName: 'Model Phân tích Tâm lý',
        baseModel: 'BERT',
        trainingTokens: 800000,
        ownedCustomers: 8,
        appliedAssistants: 2,
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
        id: 'MDL003',
        creationTime: '2024-09-03',
        modelName: 'Model Tối ưu Hóa Chi phí',
        baseModel: 'GPT-3',
        trainingTokens: 1200000,
        ownedCustomers: 15,
        appliedAssistants: 4,
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
        id: 'MDL004',
        creationTime: '2024-09-04',
        modelName: 'Model Dự báo Nhu cầu',
        baseModel: 'RoBERTa',
        trainingTokens: 950000,
        ownedCustomers: 10,
        appliedAssistants: 3,
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
        id: 'MDL005',
        creationTime: '2024-09-05',
        modelName: 'Model Phân tích Đối thủ',
        baseModel: 'GPT-4',
        trainingTokens: 1300000,
        ownedCustomers: 20,
        appliedAssistants: 5,
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
        id: 'MDL006',
        creationTime: '2024-09-06',
        modelName: 'Model Dự đoán Thị trường',
        baseModel: 'T5',
        trainingTokens: 1100000,
        ownedCustomers: 18,
        appliedAssistants: 6,
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
