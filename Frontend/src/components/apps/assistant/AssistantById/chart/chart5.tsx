// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Chart, { Props } from 'react-apexcharts';
import Affilatec from 'src/components/shared/Affilatec';
import { Props } from 'react-apexcharts';

// const BCrumb = [
//   {
//     to: '/',
//     title: 'Home',
//   },
//   {
//     title: 'Gradient Chart',
//   },
// ];

const Chart5 = () => {
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
    labels: ['Cá nhân', 'Doanh nghiệp'],
  };

  return (
    <Affilatec title="Tỉ trọng chi phí /doanh thu " text="Chi phí / doanh thu">
      <Chart
        options={optionsdoughnutchart}
        series={seriesdoughnutchart}
        type="donut"
        height="300px"
      />
    </Affilatec>
  );
};

export default Chart5;
