// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Chart, { Props } from 'react-apexcharts';
import Affilatec2 from 'src/components/shared/Affilatec2';

const Affilatechart2 = () => {
  const seriesdoughnutchart = [41, 59];

  const optionsdoughnutchart: Props = {
    chart: {
      id: 'donut-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#000000',
      events: {
        mounted: (chart: any) => {
          chart.w.globals.seriesTotals.reduce((a: any, b: any) => a + b, 0);
          const maxValue = Math.max(...seriesdoughnutchart);
          const maxIndex = seriesdoughnutchart.indexOf(maxValue);
          optionsdoughnutchart.labels ? optionsdoughnutchart.labels[maxIndex] : '';

          // Custom label for center text
          chart.updateOptions({
            annotations: {
              position: 'front',
              text: {
                x: 0,
                y: 0,
                text: `${maxValue}%`,
                textAnchor: 'middle',
                dominantBaseline: 'middle',
                style: {
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#000000', // màu đen
                },
              },
            },
          });
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Tỉ lệ cao nhất',
              formatter: () => `${Math.max(...seriesdoughnutchart)}%`,
              fontWeight: 'bold',
            },
          },
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    colors: ['#fe8c00', '#f2c94c'],
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
    labels: ['Chi phí', 'Cuộc trò chuyện'],
  };

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
    <Affilatec2 title="Cuộc trò chuyện" text="Chi phí / Cuộc trò chuyện" description={''}>
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
