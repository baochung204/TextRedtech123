import { Box, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import icontext from 'src/assets/images/logos/R-Point.png';
import TableList from 'src/components/ComponentTables/tableList';
import TopCard from 'src/components/widgets/cards/TopCard';
import {
  IconCurrencySom,
  IconElevator,
  IconElevatorOff,
  IconJson,
  IconPasswordUser,
  IconSearch,
  IconTicket,
  IconWashDrycleanOff,
} from '@tabler/icons-react';
import { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

const BCrumb = [
  {
    to: '/',
    title: 'ADMIN',
  },
  {
    title: 'TRỢ LÝ',
  },
  {
    title: 'QUẢN LÝ TRỢ LÝ',
  },
];

const DataBox = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Ticket',
    total: '2.415',
    icons: (
      <>
        <Box
          bgcolor="primary.main"
          textAlign="center"
          padding={1}
          sx={{
            width: 45,
            height: 45,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconTicket color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'secondary.light',
    color: 'secondary.main',
    title: 'Khách hàng',
    total: '1.369',
    icons: (
      <>
        <Box
          bgcolor="secondary.main"
          textAlign="center"
          padding={1}
          sx={{
            width: 45,
            height: 45,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconPasswordUser color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Đánh giá',
    total: '4.7/5',
    icons: (
      <>
        <Box
          bgcolor="success.main"
          textAlign="center"
          padding={1}
          sx={{
            width: 45,
            height: 45,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconElevator color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Chưa xử lý',
    total: '236',
    icons: (
      <>
        <Box
          bgcolor="warning.main"
          textAlign="center"
          padding={1}
          sx={{
            width: 45,
            height: 45,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconWashDrycleanOff color="white" size={30} />
        </Box>
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

const headCells: HeadCell[] = [
  {
    dataIndex: 'idTicket',
    numeric: false,
    disablePadding: false,
    label: 'ID Ticket',
  },
  {
    dataIndex: 'creationTime',
    numeric: false,
    disablePadding: false,
    label: 'Thời gian tạo',
  },
  {
    dataIndex: 'interaction',
    numeric: false,
    disablePadding: false,
    label: 'Tương tác gần đây',
  },
  {
    dataIndex: 'rating',
    numeric: false,
    disablePadding: false,
    label: 'Đánh giá',
  },
  {
    dataIndex: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Trạng thái',
  },
  {
    dataIndex: 'title',
    numeric: false,
    disablePadding: false,
    label: 'Tiêu đề',
  },
  {
    dataIndex: 'customerId',
    numeric: false,
    disablePadding: false,
    label: 'ID Khách hàng',
  },
  {
    dataIndex: 'customerName',
    numeric: false,
    disablePadding: false,
    label: 'Tên Khách hàng',
  },
  {
    dataIndex: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    dataIndex: 'phoneNumber',
    numeric: false,
    disablePadding: false,
    label: 'Số điện thoại',
  },
];
interface DataRow {
  idTicket: string;
  creationTime: string;
  interaction: string;
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

const dataRows: DataRow[] = [
  {
    idTicket: 'TCK001',
    creationTime: '2024-09-01 08:30',
    interaction: 'Nhận yêu cầu',
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
    creationTime: '2024-09-02 09:15',
    interaction: 'Gửi phản hồi',
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
    creationTime: '2024-09-03 10:45',
    interaction: 'Gọi điện',
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
    creationTime: '2024-09-04 11:20',
    interaction: 'Nhận yêu cầu',
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
    creationTime: '2024-09-05 14:05',
    interaction: 'Gửi phản hồi',
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
    creationTime: '2024-09-06 15:30',
    interaction: 'Gọi điện',
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
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  return (
    <PageContainer title="Vertical Form" description="this is Vertical Form page">
      <BannerPage title="Quản lý ticket" items={BCrumb} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TopCard dataSource={DataBox} totalColumn={4} />
        </Grid>
        <Grid item xs={12}>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
                      <IconSearch size="20" />
                    </InputAdornment>
                  ),
                }}
                fullWidth={true}
              />
            </Grid>

            <Grid item xs={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={selectedStartDate}
                    onChange={setSelectedStartDate}
                    renderInput={(params: any) => <TextField {...params} />}
                  />
                  <Typography>tới</Typography>
                  <DatePicker
                    value={selectedEndDate}
                    onChange={setSelectedEndDate}
                    renderInput={(params: any) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TableList headCells={headCells} dataRows={dataRows} />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Ticket;
