// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useTheme } from '@mui/material/styles';
import Chart, { Props } from 'react-apexcharts';
import Affilatec2 from 'src/components/shared/Affilatec2';

const Affilatechart2 = () => {
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
    <Affilatec2 title="Cuộc trò chuyện" description={''}>
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
