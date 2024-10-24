// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Chart from 'react-apexcharts';

import { Props } from 'react-apexcharts';

import { Box, Typography } from '@mui/material';
import DashboardCard from 'src/components/shared/DashboardCard';
// import { m } from 'framer-motion';
// import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';

const monthsInVietnamese = [
  'Tháng 1',
  'Tháng 2',
  'Tháng 3',
  'Tháng 4',
  'Tháng 5',
  'Tháng 6',
  'Tháng 7',
  'Tháng 8',
  'Tháng 9',
  'Tháng 10',
  'Tháng 11',
  'Tháng 12',
];
const Affiliatedetail3 = () => {
  const optionsgredientchart: Props = {
    chart: {
      height: 350,
      type: 'line',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
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
      categories: [
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
      ],
      labels: {
        formatter: function (value: any) {
          const date = new Date(value);
          return monthsInVietnamese[date.getMonth()];
        },
      },
      tickAmount: 9,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#fe8c00'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100, 100, 100],
      },
    },
    // markers: {
    //   size: 4,
    //   opacity: 0.9,
    //   colors: ['#fe8c00'],
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
      show: false,
    },
  };
  const seriesgredientchart: any = [
    {
      name: 'Likes',
      data: [4, 2, 9, 10, 30, 13, 22, 9, 12, 7, 19, 8, 15, 21, 18, 20, 30, 4],
    },
  ];

  return (
    <DashboardCard>
      <>
        <Box sx={{ marginTop: '-15px' }}>
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

export default Affiliatedetail3;
