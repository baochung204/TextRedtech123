import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import {
  IconDatabaseSmile,
  IconEye,
  IconFile,
  IconMessageChatbot,
  IconTrash,
  IconUsers,
} from '@tabler/icons-react';
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
export const FileCells: any = [
  {
    dataIndex: 'id',
    title: 'ID',
  },
  {
    dataIndex: 'fileName',
    title: 'Tên file',
  },
  {
    dataIndex: 'customer',
    title: 'Khách hàng',
  },
  {
    dataIndex: 'format',
    title: 'Định dạng',
  },
  {
    dataIndex: 'size',
    title: 'Dung lượng',
  },
  {
    dataIndex: 'uploadDate',
    title: 'Ngày tải',
  },
  {
    dataIndex: 'actions',
    title: 'Hoạt động',
    render: () => (
      <Box>
        <IconButton>
          <IconEye stroke={2} style={{ color: '#5D87FF' }} />
        </IconButton>
        <IconButton>
          <IconTrash stroke={2} style={{ color: '#FA896B' }} />
        </IconButton>
      </Box>
    ),
  },
];


