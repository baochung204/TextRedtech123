import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  Tab,
  TextField,
  Typography,
} from '@mui/material';
import Fab from '@mui/material/Fab';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as React from 'react';
import { FaPlus } from 'react-icons/fa';
import CustomerTable2 from 'src/components/tables/CustomerTable2';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { IconSearch } from '@tabler/icons-react';
import Tags from 'src/components/apps/sell/tags';
import PopupAddList2 from './PopupAddlist2';
import { Slide } from '@mui/material';

const BCrumb = [
  { to: '/', title: 'Home' },
  { to: '/apps/blog/posts', title: 'Blog' },
  { title: 'Blog post' },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomerList2 = () => {
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [value, setValue] = React.useState('1');

  // Function mở popup
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  // Function đóng popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="customer-list-container" style={{ padding: '20px' }}>
      {/* Breadcrumb */}
      <Breadcrumb title="Blog Detail" items={BCrumb} />
      <Grid container spacing={3}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Khách hàng" value="1" />
                <Tab label="Tags" value="2" />
              </TabList>
            </Box>

            <TabPanel value="1">
              {/* Action Buttons and Filters */}
              <Box
                className="actions-and-filters"
                sx={{
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {/* Nút tạo đơn hàng và thanh tìm kiếm */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Tooltip title="Tạo đơn hàng">
                    <Fab
                      color="primary"
                      aria-label="add"
                      size="small" // Set the size to "small"
                      sx={{ marginRight: '30px' }}
                      onClick={handleOpenPopup}
                    >
                      <FaPlus />
                    </Fab>
                  </Tooltip>

                  {/* Thanh tìm kiếm với icon */}
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

                  <CustomSelect
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
                    <MenuItem value={1}>Bộ cọc</MenuItem>
                  </CustomSelect>
                </Box>

                {/* Time Filter and Refresh Icon */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={selectedStartDate}
                      onChange={(newDate) => setSelectedStartDate(newDate)}
                      renderInput={(params) => (
                        <CustomTextField {...params} sx={{ marginRight: '10px' }} />
                      )}
                    />
                    <Typography sx={{ marginRight: '10px' }}>tới</Typography>
                    <DatePicker
                      value={selectedEndDate}
                      onChange={(newDate) => setSelectedEndDate(newDate)}
                      renderInput={(params) => (
                        <CustomTextField {...params} sx={{ marginRight: '10px' }} />
                      )}
                    />
                  </LocalizationProvider>

                  {/* Icon Refresh */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20" // Adjust the width to make the icon smaller
                    height="20" // Adjust the height to make the icon smaller
                    cursor="pointer"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-refresh"
                    style={{ marginLeft: '10px' }}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                  </svg>
                </Box>
              </Box>
              <CustomerTable2 />
            </TabPanel>
            <TabPanel value="2">
              <Tags />
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>

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
          <PopupAddList2 /> {/* Gọi component PopupAdd */}
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClosePopup}>Hủy</Button>
          <Button onClick={handleClosePopup} variant="contained" color="primary">
            Xác nhận
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default CustomerList2;
