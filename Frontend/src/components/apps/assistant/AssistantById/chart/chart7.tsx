// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Chart from 'react-apexcharts';
import Affilatec2 from 'src/components/shared/Affilatec2';

// const BCrumb = [
//   {
//     to: '/',
//     title: 'Home',
//   },
//   {
//     title: 'Gradient Chart',
//   },
// ];

const Chart7 = () => {
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
  const seriesdoughnutchart4 = [41, 59];

  const optionsdoughnutchart4: Props = {
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
    <Affilatec2 title="Cuộc trò chuyện" text="Hội thoại">
      <Chart
        options={optionsdoughnutchart4}
        series={seriesdoughnutchart4}
        type="donut"
        height="300px"
        // style={{ position: 'relative' }}
      />
    </Affilatec2>
  );
};

export default Chart7;
