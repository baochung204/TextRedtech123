// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  Avatar,
  Box,
  // Chip,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import React from 'react';
// import { Props } from 'react-apexcharts';
// import CustomSelect from '../../forms/theme-elements/CustomSelect';
// import DashboardCard from '../../shared/DashboardCard';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Dayjs } from 'dayjs';

import img1 from 'src/assets/images/products/s6.jpg';
import img2 from 'src/assets/images/products/s5.jpg';
import img3 from 'src/assets/images/products/s7.jpg';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect';
import DashboardCard from '../../../components/shared/DashboardCard';

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
    <DashboardCard>
      <>
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
        <TableContainer>
          <Table
            aria-label="simple table"
            sx={{
              whiteSpace: 'nowrap',
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    STT
                  </Typography>
                </TableCell>{' '}
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Mã đơn hàng
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Khách hàng
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    EMAIL
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    NGÀY MUA
                  </Typography>
                </TableCell>{' '}
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    SỐ ĐIỆN THOẠI
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    GIÁ TRỊ ĐƠN HÀNG
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    GÓI ĐƠN HÀNG
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    HOA HỒNG
                  </Typography>
                </TableCell>
                {/* <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    TRẠNG THÁI
                  </Typography>
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography color="textSecondary">1</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    #ORD12345
                  </Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      src={img1}
                      variant="rounded"
                      alt={img1}
                      sx={{ width: 48, height: 48 }}
                    />
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        Nguyễn Huy Hoàng
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    hoanghn@gmail.com
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    16/02/2024
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    09742222593
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    10.000đ
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    Chatbot hỗ trợ chốt đơn
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    3000đ
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <Typography color="textSecondary">2</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    #ORD12346
                  </Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      src={img2}
                      variant="rounded"
                      alt={img2}
                      sx={{ width: 48, height: 48 }}
                    />
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        Lê Thị Hương
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    huongtl@gmail.com
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    30/02/2024
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    09011111123
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    12.000đ
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    Chatbot hỗ trợ khách hàng
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    2000đ
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <Typography color="textSecondary">3</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    #ORD12347
                  </Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      src={img3}
                      variant="rounded"
                      alt={img3}
                      sx={{ width: 48, height: 48 }}
                    />
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        Trần Văn Huy
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    huytv@gmail.com
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    20/02/2024
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    09750000567
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    15.000đ
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    Chatbot marketing
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    1000đ
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    </DashboardCard>
  );
};

export default Danhsachdh;