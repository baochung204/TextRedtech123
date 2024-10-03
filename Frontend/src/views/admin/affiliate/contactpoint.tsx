import { Grid } from '@mui/material';
import ContactRPoint from 'src/components/admin/affiliate/ContactRPoint';
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const contactpoint = () => {
  const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '', title: 'Quản lý hợp đồng' },
  ];
  return (
    <>
      <PageContainer title="Hợp đồng R-Point" description="this is Order page">
        <BannerPage title="Hợp đồng R-Point" items={BCrumb} />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ContactRPoint />
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default contactpoint;
