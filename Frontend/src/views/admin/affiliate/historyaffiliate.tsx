import { Grid } from '@mui/material';
import HistoryAffiliate from 'src/components/admin/affiliate/HistoryAffiliate';
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const historyaffiliate = () => {
  const BCrumb = [
    { to: '/admin', title: 'Trang Chủ' },
    { to: '', title: 'Lịch sử rút tiền' },
  ];
  return (
    <>
      <PageContainer title="Lịch sử rút tiền" description="this is Order page">
        <BannerPage title="Lịch sử rút tiền" items={BCrumb} />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <HistoryAffiliate />
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default historyaffiliate;
