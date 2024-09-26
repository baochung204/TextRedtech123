import {
  Badge,
  Box,
  Button,
  Checkbox,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconBox, IconChartBar, IconEye, IconSearch, IconZoomMoney } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import RPoint from 'src/assets/images/logos/R-Point.png';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import TopCard from 'src/components/widgets/cards/TopCard';
import { DataInvoiceTable } from './datatable/InvoiceTableData';
import FilterListIcon from '@mui/icons-material/FilterList';



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
interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const Invoice = () => {
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);

  const column = useMemo<Column[]>(() => [
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
      dataIndex: 'loai',
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
  ], [])
  const [dataSelect, setDataSelect] = useState<string[]>([]);

  useEffect(() => {
    const selectedColumns = column || [];
    const hasIsValids = selectedColumns.some(col => col.isValids !== undefined);
    if (hasIsValids) {
      const hiddenColumns = selectedColumns
        .filter(col => col.isValids === false)
        .map(col => col.dataIndex || '');
      setDataSelect(hiddenColumns);
    } else {
      setDataSelect([]);
    }
  }, [column]);

  const handleColumnChange = (event: any) => {
    const { target: { value } } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
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
                  <Badge badgeContent={dataSelect.length !== 0 && dataSelect.length} color={dataSelect.length !== 0 ? 'primary' : undefined}>
                    <FilterListIcon color="action" />
                  </Badge>
                  <Select
                    multiple
                    value={dataSelect}
                    displayEmpty
                    onChange={handleColumnChange}
                    renderValue={() => 'Sửa đổi cột'}
                    size='small'
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          marginTop: 1,
                          maxHeight: 400,
                          '&::-webkit-scrollbar': {
                            width: '4px',
                          },
                          '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#D2D2D2',
                            borderRadius: '10px',
                          },
                          '&::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: '#C6C8CC',
                          },
                          '&::-webkit-scrollbar-track': {
                            backgroundColor: '#f1f1f1',
                          },
                        },
                      },
                      anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right',
                      },
                      transformOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                      },
                    }}
                  >
                    {column.map((header: any) => {

                      console.log(`check ${header.title}`, dataSelect.includes(header.dataIndex))

                      const isSelected = dataSelect.includes(header.dataIndex);

                      return (
                        <MenuItem key={header.dataIndex} value={header.dataIndex}>
                          <Checkbox checked={!isSelected} />
                          <ListItemText primary={header.title} />
                        </MenuItem>
                      );
                    })}
                  </Select>
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
          <CustomTable columns={column} dataSource={DataInvoiceTable} dataSelect={dataSelect}/>
        </Grid>
      </Grid>
    </>
  );
};

export default Invoice;
