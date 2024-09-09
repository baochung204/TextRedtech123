// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
    Box,
  
    Grid,
   
  } from '@mui/material';
  import PageContainer from 'src/components/container/PageContainer';
  
  import Expence from 'src/components/dashboards/ecommerce/Expence';
  import Growth from 'src/components/dashboards/ecommerce/Growth';
  import PaymentGateways from 'src/components/dashboards/ecommerce/PaymentGateways';

  import RevenueUpdates from 'src/components/dashboards/ecommerce/RevenueUpdates';
  import Sales from 'src/components/dashboards/ecommerce/Sales';

  import SalesTwo from 'src/components/dashboards/ecommerce/SalesTwo';

  import WeeklyStats from 'src/components/dashboards/modern/WeeklyStats';
//   import ItemTable1 from './table/itemTable1';
//   import ItemTable2 from './table/itemTable2';
  import Customers from 'src/components/dashboards/modern/Customers';
  import Projects from 'src/components/dashboards/modern/Projects';
  import MonthlyEarnings from 'src/components/dashboards/modern/MonthlyEarnings';
  import YearlyBreakup from 'src/components/dashboards/modern/YearlyBreakup';
  import SellingProducts from 'src/components/dashboards/modern/SellingProducts';
  import AssistantInfor from 'src/components/apps/assistant/AssistantById/AssistantInfor';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
  const BCrumb = [
    {
      to: '/',
      title: 'Trang chủ',
    },
    {
      to: '/apps/assistant',
      title: 'Quản lý Assistant',
    },
  ];

  const AssistantById = () => {
    return (
      <div>
        {/* <Breadcrumb title="Assistant" items={BCrumb} /> */}
        <PageContainer title="eCommerce Dashboard" description="this is eCommerce Dashboard page">
          <Box mt={3}>
            <Grid container spacing={3}>
              {/* column */}
              
                <AssistantInfor />
             
             
            </Grid>
          </Box>
        </PageContainer>
      </div>
    );
  };
  
  export default AssistantById;
  