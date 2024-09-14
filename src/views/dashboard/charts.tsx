import { Grid } from '@mui/material';
import React from 'react';
import Affiliatedetail from '../charts/Affiliatedetail';
import Affilatechart3 from '../charts/Affilatechart3';
import Affilatechart from '../charts/Affilatechart';
import Affilatechart1 from '../charts/Affilatechart1';
import Affilatechart2 from '../charts/Affilatechart2';

const Charts = () => {
  return (
    <>
      <Grid item xs={12} lg={8}>
        <Affiliatedetail />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Affilatechart3 />
      </Grid>{' '}
      <Grid item xs={12} lg={4}>
        <Affilatechart />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Affilatechart1 />
      </Grid>{' '}
      <Grid item xs={12} lg={4}>
        <Affilatechart2 />
      </Grid>
    </>
  );
};

export default Charts;
