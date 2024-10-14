// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Grid, MenuItem } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import { ChangeEvent, useState } from 'react';
import PaymentGateways from 'src/components/dashboards/ecommerce/PaymentGateways';
import SellingProducts from 'src/components/dashboards/modern/SellingProducts';
import TopCards from 'src/components/dashboards/modern/TopCards';
import WeeklyStats from 'src/components/dashboards/modern/WeeklyStats';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import Welcome from 'src/layouts/full/shared/welcome/Welcome';

// import Affiliatedetail from '../charts/affiliatedetail';
import GerChart from '../charts/Gerchart';
import PieCharts from '../charts/PieCharts';

import DateSelect from 'src/components/apps/date/DateSelect';
import Charts from './charts';

const Modern = () => {
  const [month, setMonth] = useState('1');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  return (
    <PageContainer title="RedAI" description="this is page">
      <Box>
        <Grid container spacing={3}>
          <Grid container justifyContent="flex-end" item xs={12} sx={{ padding: 0 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <CustomSelect
                labelId="month-dd"
                id="month-dd"
                size="small"
                value={month}
                onChange={handleChange}
              >
                <MenuItem value={1}>Tất cả</MenuItem>
                <MenuItem value={2}>Assistant 1</MenuItem>
                <MenuItem value={3}>Assistant 2</MenuItem>
              </CustomSelect>
              <DateSelect />
            </Box>
          </Grid>
          <Grid item xs={12} lg={12}>
            <TopCards />
          </Grid>
          <Grid item xs={12} lg={8}>
            <GerChart />
          </Grid>
          <Grid item xs={12} lg={4}>
            {' '}
            <PieCharts />
          </Grid>
          <Grid item xs={12} lg={4}>
            <SellingProducts />
          </Grid>
          <Grid item xs={12} lg={4}>
            <PaymentGateways />
          </Grid>{' '}
          <Grid item xs={12} lg={4}>
            <WeeklyStats />
          </Grid>
          <Charts />
        </Grid>
        <Welcome />
      </Box>
    </PageContainer>
  );
};

export default Modern;
