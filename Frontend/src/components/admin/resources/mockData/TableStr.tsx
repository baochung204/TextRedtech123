import { Box } from '@mui/material';
import customer from 'src/assets/ChienLuoc/KHACH HANG SO HUU.png';
import strategy from 'src/assets/ChienLuoc/chien luoc.png';
import strategicgroup from 'src/assets/ChienLuoc/nhom chien luoc.png';
import assistantstrategy from 'src/assets/ChienLuoc/tro ly ap dung.png';
import { Strategys } from '../types/Str';

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
// export const StrategyCells: any = [
//   {
//     dataIndex: 'id',
//     title: 'ID',
//   },
//   {
//     dataIndex: 'strategyGroup',

//     title: 'Nhóm chiến lược',
//   },
//   {
//     dataIndex: 'badge',

//     title: 'Huy hiệu',
//   },
//   {
//     dataIndex: 'strategyName',

//     title: 'Tên chiến lược',
//   },
//   {
//     dataIndex: 'level',

//     title: 'Level',
//   },
//   {
//     dataIndex: 'ownedCustomers',

//     title: 'Khách hàng sở hữu',
//   },
//   {
//     dataIndex: 'appliedAssistants',

//     title: 'Trợ lý áp dụng',
//   },
//   {
//     dataIndex: 'summary',

//     title: 'Tóm tắt',
//   },
//   {
//     dataIndex: 'content',

//     title: 'Nội dung',
//   },
//   {
//     dataIndex: 'dateCreate',

//     title: 'Ngày tạo',
//   },
//   {
//     dataIndex: 'status',
//     title: 'Trạng thái',
//     render: ((_row: any, value: any) => (
//       <Typography color="textSecondary" variant="subtitle2">
//         <CustomSwitch color="primary" defaultChecked={value.status ? true : false} />
//       </Typography>
//     ))
//   },
//   {
//     dataIndex: 'actions',
//     title: 'Hoạt động',
//     render: ((_row: any, value: any) => (
//       <>
//         <IconButton >
//           <IconEye stroke={2} style={{ color: '#5D87FF' }} />
//         </IconButton>
//         <IconButton>
//           <IconTrash stroke={2} style={{ color: '#FA896B' }} />
//         </IconButton>
//       </>
//         // console.log(`cot ${value.id}`,value)

//     ))
//   },

// ];

export const StrategyRows: Strategys[] = [
  {
    id: 'STG001',
    creationTime: new Date('2024-09-01'),
    strategyGroup: 'Nhóm A',
    badge: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRb8BMw3RWhIF-wAiHpwibf7h0SNZUZRa0qA0IQ-d5p3EuNL0zR',
    strategyName: 'Chiến lược Tăng trưởng 2024',
    level: 'Cấp 1',
    ownedCustomers: '25',
    appliedAssistants: '3',
    summary: 'Tập trung vào thị trường mới',
    content: 'Chiến lược nhằm tăng cường sự hiện diện tại các thị trường mới nổi...',
    dateCreate: 'Nguyễn Văn A',
    creator: 'Khai dan',
    status: true
  },
  {
    id: 'STG002',
    creationTime: new Date('2024-09-01'),
    strategyGroup: 'Nhóm B',
    badge: '',
    strategyName: 'Chiến lược Giữ chân khách hàng',
    level: 'Cấp 2',
    ownedCustomers: '15',
    appliedAssistants: ' 4',
    summary: 'Cải thiện trải nghiệm khách hàng',
    content: 'Chiến lược này tập trung vào việc nâng cao dịch vụ sau bán hàng...',
    dateCreate: 'Trần Thị B',
    creator: 'Khai dan',
    status: true
  },
  {
    id: 'STG003',
    creationTime: new Date('2024-09-01'),
    strategyGroup: 'Nhóm A',
    badge: '',
    strategyName: 'Chiến lược Phát triển sản phẩm',
    level: 'Cấp 1',
    ownedCustomers: '10',
    appliedAssistants: '2',
    summary: 'Phát triển sản phẩm mới trong quý 4',
    content: 'Tập trung vào việc ra mắt các sản phẩm mới nhằm đáp ứng nhu cầu thị trường...',
    dateCreate: 'Lê Văn C',
    creator: 'Khai dan',
    status: false
  },
  {
    id: 'STG004',
    creationTime: new Date('2024-09-01'),
    strategyGroup: 'Nhóm C',
    badge: '',
    strategyName: 'Chiến lược Mở rộng thị trường',
    level: 'Cấp 3',
    ownedCustomers: '30',
    appliedAssistants: '5',
    summary: 'Mở rộng thị trường tại Đông Nam Á',
    content:
      'Chiến lược tập trung vào việc xâm nhập và phát triển các kênh phân phối tại Đông Nam Á...',
    dateCreate: 'Hoàng Thị D',
    creator: 'Khai dan',
    status: true
  },
  {
    id: 'STG005',
    creationTime: new Date('2024-09-01'),
    strategyGroup: 'Nhóm B',
    badge: '',
    strategyName: 'Chiến lược Tối ưu hóa chi phí',
    level: 'Cấp 2',
    ownedCustomers: '20',
    appliedAssistants: '3',
    summary: 'Giảm thiểu chi phí sản xuất và vận hành',
    content: 'Tối ưu hóa quy trình sản xuất và cắt giảm các chi phí không cần thiết...',
    dateCreate: 'Phạm Văn E',
    creator: 'Khai dan',
    status: true
  },
  {
    id: 'STG006',
    creationTime: new Date('2024-09-01'),
    strategyGroup: 'Nhóm A',
    badge: '',
    strategyName: 'Chiến lược Nâng cao thương hiệu',
    level: 'Cấp 3',
    ownedCustomers: '40',
    appliedAssistants: '6',
    summary: 'Nâng cao nhận diện thương hiệu quốc tế',
    content: 'Chiến lược này tập trung vào việc xây dựng hình ảnh thương hiệu mạnh mẽ...',
    dateCreate: 'Ngô Thị F',
    creator: 'Khai dan',
    status: true
  },
];
