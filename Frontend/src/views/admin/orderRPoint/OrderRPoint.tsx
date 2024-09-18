import { Box, Grid, InputAdornment, TextField, Typography } from '@mui/material';
// components
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

import icontext from 'src/assets/images/logos/R-Point.png';

import TableList from 'src/components/ComponentTables/tableList';

import TopCard from 'src/components/widgets/cards/TopCard';
import { IconSearch } from '@tabler/icons-react';
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
        <img src={icontext} alt="" width={40} />
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
        <img src={icontext} alt="" width={40} />
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
        <img src={icontext} alt="" width={40} />
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

const headCells: HeadCell[] = [
  {
    dataIndex: 'id',
    numeric: false,
    disablePadding: false,
    label: 'ID',
  },
  {
    dataIndex: 'rechargeDate',
    numeric: false,
    disablePadding: false,
    label: 'Ngày nạp',
  },
  {
    dataIndex: 'customerName',
    numeric: false,
    disablePadding: false,
    label: 'Khách hàng',
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
  {
    dataIndex: 'packageName',
    numeric: false,
    disablePadding: false,
    label: 'Tên gói ',
  },
  {
    dataIndex: 'points',
    numeric: false,
    disablePadding: false,
    label: 'Số point ',
  },
  {
    dataIndex: 'listedPrice',
    numeric: false,
    disablePadding: false,
    label: 'Giá niêm yết ',
  },
  {
    dataIndex: 'promotionCode',
    numeric: false,
    disablePadding: false,
    label: 'Mã khuyến mại',
  },
  {
    dataIndex: 'paymentAmount',
    numeric: false,
    disablePadding: false,
    label: 'Số tiền  ',
  },
  {
    dataIndex: 'totalOrder',
    numeric: false,
    disablePadding: false,
    label: 'Tổng đơn',
  },
  {
    dataIndex: 'publisherId',
    numeric: false,
    disablePadding: false,
    label: 'ID publisher',
  },
  {
    dataIndex: 'affiliateCommission',
    numeric: false,
    disablePadding: false,
    label: 'Hoa hồng Affiliate',
  },
  {
    dataIndex: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Trạng thái',
  },
  {
    dataIndex: 'invoice',
    numeric: false,
    disablePadding: false,
    label: 'Hóa đơn',
  },
  {
    dataIndex: 'details',
    numeric: false,
    disablePadding: false,
    label: 'Chi tiết',
  },
];
interface RechargeTransaction {
  id: string; // ID giao dịch
  rechargeDate: string; // Ngày nạp
  customerName: string; // Tên khách hàng
  email: string; // Email khách hàng
  phoneNumber: string; // Số điện thoại
  packageName: string; // Tên gói
  points: number; // Số point
  listedPrice: number; // Giá niêm yết
  promotionCode?: string; // Mã khuyến mại (optional nếu có)
  paymentAmount: number; // Số tiền
  totalOrder: number; // Tổng đơn
  publisherId: string; // ID publisher
  affiliateCommission: number; // Hoa hồng Affiliate
  status: string; // Trạng thái (ví dụ: Đã thanh toán, Chưa thanh toán)
  invoice: string; // Hóa đơn
  details: string; // Chi tiết giao dịch
}

const dataRows: RechargeTransaction[] = [
  {
    id: 'RT001',
    rechargeDate: '2024-09-01',
    customerName: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phoneNumber: '0123456789',
    packageName: 'Gói cơ bản',
    points: 100,
    listedPrice: 200000,
    promotionCode: 'PROMO10',
    paymentAmount: 180000,
    totalOrder: 1,
    publisherId: 'PUB001',
    affiliateCommission: 9000,
    status: 'Đã thanh toán',
    invoice: 'INV001',
    details: 'Nạp gói cơ bản với khuyến mại 10% và nhận 100 điểm.',
  },
  {
    id: 'RT002',
    rechargeDate: '2024-09-02',
    customerName: 'Trần Thị B',
    email: 'tranthib@example.com',
    phoneNumber: '0987654321',
    packageName: 'Gói nâng cao',
    points: 200,
    listedPrice: 400000,
    promotionCode: 'PROMO20',
    paymentAmount: 320000,
    totalOrder: 2,
    publisherId: 'PUB002',
    affiliateCommission: 16000,
    status: 'Chưa thanh toán',
    invoice: 'INV002',
    details: 'Nạp gói nâng cao với khuyến mại 20% và nhận 200 điểm.',
  },
  {
    id: 'RT003',
    rechargeDate: '2024-09-03',
    customerName: 'Lê Văn C',
    email: 'levanc@example.com',
    phoneNumber: '0123987654',
    packageName: 'Gói VIP',
    points: 500,
    listedPrice: 1000000,
    promotionCode: '',
    paymentAmount: 1000000,
    totalOrder: 1,
    publisherId: 'PUB003',
    affiliateCommission: 50000,
    status: 'Đã thanh toán',
    invoice: 'INV003',
    details: 'Nạp gói VIP không có khuyến mại và nhận 500 điểm.',
  },
  {
    id: 'RT004',
    rechargeDate: '2024-09-04',
    customerName: 'Hoàng Thị D',
    email: 'hoangthid@example.com',
    phoneNumber: '0234567890',
    packageName: 'Gói khuyến mãi',
    points: 150,
    listedPrice: 300000,
    promotionCode: 'PROMO15',
    paymentAmount: 255000,
    totalOrder: 1,
    publisherId: 'PUB004',
    affiliateCommission: 12750,
    status: 'Đã thanh toán',
    invoice: 'INV004',
    details: 'Nạp gói khuyến mãi với khuyến mại 15% và nhận 150 điểm.',
  },
  {
    id: 'RT005',
    rechargeDate: '2024-09-05',
    customerName: 'Phạm Văn E',
    email: 'phamvane@example.com',
    phoneNumber: '0345678901',
    packageName: 'Gói thường',
    points: 50,
    listedPrice: 100000,
    promotionCode: '',
    paymentAmount: 100000,
    totalOrder: 1,
    publisherId: 'PUB005',
    affiliateCommission: 5000,
    status: 'Chưa thanh toán',
    invoice: 'INV005',
    details: 'Nạp gói thường không có khuyến mại và nhận 50 điểm.',
  },
  {
    id: 'RT006',
    rechargeDate: '2024-09-06',
    customerName: 'Ngô Thị F',
    email: 'ngothif@example.com',
    phoneNumber: '0456789012',
    packageName: 'Gói đặc biệt',
    points: 300,
    listedPrice: 600000,
    promotionCode: 'PROMO25',
    paymentAmount: 450000,
    totalOrder: 2,
    publisherId: 'PUB006',
    affiliateCommission: 22500,
    status: 'Đã thanh toán',
    invoice: 'INV006',
    details: 'Nạp gói đặc biệt với khuyến mại 25% và nhận 300 điểm.',
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
const OrderRPoint = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  return (
    <PageContainer title="Vertical Form" description="this is Vertical Form page">
      <BannerPage title="Đơn hàng R-Point" items={BCrumb} />
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

export default OrderRPoint;
