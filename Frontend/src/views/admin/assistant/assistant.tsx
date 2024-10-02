import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import {
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
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconChartArcs, IconChartBar, IconReceipt, IconSearch } from '@tabler/icons-react';
import { Dayjs } from 'dayjs';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import customer from 'src/assets/Adminphoto/khách hàng.png';
import bill from 'src/assets/ICON/dơn hang.png';
import gmv from 'src/assets/ICON/gmv.png';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PageContainer from 'src/components/container/PageContainer';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
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
          <IconReceipt color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',

    title: 'CVR trung bình',
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
          <IconChartArcs color="white" size={30} />
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

    title: 'Đơn hàng',
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
  assistantId: string; // ID trợ lý
  customerId: string; // ID khách hàng
  assistantImage: JSX.Element; // Ảnh trợ lý
  assistantName: string; // Tên trợ lý
  level: number; // Level trợ lý
  experience: number; // Exp (kinh nghiệm)
  file: string; // File liên quan
  fileSize: string; // Dung lượng file
  functions: string[]; // Danh sách các chức năng
  trainingToken: string; // Token huấn luyện
  createdDate: Date; // Ngày tạo
  averageRotation: number; // Vòng quay trung bình
  customer: string; // Thông tin khách hàng
  order: string; // Đơn hàng
  cvr: number; // CVR (Conversion Rate)
  gmv: number; // GMV (Gross Merchandise Value)
  cost: number; // Chi phí
  costToRevenueRatio: number; // Chi phí/Doanh thu
  costPerOrder: number; // Chi phí/Đơn hàng
  costPerCustomer: number; // Chi phí/Khách hàng
  strategy: string; // Chiến lược
}
const dataRows: AssistantData[] = [
  {
    assistantId: 'A001',
    customerId: 'C001',
    assistantImage: (
      <>
        <img
          src="https://picsum.photos/300/300"
          width={50}
          height={'auto'}
          style={{ borderRadius: '50%' }}
          alt=""
        />
      </>
    ),
    assistantName: 'Trợ lý 1',
    level: 5,
    experience: 1200,
    file: 'file001.pdf',
    fileSize: '2MB',
    functions: ['Chức năng A', 'Chức năng B'],
    trainingToken: 'Token001',
    createdDate: new Date('2023-01-15'),
    averageRotation: 120,
    customer: 'Khách hàng A',
    order: 'Đơn hàng 001',
    cvr: 2.5,
    gmv: 15000,
    cost: 2000,
    costToRevenueRatio: 0.13,
    costPerOrder: 25,
    costPerCustomer: 100,
    strategy: 'Chiến lược A',
  },
  {
    assistantId: 'A002',
    customerId: 'C002',
    assistantImage: (
      <>
        <img
          src="https://picsum.photos/300/300"
          width={50}
          height={'auto'}
          style={{ borderRadius: '50%' }}
          alt=""
        />
      </>
    ),
    assistantName: 'Trợ lý 2',
    level: 7,
    experience: 2500,
    file: 'file002.docx',
    fileSize: '3.5MB',
    functions: ['Chức năng C', 'Chức năng D'],
    trainingToken: 'Token002',
    createdDate: new Date('2023-03-22'),
    averageRotation: 150,
    customer: 'Khách hàng B',
    order: 'Đơn hàng 002',
    cvr: 3.2,
    gmv: 18000,
    cost: 3000,
    costToRevenueRatio: 0.17,
    costPerOrder: 30,
    costPerCustomer: 120,
    strategy: 'Chiến lược B',
  },
  {
    assistantId: 'A003',
    customerId: 'C003',
    assistantImage: (
      <>
        <img
          src="https://picsum.photos/300/300"
          width={50}
          height={'auto'}
          style={{ borderRadius: '50%' }}
          alt=""
        />
      </>
    ),
    assistantName: 'Trợ lý 3',
    level: 3,
    experience: 500,
    file: 'file003.xlsx',
    fileSize: '1.2MB',
    functions: ['Chức năng E', 'Chức năng F'],
    trainingToken: 'Token003',
    createdDate: new Date('2023-05-10'),
    averageRotation: 100,
    customer: 'Khách hàng C',
    order: 'Đơn hàng 003',
    cvr: 1.8,
    gmv: 12000,
    cost: 1500,
    costToRevenueRatio: 0.12,
    costPerOrder: 20,
    costPerCustomer: 80,
    strategy: 'Chiến lược C',
  },
];
interface FilmsData {
  id: number;
  title: string;
}
const FilmsData: FilmsData[] = [
  { id: 1, title: 'ID khách hàng' },
  { id: 2, title: 'Ảnh Trợ lý ' },
  { id: 3, title: 'Tên trợ lý' },
  { id: 4, title: 'Files' },
  { id: 5, title: 'Dung lượng' },
  { id: 6, title: 'Functions' },
  { id: 7, title: 'Chiến lược' },
];
const AssistantAdmin = () => {
  const column = useMemo<Column[]>(
    () => [
      {
        dataIndex: 'customerId',
        title: 'ID khách hàng',
      },
      {
        dataIndex: 'assistantImage',
        title: 'Ảnh trợ lý',
      },
      {
        dataIndex: 'assistantName',
        title: 'Tên trợ lý',
      },
      {
        dataIndex: 'files',
        title: 'Files',
        isValids: true,
      },
      {
        dataIndex: 'dungluong',
        title: 'Dung lượng',
        isValids: true,
      },
      {
        dataIndex: 'function',
        title: 'Functions',
        isValids: true,
      },
      {
        dataIndex: 'cl',
        title: 'Chiến lược',
        isValids: true,
      },
      {
        dataIndex: 'assistantId',
        title: 'ID trợ lý',
        isValids: false,
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
        dataIndex: 'ngaytao',
        title: 'Ngày tạo',
        isValids: false,
      },
      {
        dataIndex: 'vqtb',
        title: 'Vòng quay trung bình',
        isValids: false,
      },
      {
        dataIndex: 'kh',
        title: 'Khách hàng',
        isValids: false,
      },
      {
        dataIndex: 'dh',
        title: 'Đơn hàng',
        isValids: false,
      },
      {
        dataIndex: 'cvr',
        title: 'CVR',
        isValids: false,
      },
      {
        dataIndex: 'gmv',
        title: 'GMV',
        isValids: false,
      },
      {
        dataIndex: 'cp',
        title: 'Chi phí',
        isValids: false,
      },
      {
        dataIndex: 'cpdt',
        title: 'Chi phí/ Doanh thu',
        isValids: false,
      },
      {
        dataIndex: 'cpdh',
        title: 'Chi phí/ Đơn hàng',
        isValids: false,
      },
      {
        dataIndex: 'cpkh',
        title: 'Chi phí/ khách hàng',
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
  const [value, setValue] = useState<Dayjs | null>(null);
  const [value1, setValue1] = useState<Dayjs | null>(null);
  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <PageContainer title="Vertical Form" description="this is Vertical Form page">
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
                <Grid item>
                  <Link to="/admin/assistanteditoradmin">
                    <IconButton color="primary" aria-label="Add to cart">
                      <AddCircleIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                  </Link>
                </Grid>
                <Grid item>
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
                {column.map((header: any) => {
                  console.log(`check ${header.title}`, dataSelect.includes(header.dataIndex));

                  const isSelected = dataSelect.includes(header.dataIndex);

                  return (
                    <MenuItem key={header.dataIndex} value={header.dataIndex}>
                      <Checkbox checked={!isSelected} />
                      <ListItemText primary={header.title} />
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(props) => (
                      <CustomTextField
                        {...props}
                        fullWidth
                        size="small"
                        sx={{
                          '& .MuiSvgIcon-root': {
                            width: '18px',
                            height: '18px',
                          },
                          '& .MuiFormHelperText-root': {
                            display: 'none',
                          },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
                tới
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={value1}
                    onChange={(newValue) => {
                      setValue1(newValue);
                    }}
                    renderInput={(props) => (
                      <CustomTextField
                        {...props}
                        fullWidth
                        size="small"
                        sx={{
                          '& .MuiSvgIcon-root': {
                            width: '18px',
                            height: '18px',
                          },
                          '& .MuiFormHelperText-root': {
                            display: 'none',
                          },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
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
