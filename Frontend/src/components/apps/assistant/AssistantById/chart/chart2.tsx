import { useTheme } from '@mui/material/styles';
import Chart from 'react-apexcharts';

import { Props } from 'react-apexcharts';

import { Box, MenuItem, Typography } from '@mui/material';
import DashboardCard from 'src/components/shared/DashboardCard';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import { ChangeEvent, useState } from 'react';
import DateSelect from 'src/components/apps/date/DateSelect';

const Chart2 = () => {
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
  const seriesgredientchart: any = [
    {
      name: 'Points',
      data: [19, 3, 10, 1, 3, 35, 17, 2, 27, 7, 5, 7, 13, 9, 30, 2, 7, 5],
    },
  ];
  const maxYValue = Math.max(...seriesgredientchart[0].data) + 5;
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
      zoom: {
        enabled: true,
      },
      offsetX: 0,
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
          console.log('opts:', opts.i);

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
        stops: [0, 100],
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
    markers: {
      size: 4,
      opacity: 0.9,
      colors: [primary],
      strokeColor: '#fff',
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: 0,
      max: maxYValue,
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
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 250,
          },
          xaxis: {
            labels: {
              rotate: -30,
              style: {
                fontSize: '8px',
              },
            },
          },
        },
      },
    ],
  };
  const [month, setMonth] = useState('1');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  return (
    <DashboardCard>
      <Box>
        <Box sx={{ marginTop: '0px' }}>
          <Typography variant="h4">Báo cáo công việc</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: '5px',
            }}
          >
            <CustomSelect
              labelId="month-dd"
              id="month-dd"
              size="small"
              value={month}
              onChange={handleChange}
            >
              <MenuItem value={3}>Doanh thu </MenuItem>
              <MenuItem value={2}>Khách hàng </MenuItem>
              <MenuItem value={1}>Chuyển đổi</MenuItem>
            </CustomSelect>
            <Box style={{ width: '60%' }} display={'flex'} alignItems={'center'} gap="5px">
              <DateSelect />
            </Box>
          </Box>
        </Box>

        <Chart
          options={optionsgredientchart}
          series={seriesgredientchart}
          type="line"
          height="300px"
        />
      </Box>
    </DashboardCard>
  );
};

export default Chart2;
