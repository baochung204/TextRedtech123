// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import PageContainer from '../../components/container/PageContainer';
import Breadcrumb from '../../layouts/full/shared/breadcrumb/Breadcrumb';
import ParentCard from '../../components/shared/ParentCard';
import { Props } from 'react-apexcharts';
import Affilatec2 from 'src/components/shared/Affilatec2';
import { PiTextAlignCenter } from 'react-icons/pi';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Doughtnut Chart',
  },
];

const Affilatechart2 = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;
  const warning = theme.palette.warning.main;

  // 1
  const optionsdoughnutchart: Props = {
    chart: {
      id: 'donut-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    colors: ['#93f9b9', '#1D976C'],
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
    labels: ['Chi phí', 'Cuộc trò chuyện'],
  };
  const seriesdoughnutchart = [55, 65];

  return (
    // <PageContainer title="Doughnut & Pie Chart" description="this is innerpage">
    //   {/* breadcrumb */}
    //   <Breadcrumb title="Doughtnut Chart" items={BCrumb} />
    //   {/* end breadcrumb */}
    //   <Grid container spacing={3}>
    //     <Grid item lg={6} md={12} xs={12}>

    //     </Grid>
    //   </Grid>
    // </PageContainer>
    <Affilatec2 title="Cuộc trò chuyện">
      <Chart
        options={optionsdoughnutchart}
        series={seriesdoughnutchart}
        type="donut"
        height="300px"
        // style={{ position: 'relative' }}
      />
    </Affilatec2>
  );
};

export default Affilatechart2;
