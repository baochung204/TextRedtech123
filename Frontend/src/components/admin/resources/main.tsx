import AddCircleIcon from '@mui/icons-material/AddCircle';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid, IconButton, InputAdornment, MenuItem, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { IconSearch } from '@tabler/icons-react';
import React from 'react';
import icontext from 'src/assets/images/logos/R-Point.png';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import TopCard from 'src/components/widgets/cards/TopCard';
import Tab1 from './Tabs/Tab1';
// const renderStatus = (status: number) => {
//   const { text, color } = getStatusTextAndColor(status);
//   return (
//     <Typography style={{ color }} variant="subtitle2">
//       {text}
//     </Typography>
//   );
// };
// const getStatusTextAndColor = (status: number) => {
//   switch (status) {
//     case 1:
//       return { text: 'Đã xử lý', color: '#13DEB9' };
//     case 2:
//       return { text: 'Chưa xử lý', color: '#ff9800' };
//     default:
//       return { text: 'Không xác định', color: '#000000' };
//   }
// };
const Strategy = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Nhóm chiến lược',
    total: '52',
    icons: (
      <>
        <img src={icontext} alt="" width={40} />
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
        <img src={icontext} alt="" width={40} />
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
        <img src={icontext} alt="" width={40} />
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
        <img src={icontext} alt="" width={40} />
      </>
    ),
  },
];
const Function = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Nhóm Function',
    total: '52',
    icons: (
      <>
        <img src={icontext} alt="" width={40} />
      </>
    ),
  },
  {
    bgColor: 'secondary.light',
    color: 'secondary.main',
    title: 'Functions',
    total: '189',
    icons: (
      <>
        <img src={icontext} alt="" width={40} />
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
        <img src={icontext} alt="" width={40} />
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
        <img src={icontext} alt="" width={40} />
      </>
    ),
  },
];
const Files = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Files',
    total: '52',
    icons: (
      <>
        <img src={icontext} alt="" width={40} />
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
        <img src={icontext} alt="" width={40} />
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Dung lượng',
    total: '32.415',
    icons: (
      <>
        <img src={icontext} alt="" width={40} />
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
        <img src={icontext} alt="" width={40} />
      </>
    ),
  },
];
const Model = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Model',
    total: '52',
    icons: (
      <>
        <img src={icontext} alt="" width={40} />
      </>
    ),
  },
  {
    bgColor: 'secondary.light',
    color: 'secondary.main',
    title: 'Tranning tokens',
    total: '189',
    icons: (
      <>
        <img src={icontext} alt="" width={40} />
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
        <img src={icontext} alt="" width={40} />
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
        <img src={icontext} alt="" width={40} />
      </>
    ),
  },
];
const Image = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Hình ảnh',
    total: '52',
    icons: (
      <>
        <img src={icontext} alt="" width={40} />
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
        <img src={icontext} alt="" width={40} />
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Dung lượng',
    total: '32.415',
    icons: (
      <>
        <img src={icontext} alt="" width={40} />
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Hình ảnh/khách hàng',
    total: '11.415',
    icons: (
      <>
        <img src={icontext} alt="" width={40} />
      </>
    ),
  },
];
const Url = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'URL',
    total: '52',
    icons: (
      <>
        <img src={icontext} alt="" width={40} />
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
        <img src={icontext} alt="" width={40} />
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Click',
    total: '32.415',
    icons: (
      <>
        <img src={icontext} alt="" width={40} />
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Click/URL',
    total: '11.415',
    icons: (
      <>
        <img src={icontext} alt="" width={40} />
      </>
    ),
  },
];
interface HeadCell {
  disablePadding: boolean;
  dataIndex: string;
  label: string;
  numeric: boolean;
}


const StrategyCells: HeadCell[] = [
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
];

