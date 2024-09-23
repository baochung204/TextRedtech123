import { TabContext, TabPanel } from '@mui/lab';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  Slide,
  TextField,
  Typography
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconSearch } from '@tabler/icons-react';
import * as React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import CustomerTable from 'src/components/tables/CustomerTable';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import PopupAdd from './PopupAdd';

const Transition = React.forwardRef<unknown, TransitionProps & { children: React.ReactElement }>(
  (props, ref) => (
    <Slide direction="up" ref={ref} {...props}>
      {props.children}
    </Slide>
  ),
);

const BCrumb = [
  { to: '/', title: 'Trang Chủ' },
  { to: '/apps/blog/posts', title: 'Danh sách khách hàng' },
];

const CustomerList = () => {
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <PageContainer>
      <BannerPage title="Danh sách khách hàng" items={BCrumb} />
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
                  <CustomerTable />
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </TabContext>
      </ChildCard>

      <Dialog
        open={isPopupOpen}
        onClose={handleClosePopup}
        fullWidth
        maxWidth="lg"
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle>Thêm khách hàng</DialogTitle>
        <DialogContent>
          <PopupAdd />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup}>Hủy</Button>
          <Button onClick={handleClosePopup} variant="contained" color="primary">
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
};

export default CustomerList;
