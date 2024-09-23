import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { IconAd2, IconEdit, IconEyeOff, IconFileStar, IconSearch } from '@tabler/icons-react';
import React, { useState } from 'react';
import Slide from '@mui/material/Slide';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import AddBlog from '../blog/_components/AddBlog';
import PageContainer from './../../../components/container/PageContainer';
import TableFeature from './_components/TableFeature';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const BCrumb = [
  { to: '/', title: 'Trang Chủ' },
  { to: '/admin/feature', title: 'Danh sách đề xuất' },
];

// interface StyleProps {
//   bgColor: string;
//   color: string;
//   title: string;
//   total: string;
//   icons: JSX.Element;
// }

const dataSource = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Đề xuất',
    total: '190',
    icons: (
      <Box
        bgcolor="primary.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconAd2 color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Đánh dấu',
    total: '190',
    icons: (
      <Box
        bgcolor="warning.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconFileStar color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Chưa xem',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconEyeOff color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Cập nhập',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconEdit color="white" size={30} />
      </Box>
    ),
  },
];

const PageFeature = () => {
  // const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  // const [value, setValue] = React.useState('1');

  // const handleOpenPopup = () => {
  //   setIsPopupOpen(true);
  // };

  // const handleClosePopup = () => {
  //   setIsPopupOpen(false);
  // };

  // const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };

  const [isPopupOpen] = React.useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  function handleClosePopup(_event: {}): void {
    throw new Error('Function not implemented.');
  }

  return (
    <PageContainer>
      <BannerPage title="Đề xuất tính năng" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={dataSource} totalColumn={4} />
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center">
            <Grid item xs={4}>
              <TextField
                id="outlined-search"
                placeholder="Tìm kiếm đề xuất tính năng "
                size="small"
                type="search"
                variant="outlined"
                inputProps={{ 'aria-label': 'Search Followers' }}
                sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconSearch size="12" />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
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
          <TableFeature />
        </Grid>
      </Grid>

      {/* Popup Thêm blogs */}
      <Dialog
        open={isPopupOpen}
        onClose={handleClosePopup}
        fullWidth
        maxWidth="lg"
        TransitionComponent={Slide}
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

export default PageFeature;
