import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

import { IconBox, IconChartBar, IconSearch, IconZoomMoney } from '@tabler/icons-react';
import RPoint from 'src/assets/images/logos/R-Point.png';
import TopCard from 'src/components/widgets/cards/TopCard';
import OrderTable from './component/OrderTable';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { DataAffiliateTable } from './datatable/OrderTableData';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React from 'react';
import Point from 'src/assets/images/icon.png/point.png';

const dataSource = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Đơn hàng',
    total: '1907',
    icons: (
      <>
        <Box
          bgcolor="primary.main"
          textAlign="center"
          padding={1}
          sx={{
            width: 45,
            height: 45,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconBox color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'R-Point',
    total: '190.720.030',
    icons: (
      <>
        <Box
          bgcolor="warning.main"
          textAlign="center"
          padding={1}
          sx={{
            width: 45,
            height: 45,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <IconWashDrycleanOff color="white" size={30} /> */}{' '}
          <img src={RPoint} alt="RPoint" style={{ width: '24px', height: '24px' }} />,
        </Box>
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Doanh thu',
    total: '123.456.789đ',
    icons: (
      <Box
        bgcolor="success.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconChartBar color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Hoa hồng',
    total: '123.456.789đ',
    icons: (
      <Box
        bgcolor="error.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconZoomMoney color="white" size={30} />
      </Box>
    ),
  },
];

const getStatusAccountColor = (status: string) => {
  switch (status) {
    case 'Hoạt động':
      return 'success'; // Green for approved
    case 'Chờ duyệt':
      return 'warning'; // Yellow for pending approval
    case 'Từ chối':
      return 'error'; // Red for rejected
    case 'Chưa đăng ký':
      return 'default'; // Gray for not yet sent
    default:
      return 'default'; // Gray for any unrecognized status
  }
};

const columns = [
  {
    title: 'ID đơn hàng',
    dataIndex: 'id_order',
  },

  {
    title: 'ID Publisher',
    dataIndex: 'id_publisher',
  },
  {
    title: 'Ngày mua',
    dataIndex: 'createdate',
  },
  {
    title: 'Tên Publisher',
    dataIndex: 'name_publisher',
  },
  {
    title: 'Email Publisher',
    dataIndex: 'email_publisher',
  },
  {
    title: 'SĐT Publisher',
    dataIndex: 'phonenumber_publisher',
  },
  {
    title: 'Khách hàng',

    render: (row, value: any) => (
      <Box
        sx={{
          display: 'flex',
          width: '200px',
          alignItems: 'center',
        }}
      >
        <Avatar
          src={value.imgsrc}
          variant="rounded"
          alt={value.imgsrc}
          sx={{ width: 48, height: 48 }}
        />
        <Typography style={{ marginLeft: '10px' }} variant="subtitle2">
          {value.name_customer}
        </Typography>
      </Box>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email_customer',
  },
  {
    title: 'SDT',
    dataIndex: 'phonenumber_customer',
  },
  {
    title: 'Tên gói nạp',
    dataIndex: 'package',
  },
  {
    title: 'Số point',
    dataIndex: 'branch',

    render: (row, value: any) => (
      <Box sx={{ display: 'flex' }}>
        <Typography variant="subtitle2">{value.numberpoint}</Typography>
        <img style={{ width: '20px', height: '20px' }} src={Point} />
      </Box>
    ),
  },
  {
    title: 'Giá trị đơn hàng',
    dataIndex: 'value',
  },
  {
    title: 'Hoa hồng',
    dataIndex: 'commission',
  },
  {
    title: 'Đơn hàng',

    render: (row, value: any) => (
      <Chip label={value.status} color={getStatusAccountColor(value.status)} />
    ),
  },
];
const OrderAffiliate = () => {
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);
  return (
    <>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          {/* <TopCard dataSource={dataSource} totalColumn={4} /> */}
          <TopCard dataSource={dataSource} totalColumn={4} />
        </Grid>

        <Grid item xs={12}>
          <Grid item xs={12}>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid item xs={4} sm={4} md={4}>
                <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-search"
                      placeholder="Tìm kiếm thông báo"
                      size="small"
                      type="search"
                      variant="outlined"
                      inputProps={{ 'aria-label': 'Search Followers' }}
                      sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconSearch size="20" />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth={true}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={selectedStartDate}
                      onChange={setSelectedStartDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <Typography>tới</Typography>
                    <DatePicker
                      value={selectedEndDate}
                      onChange={setSelectedEndDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <CustomTable columns={columns} dataSource={DataAffiliateTable} />
        </Grid>
      </Grid>
    </>
  );
};

export default OrderAffiliate;
