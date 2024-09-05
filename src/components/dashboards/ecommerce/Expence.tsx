// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Props } from 'react-apexcharts';

import DashboardCard from '../../shared/DashboardCard';

const Expence = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const error = theme.palette.error.main;

  // chart
  const optionsexpencechart: Props = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      toolbar: {
        show: false,
      },
      height: 120,
    },
    labels: ['Profit', 'Revenue', 'Expense'],
    colors: [primary, error, secondary],
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          background: 'transparent',
        },
      },
    },
  };

  const seriesexpencechart = [60, 25, 15];

  return (
    <DashboardCard>
      <>
        <Typography variant="h4">10.000.000 VNĐ</Typography>
        <Typography variant="subtitle2" color="textSecondary" mb={2}>
          Expense
        </Typography>
        <Chart
          options={optionsexpencechart}
          series={seriesexpencechart}
          type="donut"
          height="120"
        />
      </>
    </DashboardCard>
  );
};

export default Expence;
