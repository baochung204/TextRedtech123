// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useTheme } from '@mui/material/styles';
import React from 'react';
import Chart from 'react-apexcharts';

import { Props } from 'react-apexcharts';

import { Box, MenuItem, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Dayjs } from 'dayjs';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import DashboardCard from 'src/components/shared/DashboardCard';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';

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
const Affiliatedetail = () => {
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
        gradientToColors: ['#6dd5fa'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 4,
      opacity: 0.9,
      colors: ['#FFA41B'],
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
      show: false,
    },
  };
  const seriesgredientchart: any = [
    {
      name: 'Likes',
      data: [4, 3, 9, 10, 20, 13, 22, 9, 12, 7, 19, 8, 15, 21, 18, 20, 30, 34],
    },
  ];
  // const [month, setMonth] = React.useState('1');

  // chart color
  const [month, setMonth] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [value1, setValue1] = React.useState<Dayjs | null>(null);
  return (
    // <PageContainer title="Gredient Chart" description="this is innerpage">
    //   {/* breadcrumb */}
    //   <Breadcrumb title="Gradient Chart" items={BCrumb} />
    //   {/* end breadcrumb */}

    // </PageContainer>
    <DashboardCard>
      <>
        <Box sx={{ marginTop: '-15px' }}>
          <Typography variant="h4">Báo cáo chi tiêu trợ lý </Typography>
          <Typography variant="subtitle2" color="textSecondary" mb={2}>
            kinh doanh
          </Typography>
          <Box
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {' '}
            <CustomSelect
              labelId="month-dd"
              id="month-dd"
              size="small"
              value={month}
              onChange={handleChange}
            >
              <MenuItem value={1}>Tất cả</MenuItem>
              <MenuItem value={2}>Assistant 1 </MenuItem>
              <MenuItem value={3}>Assistant 2 </MenuItem>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                cursor="pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-refresh "
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
              </svg>
            </Box>
          </Box>
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
