// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useTheme } from '@mui/material/styles';
import Chart, { Props } from 'react-apexcharts';
import Affilatec1 from 'src/components/shared/Affilatec1';

const Affilatechart1 = () => {
  // chart color

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
    colors: ['#ffc837', '#FF8008'],
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
    labels: ['Chi phí', 'Đơn hàng'],
  };
  const seriesdoughnutchart = [35, 75];

  // 2

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
    <Affilatec1 title=" Đơn hàng" description={''}>
      <Chart
        options={optionsdoughnutchart}
        series={seriesdoughnutchart}
        type="donut"
        height="300px"
      />
    </Affilatec1>
  );
};

export default Affilatechart1;
