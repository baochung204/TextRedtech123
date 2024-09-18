// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  MenuItem,
  Box,
  // Avatar,
  // Chip,
  // Stack,
  // Table,
  // TableBody,
  // TableCell,
  // TableContainer,
  // TableHead,
  // TableRow,
  // Typography,
} from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import React from 'react';
// import { Props } from 'react-apexcharts';
// import CustomSelect from '../../forms/theme-elements/CustomSelect';
// import DashboardCard from '../../shared/DashboardCard';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Dayjs } from 'dayjs';

// import img1 from 'src/assets/images/products/s6.jpg';
// import img2 from 'src/assets/images/products/s5.jpg';
// import img3 from 'src/assets/images/products/s7.jpg';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomSelect from './../../../components/forms/theme-elements/CustomSelect';
import DashboardCard from './../../../components/shared/DashboardCard';
import CustomerTable3 from 'src/components/tables/Customertable3';

const Danhsachdh = () => {
  // for select
  const [month, setMonth] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  // chart color
  // const theme = useTheme();
  // const primary = theme.palette.primary.main;
  // const grey = theme.palette.grey[300];
  // const primarylight = theme.palette.primary.light;
  // const greylight = theme.palette.grey[100];

  //   // chart 1
  // const optionsrow1chart: Props = {
  //   chart: {
  //     type: 'area',
  //     fontFamily: "'Plus Jakarta Sans', sans-serif;",
  //     foreColor: '#adb0bb',
  //     toolbar: {
  //       show: false,
  //     },
  //     height: 35,
  //     width: 100,
  //     sparkline: {
  //       enabled: true,
  //     },
  //     group: 'sparklines',
  //   },
  //   stroke: {
  //     curve: 'smooth',
  //     width: 2,
  //   },
  //   fill: {
  //     colors: [primarylight],
  //     type: 'solid',
  //     opacity: 0.05,
  //   },
  //   markers: {
  //     size: 0,
  //   },
  //   tooltip: {
  //     enabled: false,
  //   },
  // };
  // const seriesrow1chart = [
  //   {
  //     name: 'Customers',
  //     color: primary,
  //     data: [30, 25, 35, 20, 30],
  //   },
  // ];
  const data = '0974943593';
  const phone = data.slice(0, 3) + '####' + data.slice(7, 10);
  console.log(phone);
  // chart 2
  // const optionsrow2chart: Props = {
  //   chart: {
  //     type: 'area',
  //     fontFamily: "'Plus Jakarta Sans', sans-serif;",
  //     foreColor: '#adb0bb',
  //     toolbar: {
  //       show: false,
  //     },
  //     height: 35,
  //     width: 100,
  //     sparkline: {
  //       enabled: true,
  //     },
  //     group: 'sparklines',
  //   },
  //   stroke: {
  //     curve: 'smooth',
  //     width: 2,
  //   },
  //   fill: {
  //     colors: [greylight],
  //     type: 'solid',
  //     opacity: 0.05,
  //   },
  //   markers: {
  //     size: 0,
  //   },
  //   tooltip: {
  //     enabled: false,
  //   },
  // };
  // const seriesrow2chart = [
  //   {
  //     name: 'Customers',
  //     color: grey,
  //     data: [30, 25, 35, 20, 30],
  //   },
  // ];

  // // chart 3
  // const optionsrow3chart: Props = {
  //   chart: {
  //     type: 'area',
  //     fontFamily: "'Plus Jakarta Sans', sans-serif;",
  //     foreColor: '#adb0bb',
  //     toolbar: {
  //       show: false,
  //     },
  //     height: 35,
  //     width: 100,
  //     sparkline: {
  //       enabled: true,
  //     },
  //     group: 'sparklines',
  //   },
  //   stroke: {
  //     curve: 'smooth',
  //     width: 2,
  //   },
  //   fill: {
  //     colors: [primarylight],
  //     type: 'solid',
  //     opacity: 0.05,
  //   },
  //   markers: {
  //     size: 0,
  //   },
  //   tooltip: {
  //     enabled: false,
  //   },
  // };
  // const seriesrow3chart = [
  //   {
  //     name: 'Customers',
  //     color: primary,
  //     data: [30, 25, 35, 20, 30],
  //   },
  // ];

  // // chart 4
  // const optionsrow4chart: Props = {
  //   chart: {
  //     type: 'area',
  //     fontFamily: "'Plus Jakarta Sans', sans-serif;",
  //     foreColor: '#adb0bb',
  //     toolbar: {
  //       show: false,
  //     },
  //     height: 35,
  //     width: 100,
  //     sparkline: {
  //       enabled: true,
  //     },
  //     group: 'sparklines',
  //   },
  //   stroke: {
  //     curve: 'smooth',
  //     width: 2,
  //   },
  //   fill: {
  //     colors: [greylight],
  //     type: 'solid',
  //     opacity: 0.05,
  //   },
  //   markers: {
  //     size: 0,
  //   },
  //   tooltip: {
  //     enabled: false,
  //   },
  // };
  // const seriesrow4chart = [
  //   {
  //     color: grey,
  //     data: [30, 25, 35, 20, 30],
  //   },
  // ];
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [value1, setValue1] = React.useState<Dayjs | null>(null);
  return (
    <DashboardCard title="" action={''}>
      <Box>
        <Box
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '0px 0px 10px 0px',
          }}
        >
          <CustomSelect
            labelId="month-dd"
            id="month-dd"
            size="small"
            value={month}
            onChange={handleChange}
          >
            <MenuItem value={1}>Tất cả</MenuItem>
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
        <CustomerTable3 />
      </Box>
    </DashboardCard>
  );
};

export default Danhsachdh;
