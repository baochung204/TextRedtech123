import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import {
  IconEye,
  IconTrash,
  IconUnlink,
  IconUsers
} from '@tabler/icons-react';
export const Url = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'URL',
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
          <IconUnlink color="white" size={30} />
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
  // {
  //   bgColor: 'warning.light',
  //   color: 'warning.main',
  //   title: 'Click',
  //   total: '32.415',
  //   icons: (
  //     <>
  //       <Box
  //         bgcolor="warning.main"
  //         textAlign="center"
  //         padding={1}
  //         sx={{
  //           width: 40,
  //           height: 40,
  //           display: 'flex',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <IconHandClick color="white" size={30} />
  //       </Box>
  //     </>
  //   ),
  // },
  // {
  //   bgColor: 'error.light',
  //   color: 'error.main',
  //   title: 'Click/URL',
  //   total: '11.415',
  //   icons: (
  //     <>
  //       <Box
  //         bgcolor="error.main"
  //         textAlign="center"
  //         padding={1}
  //         sx={{
  //           width: 40,
  //           height: 40,
  //           display: 'flex',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <IconClick color="white" size={30} />
  //       </Box>
  //     </>
  //   ),
  // },
];

export const UrlCells: any = [
  {
    dataIndex: 'id',
    title: 'ID',
  },
  {
    dataIndex: 'creationTime',
    title: 'Ngày tạo',
  },
  {
    dataIndex: 'customerId',
    title: 'ID khách hàng',
  },
  {
    dataIndex: 'title',
    title: 'Tiêu đề',
  },
  {
    dataIndex: 'description',
    title: 'Mô tả',
  },
  {
    dataIndex: 'url',
    title: 'URL',
  },
  {
    dataIndex: 'click',
    title: 'Click',
  },
  {
    dataIndex: 'actions',
    title: 'Hoạt động',
  },
];

export const UrlRows = [
  {
    id: 'STG001',
    creationTime: '2024-09-01 08:30',
    customerId: 'Nguyễn Văn A',
    title: 'Chiến lược Tăng trưởng 2024',
    description: 'Tập trung vào thị trường mới',
    url: 'https://example.com/1',
    click: 25,
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
    customerId: 'Trần Thị B',
    title: 'Chiến lược Giữ chân khách hàng',
    description: 'Cải thiện trải nghiệm khách hàng',
    url: 'https://example.com/2',
    click: 15,
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
    id: 'STG003',
    creationTime: '2024-09-03 10:40',
    customerId: 'Lê Văn C',
    title: 'Chiến lược Phát triển sản phẩm',
    description: 'Phát triển sản phẩm mới trong quý 4',
    url: 'https://example.com/3',
    click: 10,
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
    id: 'STG004',
    creationTime: '2024-09-04 11:20',
    customerId: 'Hoàng Thị D',
    title: 'Chiến lược Mở rộng thị trường',
    description: 'Mở rộng thị trường tại Đông Nam Á',
    url: 'https://example.com/4',
    click: 30,
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
    id: 'STG005',
    creationTime: '2024-09-05 14:05',
    customerId: 'Phạm Văn E',
    title: 'Chiến lược Tối ưu hóa chi phí',
    description: 'Giảm thiểu chi phí sản xuất và vận hành',
    url: 'https://example.com/5',
    click: 20,
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
    id: 'STG006',
    creationTime: '2024-09-06 15:30',
    customerId: 'Ngô Thị F',
    title: 'Chiến lược Nâng cao thương hiệu',
    description: 'Nâng cao nhận diện thương hiệu quốc tế',
    url: 'https://example.com/6',
    click: 40,
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
