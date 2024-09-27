import {
  Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  Slide,
  TextField,
  Typography,
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
import { TabContext, TabPanel } from '@mui/lab';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import BlankCard from 'src/components/shared/BlankCard';
import ChildCard from 'src/components/shared/ChildCard';
import { useSelector } from 'react-redux';
import IconPoint from 'src/assets/images/logos/R-Point.png';
import { AppState, dispatch } from 'src/store/Store';
import { fetchOrderUser } from 'src/store/apps/order/orderuserslice';

const columns = [
  {
    title: 'Mã đơn hàng',
    dataIndex: 'id',
    sort: true,
  },
  {
    title: 'Thời gian tạo',
    dataIndex: 'createdAt',
    sort: true,
  },
  {
    title: 'Trợ lý',
    dataIndex: 'assistant',
    sort: true,
  },
  {
    title: 'Giá trị đơn hàng',
    dataIndex: 'pricePoint',
    sort: true,
    render: (value: string) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          gap: 0.5,
          maxWidth: 150,
          px: 2,
        }}
      >
        {value}{' '}
        <Box
          component="img"
          src={IconPoint}
          alt=""
          width={20}
          height={20}
          sx={{ borderRadius: '50%' }}
        />
      </Box>
    ),
  },
  {
    title: 'Kênh marketing',
    dataIndex: 'misc',
    render: (value: string) => (
      <>
        <Grid container spacing={3}>
          <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={value}
              alt=""
              width={38}
              height={38}
              sx={{
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="subtitle1"> Facebook</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" fontSize={12}>
                  {' '}
                  #123456
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    ),
  },
  {
    title: 'Tags',
    dataIndex: 'channel',
    render: (value: string) => <Chip color="error" label={value} variant="outlined" />,
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'name',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
  },
];
const Transition = React.forwardRef<
  unknown,
  TransitionProps & { children: React.ReactElement<any, any> }
>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomerListOrder = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const handleClosePopup = () => setIsPopupOpen(false);
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);
  const dataOrder = useSelector((state: AppState) => state.OrderUser.data);

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

  React.useEffect(() => {
    dispatch(fetchOrderUser());
  }, [dispatch]);
  return (
    <PageContainer>
      <BannerPage title="Đơn hàng" items={BCrumb} />
      <ChildCard sx={{ border: 'none' }} sx1={{ padding: 0 }}>
        <TabContext value="1">
          <Box>
            <TabPanel value="1" sx={{ p: 0, mt: 0.5 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={2}
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <Grid item xs={12} sm={4}>
                      <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
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
                            renderInput={(params) => (
                              <TextField {...params} size="small" fullWidth />
                            )}
                          />
                          <Typography>tới</Typography>
                          <DatePicker
                            value={selectedEndDate}
                            onChange={setSelectedEndDate}
                            renderInput={(params) => (
                              <TextField {...params} size="small" fullWidth />
                            )}
                          />
                        </LocalizationProvider>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} mx={0.3}>
                  <BlankCard>
                    <CustomTable columns={columns} dataSource={dataOrder} />
                  </BlankCard>
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
      </Dialog>
    </PageContainer>
  );
};

export default CustomerListOrder;
