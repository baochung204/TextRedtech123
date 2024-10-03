import { Grid } from '@mui/material';
import PublisherAffiliate from 'src/components/admin/affiliate/PublisherAffiliate';
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
const Publishers = () => {
  const BCrumb = [
    { to: '/admin', title: 'Trang Chủ' },
    { to: '', title: 'Danh sách Publisher' },
  ];
  return (
    <>
      <PageContainer title="Quản lý publisher" description="this is  page">
        <BannerPage title="Quản lý Publisher" items={BCrumb} />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PublisherAffiliate />
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default Publishers;
