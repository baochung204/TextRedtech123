// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import { Grid } from '@mui/material';
import FaqCpn from 'src/components/pages/faq/FaqCpn';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },
  { to: '/buy/point', title: 'Tài nguyên' },
];

const Faq = () => {
  return (
    <PageContainer title="Faq" description="this is Faq page">
      <BannerPage title="Tài nguyên" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FaqCpn />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Faq;
