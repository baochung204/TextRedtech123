import { Grid } from '@mui/material';
import Personnels from 'src/components/admin/personnel';
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const BCrumb = [
  {
    to: '/admin',
    title: 'Trang chủ',
  },
  { to: '/admin/personnel', title: 'Nhân viên' },
];

const Staff = () => {
  return (
    <PageContainer title="Personnel" description="this is Personnel page">
      <BannerPage title="Nhân viên" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Personnels />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Staff;
