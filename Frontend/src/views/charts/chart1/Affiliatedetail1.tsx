// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Props } from 'react-apexcharts';

import { Box, Typography } from '@mui/material';
import DashboardCard from 'src/components/shared/DashboardCard';

const Affiliatedetail = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primary2 = theme.palette.primary.start;

  const categories = [
    '1/11/2000',
    '2/11/2000',
    '3/11/2000',
    '4/11/2000',
    '5/11/2000',
    '6/11/2000',
    '7/11/2000',
    '8/11/2000',
    '9/11/2000',
    '10/11/2000',
    '11/11/2000',
    '12/11/2000',
    '1/11/2001',
    '2/11/2001',
    '3/11/2001',
    '4/11/2001',
    '5/11/2001',
    '6/11/2001',
  ];

  const optionsgredientchart: Props = {
    chart: {
      height: 350,
      type: 'line',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: primary,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.2)',
        top: 12,
        left: 4,
        blur: 3,
        opacity: 0.4,
      },
    },
    stroke: {
      width: 7,
      curve: 'smooth',
    },

    xaxis: {
      type: 'datetime',
      categories: categories,
      labels: {
        show: true,
        formatter: (value: string, _time: string, opts?: any) => {
          const date = new Date(value);
          if (opts.i === 0 || opts.i === categories.length - 1) {
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
          }
          return '';
        },
      },
      tickAmount: categories.length - 1,
      tickPlacement: 'on',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: [primary2],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100, 100, 100],
        colorStops: [
          {
            offset: 0,
            color: primary2,
            opacity: 1,
          },
          {
            offset: 100,
            color: primary,
            opacity: 0.9,
          },
        ],
      },
    },
    colors: [primary],
    // markers: {
    //   size: 4,
    //   opacity: 0.9,
    //   colors: [primary],
    //   strokeColor: '#fff',
    //   strokeWidth: 2,

    //   hover: {
    //     size: 7,
    //   },
    // },
    yaxis: {
      min: 0,
      max: 40,
    },
    tooltip: {
      theme: 'dark',
    },
    grid: {
      show: true,
      padding: {
        right: 30,
      },
    },
  };
  const seriesgredientchart: any = [
    {
      name: 'Points',
      data: [4, 3, 9, 10, 20, 13, 22, 9, 12, 7, 19, 8, 15, 21, 18, 20, 30, 34],
    },
  ];

  return (
    <DashboardCard>
      <>
        <Box>
          <Typography variant="h4">Chi tiêu trợ lý</Typography>
        </Box>
        <Chart
          options={optionsgredientchart}
          series={seriesgredientchart}
          type="line"
          height="300px"
        />
      </>
    </DashboardCard>
  );
};

export default Affiliatedetail;
