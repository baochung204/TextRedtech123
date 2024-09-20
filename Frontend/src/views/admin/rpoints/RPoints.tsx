import { Grid } from '@mui/material';
import Publisher from 'src/components/admin/rpoint';
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },
  { to: '/admin/point/packagepoint', title: 'Danh sách gói nạp' },
];

const RPoints = () => {
  return (
    <PageContainer title="Personnel" description="this is Personnel page">
      <BannerPage title="Gói R-Point" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Publisher />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default RPoints;
