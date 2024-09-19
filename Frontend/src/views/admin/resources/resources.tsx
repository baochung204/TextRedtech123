// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import { Grid } from '@mui/material';
import R from 'src/components/admin/resources/main';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },
  { to: '/buy/point', title: 'Quản lý tài nguyên' },
];

const Res = () => {
  return (
    <PageContainer title="Quản lý tài nguyên" description="this is Faq page">
      <BannerPage title="Quản lý tài nguyên" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <R />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Res;
