import { Grid } from '@mui/material';
import ContactAffiliate from 'src/components/admin/affiliate/ContactAffiliate';
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const contactaffiliate = () => {
  const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '', title: 'Quản lý hợp đồng' },
  ];
  return (
    <>
      <PageContainer title="Order" description="this is Order page">
        <BannerPage title="Hợp đồng affiliate" items={BCrumb} />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ContactAffiliate />
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default contactaffiliate;
