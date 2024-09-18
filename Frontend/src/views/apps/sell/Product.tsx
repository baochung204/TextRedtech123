// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import ProductAdmin from 'src/views/admin/product/product';
const BCrumb = [
  {
    to: '/',
    title: 'Trang Chủ',
  },
  { to: '/', title: 'Quản lý sản phẩm' },
];
const Product = () => {
  return (
    <PageContainer title="User Profile" description="this is User Profile page">
      <BannerPage title="Quản lý sản phẩm  " items={BCrumb} />

      <Grid container spacing={3}>
        <Grid item sm={12}>
          <ProductAdmin />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Product;
