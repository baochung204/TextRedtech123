import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Badge,
  Box,
  Checkbox,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { IconSearch } from '@tabler/icons-react';
import { useEffect, useMemo, useState } from 'react';
import processing from 'src/assets/Adminphoto/chua xu ly.png';
import rating from 'src/assets/Adminphoto/DANH GIA.png';
import customer from 'src/assets/Adminphoto/khách hàng.png';
import ticket from 'src/assets/Adminphoto/ticket.png';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PageContainer from 'src/components/container/PageContainer';
import BlankCard from 'src/components/shared/BlankCard';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import rating1 from 'src/assets/Adminphoto/đanh gia.png';

const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },

  {
    title: 'Danh sách trợ lý',
  },
];

const DataBox = [
  {
    bgColor: 'primary.light',
    title: 'Ticket',
    total: '2.415',
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
          {/* <IconTicket color="white" size={30} /> */}
          <img src={ticket} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Khách hàng',
    total: '1.369',
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
    title: 'Đánh giá',
    total: '4.7/5',
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
          <img src={rating} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Chưa xử lý',
    total: '236',
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
          <img src={processing} width={30} />
        </Box>
      </>
    ),
  },
];

interface DataRow {
  idTicket: string;
  creationTime: string;
  interaction: Date;
  rating: number;
  status: JSX.Element;
  title: string;
  customerId: string;
  customerName: string;
  email: string;
  phoneNumber: string;
}

const getStatusTextAndColor = (status: number) => {
  switch (status) {
    case 1:
      return { text: 'Đã xử lý', color: '#13DEB9' };
    case 2:
      return { text: 'Chưa xử lý', color: '#ff9800' };
    default:
      return { text: 'Không xác định', color: '#000000' };
  }
};

const renderStatus = (status: number) => {
  const { text, color } = getStatusTextAndColor(status);
  return (
    <Typography style={{ color }} variant="subtitle2">
      {text}
    </Typography>
  );
};
// datasource
const dataRows: DataRow[] = [
  {
    idTicket: 'TCK001',
    creationTime: '2024-09-01',
    interaction: new Date('2023-11-22'),
    rating: 4,
    status: renderStatus(1),
    title: 'Lỗi sản phẩm',
    customerId: 'CUS001',
    customerName: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phoneNumber: '0123456789',
  },
  {
    idTicket: 'TCK002',
    creationTime: '2024-09-02',
    interaction: new Date('2023-11-22'),
    rating: 5,
    status: renderStatus(2),
    title: 'Yêu cầu hỗ trợ kỹ thuật',
    customerId: 'CUS002',
    customerName: 'Trần Thị B',
    email: 'tranthib@example.com',
    phoneNumber: '0987654321',
  },
  {
    idTicket: 'TCK003',
    creationTime: '2024-09-03',
    interaction: new Date('2023-11-22'),
    rating: 3,
    status: renderStatus(1),
    title: 'Vấn đề thanh toán',
    customerId: 'CUS003',
    customerName: 'Lê Văn C',
    email: 'levanc@example.com',
    phoneNumber: '0123987654',
  },
  {
    idTicket: 'TCK004',
    creationTime: '2024-09-04',
    interaction: new Date('2023-11-22'),
    rating: 2,
    status: renderStatus(2),
    title: 'Sản phẩm bị lỗi',
    customerId: 'CUS004',
    customerName: 'Hoàng Thị D',
    email: 'hoangthid@example.com',
    phoneNumber: '0234567890',
  },
  {
    idTicket: 'TCK005',
    creationTime: '2024-09-05',
    interaction: new Date('2023-11-22'),
    rating: 4,
    status: renderStatus(2),
    title: 'Yêu cầu đổi hàng',
    customerId: 'CUS005',
    customerName: 'Phạm Văn E',
    email: 'phamvane@example.com',
    phoneNumber: '0345678901',
  },
  {
    idTicket: 'TCK006',
    creationTime: '2024-09-06',
    interaction: new Date('2023-11-22'),
    rating: 5,
    status: renderStatus(1),
    title: 'Vấn đề bảo hành',
    customerId: 'CUS006',
    customerName: 'Ngô Thị F',
    email: 'ngothif@example.com',
    phoneNumber: '0456789012',
  },
];

interface FilmsData {
  id: number;
  title: string;
}
interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const FilmsData: FilmsData[] = [
  { id: 1, title: 'File' },
  { id: 2, title: 'Dung lượng' },
  { id: 3, title: 'Functions' },
  { id: 4, title: 'Token huấn luyện' },
  { id: 5, title: 'Ngày tạo' },
  { id: 6, title: 'Vòng quay trung bình' },
  { id: 7, title: 'khách hàng' },
  { id: 8, title: 'Đơn hàng' },
  { id: 9, title: 'CVR' },
  { id: 10, title: 'GMV' },
  { id: 11, title: 'Chi phí' },
  { id: 12, title: 'Chi phí/Doanh thu' },
  { id: 13, title: 'Chi phí/Đơn hàng' },
  { id: 14, title: 'Chi phí/Khách hàng' },
  { id: 15, title: 'Chiến lược' },
];
const Ticket = () => {
  // const [selectedItems] = useState<number[]>([]);
  const column = useMemo<Column[]>(
    () => [
      {
        dataIndex: 'idTicket',
        title: 'ID',
      },
      {
        dataIndex: 'creationTime',
        title: 'Thời gian tạo',
      },
      {
        dataIndex: 'customerId',
        title: 'ID Khách hàng',
      },
      {
        dataIndex: 'customerName',
        title: 'Tên Khách hàng',
      },
      {
        dataIndex: 'interaction',
        title: 'Tương tác gần đây',
        render: (value: any) => value.toLocaleDateString(),
      },
      {
        dataIndex: 'rating',
        title: 'Đánh giá',
        render: (value: any) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              justifyContent: 'flex-start',
            }}
          >
            <Box>{value}</Box>
            <IconButton sx={{ padding: '0' }}>
              <img src={rating1} width={16} alt="Rating" />
            </IconButton>
          </Box>
        ),
      },
      {
        dataIndex: 'email',
        title: 'Email',
      },
      {
        dataIndex: 'phoneNumber',
        title: 'Số điện thoại',
      },
      {
        dataIndex: 'title',
        title: 'Tiêu đề',
      },
      {
        dataIndex: 'status',
        title: 'Trạng thái',
        render: (_row: any, value: any) => (
          <Chip
            label={value.rating > 3 ? 'Đã xử lý' : 'Chưa xử lý'}
            color={value.rating > 3 ? 'success' : 'error'}
          />
        ),
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
    <PageContainer title="Quản lý ticket" description="this is page">
      <BannerPage title="Quản lý ticket" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={DataBox} totalColumn={4} />
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
                    placeholder="Tìm kiếm ticket"
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
                  // console.log(`check ${header.title}`, dataSelect.includes(header.dataIndex));

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
                <DateSelect />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <BlankCard>
            <CustomTable columns={column} dataSource={dataRows} dataSelect={dataSelect} />
          </BlankCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Ticket;
