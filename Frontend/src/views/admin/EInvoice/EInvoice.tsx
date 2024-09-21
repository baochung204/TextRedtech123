import { Grid } from '@mui/material';
import Invoice from 'src/components/admin/EInvoice/Invoice';
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const BCrumb = [
  { to: '/admin', title: 'Trang Chủ' },
  { to: '', title: 'E-Invoice' },
];

const EInvoice = () => {
  return (
    <>
      <PageContainer title="Order" description="this is Order page">
        <BannerPage title="Quản lý hóa đơn" items={BCrumb} />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Invoice />
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default EInvoice;
