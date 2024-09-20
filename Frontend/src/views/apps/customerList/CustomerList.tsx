import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  InputAdornment,
  Slide,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';
import CustomerTable from 'src/components/tables/CustomerTable';
import PopupAdd from './PopupAdd';
// import { TabPanel } from '@mui/lab';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
const Transition = React.forwardRef<unknown, TransitionProps & { children: React.ReactElement }>(
  function Transition(props, ref) {
    return (
      <Slide direction="up" ref={ref} {...props}>
        {props.children}
      </Slide>
    );
  },
);

const BCrumb = [
  { to: '/', title: 'Trang Chủ' },
  { to: '/apps/blog/posts', title: 'Danh sách khách hàng' },
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
const CustomerList = () => {
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);
  // const [filterColumn, setFilterColumn] = React.useState('');
  // const [searchText, setSearchText] = React.useState('');
  // const [selectedItems, setSelectedItems] = React.useState<number[]>([]);

  // const handleItemClick = (id: number) => {
  //   setSelectedItems((prev) =>
  //     prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
  //   );
  // };

  // const [iconIndex, setIconIndex] = React.useState<number>(0);
  // const icons = [SwapVertIcon, SouthIcon, NorthIcon];

  // const handleClickIcon = () => {
  //   setIconIndex((pre) => (pre + 1) % icons.length);
  // };
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  // Function mở popup

  // Function đóng popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="customer-list-container">
      {/* Breadcrumb */}
      {/* <Breadcrumb title="Blog Detail" items={BCrumb} /> */}
      <BannerPage title="Danh sách khách hàng" items={BCrumb} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Grid item xs={4} sm={4} md={4}>
              <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Tooltip title="Thêm mới sản phẩm" sx={{ mb: '15px' }}>
                    <Fab size="small" color="secondary" aria-label="plus" sx={{ my: 'auto' }}>
                      <IconPlus width={18} />
                    </Fab>
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
          {' '}
          <CustomerTable />
        </Grid>
      </Grid>
      {/* Action Buttons and Filters */}
      {/* Action Buttons and Filters */}
      {/* <Box
        className="actions-and-filters"
        sx={{
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      > */}
      {/* Nút tạo đơn hàng và thanh tìm kiếm */}
      {/* <Box sx={{ display: 'flex', alignItems: 'center' }}> */}
      {/* <Tooltip title="Tạo đơn hàng">
            <Fab
              color="primary"
              aria-label="add"
              size="small" // Set the size to "small"
              sx={{ marginRight: '30px' }}
              onClick={handleOpenPopup}
            >
              <FaPlus />
            </Fab>
          </Tooltip> */}

      {/* Thanh tìm kiếm với icon */}
      {/* <TextField
            sx={{
              width: '200px',
              marginRight: '40px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                backgroundColor: '#fff',
                '&:hover fieldset': {
                  borderColor: '#3f51b5',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconSearch size="1.1rem" />
                </InputAdornment>
              ),
            }}
            placeholder="Tìm kiếm"
            size="small"
          /> */}

      {/* <CustomSelect
            labelId="column-filter"
            id="column-filter"
            size="small"
            value={1} // Setting the first value as default
            sx={{ marginRight: '30px' }}
          >
            <MenuItem value={1}>Sửa đổi cột</MenuItem>
          </CustomSelect>

          <CustomSelect
            labelId="column-sort"
            id="column-sort"
            size="small"
            value={1} // Setting the first value as default
            sx={{ marginRight: '20px' }}
          >
            <MenuItem value={1}>Bộ lọc</MenuItem>
          </CustomSelect> */}
      {/* </Box> */}

      {/* Time Filter and Refresh Icon */}
      {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={selectedStartDate}
              onChange={(newDate) => setSelectedStartDate(newDate)}
              renderInput={(params) => <CustomTextField {...params} sx={{ marginRight: '10px' }} />}
            />
            <Typography sx={{ marginRight: '10px' }}>tới</Typography>
            <DatePicker
              value={selectedEndDate}
              onChange={(newDate) => setSelectedEndDate(newDate)}
              renderInput={(params) => <CustomTextField {...params} sx={{ marginRight: '10px' }} />}
            />
          </LocalizationProvider>
        </Box>
      </Box> */}
      {/* Bảng khách hàng */}

      {/* Popup Thêm đơn hàng */}
      <Dialog
        open={isPopupOpen}
        onClose={handleClosePopup}
        fullWidth
        maxWidth="lg"
        TransitionComponent={Transition} // Thêm dòng này để sử dụng hiệu ứng slide
        keepMounted
      >
        <DialogTitle>Thêm affilaite</DialogTitle>
        <DialogContent>
          <PopupAdd /> {/* Gọi component PopupAdd */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup}>Hủy</Button>
          <Button onClick={handleClosePopup} variant="contained" color="primary">
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomerList;
