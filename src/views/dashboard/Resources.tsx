// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import PaymentGateways from 'src/components/dashboards/ecommerce/PaymentGateways';
import RevenueUpdates from 'src/components/dashboards/ecommerce/RevenueUpdates';
import MonthlyEarnings from 'src/components/dashboards/modern/MonthlyEarnings';
import SellingProducts from 'src/components/dashboards/modern/SellingProducts';
import YearlyBreakup from 'src/components/dashboards/modern/YearlyBreakup';
import ItemTable1 from './table/itemTable1';
import ItemTable2 from './table/itemTable2';
import AssistantResources from './../../components/dashboards/modern/AssistantResources';
import WeeklyStats from 'src/components/dashboards/modern/WeeklyStats';
import DoughnutChart2 from '../charts/DoughnutChart2';
import GredientChart2 from '../charts/GredientChart2';
import InforUser from 'src/components/dashboards/modern/InforUser';

const Resources = () => {
  return (
    <div>
      <PageContainer title="eCommerce Dashboard" description="this is eCommerce Dashboard page">
        <Box mt={3}>
          <Grid container spacing={3}>
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
              <AssistantResources />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <InforUser />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              {/* <WeeklyStats /> */}
            </Grid>{' '}
            {/* <Grid item xs={12} sm={6} >
              <PaymentGateways />
            </Grid> */}
            {/* biểu đồ */}
            <Grid item xs={12} sm={6}>
              <DoughnutChart2 />
            </Grid>
            <Grid item xs={12} sm={6} lg={8}>
              <GredientChart2 />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <SellingProducts />
            </Grid>
            {''}
            <Grid item xs={12} sm={6} lg={4}>
              <WeeklyStats />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <PaymentGateways />
            </Grid>{' '}
            {/* <Grid item xs={12} sm={6} lg={12}>
              <ItemTable1 />
            </Grid>
            <Grid item xs={12} lg={12}>
              <ItemTable2 />
            </Grid> */}
          </Grid>
        </Box>
      </PageContainer>
    </div>
  );
};

export default Resources;
