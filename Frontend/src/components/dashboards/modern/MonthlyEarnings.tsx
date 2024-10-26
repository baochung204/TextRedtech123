// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab } from '@mui/material';
import { IconArrowDownRight, IconCurrencyDollar } from '@tabler/icons-react';

import DashboardCard from '../../shared/DashboardCard';
import { Props } from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { AppState } from 'src/store/Store';

const MonthlyEarnings = () => {
  // Màu sắc biểu đồ
  const theme = useTheme();

  const red = theme.palette.primary.main;
  const secondarylight = theme.palette.secondary.light;
  const errorlight = theme.palette.error.light;

  // Cấu hình biểu đồ
  const optionscolumnchart: Props = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [secondarylight],
      type: 'solid',
      opacity: 0.05,
    },
    // markers: {
    //   size: 0,
    // },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      x: {
        show: false,
      },
    },
  };
  const seriescolumnchart = [
    {
      name: '',
      color: red,
      data: [25, 66, 20, 40, 12, 58, 20],
    },
  ];
  const dataAffiliateOverview = useSelector((state: AppState) => state.overview_affiliate.dataa);
  const data = [
    {
      ...dataAffiliateOverview.info,
    },
  ];

  console.log('data');

  return (
    <DashboardCard
      title="Tổng hoa hồng"
      action={
        <Fab color="primary" size="medium">
          <IconCurrencyDollar width={24} />
        </Fab>
      }
      footer={
        <Chart options={optionscolumnchart} series={seriescolumnchart} type="area" height="60px" />
      }
    >
      <>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Typography variant="h3" fontWeight="700" mt="-20px">
              {item.totalCommission.toLocaleString()} đ
            </Typography>
            <Stack direction="row" spacing={1} my={1} alignItems="center">
              <Avatar sx={{ bgcolor: errorlight, width: 27, height: 27 }}>
                <IconArrowDownRight width={20} color="#FA896B" />
              </Avatar>
              <Typography variant="subtitle2" fontWeight="600">
                {item.totalCommission}%
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                cùng kỳ
              </Typography>
            </Stack>
          </React.Fragment>
        ))}
      </>
    </DashboardCard>
  );
};

export default MonthlyEarnings;
