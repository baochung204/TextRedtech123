import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { IconChartBar, IconEye, IconSearch } from '@tabler/icons-react';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cvr from 'src/assets/Adminphoto/cvr.png';
import customer from 'src/assets/Adminphoto/khách hàng.png';
import Assistant from 'src/assets/Adminphoto/tro ly.png';
import bill from 'src/assets/ICON/dơn hang.png';
import gmv from 'src/assets/ICON/gmv.png';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PageContainer from 'src/components/container/PageContainer';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
const BCrumb = [
  {
    to: '/admin',
    title: 'Trang chủ',
  },
  {
    title: 'Quản lý trợ lý',
  },
];
const DataBox = [
  {
    bgColor: 'primary.light',

    title: 'Trợ lý',
    total: '2415',
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
          <img src={Assistant} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',

    title: 'CVR',
    total: '25.18%',
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
          <img src={Cvr} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',

    title: 'Khách hàng ',
    total: '362.415',
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
          {/* <IconPasswordUser color="white" size={30} /> */}
          <img src={customer} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',

    title: 'Chuyển đổi',
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
          {/* <IconBox color="white" size={30} /> */}
          <img src={bill} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',

    title: 'GMV',
    total: '1.413.241.141₫',
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
          <IconChartBar color="white" size={30} />
          <img src={gmv} width={30} />
        </Box>
      </>
    ),
  },
];
interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}
interface AssistantData {
  customerId: string; // ID khách hàng
  ngaytao: Date; // Ngày tạo
  assistantImage: string; // Ảnh trợ lý
  assistantName: string; // Tên trợ lý
  assistantId: string; // ID trợ lý
  kh: string; // Khách hàngnpm run
  dh: string; // Đơn hàng
  cvr: number; // CVR (Conversion Rate)
  gmv: number; // GMV (Gross Merchandise Value)
  cp: number; // Chi phí
  level: number; // Level trợ lý
  experience: number; // Kinh nghiệm (experience)
  token: string; // Token huấn luyện
  vqtb: number; // Vòng quay trung bình
  cl: string; // Chiến lược
  functions: string[]; // Danh sách chức năng
  files: string[]; // Files liên quan
  dungluong: string; // Dung lượng file
  cpdt: number;
  cpdh: number;
  cpkh: number;
}

const dataRows: AssistantData[] = [
  {
    assistantId: 'A001',
    customerId: 'C001',
    assistantImage: 'https://picsum.photos/300/300',
    assistantName: 'Trợ lý 1',
    level: 5,
    experience: 1200,
    functions: ['Chức năng A', 'Chức năng B'],
    token: 'Token001', // Changed `trainingToken` to `token`
    ngaytao: new Date('2023-01-15'), // Changed `createdDate` to `ngaytao`
    vqtb: 120, // Changed `averageRotation` to `vqtb`
    kh: 'Khách hàng A', // Changed `customer` to `kh`
    dh: 'Đơn hàng 001', // Changed `order` to `dh`
    cvr: 2.5,
    gmv: 15000,
    cp: 2000, // Changed `cost` to `cp`
    cpdt: 0.13, // Changed `costToRevenueRatio` to `cpdt`
    cpdh: 50, // Added `cpdh`
    cpkh: 100, // Changed `costPerCustomer` to `cpkh`
    cl: 'Chiến lược Vòng Quay A', // Added `cl`
    files: ['file001.pdf', 'file002.ppt'], // Changed `files` to an array
    dungluong: '2MB', // Changed `fileSize` to `dungluong`
  },
  {
    assistantId: 'A002',
    customerId: 'C002',
    assistantImage: 'https://picsum.photos/300/300',
    assistantName: 'Trợ lý 2',
    level: 7,
    experience: 2500,
    functions: ['Chức năng C', 'Chức năng D'],
    token: 'Token002',
    ngaytao: new Date('2023-03-22'),
    vqtb: 150,
    kh: 'Khách hàng B',
    dh: 'Đơn hàng 002',
    cvr: 3.2,
    gmv: 18000,
    cp: 3000,
    cpdt: 0.17,
    cpdh: 60,
    cpkh: 120,
    cl: 'Chiến lược Vòng Quay B',
    files: ['file003.docx', 'file004.xlsx'],
    dungluong: '3.5MB',
  },
  {
    assistantId: 'A003',
    customerId: 'C003',
    assistantImage: 'https://picsum.photos/300/300',
    assistantName: 'Trợ lý 3',
    level: 3,
    experience: 500,
    functions: ['Chức năng E', 'Chức năng F'],
    token: 'Token003',
    ngaytao: new Date('2023-05-10'),
    vqtb: 100,
    kh: 'Khách hàng C',
    dh: 'Đơn hàng 003',
    cvr: 1.8,
    gmv: 12000,
    cp: 1500,
    cpdt: 0.12,
    cpdh: 45,
    cpkh: 80,
    cl: 'Chiến lược Vòng Quay C',
    files: ['file005.xlsx'],
    dungluong: '1.2MB',
  },
];