const StrategyRows = [
  {
    id: 'STG001',
    creationTime: '2024-09-01 08:30',
    strategyGroup: 'Nhóm A',
    badge: 'Gold',
    strategyName: 'Chiến lược Tăng trưởng 2024',
    level: 'Cấp 1',
    ownedCustomers: 25,
    appliedAssistants: 3,
    summary: 'Tập trung vào thị trường mới',
    content: 'Chiến lược nhằm tăng cường sự hiện diện tại các thị trường mới nổi...',
    creator: 'Nguyễn Văn A',
  },
  {
    id: 'STG002',
    creationTime: '2024-09-02 09:15',
    strategyGroup: 'Nhóm B',
    badge: 'Silver',
    strategyName: 'Chiến lược Giữ chân khách hàng',
    level: 'Cấp 2',
    ownedCustomers: 15,
    appliedAssistants: 4,
    summary: 'Cải thiện trải nghiệm khách hàng',
    content: 'Chiến lược này tập trung vào việc nâng cao dịch vụ sau bán hàng...',
    creator: 'Trần Thị B',
  },
  {
    id: 'STG003',
    creationTime: '2024-09-03 10:45',
    strategyGroup: 'Nhóm A',
    badge: 'Bronze',
    strategyName: 'Chiến lược Phát triển sản phẩm',
    level: 'Cấp 1',
    ownedCustomers: 10,
    appliedAssistants: 2,
    summary: 'Phát triển sản phẩm mới trong quý 4',
    content: 'Tập trung vào việc ra mắt các sản phẩm mới nhằm đáp ứng nhu cầu thị trường...',
    creator: 'Lê Văn C',
  },
  {
    id: 'STG004',
    creationTime: '2024-09-04 11:20',
    strategyGroup: 'Nhóm C',
    badge: 'Gold',
    strategyName: 'Chiến lược Mở rộng thị trường',
    level: 'Cấp 3',
    ownedCustomers: 30,
    appliedAssistants: 5,
    summary: 'Mở rộng thị trường tại Đông Nam Á',
    content:
      'Chiến lược tập trung vào việc xâm nhập và phát triển các kênh phân phối tại Đông Nam Á...',
    creator: 'Hoàng Thị D',
  },
  {
    id: 'STG005',
    creationTime: '2024-09-05 14:05',
    strategyGroup: 'Nhóm B',
    badge: 'Silver',
    strategyName: 'Chiến lược Tối ưu hóa chi phí',
    level: 'Cấp 2',
    ownedCustomers: 20,
    appliedAssistants: 3,
    summary: 'Giảm thiểu chi phí sản xuất và vận hành',
    content: 'Tối ưu hóa quy trình sản xuất và cắt giảm các chi phí không cần thiết...',
    creator: 'Phạm Văn E',
  },
  {
    id: 'STG006',
    creationTime: '2024-09-06 15:30',
    strategyGroup: 'Nhóm A',
    badge: 'Gold',
    strategyName: 'Chiến lược Nâng cao thương hiệu',
    level: 'Cấp 3',
    ownedCustomers: 40,
    appliedAssistants: 6,
    summary: 'Nâng cao nhận diện thương hiệu quốc tế',
    content: 'Chiến lược này tập trung vào việc xây dựng hình ảnh thương hiệu mạnh mẽ...',
    creator: 'Ngô Thị F',
  },
];
const FunctionCells: HeadCell[] = [
  {
    dataIndex: 'id',
    numeric: false,
    disablePadding: false,
    label: 'ID Function',
  },
  {
    dataIndex: 'creationTime',
    numeric: false,
    disablePadding: false,
    label: 'Ngày tạo',
  },
  {
    dataIndex: 'functionGroup',
    numeric: false,
    disablePadding: false,
    label: 'Nhóm Function',
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
    dataIndex: 'functionCode',
    numeric: false,
    disablePadding: false,
    label: 'Code Function',
  },
  {
    dataIndex: 'creator',
    numeric: false,
    disablePadding: false,
    label: 'Người tạo',
  },
];

