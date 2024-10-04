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
const Chart2 = () => {
  // chart color
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
  ]


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
  const seriesgredientchart: any = [
    {
      name: 'Thích',
      data: [4, 3, 10, 9, 35, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ];
  const [month, setMonth] = useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  const [value, setValue] = useState<Dayjs | null>(null);
  const [value1, setValue1] = useState<Dayjs | null>(null);
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
              <MenuItem value={1}>Doanh thu</MenuItem>
              <MenuItem value={2}>Khách hàng </MenuItem>
              <MenuItem value={3}>Đơn Hàng </MenuItem>
            </CustomSelect>
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
