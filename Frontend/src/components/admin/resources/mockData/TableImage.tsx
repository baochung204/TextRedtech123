import Box from '@mui/material/Box';
import {
    IconDatabaseSmile,
    IconEye,
    IconPhoto,
    IconPhotoScan,
    IconTrash,
    IconUsers
} from '@tabler/icons-react';
import icontext from 'src/assets/images/logos/R-Point.png';
import { HeadCell } from '../types/HeadCell';
import { IconButton } from '@mui/material';
export const Image = [
    {
        bgColor: 'primary.light',
        color: 'primary.main',
        title: 'Hình ảnh',
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
                    <IconPhotoScan color="white" size={30} />
                </Box>
            </>
        ),
    },
    {
        bgColor: 'secondary.light',
        color: 'secondary.main',
        title: 'Khách hàng',
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
                    <IconUsers color="white" size={30} />
                </Box>
            </>
        ),
    },
    {
        bgColor: 'warning.light',
        color: 'warning.main',
        title: 'Dung lượng',
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
                    <IconDatabaseSmile color="white" size={30} />
                </Box>
            </>
        ),
    },
    {
        bgColor: 'error.light',
        color: 'error.main',
        title: 'Hình ảnh/khách hàng',
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
                    <IconPhoto color="white" size={30} />
                </Box>
            </>
        ),
    },
];
export const ImageCells: HeadCell[] = [
    {
        dataIndex: 'id',
        numeric: false,
        disablePadding: false,
        label: 'ID',
    },
    {
        dataIndex: 'creationTime',
        numeric: false,
        disablePadding: false,
        label: 'Ngày tạo',
    },
    {
        dataIndex: 'creator',
        numeric: false,
        disablePadding: false,
        label: 'Người tạo (Khách hàng)',
    },
    {
        dataIndex: 'image',
        numeric: false,
        disablePadding: false,
        label: 'Hình ảnh',
    },
    {
        dataIndex: 'imageName',
        numeric: false,
        disablePadding: false,
        label: 'Tên ảnh',
    },
    {
        dataIndex: 'title',
        numeric: false,
        disablePadding: false,
        label: 'Tiêu đề',
    },
    {
        dataIndex: 'description',
        numeric: false,
        disablePadding: false,
        label: 'Mô tả',
    },
    {
        dataIndex: 'size',
        numeric: true,
        disablePadding: false,
        label: 'Dung lượng (MB)',
    },
    {
        dataIndex: 'url',
        numeric: false,
        disablePadding: false,
        label: 'URL',
    },
    {
        dataIndex: 'actions',
        numeric: false,
        disablePadding: false,
        label: 'Hoạt động',
    },
];

export const ImageRows = [
    {
        id: 'IMG001',
        creationTime: '2024-09-01',
        creator: 'Nguyễn Văn A',
        image: (
            <>
                <img src={icontext} alt="" width={40} />
            </>
        ),
        imageName: 'Ảnh sản phẩm A',
        title: 'Sản phẩm A - Ảnh chụp từ bên trái',
        description: 'Hình ảnh mô tả sản phẩm A từ góc nhìn bên trái',
        size: 1.5,
        url: 'https://example.com/images/img001.jpg',
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
        id: 'IMG002',
        creationTime: '2024-09-02',
        creator: 'Trần Thị B',
        image: (
            <>
                <img src={icontext} alt="" width={40} />
            </>
        ),
        imageName: 'Ảnh sản phẩm B',
        title: 'Sản phẩm B - Ảnh chụp từ phía trước',
        description: 'Hình ảnh mô tả sản phẩm B từ góc nhìn chính diện',
        size: 2.1,
        url: 'https://example.com/images/img002.jpg',
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
        id: 'IMG003',
        creationTime: '2024-09-03',
        creator: 'Lê Văn C',
        image: (
            <>
                <img src={icontext} alt="" width={40} />
            </>
        ),
        imageName: 'Ảnh sản phẩm C',
        title: 'Sản phẩm C - Ảnh chụp chi tiết',
        description: 'Hình ảnh cận cảnh sản phẩm C để thấy rõ chi tiết',
        size: 1.8,
        url: 'https://example.com/images/img003.jpg',
        actions: (
            <>
                <IconButton>
                    <IconEye stroke={2} style={{ color: '#5D87FF' }} />
                </IconButton>
                <IconButton>
                    <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                </IconButton>
            </>
        ),    },
    {
        id: 'IMG004',
        creationTime: '2024-09-04',
        creator: 'Hoàng Thị D',
        image: (
            <>
                <img src={icontext} alt="" width={40} />
            </>
        ),
        imageName: 'Ảnh sản phẩm D',
        title: 'Sản phẩm D - Ảnh chụp từ bên phải',
        description: 'Hình ảnh sản phẩm D từ góc nhìn bên phải',
        size: 2.3,
        url: 'https://example.com/images/img004.jpg',
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
        id: 'IMG005',
        creationTime: '2024-09-05',
        creator: 'Phạm Văn E',
        image: (
            <>
                <img src={icontext} alt="" width={40} />
            </>
        ),
        imageName: 'Ảnh sản phẩm E',
        title: 'Sản phẩm E - Ảnh chụp từ góc trên',
        description: 'Hình ảnh sản phẩm E từ góc nhìn trên xuống',
        size: 1.6,
        url: 'https://example.com/images/img005.jpg',
        actions: (
            <>
                <IconButton>
                    <IconEye stroke={2} style={{ color: '#5D87FF' }} />
                </IconButton>
                <IconButton>
                    <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                </IconButton>
            </>
        ),    },
    {
        id: 'IMG006',
        creationTime: '2024-09-06',
        creator: 'Ngô Thị F',
        image: (
            <>
                <img src={`icontext`} alt="" width={40} />
            </>
        ),
        imageName: 'Ảnh sản phẩm F',
        title: 'Sản phẩm F - Ảnh chụp từ xa',
        description: 'Hình ảnh sản phẩm F từ góc xa để thấy toàn cảnh',
        size: 2.5,
        url: 'https://example.com/images/img006.jpg',
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