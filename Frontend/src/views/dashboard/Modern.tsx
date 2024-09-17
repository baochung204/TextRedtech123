// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import PaymentGateways from 'src/components/dashboards/ecommerce/PaymentGateways';
import SellingProducts from 'src/components/dashboards/modern/SellingProducts';
import TopCards from 'src/components/dashboards/modern/TopCards';
import WeeklyStats from 'src/components/dashboards/modern/WeeklyStats';
import Welcome from 'src/layouts/full/shared/welcome/Welcome';

// import Affiliatedetail from '../charts/affiliatedetail';
import GerChart from '../charts/Gerchart';
import PieCharts from '../charts/PieCharts';

import Charts from './charts';

const Modern = () => {
  return (
    <PageContainer title="Modern Dashboard" description="this is Modern Dashboard page">
      <Box>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12} lg={12}>
            <TopCards />
          </Grid>
          {/* column */}
          {/* <Grid item xs={12} lg={8}>
            <RevenueUpdates />
          </Grid> */}
          <Grid item xs={12} lg={8}>
            <GerChart />
          </Grid>
          <Grid item xs={12} lg={4}>
            {' '}
            <PieCharts />
          </Grid>
          {/* column */}
          {/* <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} lg={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12} sm={6} lg={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid> */}
          {/* column */}{' '}
          <Grid item xs={12} lg={4}>
            <SellingProducts />
          </Grid>
          <Grid item xs={12} lg={4}>
            <PaymentGateways />
          </Grid>{' '}
          {/* column */}
          <Grid item xs={12} lg={4}>
            <WeeklyStats />
          </Grid>
          <Charts />
        </Grid>
        {/* column */}
        <Welcome />
      </Box>
    </PageContainer>
  );
};

export default Modern;