const FunctionRows = [
  {
    id: 'FUNC001',
    creationTime: '2024-09-01 08:30',
    functionGroup: 'Nhóm A',
    level: 'Cấp 1',
    ownedCustomers: 25,
    appliedAssistants: 3,
    summary: 'Hỗ trợ phân tích dữ liệu',
    functionCode: 'analyzeData2024()',
    creator: 'Nguyễn Văn A',
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
    creator: 'Trần Thị B',
  },
  {
    id: 'FUNC003',
    creationTime: '2024-09-03 10:45',
    functionGroup: 'Nhóm A',
    level: 'Cấp 1',
    ownedCustomers: 10,
    appliedAssistants: 2,
    summary: 'Phân tích và dự đoán xu hướng',
    functionCode: 'trendPrediction()',
    creator: 'Lê Văn C',
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
    creator: 'Hoàng Thị D',
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
    creator: 'Phạm Văn E',
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
    creator: 'Ngô Thị F',
  },
];
const FileCells: HeadCell[] = [
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
    label: 'Dung lượng (MB)',
  },
  {
    dataIndex: 'uploadDate',
    numeric: false,
    disablePadding: false,
    label: 'Ngày tải',
  },
];

const FileRows = [
  {
    id: 'FILE001',
    fileName: 'Báo cáo Tài chính 2024',
    customer: 'Công ty ABC',
    format: 'PDF',
    size: 25.5,
    uploadDate: '2024-09-01',
  },
  {
    id: 'FILE002',
    fileName: 'Kế hoạch Marketing',
    customer: 'Công ty XYZ',
    format: 'DOCX',
    size: 10.2,
    uploadDate: '2024-09-02',
  },
  {
    id: 'FILE003',
    fileName: 'Chiến lược Kinh doanh Q3',
    customer: 'Công ty DEF',
    format: 'XLSX',
    size: 18.7,
    uploadDate: '2024-09-03',
  },
  {
    id: 'FILE004',
    fileName: 'Báo cáo Nhân sự',
    customer: 'Công ty GHI',
    format: 'PDF',
    size: 12.8,
    uploadDate: '2024-09-04',
  },
  {
    id: 'FILE005',
    fileName: 'Đánh giá Sản phẩm',
    customer: 'Công ty JKL',
    format: 'DOCX',
    size: 7.4,
    uploadDate: '2024-09-05',
  },
  {
    id: 'FILE006',
    fileName: 'Bản vẽ Kỹ thuật',
    customer: 'Công ty MNO',
    format: 'DWG',
    size: 45.3,
    uploadDate: '2024-09-06',
  },
];
const ModelCells: HeadCell[] = [
  {
    dataIndex: 'id',
    numeric: false,
    disablePadding: false,
    label: 'ID Model',
  },
  {
    dataIndex: 'creationTime',
    numeric: false,
    disablePadding: false,
    label: 'Ngày tạo',
  },
  {
    dataIndex: 'modelName',
    numeric: false,
    disablePadding: false,
    label: 'Tên Model',
  },
  {
    dataIndex: 'baseModel',
    numeric: false,
    disablePadding: false,
    label: 'Model Gốc',
  },
  {
    dataIndex: 'trainingTokens',
    numeric: false,
    disablePadding: false,
    label: 'Training Tokens',
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
];

const ModelRows = [
  {
    id: 'MDL001',
    creationTime: '2024-09-01',
    modelName: 'Model Dự đoán Doanh thu',
    baseModel: 'GPT-4',
    trainingTokens: 1000000,
    ownedCustomers: 12,
    appliedAssistants: 3,
  },
  {
    id: 'MDL002',
    creationTime: '2024-09-02',
    modelName: 'Model Phân tích Tâm lý',
    baseModel: 'BERT',
    trainingTokens: 800000,
    ownedCustomers: 8,
    appliedAssistants: 2,
  },
  {
    id: 'MDL003',
    creationTime: '2024-09-03',
    modelName: 'Model Tối ưu Hóa Chi phí',
    baseModel: 'GPT-3',
    trainingTokens: 1200000,
    ownedCustomers: 15,
    appliedAssistants: 4,
  },
  {
    id: 'MDL004',
    creationTime: '2024-09-04',
    modelName: 'Model Dự báo Nhu cầu',
    baseModel: 'RoBERTa',
    trainingTokens: 950000,
    ownedCustomers: 10,
    appliedAssistants: 3,
  },
  {
    id: 'MDL005',
    creationTime: '2024-09-05',
    modelName: 'Model Phân tích Đối thủ',
    baseModel: 'GPT-4',
    trainingTokens: 1300000,
    ownedCustomers: 20,
    appliedAssistants: 5,
  },
  {
    id: 'MDL006',
    creationTime: '2024-09-06',
    modelName: 'Model Dự đoán Thị trường',
    baseModel: 'T5',
    trainingTokens: 1100000,
    ownedCustomers: 18,
    appliedAssistants: 6,
  },
];
const ImageCells: HeadCell[] = [
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
];

const ImageRows = [
  {
    id: 'IMG001',
    creationTime: '2024-09-01',
    creator: 'Nguyễn Văn A',
    image: 'https://example.com/images/img001.jpg',
    imageName: 'Ảnh sản phẩm A',
    title: 'Sản phẩm A - Ảnh chụp từ bên trái',
    description: 'Hình ảnh mô tả sản phẩm A từ góc nhìn bên trái',
    size: 1.5,
    url: 'https://example.com/images/img001.jpg',
  },
  {
    id: 'IMG002',
    creationTime: '2024-09-02',
    creator: 'Trần Thị B',
    image: 'https://example.com/images/img002.jpg',
    imageName: 'Ảnh sản phẩm B',
    title: 'Sản phẩm B - Ảnh chụp từ phía trước',
    description: 'Hình ảnh mô tả sản phẩm B từ góc nhìn chính diện',
    size: 2.1,
    url: 'https://example.com/images/img002.jpg',
  },
  {
    id: 'IMG003',
    creationTime: '2024-09-03',
    creator: 'Lê Văn C',
    image: 'https://example.com/images/img003.jpg',
    imageName: 'Ảnh sản phẩm C',
    title: 'Sản phẩm C - Ảnh chụp chi tiết',
    description: 'Hình ảnh cận cảnh sản phẩm C để thấy rõ chi tiết',
    size: 1.8,
    url: 'https://example.com/images/img003.jpg',
  },
  {
    id: 'IMG004',
    creationTime: '2024-09-04',
    creator: 'Hoàng Thị D',
    image: 'https://example.com/images/img004.jpg',
    imageName: 'Ảnh sản phẩm D',
    title: 'Sản phẩm D - Ảnh chụp từ bên phải',
    description: 'Hình ảnh sản phẩm D từ góc nhìn bên phải',
    size: 2.3,
    url: 'https://example.com/images/img004.jpg',
  },
  {
    id: 'IMG005',
    creationTime: '2024-09-05',
    creator: 'Phạm Văn E',
    image: 'https://example.com/images/img005.jpg',
    imageName: 'Ảnh sản phẩm E',
    title: 'Sản phẩm E - Ảnh chụp từ góc trên',
    description: 'Hình ảnh sản phẩm E từ góc nhìn trên xuống',
    size: 1.6,
    url: 'https://example.com/images/img005.jpg',
  },
  {
    id: 'IMG006',
    creationTime: '2024-09-06',
    creator: 'Ngô Thị F',
    image: 'https://example.com/images/img006.jpg',
    imageName: 'Ảnh sản phẩm F',
    title: 'Sản phẩm F - Ảnh chụp từ xa',
    description: 'Hình ảnh sản phẩm F từ góc xa để thấy toàn cảnh',
    size: 2.5,
    url: 'https://example.com/images/img006.jpg',
  },
];
const UrlCells: HeadCell[] = [
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
    dataIndex: 'customerId',
    numeric: false,
    disablePadding: false,
    label: 'ID Khách hàng',
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
    dataIndex: 'url',
    numeric: false,
    disablePadding: false,
    label: 'URL',
  },
  {
    dataIndex: 'click',
    numeric: true,
    disablePadding: false,
    label: 'Click',
  },
];

