import { Box, Dialog, DialogContent, DialogTitle, Grid } from '@mui/material';
import Slide from '@mui/material/Slide';
import { IconAd2, IconEdit, IconEyeOff, IconFileStar } from '@tabler/icons-react';
import React from 'react';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import AddBlog from '../blog/_components/AddBlog';
import PageContainer from './../../../components/container/PageContainer';
import TableFeature from './_components/TableFeature';

const BCrumb = [
  { to: '/', title: 'Trang Chủ' },
  { to: '/admin/feature', title: 'Danh sách đề xuất' },
];


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

  const [isPopupOpen] = React.useState(false);

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
