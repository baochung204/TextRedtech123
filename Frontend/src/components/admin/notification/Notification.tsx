import { Box, Fab, Grid, InputAdornment, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  IconBellRinging,
  IconEye,
  IconPlus,
  IconSearch,
  IconTags,
  IconWorldUpload,
} from '@tabler/icons-react';
import { useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import TopCard from 'src/components/widgets/cards/TopCard';
import BlankCard from '../../../components/shared/BlankCard';
import AddNotification from './add/AddNotification';
const DataBox = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Thông báo',
    total: '120',
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
          <IconBellRinging color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'secondary.light',
    color: 'secondary.main',
    title: 'Tags',
    total: '39',
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
          <IconTags color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Lượt xem',
    total: '21.369',
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
          <IconEye color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Tương tác',
    total: '236',
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
          <IconWorldUpload color="white" size={30} />
        </Box>
      </>
    ),
  },
];

interface HeadCell {
  title: string;
  dataIndex: string;
}

const headCells: HeadCell[] = [
  {
    dataIndex: 'id',
    title: 'ID',
  },
  {
    dataIndex: 'day',
    title: 'Ngày đăng',
  },
  {
    dataIndex: 'title',
    title: 'Tiêu đề',
  },
  {
    dataIndex: 'tags',
    title: 'Tags',
  },
  {
    dataIndex: 'content',
    title: 'Nội dung thông báo',
  },
  {
    dataIndex: 'moreLink',
    title: 'Link xem thêm',
  },
  {
    dataIndex: 'views',
    title: 'Lượt xem',
  },
  {
    dataIndex: 'interactions',
    title: 'Tương tác',
  },
  {
    dataIndex: 'status',
    title: 'Trạng thái',
  },
];
interface INotification {
  id: string; // ID thông báo
  day: string; // Ngày tạo thông báo
  title: string; // Tiêu đề thông báo
  tags: string[]; // Tags liên quan
  content: string; // Nội dung thông báo
  moreLink: string; // Link xem thêm
  views: number; // Lượt xem
  interactions: number; // Tương tác
  status: JSX.Element; // Trạng thái của thông báo
}

const getStatusTextAndColor = (status: number) => {
  switch (status) {
    case 1:
      return { text: 'Đã đăng', color: '#13DEB9' };
    case 2:
      return { text: 'Nháp', color: '#ff9800' };
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
const dataRows: INotification[] = [
  {
    id: '1',
    day: '2024-09-01 08:30',
    title: 'Cập nhật chính sách bảo mật',
    tags: ['Chính sách', 'Bảo mật'],
    content: 'Chúng tôi đã cập nhật chính sách bảo mật mới để bảo vệ quyền riêng tư của bạn.',
    moreLink: 'https://example.com/chinh-sach-bao-mat',
    views: 1200,
    interactions: 340,
    status: renderStatus(2),
  },
  {
    id: '2',
    day: '2024-09-01 08:30',
    title: 'Khai trương cửa hàng mới',
    tags: ['Sự kiện', 'Cửa hàng'],
    content:
      'Cửa hàng mới của chúng tôi vừa khai trương tại trung tâm thành phố. Mời bạn đến tham quan!',
    moreLink: 'https://example.com/cua-hang-moi',
    views: 950,
    interactions: 210,
    status: renderStatus(1),
  },
  {
    id: '3',
    day: '2024-09-01 08:30',
    title: 'Giảm giá cuối tuần',
    tags: ['Khuyến mãi', 'Giảm giá'],
    content: 'Cuối tuần này, giảm giá 50% toàn bộ sản phẩm. Nhanh tay mua sắm ngay!',
    moreLink: 'https://example.com/giam-gia-cuoi-tuan',
    views: 1500,
    interactions: 450,
    status: renderStatus(2),
  },
  {
    id: '4',
    day: '2024-09-01 08:30',
    title: 'Thay đổi giờ làm việc',
    tags: ['Thông báo', 'Giờ làm việc'],
    content: 'Từ tháng sau, giờ làm việc sẽ thay đổi từ 8h sáng đến 6h chiều, từ Thứ 2 đến Thứ 6.',
    moreLink: 'https://example.com/thay-doi-gio-lam-viec',
    views: 600,
    interactions: 120,
    status: renderStatus(1),
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
const ContentNotification = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TopCard dataSource={DataBox} totalColumn={4} />
      </Grid>
      <Grid item xs={12}>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid item xs={4} sm={4} md={4}>
            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Thêm thông báo mới" sx={{ mb: '15px' }}>
                  <AddNotification />
                </Tooltip>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="outlined-search"
                  placeholder="Tìm kiếm thông báo"
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
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={selectedStartDate}
                  onChange={setSelectedStartDate}
                  renderInput={(params) => <TextField {...params} />}
                />
                <Typography>tới</Typography>
                <DatePicker
                  value={selectedEndDate}
                  onChange={setSelectedEndDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <BlankCard>
          <CustomTable columns={headCells} dataSource={dataRows} />
        </BlankCard>
      </Grid>
    </Grid>
  );
};
export default ContentNotification;