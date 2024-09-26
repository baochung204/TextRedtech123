import { Badge, Box, Checkbox, Grid, InputAdornment, ListItemText, MenuItem, Select, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  IconBox,
  IconChartBar,
  IconPasswordUser,
  IconSearch,
  IconZoomMoney,
} from '@tabler/icons-react';
import { useEffect, useState, useMemo } from 'react';
import Point from 'src/assets/images/logos/R-Point.png';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PageContainer from 'src/components/container/PageContainer';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import FilterListIcon from '@mui/icons-material/FilterList';


const BCrumb = [
  {
    to: '/admin',
    title: 'Trang chủ',
  },
  {
    title: 'Quản lý đơn hàng',
  },
];

const DataBox = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Khách hàng',
    total: '5.415',
    icons: (
      <>
        <Box
          bgcolor="primary.main"
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
          <IconPasswordUser color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'secondary.light',
    color: 'secondary.main',
    title: 'Đơn hàng',
    total: '8.369',
    icons: (
      <>
        <Box
          bgcolor="secondary.main"
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
          <IconBox color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Doanh thu',
    total: '235.635.592 ₫',
    icons: (
      <>
        <Box
          bgcolor="success.main"
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
        </Box>
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Hoa hồng affiliate',
    total: '120.369.235 ₫',
    icons: (
      <>
        <Box
          bgcolor="warning.main"
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
          <IconZoomMoney color="white" size={30} />
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


interface RechargeTransaction {
  id: string; // ID giao dịch
  rechargeDate: string; // Ngày nạp
  customerName: string; // Tên khách hàng
  email: string; // Email khách hàng
  phoneNumber: string; // Số điện thoại
  packageName: string; // Tên gói
  points: JSX.Element; // Số point
  listedPrice: string; // Giá niêm yết
  promotionCode?: string; // Mã khuyến mại (optional nếu có)
  paymentAmount: string; // Số tiền
  totalOrder: number; // Tổng đơn
  publisherId: string; // ID publisher
  affiliateCommission: string; // Hoa hồng Affiliate
  status: JSX.Element; // Trạng thái (ví dụ: Đã thanh toán, Chưa thanh toán)
  invoice: string; // Hóa đơn
}

const getStatusTextAndColor = (status: number) => {
  switch (status) {
    case 1:
      return { text: 'Đã thanh toán', color: '#13DEB9' };
    case 2:
      return { text: 'Chưa thanh toán', color: '#ff9800' };
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
const dataRows: RechargeTransaction[] = [
  {
    id: 'RT001',
    rechargeDate: '2024-09-01',
    customerName: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phoneNumber: '0123456789',
    packageName: 'Gói cơ bản',
    points: (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        100
        <img src={Point} alt="" width={20} height={20} style={{ borderRadius: 50 }} />
      </Box>
    ),
    listedPrice: '20.000 ₫',
    promotionCode: 'PROMO10',
    paymentAmount: '180.000 ₫',
    totalOrder: 1,
    publisherId: 'PUB001',
    affiliateCommission: '9.000 ₫',
    status: renderStatus(2),
    invoice: 'INV001',
  },
  {
    id: 'RT002',
    rechargeDate: '2024-09-02',
    customerName: 'Trần Thị B',
    email: 'tranthib@example.com',
    phoneNumber: '0987654321',
    packageName: 'Gói nâng cao',
    points: (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        200
        <img src={Point} alt="" width={20} height={20} style={{ borderRadius: 50 }} />
      </Box>
    ),
    listedPrice: '45.050 ₫',
    promotionCode: 'PROMO20',
    paymentAmount: '320.000 ₫',
    totalOrder: 2,
    publisherId: 'PUB002',
    affiliateCommission: '16.000 ₫',
    status: renderStatus(2),
    invoice: 'INV002',
  },
  {
    id: 'RT003',
    rechargeDate: '2024-09-03',
    customerName: 'Lê Văn C',
    email: 'levanc@example.com',
    phoneNumber: '0123987654',
    packageName: 'Gói VIP',
    points: (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        400
        <img src={Point} alt="" width={20} height={20} style={{ borderRadius: 50 }} />
      </Box>
    ),
    listedPrice: '23.500 ₫',
    promotionCode: '',
    paymentAmount: '1.000.000 ₫',
    totalOrder: 1,
    publisherId: 'PUB003',
    affiliateCommission: '50.000 ₫',
    status: renderStatus(1),
    invoice: 'INV003',
  },
  {
    id: 'RT004',
    rechargeDate: '2024-09-04',
    customerName: 'Hoàng Thị D',
    email: 'hoangthid@example.com',
    phoneNumber: '0234567890',
    packageName: 'Gói khuyến mãi',
    points: (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        105
        <img src={Point} alt="" width={20} height={20} style={{ borderRadius: 50 }} />
      </Box>
    ),
    listedPrice: '56.000 ₫',
    promotionCode: 'PROMO15',
    paymentAmount: '25.000.000',
    totalOrder: 1,
    publisherId: 'PUB004',
    affiliateCommission: '1.000.500 ₫ ',
    status: renderStatus(1),
    invoice: 'INV004',
  },
  {
    id: 'RT005',
    rechargeDate: '2024-09-05',
    customerName: 'Phạm Văn E',
    email: 'phamvane@example.com',
    phoneNumber: '0345678901',
    packageName: 'Gói thường',
    points: (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        1200
        <img src={Point} alt="" width={20} height={20} style={{ borderRadius: 50 }} />
      </Box>
    ),
    listedPrice: '252.000 ₫',
    promotionCode: '',
    paymentAmount: '500.000 ₫',
    totalOrder: 1,
    publisherId: 'PUB005',
    affiliateCommission: '50.000 ₫',
    status: renderStatus(2),
    invoice: 'INV005',
  },
  {
    id: 'RT006',
    rechargeDate: '2024-09-06',
    customerName: 'Ngô Thị F',
    email: 'ngothif@example.com',
    phoneNumber: '0456789012',
    packageName: 'Gói đặc biệt',
    points: (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        450
        <img src={Point} alt="" width={20} height={20} style={{ borderRadius: 50 }} />
      </Box>
    ),
    listedPrice: '600.000 ₫',
    promotionCode: 'PROMO25',
    paymentAmount: '520.000 ₫',
    totalOrder: 2,
    publisherId: 'PUB006',
    affiliateCommission: '25.000 ₫',
    status: renderStatus(2),
    invoice: 'INV006',
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
  const column = useMemo<Column[]>(() => [
    {
      dataIndex: 'id',
      title: 'ID',
    },
    {
      dataIndex: 'rechargeDate',
      title: 'Ngày nạp',
    },
    {
      dataIndex: 'customerName',
      title: 'Khách hàng',
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
      dataIndex: 'packageName',
      title: 'Tên gói ',
    },
    {
      dataIndex: 'points',
      title: 'Số point ',
    },
    {
      dataIndex: 'listedPrice',
      title: 'Giá niêm yết ',
    },
    {
      dataIndex: 'promotionCode',
      title: 'Mã khuyến mại',
    },
    {
      dataIndex: 'paymentAmount',
      title: 'Số tiền  ',
    },
    {
      dataIndex: 'totalOrder',
      title: 'Tổng đơn',
    },
    {
      dataIndex: 'publisherId',
      title: 'ID publisher',
    },
    {
      dataIndex: 'affiliateCommission',
      title: 'Hoa hồng Affiliate',
    },
    {
      dataIndex: 'status',
      title: 'Trạng thái',
    },
    {
      dataIndex: 'invoice',
      title: 'Hóa đơn',
    },
    {
      dataIndex: 'details',
      title: 'Chi tiết',
    },
  ], [])


  const [dataSelect, setDataSelect] = useState<string[]>([]);

  useEffect(() => {
    const selectedColumns = column || [];
    const hasIsValids = selectedColumns.some(col => col.isValids !== undefined);
    if (hasIsValids) {
      const hiddenColumns = selectedColumns
        .filter(col => col.isValids === false)
        .map(col => col.dataIndex || '');
      setDataSelect(hiddenColumns);
    } else {
      setDataSelect([]);
    }
  }, [column]);

  const handleColumnChange = (event: any) => {
    const { target: { value } } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };



  return (
    <PageContainer title="Vertical Form" description="this is Vertical Form page">
      <BannerPage title="Đơn hàng R-Point" items={BCrumb} />
      <Grid container spacing={3}>
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
                placeholder="Tìm kiếm đơn hàng"
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
                <Badge badgeContent={dataSelect.length !== 0 && dataSelect.length} color={dataSelect.length !== 0 ? 'primary' : undefined}>
                  <FilterListIcon color="action" />
                </Badge>
                <Select
                  multiple
                  value={dataSelect}
                  displayEmpty
                  onChange={handleColumnChange}
                  renderValue={() => 'Sửa đổi cột'}
                  size='small'
                 
                >
                  {column.map((header: any) => {

                    console.log(`check ${header.title}`, dataSelect.includes(header.dataIndex))
                    const isSelected = dataSelect.includes(header.dataIndex);
                    return (
                      <MenuItem
                        key={header.dataIndex} value={header.dataIndex}>
                        <Checkbox checked={!isSelected} />
                        <ListItemText primary={header.title} />
                      </MenuItem>
                    );
                  })}
                </Select>
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
          <CustomTable
            columns={column}
            dataSource={dataRows}
            dataSelect={dataSelect}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default OrderRPoint;
