// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import Chart, { Props } from 'react-apexcharts';
import avt1 from 'src/assets/images/profile/user-1.jpg';
import avt5 from 'src/assets/images/profile/user-5.jpg';
import avt6 from 'src/assets/images/profile/user-6.jpg';
import DashboardCard from '../../shared/DashboardCard';

interface Stat {
  title: string;
  level: number;
  percent: string;
  color: string;
  lightcolor: string;
  icon: JSX.Element;
}

const WeeklyStats: React.FC = () => {
  // Màu sắc biểu đồ
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const error = theme.palette.error.main;
  const errorlight = theme.palette.error.light;
  const secondary = theme.palette.success.main;
  const secondarylight = theme.palette.success.light;

  // Biểu đồ
  const optionscolumnchart: Props = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 130,
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
      type: 'gradient',
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0,
        stops: [20, 180],
      },
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
      name: 'Thống kê hàng tuần',
      color: primary,
      data: [5, 15, 5, 10, 5],
    },
  ];

  const stats: Stat[] = [
    {
      title: 'Trợ lý 5',
      level: 9,
      percent: '68',
      color: primary,
      lightcolor: primarylight,
      icon: <Avatar src={avt5} sx={{ width: 40, height: 40 }} />, // Changed to avatar image
    },
    {
      title: 'Trợ lý 2',
      level: 2,
      percent: '45',
      color: secondary,
      lightcolor: secondarylight,
      icon: <Avatar src={avt1} sx={{ width: 40, height: 40 }} />, // Changed to avatar image
    },
    {
      title: 'Trợ lý 3',
      level: 1,
      percent: '14',
      color: error,
      lightcolor: errorlight,
      icon: <Avatar src={avt6} sx={{ width: 40, height: 40 }} />, // Changed to avatar image
    },
  ];

  return (
    <DashboardCard title="Doanh thu cao nhất " subtitle="Top trợ lý có">
      <>
        <Stack my={'20px'}>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="area"
            height="170px"
          />
        </Stack>
        <Stack spacing={3} my={'25px'}>
          {stats.map((stat, i) => (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
              key={i}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                {stat.icon}
                <Box>
                  <Typography variant="h6" mb="4px">
                    {stat.title}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Level {stat.level}
                  </Typography>
                </Box>
              </Stack>
              <Avatar
                sx={{
                  bgcolor: stat.lightcolor,
                  color: stat.color,
                  width: 42,
                  height: 24,
                  borderRadius: '4px',
                }}
              >
                <Typography variant="subtitle2" fontWeight="600">
                  {stat.percent}M
                </Typography>
              </Avatar>
            </Stack>
          ))}
        </Stack>
      </>
    </DashboardCard>
  );
};

export default WeeklyStats;
