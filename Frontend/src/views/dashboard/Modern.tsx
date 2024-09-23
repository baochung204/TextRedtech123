// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
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

import Charts from './charts';

const Modern = () => {
  const [month, setMonth] = useState('1');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  return (
    <PageContainer title="Modern Dashboard" description="this is Modern Dashboard page">
      <Box>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12} sx={{ padding: 0 }}>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid item xs={4}>
                {' '}
                <CustomSelect
                  labelId="month-dd"
                  id="month-dd"
                  size="small"
                  value={month}
                  onChange={handleChange}
                  sx={{ py: 0.5 }}
                >
                  <MenuItem value={1}>Tất cả</MenuItem>
                  <MenuItem value={2}>Assistant 1</MenuItem>
                  <MenuItem value={3}>Assistant 2</MenuItem>
                </CustomSelect>{' '}
              </Grid>
              <Grid item xs={8} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={selectedStartDate}
                      onChange={setSelectedStartDate}
                      renderInput={(params: any) => <TextField {...params} />}
                    />
                    <Typography>tới</Typography>
                    <DatePicker
                      value={selectedEndDate}
                      onChange={setSelectedEndDate}
                      renderInput={(params: any) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
              </Grid>
            </Grid>
          </Grid>
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