const UrlRows = [
  {
    id: 'STG001',
    creationTime: '2024-09-01 08:30',
    customerId: 'Nguyễn Văn A',
    title: 'Chiến lược Tăng trưởng 2024',
    description: 'Tập trung vào thị trường mới',
    url: 'https://example.com/1',
    click: 25,
  },
  {
    id: 'STG002',
    creationTime: '2024-09-02 09:15',
    customerId: 'Trần Thị B',
    title: 'Chiến lược Giữ chân khách hàng',
    description: 'Cải thiện trải nghiệm khách hàng',
    url: 'https://example.com/2',
    click: 15,
  },
  {
    id: 'STG003',
    creationTime: '2024-09-03 10:45',
    customerId: 'Lê Văn C',
    title: 'Chiến lược Phát triển sản phẩm',
    description: 'Phát triển sản phẩm mới trong quý 4',
    url: 'https://example.com/3',
    click: 10,
  },
  {
    id: 'STG004',
    creationTime: '2024-09-04 11:20',
    customerId: 'Hoàng Thị D',
    title: 'Chiến lược Mở rộng thị trường',
    description: 'Mở rộng thị trường tại Đông Nam Á',
    url: 'https://example.com/4',
    click: 30,
  },
  {
    id: 'STG005',
    creationTime: '2024-09-05 14:05',
    customerId: 'Phạm Văn E',
    title: 'Chiến lược Tối ưu hóa chi phí',
    description: 'Giảm thiểu chi phí sản xuất và vận hành',
    url: 'https://example.com/5',
    click: 20,
  },
  {
    id: 'STG006',
    creationTime: '2024-09-06 15:30',
    customerId: 'Ngô Thị F',
    title: 'Chiến lược Nâng cao thương hiệu',
    description: 'Nâng cao nhận diện thương hiệu quốc tế',
    url: 'https://example.com/6',
    click: 40,
  },
];

