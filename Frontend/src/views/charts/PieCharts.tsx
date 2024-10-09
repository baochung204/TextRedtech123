// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useTheme } from '@mui/material/styles';
import Chart, { Props } from 'react-apexcharts';
import Modarm from 'src/components/shared/moderm';

const PieCharts = () => {
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
      enabled: true, // Enable data labels to display percentages
      formatter: (val: number) => `${val.toFixed(2)}%`, // Format the percentage values
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: 'Total',
              fontSize: '16px',
              fontWeight: 600,
              color: theme.palette.text.primary,
              formatter: (w: any) => {
                const total = w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0);
                return `${total}`;
              },
            },
            value: {
              show: true,
              fontSize: '14px',
              fontWeight: 500,
              color: theme.palette.text.secondary,
              formatter: (val: number) => `${val.toFixed(2)}%`,
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
    colors: [secondary, '#2c5364', warning, '#99f2c8', primary],
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
    labels: ['Facebook', 'Tiktok', 'Email', 'Zalo', 'Instagram'],
  };

  const seriespiechart = [45, 65, 27, 18, 35];

  return (
    <Modarm title="Nguồn khách hàng" text="Nguồn khách hàng" description="">
      <Chart options={optionsdoughnutchart} series={seriespiechart} type="donut" height="300px" />
    </Modarm>
  );
};

export default PieCharts;
