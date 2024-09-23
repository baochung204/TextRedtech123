import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  Slide,
  TextField,
  Typography
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconSearch } from '@tabler/icons-react';
import * as React from 'react';

import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import AddOrder from './PopupAdd2';
import TableListOrder from './TableOrderList';
// import Tags from 'src/components/apps/sell/Tags';
import { TabContext, TabPanel } from '@mui/lab';
import ChildCard from 'src/components/shared/ChildCard';

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
      <ChildCard sx={{ border: 'none' }} sx1={{ padding: 0 }}>
        <TabContext value="1">
          <Box>
            <TabPanel value="1" sx={{ p: 0, mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Grid item xs={12} sm={4}>
                      <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* <Grid item xs={1.5} sx={{ display: 'flex', alignItems: 'center' }}>
                          <Tooltip title="Thêm mới khách hàng" onClick={handleClosePopup}>
                            <Fab size="small" color="secondary" aria-label="plus" sx={{ my: 'auto' }}>
                              <IconPlus width={18} />
                            </Fab>
                          </Tooltip>
                        </Grid> */}
                        <Grid item xs={10}>
                          <TextField
                            id="outlined-search"
                            placeholder="Tìm kiếm khách hàng"
                            size="small"
                            variant="outlined"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <IconSearch size="20" />
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={10} sm={4}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            value={selectedStartDate}
                            onChange={setSelectedStartDate}
                            renderInput={(params) => <TextField {...params} size="small" fullWidth />}
                          />
                          <Typography>tới</Typography>
                          <DatePicker
                            value={selectedEndDate}
                            onChange={setSelectedEndDate}
                            renderInput={(params) => <TextField {...params} size="small" fullWidth />}
                          />
                        </LocalizationProvider>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <TableListOrder />
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </TabContext>
      </ChildCard>

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
