import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { IconDatabaseSmile, IconEye, IconFile, IconTrash } from '@tabler/icons-react';
import customer from 'src/assets/Adminphoto/khách hàng.png';
import assisstant from 'src/assets/Adminphoto/tro ly ap dung.png';
export const Files = [
  {
    bgColor: 'primary.light',
    title: 'Files',
    total: '52',
    icons: (
      <>
        <Box
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
    bgColor: 'primary.light',
    title: 'Khách hàng',
    total: '189',
    icons: (
      <>
        <Box
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
          <img src={customer} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Dung lượng',
    total: '32.415',
    icons: (
      <>
        <Box
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
    bgColor: 'primary.light',
    title: 'Trợ lý áp dụng',
    total: '11.415',
    icons: (
      <>
        <Box
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
          <img src={assisstant} width={30} />
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
