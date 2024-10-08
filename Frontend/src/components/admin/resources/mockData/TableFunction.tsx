import Box from '@mui/material/Box';
import assistant from 'src/assets/Adminphoto/tro ly ap dung.png';
import functionimg from 'src/assets/Function/FUNCTION.png';
import customer from 'src/assets/Function/KHACH HANG SO HUU.png';
import functiongroup from 'src/assets/Function/NHOM FUNCTION.png';
import { Functions } from '../types/Functions';

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


export const FunctionRows: Functions[] = [
  {
    id: 'FUNC001',
    creationTime: '2024-09-01 08:30',
    functionGroup: 'Nhóm A',
    functionName: 'AAAAAAAA AAAAAAAAA',
    badge:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Mimus_polyglottus1_cropped.png',
    level: 'Cấp 1',
    ownedCustomers: '25',
    appliedAssistants: '3',
    content: 'AAAAA AAAAA AAAAAAAA AAAAAAAAAAA AAAAAAA',
    summary: 'Hỗ trợ phân tích dữ liệu',
    functionCode: 'analyzeData2024()',
    creator: 'Nguyễn Văn A',

  },
  {
    id: 'FUNC002',
    creationTime: '2024-09-02 09:15',
    functionGroup: 'Nhóm B',
    functionName: 'AAAAAAAAAAAAAAAAA',
    badge:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Mimus_polyglottus1_cropped.png',
    level: 'Cấp 2',
    ownedCustomers: '15',
    appliedAssistants: '4',
    content: 'AAAAAA AAAAAAA AAAAAAAA AAAAAAAA AAAAAAA',
    summary: 'Quản lý khách hàng tự động',
    functionCode: 'autoManageCustomer()',
    creator: 'Trần Thị B',

  },
  {
    id: 'FUNC003',
    creationTime: '2024-09-03 10:40',
    functionGroup: 'Nhóm A',
    functionName: 'AAAAAAAAAAAAAAAAA',
    badge:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Mimus_polyglottus1_cropped.png',
    level: 'Cấp 1',
    ownedCustomers: '10',
    appliedAssistants: '2',
    content: 'AAAAAAA AAAAAAAAA AAAAAAAAA AAAAAAAAAAA',
    summary: 'Phân tích và dự đoán xu hướng',
    functionCode: 'trendPrediction()',
    creator: 'Lê Văn C',

  },
  {
    id: 'FUNC004',
    creationTime: '2024-09-04 11:20',
    functionGroup: 'Nhóm C',
    functionName: 'AAAAAAAAAAAAAAAAA',
    badge:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Mimus_polyglottus1_cropped.png',
    level: 'Cấp 3',
    ownedCustomers: '30',
    appliedAssistants: '5',
    content: 'AAAAA AAAAAAAA AAAAAAAAA AAAAAAA AAAAAAA',
    summary: 'Phát triển kênh phân phối',
    functionCode: 'channelDevelopment()',
    creator: 'Hoàng Thị D',

  },
  {
    id: 'FUNC005',
    creationTime: '2024-09-05 14:05',
    functionGroup: 'Nhóm B',
    functionName: 'AAAAAAAAAAAAAAAAA',
    badge:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Mimus_polyglottus1_cropped.png',
    level: 'Cấp 2',
    ownedCustomers: '20',
    appliedAssistants: '3',
    content: 'AAAAAA AAAAAAAAA AAAAAAAAAAA AAAAAAAAAA',
    summary: 'Tối ưu hóa quy trình vận hành',
    functionCode: 'optimizeOperation()',
    creator: 'Phạm Văn E',

  },
  {
    id: 'FUNC006',
    creationTime: '2024-09-06 15:30',
    functionGroup: 'Nhóm A',
    functionName: 'AAAAAAAAAAAAAAAAA',
    badge:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Mimus_polyglottus1_cropped.png',
    level: 'Cấp 3',
    ownedCustomers: '40',
    appliedAssistants: '6',
    content: 'AAAAAA AAAAAAAA AAAAAAAA AAAAAAA AAAAAAA',
    summary: 'Nâng cao thương hiệu',
    functionCode: 'enhanceBranding()',
    creator: 'Ngô Thị F',

  },
];
