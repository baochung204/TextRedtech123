// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useTheme } from '@mui/material/styles';
import Chart from 'react-apexcharts';

import { Props } from 'react-apexcharts';

import { Box, MenuItem, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import DashboardCard from 'src/components/shared/DashboardCard';

// const BCrumb = [
//   {
//     to: '/',
//     title: 'Home',
//   },
//   {
//     title: 'Gradient Chart',
//   },
// ];

const Chart3 = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primary2 = theme.palette.primary.start;
  // const monthsInVietnamese = [
  //   'Tháng 1',
  //   'Tháng 2',
  //   'Tháng 3',
  //   'Tháng 4',
  //   'Tháng 5',
  //   'Tháng 6',
  //   'Tháng 7',
  //   'Tháng 8',
  //   'Tháng 9',
  //   'Tháng 10',
  //   'Tháng 11',
  //   'Tháng 12',
  // ];

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

  const optionsgredientchart2: Props = {
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
        formatter: (value: string, timestamp: string, opts?: any) => {
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
  const seriesgredientchart2: any = [
    {
      name: 'Points',
      data: [4, 5, 9, 10, 20, 13, 22, 9, 12, 7, 19, 8, 15, 21, 18, 20, 30, 34],
    },
  ];

  const [value, setValue] = useState<Dayjs | null>(null);
  const [value1, setValue1] = useState<Dayjs | null>(null);
  return (
    <DashboardCard>
      <Box>
        <Box sx={{ marginTop: '-15px' }}>
          <Typography variant="h4">Báo cáo chi tiêu trợ lý</Typography>

          <Box
            sx={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              justifyContent: 'flex-end',
              mt: '5px',
            }}
          >
            <Box style={{ width: '60%' }} display={'flex'} alignItems={'center'} gap="5px">
              {' '}
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(props) => (
                    <CustomTextField
                      {...props}
                      fullWidth
                      size="small"
                      sx={{
                        '& .MuiSvgIcon-root': {
                          width: '18px',
                          height: '18px',
                        },
                        '& .MuiFormHelperText-root': {
                          display: 'none',
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
              tới
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={value1}
                  onChange={(newValue) => {
                    setValue1(newValue);
                  }}
                  renderInput={(props) => (
                    <CustomTextField
                      {...props}
                      fullWidth
                      size="small"
                      sx={{
                        '& .MuiSvgIcon-root': {
                          width: '18px',
                          height: '18px',
                        },
                        '& .MuiFormHelperText-root': {
                          display: 'none',
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Box>
          </Box>
        </Box>
        <Chart
          options={optionsgredientchart2}
          series={seriesgredientchart2}
          type="line"
          height="300px"
        />
      </Box>
    </DashboardCard>
  );
};

export default Chart3;
