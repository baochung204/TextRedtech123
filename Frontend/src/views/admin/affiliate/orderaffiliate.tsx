
import { Grid } from '@mui/material';
import OrderAffiliate from 'src/components/admin/affiliate/OrderAffiliate';
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';


  const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '', title: 'Danh sách đơn hàng' },
  ];
const orderaffiliate = () => {
  return (
    <>
      <PageContainer title="Order" description="this is Order page">
        <BannerPage title="Đơn hàng Affiliate" items={BCrumb} />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <OrderAffiliate />
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default historyaffiliate;