interface FilmsData {
  id: number;
  title: string;
}
const FilmsData: FilmsData[] = [
  { id: 1, title: 'ID' },
  { id: 2, title: 'Ảnh Trợ lý ' },
  { id: 3, title: 'Tên trợ lý' },
  { id: 4, title: 'Files' },
  { id: 5, title: 'Dung lượng' },
  { id: 6, title: 'Functions' },
  { id: 7, title: 'Chiến lược' },
];
const AssistantAdmin = () => {
  const navigate = useNavigate();

  const column = useMemo<Column[]>(
    () => [
      {
        dataIndex: 'customerId',
        title: 'ID',
      },
      {
        dataIndex: 'ngaytao',
        title: 'Ngày tạo',
        render: (value) => {
          const createdDate = new Date(value);
          return createdDate.toLocaleDateString('vi-VN');
        },
      },
      {
        dataIndex: 'assistantImage',
        title: 'Ảnh trợ lý',
        render: (value) => {
          return <Avatar src={value} alt={value} sx={{ width: '30px', height: '30px' }} />;
        },
      },
      {
        dataIndex: 'assistantName',
        title: 'Tên trợ lý',
      },
      {
        dataIndex: 'assistantId',
        title: 'ID khách hàng',
      },
      {
        dataIndex: 'kh',
        title: 'Khách hàng',
      },
      {
        dataIndex: 'dh',
        title: 'Đơn hàng',
      },
      {
        dataIndex: 'cvr',
        title: 'CVR',
      },
      {
        dataIndex: 'gmv',
        title: 'GMV',
      },
      {
        dataIndex: 'cp',
        title: 'Chi phí',
      },
      {
        dataIndex: 'level', //
        title: 'Level',
        isValids: false,
      },
      {
        dataIndex: 'experience', //
        title: 'Experience',
        isValids: false,
      },
      {
        dataIndex: 'token',
        title: 'Token huấn luyện',
        isValids: false,
      },
      {
        dataIndex: 'vqtb',
        title: 'Vòng quay trung bình',
        isValids: false,
      },
      {
        dataIndex: 'cl',
        title: 'Chiến lược',
        isValids: false,
      },
      {
        dataIndex: 'function',
        title: 'Functions',
        isValids: false,
      },
      {
        dataIndex: 'files',
        title: 'Files',
        isValids: false,
      },
      {
        dataIndex: 'dungluong',
        title: 'Dung lượng',
        isValids: false,
      },
      {
        dataIndex: 'cpdt',
        title: 'Chi phí/ doanh thu',
        isValids: false,
      },
      {
        dataIndex: 'cpdh',
        title: 'Chi phí / chuyển đổi',
        isValids: false,
      },
      {
        dataIndex: 'cpkh',
        title: 'Chi phí / khách hàng',
        isValids: false,
      },
      {
        title: 'Xem chi tiết',
        dataIndex: 'actions',
        render: (_row: any, value: any) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks

          const handleRedirect = () => {
            navigate(`/assistants/detail/${value.customerId}`);
          };

          return (
            <>
              <IconButton onClick={handleRedirect}>
                {' '}
                {/* Using value.id for redirection */}
                <IconEye stroke={2} style={{ color: '#5D87FF' }} />
              </IconButton>
            </>
          );
        },
      },
      {
        dataIndex: 'level',
        title: 'Level',
        isValids: false,
      },
      {
        dataIndex: 'experience',
        title: 'Experience',
        isValids: false,
      },
      {
        dataIndex: 'token',
        title: 'Token huấn luyện',
        isValids: false,
      },
      {
        dataIndex: 'vqtb',
        title: 'Vòng quay trung bình',
        isValids: false,
      },
      {
        dataIndex: 'cl',
        title: 'Chiến lược',
        isValids: false,
      },
      {
        dataIndex: 'function',
        title: 'Functions',
        isValids: false,
      },
      {
        dataIndex: 'files',
        title: 'Files',
        isValids: false,
      },
      {
        dataIndex: 'dungluong',
        title: 'Dung lượng',
        isValids: false,
      },
      {
        dataIndex: 'cpdt',
        title: 'Chi phí/ doanh thu',
        isValids: false,
      },
      {
        dataIndex: 'cpdh',
        title: 'Chi phí / chuyển đổi',
        isValids: false,
      },
      {
        dataIndex: 'cpkh',
        title: 'Chi phí / khách hàng',
        isValids: false,
      },
    ],
    [],
  );
  const [dataSelect, setDataSelect] = useState<string[]>([]);
  useEffect(() => {
    const selectedColumns = column || [];
    const hasIsValids = selectedColumns.some((col) => col.isValids !== undefined);
    if (hasIsValids) {
      const hiddenColumns = selectedColumns
        .filter((col) => col.isValids === false)
        .map((col) => col.dataIndex || '');
      setDataSelect(hiddenColumns);
    } else {
      setDataSelect([]);
    }
  }, [column]);

  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <PageContainer title="Quản lý trợ lý" description="this is  page">
      <BannerPage title="Quản lý trợ lý" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={DataBox} totalColumn={5} />
        </Grid>
        <Grid item xs={12}>
          <Grid container sx={{ alignItems: 'center' }} spacing={2}>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Grid container sx={{ alignItems: 'center' }}>
                <Grid item xs={10}>
                  <TextField
                    id="outlined-search"
                    placeholder="Tìm kiếm trợ lý"
                    size="small"
                    type="search"
                    variant="outlined"
                    inputProps={{ 'aria-label': 'Search Followers' }}
                    sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
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
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
              }}
            >
              <IconButton aria-label="filter" sx={{ mr: 2 }}>
                <Badge badgeContent={column.length - dataSelect.length} color="primary">
                  <FilterListIcon />
                </Badge>
              </IconButton>
              <Select
                multiple
                value={dataSelect}
                displayEmpty
                onChange={handleColumnChange}
                renderValue={() => 'Sửa đổi cột'}
                size="small"
                MenuProps={{
                  autoFocus: false,
                  PaperProps: {
                    sx: {
                      marginTop: 1,
                      maxHeight: 400,
                      '&::-webkit-scrollbar': {
                        width: '4px',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#D2D2D2',
                        borderRadius: '10px',
                      },
                      '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#C6C8CC',
                      },
                      '&::-webkit-scrollbar-track': {
                        backgroundColor: '#f1f1f1',
                      },
                    },
                  },
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                }}
              >
                <MenuItem>
                  <Checkbox
                    checked={!(dataSelect.length === column.length)}
                    indeterminate={dataSelect.length > 0 && dataSelect.length < column.length}
                    onChange={() => {
                      if (dataSelect.length < column.length) {
                        const allColumns = column.map((header: Column) => header.dataIndex);
                        setDataSelect(allColumns);
                      } else {
                        setDataSelect([]);
                      }
                    }}
                  />
                  <ListItemText primary="Chọn tất cả" />
                </MenuItem>
                {column.map((header: Column) => {
                  const isSelected = !dataSelect.includes(header.dataIndex);
                  return (
                    <MenuItem key={header.dataIndex} value={header.dataIndex}>
                      <Checkbox checked={isSelected} />
                      <ListItemText primary={header.title} />
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <DateSelect />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <CustomTable columns={column} dataSource={dataRows} dataSelect={dataSelect} />
        </Grid>
      </Grid>
    </PageContainer>
  );
};
export default AssistantAdmin;
