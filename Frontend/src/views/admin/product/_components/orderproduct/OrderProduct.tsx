import {
  Box,
  Dialog,
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
import { IconChartBar, IconPlus, IconSearch } from '@tabler/icons-react';
import React, { useState } from 'react';
import iconPoint from 'src/assets/images/logos/R-Point.png';
import PageContainer from 'src/components/container/PageContainer';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import AddBlog from 'src/views/admin/blog/_components/AddBlog';
import TableOrderProduct from './TableOrderProduct';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
const BCrumb = [
  { to: '/admin/dashboard', title: 'Trang Chủ' },
  { to: '/admin/buy/orderproducts', title: 'Danh sách đơn hàng' },
];

const Transition = React.forwardRef<
  unknown,
  TransitionProps & { children: React.ReactElement<any, any> }
>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// const BoxStyled = styled(Box)(() => ({
//   padding: '30px',
//   transition: '0.1s ease-in',
//   cursor: 'pointer',
//   color: 'inherit',
//   '&:hover': {
//     transform: 'scale(1.03)',
//   },
// }));

interface StyleProps {
  bgColor: string;
  color: string;
  title: string;
  total: JSX.Element;
  icons: JSX.Element;
}

const DataBox: StyleProps[] = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Đơn hàng',
    total: (
      <>
        <Typography variant="h6">1236</Typography>
      </>
    ),
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
          <IconChartBar color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'secondary.light',
    color: 'secondary.main',
    title: 'Tổng giá trị',
    total: (
      <>
        <Box display="flex" alignItems="center" gap={0.4}>
          <Typography variant="h6">16.146.515</Typography>
          <img src={iconPoint} alt="" width={17} />
        </Box>
      </>
    ),
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
          <IconChartBar color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Khuyến mại',
    total: (
      <>
        <Box display="flex" alignItems="center" gap={0.4}>
          <Typography variant="h6">5.432.234</Typography>
          <img src={iconPoint} alt="" width={17} />
        </Box>
      </>
    ),
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
    title: 'Tổng thanh toán',
    total: (
      <>
        <Box display="flex" alignItems="center" gap={0.4}>
          <Typography variant="h6">12.423.423 </Typography>
          <img src={iconPoint} alt="" width={17} />
        </Box>
      </>
    ),
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
          <IconChartBar color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'AOV',
    total: (
      <>
        <Box display="flex" alignItems="center" gap={0.4}>
          <Typography variant="h6">23.423 </Typography>
          <img src={iconPoint} alt="" width={17} />
        </Box>
      </>
    ),
    icons: (
      <>
        <Box
          bgcolor="error.main"
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
];

const OrderProduct = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // const [value, setValue] = React.useState('1');

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };

  return (
    <PageContainer>
      <BannerPage title="Đơn hàng sản phẩm" items={BCrumb} />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TopCard dataSource={DataBox} totalColumn={5} />
        </Grid>
        <Grid item xs={12}>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Grid item xs={4} sm={4} md={4}>
              <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                {/* <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Tooltip title="Thêm thông báo mới" sx={{ mb: '15px' }}>
                    <Fab
                      size="small"
                      color="secondary"
                      aria-label="plus"
                      sx={{ my: 'auto' }}
                      onClick={handleOpenPopup}
                    >
                      <IconPlus width={18} />
                    </Fab>
                  </Tooltip>
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
                          <IconSearch size="20" />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8} container spacing={2} justifyContent="flex-end">
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Ngày bắt đầu"
                    value={startDate}
                    onChange={(newValue) => setStartDate(newValue)}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item>
                <Typography sx={{ margin: '0 10px' }}>tới</Typography>
              </Grid>
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Ngày kết thúc"
                    value={endDate}
                    onChange={(newValue) => setEndDate(newValue)}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TableOrderProduct />
        </Grid>
      </Grid>
      {/* <ChildCard sx={{ border: 'none' }} sx1={{ padding: 0 }}>
        <TabContext value={value}>
          <Box>
            <TabPanel value="1" sx={{ p: 0 }}>
              <Box
                className="actions-and-filters"
                sx={{
                  mt: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Tooltip title="Tạo đơn hàng">
                    <Fab
                      color="primary"
                      aria-label="add"
                      size="small"
                      sx={{ marginRight: '30px' }}
                      onClick={handleOpenPopup}
                    >
                      <FaPlus />
                    </Fab>
                  </Tooltip>

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
              </Box>
              <TableOrderProduct />
            </TabPanel>
          </Box>
        </TabContext>
      </ChildCard> */}

      {/* Popup Thêm blogs */}
      <Dialog
        open={isPopupOpen}
        onClose={handleClosePopup}
        fullWidth
        maxWidth="lg"
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle padding={'10px'}>Thêm bài viết</DialogTitle>
        <DialogContent>
          <AddBlog />
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
};

export default OrderProduct;
