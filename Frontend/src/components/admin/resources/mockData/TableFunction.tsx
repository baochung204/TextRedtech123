import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import {
  IconBrandFlutter,
  IconEye,
  IconFunction,
  IconTrash,
  IconUserStar,
} from '@tabler/icons-react';
import functionimg from 'src/assets/Function/FUNCTION.png';
import functiongroup from 'src/assets/Function/NHOM FUNCTION.png';
import assistant from 'src/assets/Adminphoto/tro ly ap dung.png';
import customer from 'src/assets/Function/KHACH HANG SO HUU.png'

export const Function = [
  {
    bgColor: 'primary.light',
    title: 'Nhóm Function',
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
          <img src={functiongroup} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Functions',
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
          <img src={functionimg} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Khách hàng sở hữu',
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
        <img src={customer} width={30} />
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
          <img src={assistant} width={30} />
        </Box>
      </>
    ),
  },
];
export const FunctionCells: any = [
  {
    dataIndex: 'id',
    title: 'ID',
  },
  {
    dataIndex: 'creationTime',
    title: 'Ngày tạo',
  },
  {
    dataIndex: 'functionGroup',
    title: 'Nhóm function',
  },
  {
    dataIndex: 'level',
    title: 'Level',
  },
  {
    dataIndex: 'ownedCustomers',
    title: 'Khách hàng sở hữu',
  },
  {
    dataIndex: 'appliedAssistants',
    title: 'Trợ lý áp dụng',
  },
  {
    dataIndex: 'summary',
    title: 'Tóm tắt',
  },
  {
    dataIndex: 'functionCode',
    title: 'Code function',
  },
  // {
  //   dataIndex: 'creator',
  //   title: 'Người tạo',
  // },
  {
    dataIndex: 'actions',
    title: 'Hoạt động',
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
    // creator: 'Nguyễn Văn A',
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
    // creator: 'Trần Thị B',
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
    // creator: 'Lê Văn C',
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
    // creator: 'Hoàng Thị D',
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
    // creator: 'Phạm Văn E',
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
    // creator: 'Ngô Thị F',
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
