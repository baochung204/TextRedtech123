import { Box, IconButton } from '@mui/material';
import {
  IconBrandSentry,
  IconChessQueen,
  IconEye,
  IconMessageChatbot,
  IconTrash,
  IconUserStar,
} from '@tabler/icons-react';
import img1 from 'src/assets/images/badge/badge.png';
import img2 from 'src/assets/images/badge/badge2.png';
import img3 from 'src/assets/images/badge/badge3.png';
import customer from 'src/assets/ChienLuoc/KHACH HANG SO HUU.png';
import strategy from 'src/assets/ChienLuoc/chien luoc.png';
import strategicgroup from 'src/assets/ChienLuoc/nhom chien luoc.png';
import assistantstrategy from 'src/assets/ChienLuoc/tro ly ap dung.png';

export const Strategy = [
  {
    bgColor: 'primary.light',
    title: 'Nhóm chiến lược',
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
          <img src={strategicgroup} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Chiến lược',
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
          <img src={strategy} width={30} />
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
          <img src={assistantstrategy} width={30} />
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
          <img width={30} src={customer} />
        </Box>
      </>
    ),
  },
];
export const StrategyCells: any = [
  {
    dataIndex: 'id',
    title: 'ID',
  },
  {
    dataIndex: 'strategyGroup',

    title: 'Nhóm chiến lược',
  },
  {
    dataIndex: 'badge',

    title: 'Huy hiệu',
  },
  {
    dataIndex: 'strategyName',

    title: 'Tên chiến lược',
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
    dataIndex: 'content',

    title: 'Nội dung',
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
    id: 'STG004',
    creationTime: '2024-09-04 11:20',
    strategyGroup: 'Nhóm C',
    badge: <img src={img2} alt="" width={40} />,
    strategyName: 'Chiến lược Mở rộng thị trường',
    level: 'Cấp 3',
    ownedCustomers: 30,
    appliedAssistants: 5,
    summary: 'Mở rộng thị trường tại Đông Nam Á',
    content:
      'Chiến lược tập trung vào việc xâm nhập và phát triển các kênh phân phối tại Đông Nam Á...',
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
