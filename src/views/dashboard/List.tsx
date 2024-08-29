// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import Expence from 'src/components/dashboards/ecommerce/Expence';
import Growth from 'src/components/dashboards/ecommerce/Growth';
import PaymentGateways from 'src/components/dashboards/ecommerce/PaymentGateways';
import RecentTransactions from 'src/components/dashboards/ecommerce/RecentTransactions';
import RevenueUpdates from 'src/components/dashboards/ecommerce/RevenueUpdates';
import Sales from 'src/components/dashboards/ecommerce/Sales';
import SalesOverview from 'src/components/dashboards/ecommerce/SalesOverview';
import SalesTwo from 'src/components/dashboards/ecommerce/SalesTwo';
import YearlySales from 'src/components/dashboards/ecommerce/YearlySales';
import Social from 'src/components/dashboards/modern/Social';
import WeeklyStats from 'src/components/dashboards/modern/WeeklyStats';
import ItemTable1 from './table/itemTable1';
import ItemTable2 from './table/itemTable2';
import Customers from 'src/components/dashboards/modern/Customers';
import Projects from 'src/components/dashboards/modern/Projects';
import MonthlyEarnings from 'src/components/dashboards/modern/MonthlyEarnings';
import YearlyBreakup from 'src/components/dashboards/modern/YearlyBreakup';

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
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={12}>
                  <YearlyBreakup />
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                  <MonthlyEarnings />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={12}>
              {' '}
              <ItemTable1 />{' '}
            </Grid>
            <Grid item xs={12} lg={12}>
              {' '}
              <ItemTable2 />{' '}
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    </div>
  );
};

export default List;
