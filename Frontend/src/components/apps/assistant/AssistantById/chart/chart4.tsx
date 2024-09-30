// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useTheme } from '@mui/material';
import Chart from 'react-apexcharts';

import Affilatec3 from 'src/components/shared/Affilatec3';

// const BCrumb = [
//   {
//     to: '/',
//     title: 'Home',
//   },
//   {
//     title: 'Gradient Chart',
//   },
// ];

const Chart4 = () => {
  const theme = useTheme();
  const warning = theme.palette.warning.main;

  const success2 = '#1AC45F';
  const danger2 = '#FC2032';
  const optionsradialchart = {
    chart: {
      id: 'gauge-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -130,
        endAngle: 130,
        hollow: {
          margin: 15,
          size: '70%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: '24px',
            fontWeight: 'bold',
            formatter: (val: any) => val,
          },
        },
        track: {
          background: '#ccc',
          strokeWidth: '100%',
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        gradientToColors: [warning, '#FC2032'],
        stops: [0, 50, 100],
        colorStops: [
          {
            offset: 0,
            color: success2,
            opacity: 1,
          },
          {
            offset: 50,
            color: warning,
            opacity: 1,
          },
          {
            offset: 100,
            color: danger2,
            opacity: 1,
          },
        ],
      },
    },
    labels: [''],
    tooltip: {
      enabled: true,
      theme: 'dark',
    },
  };

  const seriesradialchart = [93.27];
  return (
    <Affilatec3 title="Tỉ trọng chi phí /vòng quay" text="Chi phí / vòng quay">
      <Chart
        options={optionsradialchart}
        series={seriesradialchart}
        type="radialBar"
        height="300px"
      />
    </Affilatec3>
  );
};

export default Chart4;
