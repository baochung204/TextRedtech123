// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box } from '@mui/material';
import Chart, { Props } from 'react-apexcharts';
import Affilatec1 from 'src/components/shared/Affilatec1';

const Affilatechartadmin1 = () => {
  const seriesdoughnutchart = [55, 45];

  const optionsdoughnutchart: Props = {
    chart: {
      id: 'donut-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#0000000',

      events: {
        mounted: (chart: any) => {
          chart.w.globals.seriesTotals.reduce((a: any, b: any) => a + b, 0);
          const maxValue = Math.max(...seriesdoughnutchart);
          const maxIndex = seriesdoughnutchart.indexOf(maxValue);
          optionsdoughnutchart.labels ? optionsdoughnutchart.labels[maxIndex] + '%' : '';

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
              label: 'Chi số',
              formatter: () => `${Math.max(...seriesdoughnutchart)}`,
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
    colors: ['#f45c43', '#fd1d1d'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#feb47b', '#ff7e5f'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
    labels: ['Doanh thu', 'Tất cả khách hàng'],
  };

  return (
    <Affilatec1
      title="Doanh thu/Tất cả khách hàng"
      text="Doanh thu/Tất cả khách hàng"
      description={''}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Chart
          options={optionsdoughnutchart}
          series={seriesdoughnutchart}
          type="donut"
          height="300px"
        />
      </Box>
    </Affilatec1>
  );
};

export default Affilatechartadmin1;
