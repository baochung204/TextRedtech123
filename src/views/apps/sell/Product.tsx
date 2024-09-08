// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import Products from 'src/components/apps/sell/Product';


const Product = () => {
  return (
    <PageContainer title="User Profile" description="this is User Profile page">
     
      <Grid container spacing={3}>
        <Grid item sm={12}>
        </Grid>
        <Grid item sm={12}>
          <Products />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Product;