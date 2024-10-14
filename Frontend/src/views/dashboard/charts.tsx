import { Grid } from '@mui/material';
import React from 'react';
import SpeedometerChart from 'src/components/charrts/SpeedometerChart';
import Affilatechart from '../charts/chart1/Affilatechart';
import Affilatechart1 from '../charts/chart1/Affilatechart1';
import Affilatechart2 from '../charts/chart1/Affilatechart2';
import Affiliatedetail from '../charts/chart1/Affiliatedetail1';

const Charts = () => {
  const [month] = React.useState('1');

  return (
    <>
      {month == '1' && (
        <React.Fragment>
          <Grid item xs={12} lg={8}>
            <Affiliatedetail />
          </Grid>
          <Grid item xs={12} lg={4}>
            {/* <Affilatechart3 /> */}
            <SpeedometerChart />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Affilatechart />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Affilatechart1 />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Affilatechart2 />
          </Grid>
        </React.Fragment>
      )}
    </>
  );
};

export default Charts;
