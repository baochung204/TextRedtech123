// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Grid, ListItemText, MenuItem } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import { ChangeEvent, useEffect, useState } from 'react';
import PaymentGateways from 'src/components/dashboards/ecommerce/PaymentGateways';
import SellingProducts from 'src/components/dashboards/modern/SellingProducts';
import TopCards from 'src/components/dashboards/modern/TopCards';
import WeeklyStats from 'src/components/dashboards/modern/WeeklyStats';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import Welcome from 'src/layouts/full/shared/welcome/Welcome';
import { AppDispatch, AppState } from 'src/store/Store';
import { useDispatch, useSelector } from 'react-redux';
import GerChart from '../charts/Gerchart';
import PieCharts from '../charts/PieCharts';

import DateSelect from 'src/components/apps/date/DateSelect';
import Charts from './charts';
import { fetchSelectAssistantData } from 'src/store/user/dashboard/filter/selectAssistantSlice';

const Modern = () => {
  const [month, setMonth] = useState('1');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };
  const dispatch = useDispatch<AppDispatch>();
  const dataAssistantSelect = useSelector((state: AppState) => state.selectAssistant.dataa);

  useEffect(() => {
    dispatch(fetchSelectAssistantData());
  }, [dispatch]);

  console.log(dataAssistantSelect);

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
                <MenuItem value="1">
                  <ListItemText primary="Chọn assistant" />
                </MenuItem>
                {dataAssistantSelect.map((option) => (
                  <MenuItem key={option.chatBotId} value={option.chatBotId}>
                    {option.chatBotName}
                  </MenuItem>
                ))}
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
