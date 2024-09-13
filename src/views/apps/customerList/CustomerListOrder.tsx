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
  Typography
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
  const [value, setValue] = React.useState('1');

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
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
                    <MenuItem value={1}>Bộ cọc</MenuItem>
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

                  {/* Refresh Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    cursor="pointer"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginLeft: '10px' }}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                  </svg>
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
    </div>
  );
};

export default CustomerListOrder;
