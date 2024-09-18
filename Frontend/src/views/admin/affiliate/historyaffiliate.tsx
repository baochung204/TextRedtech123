import { Grid } from '@mui/material';
import React from 'react';
import HistoryAffiliate from 'src/components/admin/affiliate/HistoryAffiliate';
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const historyaffiliate = () => {
  const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '', title: 'Affiliate' },
  ];
  return (
    <>
      <PageContainer title="Order" description="this is Order page">
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
