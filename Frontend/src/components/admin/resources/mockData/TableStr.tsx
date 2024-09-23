import { Box, IconButton } from '@mui/material';
import {
    IconBrandSentry,
    IconChessQueen,
    IconEye,
    IconMessageChatbot,
    IconTrash,
    IconUserStar
} from '@tabler/icons-react';
import img1 from 'src/assets/images/badge/badge.png';
import img2 from 'src/assets/images/badge/badge2.png';
import img3 from 'src/assets/images/badge/badge3.png';
import { HeadCell } from '../types/HeadCell';
export const Strategy = [
    {
        bgColor: 'primary.light',
        color: 'primary.main',
        title: 'Nhóm chiến lược',
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
                    <IconChessQueen color="white" size={30} />
                </Box>
            </>
        ),
    },
    {
        bgColor: 'secondary.light',
        color: 'secondary.main',
        title: 'Chiến lược',
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
                    <IconBrandSentry color="white" size={30} />
                </Box>
            </>
        ),
    },
    {
        bgColor: 'success.light',
        color: 'success.main',
        title: 'Khách hàng sở hữu',
        total: '32.415',
        icons: (
            <>
                <Box
                    bgcolor="success.main"
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
        bgColor: 'warning.light',
        color: 'warning.main',
        title: 'Trợ lý áp dụng',
        total: '11.415',
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
                    <IconMessageChatbot color="white" size={30} />
                </Box>
            </>
        ),
    },
];
export const StrategyCells: HeadCell[] = [
    {
        dataIndex: 'id',
        numeric: false,
        disablePadding: false,
        label: 'ID Chiến lược',
    },
    {
        dataIndex: 'creationTime',
        numeric: false,
        disablePadding: false,
        label: 'Ngày tạo',
    },
    {
        dataIndex: 'strategyGroup',
        numeric: false,
        disablePadding: false,
        label: 'Nhóm chiến lược',
    },
    {
        dataIndex: 'badge',
        numeric: false,
        disablePadding: false,
        label: 'Huy hiệu',
    },
    {
        dataIndex: 'strategyName',
        numeric: false,
        disablePadding: false,
        label: 'Tên chiến lược',
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
        dataIndex: 'content',
        numeric: false,
        disablePadding: false,
        label: 'Nội dung',
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

export const StrategyRows = [
    {
        id: 'STG001',
        creationTime: '2024-09-01 08:30',
        strategyGroup: 'Nhóm A',
        badge: <img src={img1} alt="" width={40} />,
        strategyName: 'Chiến lược Tăng trưởng 2024',
        level: 'Cấp 1',
        ownedCustomers: 25,
        appliedAssistants: 3,
        summary: 'Tập trung vào thị trường mới',
        content: 'Chiến lược nhằm tăng cường sự hiện diện tại các thị trường mới nổi...',
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
        id: 'STG002',
        creationTime: '2024-09-02 09:15',
        strategyGroup: 'Nhóm B',
        badge: <img src={img2} alt="" width={40} />,
        strategyName: 'Chiến lược Giữ chân khách hàng',
        level: 'Cấp 2',
        ownedCustomers: 15,
        appliedAssistants: 4,
        summary: 'Cải thiện trải nghiệm khách hàng',
        content: 'Chiến lược này tập trung vào việc nâng cao dịch vụ sau bán hàng...',
        creator: 'Trần Thị B',
        actions: (
            <>
                <IconButton>
                    <IconEye stroke={2} style={{ color: '#5D87FF' }
                    } />
                </IconButton>
                < IconButton >
                    <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                </IconButton>
            </>
        ),
    },
    {
        id: 'STG003',
        creationTime: '2024-09-03 10:40',
        strategyGroup: 'Nhóm A',
        badge: <img src={img3} alt="" width={40} />,
        strategyName: 'Chiến lược Phát triển sản phẩm',
        level: 'Cấp 1',
        ownedCustomers: 10,
        appliedAssistants: 2,
        summary: 'Phát triển sản phẩm mới trong quý 4',
        content: 'Tập trung vào việc ra mắt các sản phẩm mới nhằm đáp ứng nhu cầu thị trường...',
        creator: 'Lê Văn C',
        actions: (
            <>
                <IconButton>
                    <IconEye stroke={2} style={{ color: '#5D87FF' }
                    } />
                </IconButton>
                < IconButton >
                    <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                </IconButton>
            </>
        ),
    },
    {
        id: 'STG004',
        creationTime: '2024-09-04 11:20',
        strategyGroup: 'Nhóm C',
        badge: <img src={img2} alt="" width={40} />,
        strategyName: 'Chiến lược Mở rộng thị trường',
        level: 'Cấp 3',
        ownedCustomers: 30,
        appliedAssistants: 5,
        summary: 'Mở rộng thị trường tại Đông Nam Á',
        content: 'Chiến lược tập trung vào việc xâm nhập và phát triển các kênh phân phối tại Đông Nam Á...',
        creator: 'Hoàng Thị D',
        actions: (
            <>
                <IconButton>
                    <IconEye stroke={2} style={{ color: '#5D87FF' }
                    } />
                </IconButton>
                < IconButton >
                    <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                </IconButton>
            </>
        ),
    },
    {
        id: 'STG005',
        creationTime: '2024-09-05 14:05',
        strategyGroup: 'Nhóm B',
        badge: <img src={img1} alt="" width={40} />,
        strategyName: 'Chiến lược Tối ưu hóa chi phí',
        level: 'Cấp 2',
        ownedCustomers: 20,
        appliedAssistants: 3,
        summary: 'Giảm thiểu chi phí sản xuất và vận hành',
        content: 'Tối ưu hóa quy trình sản xuất và cắt giảm các chi phí không cần thiết...',
        creator: 'Phạm Văn E',
        actions: (
            <>
                <IconButton>
                    <IconEye stroke={2} style={{ color: '#5D87FF' }
                    } />
                </IconButton>
                < IconButton >
                    <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                </IconButton>
            </>
        ),
    },
    {
        id: 'STG006',
        creationTime: '2024-09-06 15:30',
        strategyGroup: 'Nhóm A',
        badge: <img src={img2} alt="" width={40} />,
        strategyName: 'Chiến lược Nâng cao thương hiệu',
        level: 'Cấp 3',
        ownedCustomers: 40,
        appliedAssistants: 6,
        summary: 'Nâng cao nhận diện thương hiệu quốc tế',
        content: 'Chiến lược này tập trung vào việc xây dựng hình ảnh thương hiệu mạnh mẽ...',
        creator: 'Ngô Thị F',
        actions: (
            <>
                <IconButton>
                    <IconEye stroke={2} style={{ color: '#5D87FF' }
                    } />
                </IconButton>
                < IconButton >
                    <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                </IconButton>
            </>
        ),
    },
];
