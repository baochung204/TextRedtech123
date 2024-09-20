import {
  Badge,
  Box,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  Slide,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconSearch } from '@tabler/icons-react';
import * as React from 'react';

import FilterListIcon from '@mui/icons-material/FilterList';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import AddOrder from './PopupAdd2';
import TableListOrder from './TableOrderList';
// import Tags from 'src/components/apps/sell/Tags';

// const BCrumb = [
//   { to: '/', title: 'Home' },
//   { to: '/apps/blog/posts', title: 'Blog' },
//   { title: 'Blog post' },
// ];

const Transition = React.forwardRef<
  unknown,
  TransitionProps & { children: React.ReactElement<any, any> }
>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomerListOrder = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  // const [value, setValue] = React.useState('1');

  // const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);

  const handleItemClick = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const [iconIndex, setIconIndex] = React.useState<number>(0);
  const icons = [SwapVertIcon, SouthIcon, NorthIcon];

  const handleClickIcon = () => {
    setIconIndex((pre) => (pre + 1) % icons.length);
  };
  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };
  const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '/apps/blog/posts', title: 'Đơn hàng' },
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
  return (
    <PageContainer>
      <BannerPage title="Đơn hàng" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Grid item xs={4} sm={4} md={4}>
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
                <Badge badgeContent={selectedItems.length} color="primary">
                  <FilterListIcon />
                </Badge>
              </IconButton>

              <Select
                multiple
                value={selectedItems}
                displayEmpty
                renderValue={(selected) =>
                  selected.length === 0 ? 'Sửa đổi cột' : `${selected.length} cột đã chọn`
                }
                size="small"
                sx={{ minWidth: 150 }}
              >
                {FilmsData.map((film) => (
                  <MenuItem key={film.id} value={film.id} onClick={() => handleItemClick(film.id)}>
                    <Checkbox checked={selectedItems.includes(film.id)} />
                    <ListItemText primary={film.title} />
                  </MenuItem>
                ))}
              </Select>
              <Tooltip title="Cao Thấp" placement="top">
                <IconButton
                  aria-label="filter"
                  onClick={handleClickIcon}
                  sx={{
                    ml: 1,
                  }}
                >
                  {React.createElement(icons[iconIndex])}
                </IconButton>
              </Tooltip>
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
          <TableListOrder />
        </Grid>
        {/* <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <TabPanel value="1">
              <Box
                sx={{
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                
                  <TextField
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
                  />
                 
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={selectedStartDate}
                      onChange={setSelectedStartDate}
                      renderInput={(params) => (
                        <CustomTextField {...params} sx={{ marginRight: '10px' }} />
                      )}
                    />
                    <Typography sx={{ marginRight: '10px' }}>tới</Typography>
                    <DatePicker
                      value={selectedEndDate}
                      onChange={setSelectedEndDate}
                      renderInput={(params) => (
                        <CustomTextField {...params} sx={{ marginRight: '10px' }} />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              </Box>
              <TableListOrder />
            </TabPanel>

            <TabPanel value="2">
              <Tags />
            </TabPanel>
          </TabContext>
        </Box> */}
      </Grid>

      {/* Add Order Popup */}
      <Dialog
        open={isPopupOpen}
        onClose={handleClosePopup}
        fullWidth
        maxWidth="lg"
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle padding="10px">Thêm đơn hàng</DialogTitle>
        <DialogContent>
          <AddOrder />
        </DialogContent>
        {/* Uncomment if you want to use dialog actions */}
        {/* <DialogActions>
          <Button onClick={handleClosePopup}>Hủy</Button>
          <Button onClick={handleClosePopup} variant="contained" color="primary">
            Xác nhận
          </Button>
        </DialogActions> */}
      </Dialog>
    </PageContainer>
  );
};

export default CustomerListOrder;
