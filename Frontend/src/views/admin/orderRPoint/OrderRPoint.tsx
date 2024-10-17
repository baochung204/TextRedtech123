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
  Typography,
} from '@mui/material';
import { IconEye, IconSearch } from '@tabler/icons-react';
// import { Dayjs } from 'dayjs';
import { useEffect, useMemo, useState } from 'react';
import revenue from 'src/assets/Adminphoto/doanh thu.png';
import bill from 'src/assets/Adminphoto/dơn hang.png';
import commission from 'src/assets/Adminphoto/hoa hong.png';
import customer from 'src/assets/Adminphoto/khách hàng.png';
import Point from 'src/assets/images/logos/R-Point.png';
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
    title: 'Quản lý đơn hàng',
  },
];

const DataBox = [
  {
    bgColor: 'primary.light',
    title: 'Khách hàng',
    total: '5.415',
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
    total: '8.369',
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
    title: 'Doanh thu',
    total: '235.635.592 ₫',
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
          {/* <IconChartBar color="white" size={30} /> */}
          <img src={revenue} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Hoa hồng affiliate',
    total: '120.369.235 ₫',
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
          {/* <IconZoomMoney color="white" size={30} /> */}
          <img src={commission} width={30} />
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
  points: number; // Số point
  listedPrice: string; // Giá niêm yết
  promotionCode?: string; // Mã khuyến mại (optional nếu có)
  paymentAmount: string; // Số tiền
  totalOrder: string; // Doanh thu
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
    points: 100,

    listedPrice: '200.000',
    promotionCode: 'PROMO10',
    paymentAmount: '20.000',
    totalOrder: '180.000',
    publisherId: 'PUB001',
    affiliateCommission: '20.000',
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
    points: 200,
    listedPrice: '250.000',
    promotionCode: 'PROMO20',
    paymentAmount: '50.000',
    totalOrder: '200.000',
    publisherId: 'PUB002',
    affiliateCommission: '25.000',
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
    points: 300,
    listedPrice: '230.000',
    promotionCode: '',
    paymentAmount: '50.000',
    totalOrder: '180.000',
    publisherId: 'PUB003',
    affiliateCommission: '23.000',
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
    points: 400,
    listedPrice: '350.000',
    promotionCode: 'PROMO15',
    paymentAmount: '20.000',
    totalOrder: '330.000',
    publisherId: 'PUB004',
    affiliateCommission: '35.000 ',
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
    points: 400,
    listedPrice: '252.000',
    promotionCode: '',
    paymentAmount: '25.000',
    totalOrder: '227.000',
    publisherId: 'PUB005',
    affiliateCommission: '25.200',
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
    points: 50,
    listedPrice: '600.000',
    promotionCode: 'PROMO25',
    paymentAmount: '300.000',
    totalOrder: '300.000',
    publisherId: 'PUB006',
    affiliateCommission: '30.000',
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
  // const [selectedItems] = useState<number[]>([]);
  const column = useMemo<Column[]>(
    () => [
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
        render: (value: number) => (
          <Box
            sx={{
              px: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
              gap: 0.5,
              width: '70px',
            }}
          >
            {value} <img src={Point} alt="" width={20} height={20} style={{ borderRadius: 50 }} />
          </Box>
        ),
      },
      {
        dataIndex: 'listedPrice',
        title: 'Giá niêm yết ',
        render: (value: string) => (
          <Box sx={{ px: 1, display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            {value} ₫
          </Box>
        ),
      },
      {
        dataIndex: 'promotionCode',
        title: 'Mã khuyến mại',
      },
      {
        dataIndex: 'paymentAmount',
        title: 'Số tiền giảm  ',
        render: (value: string) => (
          <Box sx={{ px: 1, display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            {value} ₫
          </Box>
        ),
      },
      {
        dataIndex: 'totalOrder',
        title: 'Doanh thu',
        render: (value: string) => (
          <Box sx={{ px: 1, display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            {value} ₫
          </Box>
        ),
      },
      {
        dataIndex: 'publisherId',
        title: 'ID publisher',
      },
      {
        dataIndex: 'affiliateCommission',
        title: 'Hoa hồng Affiliate',
        render: (value: string) => (
          <Box sx={{ px: 1, display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            {value} ₫
          </Box>
        ),
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
        render: () => (
          <>
            <IconButton
              onClick={() => {
                // setSelectID(row.id);
                // setOpen(true);
                // setCheckValue('view');
              }}
            >
              <IconEye stroke={2} style={{ color: '#5D87FF' }} />
            </IconButton>
          </>
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
    <PageContainer title="Đơn hàng R-Point" description="this is page">
      <BannerPage title="Đơn hàng R-Point" items={BCrumb} />
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
                {/* <Grid item >
                  <IconButton
                    color="primary"
                    aria-label="Add to cart"
                  // onClick={() => setOpen(true)}

                  >
                    <AddCircleIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Grid> */}
                <Grid item xs={10}>
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

export default OrderRPoint;
