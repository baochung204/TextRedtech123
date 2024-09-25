import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconBox, IconChartBar, IconEye, IconSearch, IconZoomMoney } from '@tabler/icons-react';
import React from 'react';
import RPoint from 'src/assets/images/logos/R-Point.png';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import TopCard from 'src/components/widgets/cards/TopCard';
import { DataInvoiceTable } from './datatable/InvoiceTableData';

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

const columns = [
  {
    title: 'ID hóa đơn',
    dataIndex: 'id_bill',
  },

  {
    title: 'ID đơn hàng',
    dataIndex: 'id_order',
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'createdate',
  },

  {
    title: 'Loại tài khoản',
    render: (row, value: any) => (
      <Typography variant="subtitle2">
        <Chip
          label={value.type_account ? 'Doanh nghiệp' : 'Cá nhân'}
          color={value.type_account ? 'success' : 'warning'}
          variant="outlined"
        />
      </Typography>
    ),
  },
  {
    title: 'Tên công ty',
    dataIndex: 'name_company',
  },
  {
    title: 'Mã số thuế',
    dataIndex: 'tax_code',
  },
  {
    title: 'Nội dung hóa đơn',
    dataIndex: 'content_bill',
  },
  {
    title: 'DVT',
    dataIndex: 'dvt',
  },
  {
    title: 'Số lượng',
    dataIndex: 'amount',
  },
  {
    title: 'Đơn giá',
    dataIndex: 'price',
  },
  {
    title: 'Thành tiền',
    dataIndex: 'into_money',
  },

  {
    title: 'VAT',
    dataIndex: 'vat',
  },
  {
    title: 'Tổng(VAT)',
    dataIndex: 'total_vat',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
  },
  {
    title: 'Người đại diện',
    dataIndex: 'presentative',
  },
  {
    title: 'Chức vụ',
    dataIndex: 'position',
  },
  {
    title: 'SĐT công ty',
    dataIndex: 'phone_number',
  },
  {
    title: 'Email công ty',
    dataIndex: 'email',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'position',
    render: (row, value: any) => (
      <Typography
        sx={{
          color: value.status ? 'success.main' : 'warning.main',
        }}
        variant="subtitle2"
      >
        {value.status ? 'Đã xuất' : 'Chưa xuất'}
      </Typography>
    ),
  },

  {
    title: 'Hóa đơn',
    dataIndex: 'phone_number',
    render: (row, value: any) => <Button>Xuất ngay</Button>,
  },
  {
    title: 'Hoạt động',
    dataIndex: 'phone_number',
    render: (row, value: any) => (
      <IconButton>
        <IconEye stroke={2} />
      </IconButton>
    ),
  },
];

const Invoice = () => {
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
          <CustomTable columns={columns} dataSource={DataInvoiceTable} />
        </Grid>
      </Grid>
    </>
  );
};

export default Invoice;
