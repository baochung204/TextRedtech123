
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import PageContainer from 'src/components/container/PageContainer';
import { Grid } from '@mui/material';
import RPointS from 'src/components/admin/rpoint';


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
          <RPointS />
        </Grid>
      </Grid>
    </PageContainer>
  )
};

export default RPoints;
