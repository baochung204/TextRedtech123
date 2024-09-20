import { TabList } from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Grid, InputAdornment, TextField } from '@mui/material';
<<<<<<< HEAD
import { IconAd2, IconEdit, IconEyeOff, IconFileStar, IconSearch } from '@tabler/icons-react';
=======
import { IconChartBar, IconSearch } from '@tabler/icons-react';
>>>>>>> b55b390af7c7d42e393a739d9a31ca3b24116a80
import React from 'react';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import PageContainer from './../../../components/container/PageContainer';
import ChildCard from './../../../components/shared/ChildCard';
import TableFeature from './_components/TableFeature';

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
<<<<<<< HEAD
          width: 45,
          height: 45,
=======
          width: 40,
          height: 40,
>>>>>>> b55b390af7c7d42e393a739d9a31ca3b24116a80
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
<<<<<<< HEAD
        <IconAd2 color="white" size={30} />
=======
        <IconChartBar color="white" size={30} />
>>>>>>> b55b390af7c7d42e393a739d9a31ca3b24116a80
      </Box>
    ),
  },
  {
<<<<<<< HEAD
    bgColor: 'warning.light',
    color: 'warning.main',
=======
    bgColor: 'secondary.light',
    color: 'secondary.main',
>>>>>>> b55b390af7c7d42e393a739d9a31ca3b24116a80
    title: 'Đánh dấu',
    total: '190',
    icons: (
      <Box
<<<<<<< HEAD
        bgcolor="warning.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
=======
        bgcolor="secondary.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
>>>>>>> b55b390af7c7d42e393a739d9a31ca3b24116a80
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
<<<<<<< HEAD
        <IconFileStar color="white" size={30} />
=======
        <IconChartBar color="white" size={30} />
>>>>>>> b55b390af7c7d42e393a739d9a31ca3b24116a80
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
<<<<<<< HEAD
          width: 45,
          height: 45,
=======
          width: 40,
          height: 40,
>>>>>>> b55b390af7c7d42e393a739d9a31ca3b24116a80
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
<<<<<<< HEAD
        <IconEyeOff color="white" size={30} />
=======
        <IconChartBar color="white" size={30} />
>>>>>>> b55b390af7c7d42e393a739d9a31ca3b24116a80
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
<<<<<<< HEAD
        bgcolor="error.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
=======
        bgcolor="warning.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
>>>>>>> b55b390af7c7d42e393a739d9a31ca3b24116a80
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
<<<<<<< HEAD
        <IconEdit color="white" size={30} />
=======
        <IconChartBar color="white" size={30} />
>>>>>>> b55b390af7c7d42e393a739d9a31ca3b24116a80
      </Box>
    ),
  },
];

const PageFeature = () => {
  // const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [value, setValue] = React.useState('1');

  // const handleOpenPopup = () => {
  //   setIsPopupOpen(true);
  // };

  // const handleClosePopup = () => {
  //   setIsPopupOpen(false);
  // };

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <PageContainer>
      <BannerPage title="Đề xuất tính năng" items={BCrumb} />
<<<<<<< HEAD
      <Grid item xs={12}>
        <TopCard dataSource={dataSource} totalColumn={4} />
      </Grid>
      <ChildCard sx={{ border: 'none' }} sx1={{ padding: 0 }}>
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{ p: 0, border: 'none' }}
=======
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TopCard dataSource={DataBox} totalColumn={4} />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
>>>>>>> b55b390af7c7d42e393a739d9a31ca3b24116a80
            >
              <TextField
                id="outlined-search"
                placeholder="Tìm kiếm trợ lý"
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
                fullWidth={true}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TableFeature />
        </Grid>
      </Grid>

      {/* Popup Thêm blogs */}
      {/* <Dialog
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
      </Dialog> */}
    </PageContainer>
  );
};

export default PageFeature;
