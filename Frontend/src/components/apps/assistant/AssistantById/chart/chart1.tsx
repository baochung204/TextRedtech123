// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useTheme } from '@mui/material/styles';
import Chart, { Props } from 'react-apexcharts';
import Modarm from 'src/components/shared/moderm';

const Chart1 = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
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
    colors: [secondary, '#2c5364', warning, '#99f2c8', primary],
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
    labels: ['Facebook', 'Tiktok', 'Email', 'Zalo', 'Instagram'],
  };

  const seriespiechart = [45, 65, 27, 18, 35];

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
    <Modarm title="Nguồn khách hàng" text="Nguồn khách hàng" description="">
      <Chart options={optionsdoughnutchart} series={seriespiechart} type="donut" height="300px" />
    </Modarm>
  );
};

export default Chart1;
