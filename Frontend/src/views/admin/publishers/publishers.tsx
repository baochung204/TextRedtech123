import { Grid } from '@mui/material';
import PublisherAffiliate from 'src/components/admin/affiliate/PublisherAffiliate';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
const Publishers = () => {
  const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '', title: 'Danh sách Publisher' },
  ];
  return (
    <>
      <BannerPage title="Quản lý Publisher" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PublisherAffiliate />
        </Grid>
      </Grid>
    </>
  );
};

export default Publishers;
