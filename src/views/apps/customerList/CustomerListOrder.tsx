import { TabContext, TabPanel } from '@mui/lab';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  Slide,
  TextField,
  Typography,
} from '@mui/material';
import Fab from '@mui/material/Fab';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { TransitionProps } from '@mui/material/transitions';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconSearch } from '@tabler/icons-react';
import * as React from 'react';
import { FaPlus } from 'react-icons/fa';
import Tags from 'src/components/apps/sell/Tags';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import AddOrder from './PopupAdd2';
import TableListOrder from './TableOrderList';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import PageContainer from 'src/components/container/PageContainer';
// import Tags from 'src/components/apps/sell/Tags';

const BCrumb = [
  { to: '/', title: 'Home' },
  { to: '/apps/blog/posts', title: 'Blog' },
  { title: 'Blog post' },
];

const Transition = React.forwardRef<
  unknown,
  TransitionProps & { children: React.ReactElement<any, any> }
>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomerListOrder = () => {
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  // const [value, setValue] = React.useState('1');
  const [value] = React.useState('1');

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };
  const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '/apps/blog/posts', title: 'Đơn hàng' },
  ];
  return (
    <PageContainer>
      {/* Breadcrumb */}
      {/* <Breadcrumb title="Blog Detail" items={BCrumb} /> */}
      <BannerPage title="Đơn hàng" items={BCrumb} />
      <Grid container spacing={3}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            {/* Tabs */}
            <TabPanel value="1">
              <Box
                sx={{
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {/* Action Buttons and Filters */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {/* Add Order Button */}
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

                  {/* Search Bar */}
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

                  {/* Column Filter and Sort */}
                  <CustomSelect
                    labelId="column-filter"
                    id="column-filter"
                    size="small"
                    value={1}
                    sx={{ marginRight: '30px' }}
                  >
                    <MenuItem value={1}>Sửa đổi cột</MenuItem>
                  </CustomSelect>

                  <CustomSelect
                    labelId="column-sort"
                    id="column-sort"
                    size="small"
                    value={1}
                    sx={{ marginRight: '20px' }}
                  >
                    <MenuItem value={1}>Bộ lọc</MenuItem>
                  </CustomSelect>
                </Box>

                {/* Time Filter and Refresh Icon */}
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
        </Box>
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
