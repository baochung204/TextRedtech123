import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Box,
  // Button,
  Dialog,
  // DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  Tab,
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
import CustomerTable2 from 'src/components/tables/CustomerTable2';

import { Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import PageContainer from 'src/components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import PopupAddList2 from './PopupAddlist2';

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
        {/* <TabContext value={value}> */}
        <TabContext value="1">
          <Box>
            {/* <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{ p: 0, border: 'none' }}
            >
              <Tab label="Danh sách khách hàng" value="1" sx={{ p: 0 }} />
            </TabList> */}

            <TabPanel value="1" sx={{ p: 0, mt: 2 }}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Grid item xs={4} sm={4} md={4}>
                      <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                          <Tooltip
                            title="Thêm mới khách hàng"
                            sx={{ mb: '15px' }}
                            onClick={handleOpenPopup}
                          >
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
                        <Grid item xs={10}>
                          <TextField
                            id="outlined-search"
                            placeholder="Tìm kiếm khách hàng"
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
                  <CustomerTable2 />
                </Grid>
              </Grid>{' '}
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
        <DialogTitle padding={'10px'}>Thêm khách hàng</DialogTitle>
        <DialogContent>
          <PopupAddList2 />
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
};

export default CustomerList2;