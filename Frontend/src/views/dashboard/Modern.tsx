// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Grid, MenuItem, Typography } from '@mui/material';
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

import { Dayjs } from 'dayjs';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import Charts from './charts';

const Modern = () => {
  const [month, setMonth] = useState('1');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  const [value, setValue] = useState<Dayjs | null>(null);
  const [value1, setValue1] = useState<Dayjs | null>(null);
  return (
    <PageContainer title="Modern Dashboard" description="this is Modern Dashboard page">
      <Box>
        <Grid container spacing={3}>
          <Grid container justifyContent="flex-end" item xs={12} sx={{ padding: 0 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end', // Aligns the items to the right inside the Box
                alignItems: 'center', // Centers items vertically
                gap: 1, // Adds space between the elements
              }}
            >
              {/* CustomSelect */}
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

              {/* Date Pickers */}
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  renderInput={(props) => (
                    <CustomTextField
                      {...props}
                      fullWidth
                      size="small"
                      sx={{
                        '& .MuiSvgIcon-root': {
                          width: '18px',
                          height: '18px',
                        },
                        '& .MuiFormHelperText-root': {
                          display: 'none',
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>

              {/* Text "tới" */}
              <Typography sx={{ mx: 1 }}>tới</Typography>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={value1}
                  onChange={(newValue) => setValue1(newValue)}
                  renderInput={(props) => (
                    <CustomTextField
                      {...props}
                      fullWidth
                      size="small"
                      sx={{
                        '& .MuiSvgIcon-root': {
                          width: '18px',
                          height: '18px',
                        },
                        '& .MuiFormHelperText-root': {
                          display: 'none',
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
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
