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
import { IconSearch } from '@tabler/icons-react';
import { useEffect, useMemo, useState } from 'react';
import tags from 'src/assets/NotificationAdmin/tags.png';
import notification from 'src/assets/NotificationAdmin/thong bao.png';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import TopCard from 'src/components/widgets/cards/TopCard';
// import DialogAddNotification from 'src/views/admin/notification/dialog/DialogAddNotification';
import DateSelect from 'src/components/apps/date/DateSelect';
import BlankCard from '../../../components/shared/BlankCard';
import AddNotification from './add/AddNotification';

const DataBox = [
  {
    bgColor: 'primary.light',
    title: 'Thông báo',
    total: '120',
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
          <img src={notification} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Tags',
    total: '39',
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
          <img src={tags} width={30} />
        </Box>
      </>
    ),
  },
  // {
  //   bgColor: 'primary.light',
  //   title: 'Lượt xem',
  //   total: '21.369',
  //   icons: (
  //     <>
  //       <Box
  //         textAlign="center"
  //         padding={1}
  //         sx={{
  //           width: 40,
  //           height: 40,
  //           display: 'flex',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <img src={view} width={30} />
  //       </Box>
  //     </>
  //   ),
  // },
  // {
  //   bgColor: 'primary.light',
  //   title: 'Tương tác',
  //   total: '236',
  //   icons: (
  //     <>
  //       <Box
  //         textAlign="center"
  //         padding={1}
  //         sx={{
  //           width: 40,
  //           height: 40,
  //           display: 'flex',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <img src={interact} width={30} />
  //       </Box>
  //     </>
  //   ),
  // },
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

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const ContentNotification = () => {
  // const [selectedItems] = useState<number[]>([]);

  const column = useMemo<Column[]>(
    () => [
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
      // {
      //   dataIndex: 'views',
      //   title: 'Lượt xem',
      // },
      // {
      //   dataIndex: 'interactions',
      //   title: 'Tương tác',
      // },
      {
        dataIndex: 'status',
        title: 'Trạng thái',
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

  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  // const handleClosePopup = () => {
  //   setIsPopupOpen(false);
  // };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TopCard dataSource={DataBox} totalColumn={DataBox.length} />
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
              <Grid item xs={2}>
                <IconButton
                  color="primary"
                  aria-label="Add to cart"
                  // onClick={() => setOpen(true)}
                >
                  <AddNotification />
                </IconButton>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="outlined-search"
                  placeholder="Tìm kiếm thông báo"
                  size="small"
                  type="search"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Search Followers' }}
                  sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px', marginLeft: '10px' } }}
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
  );
};
export default ContentNotification;
