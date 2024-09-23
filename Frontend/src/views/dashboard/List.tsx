// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import Expence from 'src/components/dashboards/ecommerce/Expence';
import Growth from 'src/components/dashboards/ecommerce/Growth';
import PaymentGateways from 'src/components/dashboards/ecommerce/PaymentGateways';
import RevenueUpdates from 'src/components/dashboards/ecommerce/RevenueUpdates';
import Sales from 'src/components/dashboards/ecommerce/Sales';
import SalesTwo from 'src/components/dashboards/ecommerce/SalesTwo';
import Customers from 'src/components/dashboards/modern/Customers';
import MonthlyEarnings from 'src/components/dashboards/modern/MonthlyEarnings';
import Projects from 'src/components/dashboards/modern/Projects';
import SellingProducts from 'src/components/dashboards/modern/SellingProducts';
import WeeklyStats from 'src/components/dashboards/modern/WeeklyStats';
import YearlyBreakup from 'src/components/dashboards/modern/YearlyBreakup';
// import ItemTable1 from './table/itemTable1';
// import ItemTable2 from './table/itemTable2';

const List = () => {
  return (
    <div>
      {' '}
      <PageContainer title="eCommerce Dashboard" description="this is eCommerce Dashboard page">
        <Box mt={3}>
          <Grid container spacing={3}>
            {/* column */}
            <Grid item xs={12} lg={12}>
              <Grid container spacing={3}>
                {' '}
                <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
                  <Expence />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
                  <Sales />
                </Grid>{' '}
                <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
                  <Customers />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
                  <Projects />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
                  <SalesTwo />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
                  <Growth />
                </Grid>{' '}
              </Grid>{' '}
            </Grid>
            <Grid item xs={12} lg={8}>
              <RevenueUpdates />
            </Grid>
            {/* column */}
            <Grid item xs={12} lg={4}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6} lg={12}>
                  <YearlyBreakup />
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                  <MonthlyEarnings />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <WeeklyStats />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <PaymentGateways />
            </Grid>{' '}
            <Grid item xs={12} sm={6} lg={4}>
              <SellingProducts />
            </Grid>
            <Grid item xs={12} sm={6} lg={12}>
              {' '}
              {/* <ItemTable1 />{' '} */}
            </Grid>
            <Grid item xs={12} lg={12}>
              {' '}
              {/* <ItemTable2 />{' '} */}
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    </div>
  );
};

export default List;