const Main = () => {
  const [value, setValue] = React.useState('1');
  // const [open, setOpen] = useState<boolean>(false);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    // setOpen(false);
  };

  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <Box>
          {/* Hiển thị TopCard khi tab value là 1 */}
          {value === '1' && <TopCard dataSource={Strategy} totalColumn={4} />}
          {value === '2' && <TopCard dataSource={Function} totalColumn={4} />}
          {value === '3' && <TopCard dataSource={Files} totalColumn={4} />}
          {value === '4' && <TopCard dataSource={Model} totalColumn={4} />}
          {value === '5' && <TopCard dataSource={Image} totalColumn={4} />}
          {value === '6' && <TopCard dataSource={Url} totalColumn={4} />}
         

          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 1,
                overflowX: 'auto',
                mt: 1,
              }}
            >
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Chiến Lược" value="1" />
                <Tab label="Function" value="2" />
                <Tab label="Files" value="3" />
                <Tab label="Model" value="4" />
                <Tab label="Hình Ảnh" value="5" />
                <Tab label="URL" value="6" />
              </TabList>
              {(value === '3' || value === '5' || value === '6') && (
                <Box>
                  <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                    <Grid item>
                      <CustomSelect
                        labelId="column-sort"
                        id="column-sort"
                        size="small"
                        value={1}
                        sx={{ marginRight: '20px' }}
                      >
                        <MenuItem value={1}>Tất cả</MenuItem>
                        <MenuItem value={2}>ID</MenuItem>
                      </CustomSelect>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="outlined-search"
                        placeholder="Tìm kiếm"
                        size="small"
                        type="search"
                        variant="outlined"
                        inputProps={{ 'aria-label': 'Search Followers' }}
                        sx={{
                          fontSize: { xs: '50px', sm: '50px', md: '50px' },
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconSearch size="12" />
                            </InputAdornment>
                          ),
                        }}
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item>
                      <IconButton
                        color="primary"
                        aria-label="Add to cart"
                        // onClick={() => setOpen(true)}
                        sx={{
                          pr: 1.5,
                        }}
                      >
                        <AddCircleIcon sx={{ fontSize: 30 }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>

            {/* TabPanels */}
            <TabPanel value="1">
              <Tab1 headCells={StrategyCells} dataRows={StrategyRows} />
            </TabPanel>
            <TabPanel value="2">
              <Tab1 headCells={FunctionCells} dataRows={FunctionRows} />
            </TabPanel>
            <TabPanel value="3">
              <Tab1 headCells={FileCells} dataRows={FileRows} />

              {/* <Tab3 value={value} open={open} setOpen={setOpen} /> */}
            </TabPanel>
            <TabPanel value="4">
              <Tab1 headCells={ModelCells} dataRows={ModelRows} />
            </TabPanel>
            <TabPanel value="5">
              <Tab1 headCells={ImageCells} dataRows={ImageRows} />
            </TabPanel>
            <TabPanel value="6">
              <Tab1 headCells={UrlCells} dataRows={UrlRows} />
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Main;
