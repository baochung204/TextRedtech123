import Box from '@mui/material/Box';
import {
  IconDatabaseSmile,
  IconEye,
  IconFile,
  IconMessageChatbot,
  IconTrash,
  IconUsers,
} from '@tabler/icons-react';
import { HeadCell } from '../types/HeadCell';
import { IconButton } from '@mui/material';
export const Files = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Files',
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
          <IconFile color="white" size={30} />
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
export const FileCells: HeadCell[] = [
  {
    dataIndex: 'id',
    numeric: false,
    disablePadding: false,
    label: 'ID File',
  },
  {
    dataIndex: 'fileName',
    numeric: false,
    disablePadding: false,
    label: 'Tên File',
  },
  {
    dataIndex: 'customer',
    numeric: false,
    disablePadding: false,
    label: 'Khách hàng',
  },
  {
    dataIndex: 'format',
    numeric: false,
    disablePadding: false,
    label: 'Định dạng',
  },
  {
    dataIndex: 'size',
    numeric: false,
    disablePadding: false,
    label: 'Dung lượng  (MB)',
  },
  {
    dataIndex: 'uploadDate',
    numeric: false,
    disablePadding: false,
    label: 'Ngày tải',
  },
  {
    dataIndex: 'actions',
    numeric: false,
    disablePadding: false,
    label: 'Hoạt động',
  },
];

export const FileRows = [
  {
    id: 'FILE001',
    fileName: 'Báo cáo Tài chính 2024',
    customer: 'Công ty ABC',
    format: 'PDF',
    size: 25.5,
    uploadDate: '2024-09-01',
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
    id: 'FILE002',
    fileName: 'Kế hoạch Marketing',
    customer: 'Công ty XYZ',
    format: 'DOCX',
    size: 10.2,
    uploadDate: '2024-09-02',
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
    id: 'FILE003',
    fileName: 'Chiến lược Kinh doanh Q3',
    customer: 'Công ty DEF',
    format: 'XLSX',
    size: 18.7,
    uploadDate: '2024-09-03',
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
    id: 'FILE004',
    fileName: 'Báo cáo Nhân sự',
    customer: 'Công ty GHI',
    format: 'PDF',
    size: 12.8,
    uploadDate: '2024-09-04',
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
    id: 'FILE005',
    fileName: 'Đánh giá Sản phẩm',
    customer: 'Công ty JKL',
    format: 'DOCX',
    size: 7.4,
    uploadDate: '2024-09-05',
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
    id: 'FILE006',
    fileName: 'Bản vẽ Kỹ thuật',
    customer: 'Công ty MNO',
    format: 'DWG',
    size: 40.3,
    uploadDate: '2024-09-06',
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
