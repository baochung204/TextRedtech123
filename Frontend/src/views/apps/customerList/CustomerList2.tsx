import { TabContext, TabPanel } from '@mui/lab';
import {
  Box,
  // Button,
  Dialog,
  // DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import * as React from 'react';
import Point from 'src/assets/images/icon.png/point.png';
import { Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PageContainer from 'src/components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import { DataRowCustomerTable } from 'src/components/tables/tableData';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import PopupAddList2 from './PopupAddlist2';

const columns = [
  {
    title: 'ID khách hàng',
    dataIndex: 'id',
  },

  {
    title: 'Ngày tạo',
    dataIndex: 'createdAt',
  },
  {
    title: 'Trợ lý',
    dataIndex: 'assistant',
  },
  {
    title: 'Kênh(MKT)',
    dataIndex: 'createdAt',
    render: (row, value: any) => (
      // console.log( value.imgsrc)
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={value?.imgsrc}
          alt=""
          style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
        />
        <Box>
          <Typography>{value.name}</Typography>
          <Typography style={{ fontSize: '12px', color: '#ccc' }}>{'MKT000' + value.id}</Typography>
        </Box>
      </Box>
    ),
  },
  {
    title: 'Tags',
    dataIndex: 'orderInfo',
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'name',
  },
  {
    title: 'Tổng chi tiêu',
    dataIndex: 'orderValue',
    render: (row, value: any) => (
      // console.log( value.imgsrc)

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography>{value.orderValue}</Typography>
        <img
          src={Point}
          alt=""
          style={{ width: '25px', height: '25px', borderRadius: '50%', marginRight: '10px' }}
        />
      </Box>
    ),
  },
  {
    title: 'SĐT',
    dataIndex: 'phone',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
  },
];

const BCrumb = [
  { to: '/', title: 'Trang Chủ' },
  { to: '/apps/blog/posts', title: 'Danh Sách Khách Hàng' },
];

const Transition = React.forwardRef<
  unknown,
  TransitionProps & { children: React.ReactElement<any, any> }
>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomerList2 = () => {
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  // const [value, setValue] = React.useState('1');

  // Function mở popup
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  // Function đóng popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };

  return (
    <PageContainer>
      <BannerPage title="Danh sách khách hàng" items={BCrumb} />
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
                        <Grid item xs={1.5} sx={{ display: 'flex', alignItems: 'center' }}>
                          <Tooltip title="Thêm mới khách hàng" onClick={handleOpenPopup}>
                            <Fab
                              size="small"
                              color="secondary"
                              aria-label="plus"
                              sx={{ my: 'auto' }}
                            >
                              <IconPlus width={18} />
                            </Fab>
                          </Tooltip>
                        </Grid>
                        <Grid item xs={8.5}>
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

                <Grid item xs={12}>
                  <CustomTable columns={columns} dataSource={DataRowCustomerTable} />;
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </TabContext>
      </ChildCard>

      {/* Popup Thêm khách hàng */}
      <Dialog
        open={isPopupOpen}
        onClose={handleClosePopup}
        fullWidth
        maxWidth="lg"
        TransitionComponent={Transition}
        keepMounted
      >
       
        <DialogContent sx={{paddingTop: '10px'}}>
          <PopupAddList2 />
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
};

export default CustomerList2;
