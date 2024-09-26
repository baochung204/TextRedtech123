import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Badge,
  Box,
  Checkbox,
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
import { IconBellRinging, IconEye, IconSearch, IconTrash } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import icontext from 'src/assets/images/logos/R-Point.png';
import OrderData from 'src/components/admin/order/data/OrderData';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },
  { to: 'admin/order', title: 'Quản lý khách hàng' },
];

interface StyleProps {
  bgColor: string;
  color: string;
  title: string;
  total: string;
  icons: JSX.Element;
}

const DataBox: StyleProps[] = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Khách hàng',
    total: '6251',
    icons: (
      <>
        <Box
          bgcolor="primary.main"
          textAlign="center"
          padding={1}
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconBellRinging color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'secondary.light',
    color: 'secondary.main',
    title: 'Khách trả phí',
    total: '1204 (33%)',
    icons: (
      <>
        <Box
          bgcolor="secondary.main"
          textAlign="center"
          padding={1}
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconBellRinging color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'CN/DN',
    total: '3251/3000',
    icons: (
      <>
        <Box
          bgcolor="success.main"
          textAlign="center"
          padding={1}
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconBellRinging color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Doanh thu',
    total: '15.126.422.555đ',
    icons: (
      <>
        <Box
          bgcolor="warning.main"
          textAlign="center"
          padding={1}
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconBellRinging color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Số dư R-Point',
    total: '52.126.422',
    icons: (
      <>
        <Box
          bgcolor="error.main"
          textAlign="center"
          padding={1}
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconBellRinging color="white" size={30} />
        </Box>
      </>
    ),
  },
];
interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const OrderAdminPages = () => {
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);
  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'id',
      },

      {
        title: 'Họ và tên',
        dataIndex: 'name',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'phone',
      },
      {
        title: 'Loại tài khoản',
        dataIndex: 'typeacc',
      },
      {
        title: 'Trợ lý',
        dataIndex: 'troly',
      },

      {
        title: 'Tổng nạp',
        dataIndex: 'tongnap',
      },
      {
        title: 'Số dư',
        dataIndex: 'sodu',
        render: (_row, value: any) => (
          <Box width={'80px'} sx={{ display: 'flex', justifyContent: 'end' }}>
            <Typography
              color="textSecondary"
              variant="subtitle2"
              sx={{ display: 'flex', gap: 0.5 }}
            >
              {value.sodu}{' '}
              <img src={icontext} alt="" width={20} height={20} style={{ borderRadius: 50 }} />
            </Typography>
          </Box>
        ),
      },
      {
        title: 'Hành động',
        dataIndex: 'action',
        render: (_row, _value: any) => (
          <>
            <IconButton
              onClick={() => {
                // setSelectedKey(item.id); setOpen(true); console.log(item.id);
              }}
            >
              <IconEye stroke={2} style={{ color: '#5D87FF' }} />
            </IconButton>
            <IconButton>
              <IconTrash stroke={2} style={{ color: '#FA896B' }} />
            </IconButton>
          </>
        ),
      },
    ],
    [],
  );

  const [dataSelect, setDataSelect] = useState<string[]>([]);

  useEffect(() => {
    const selectedColumns = column || [];
    const hasIsValids = selectedColumns.some((col) => col.isValids !== undefined);
    if (hasIsValids) {
      const hiddenColumns = selectedColumns
        .filter((col) => col.isValids === false)
        .map((col) => col.dataIndex || '');
      setDataSelect(hiddenColumns);
    } else {
      setDataSelect([]);
    }
  }, [column]);

  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <>
      <BannerPage title="Quản lý khách hàng" items={BCrumb} />

      <Grid container rowSpacing={3}>
        {/* Top Card Section */}
        <Grid item xs={12}>
          <TopCard dataSource={DataBox} totalColumn={DataBox.length} />
        </Grid>

        {/* Search and DatePicker Section */}
        <Grid item xs={12}>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Search Field */}
            <Grid item xs={12} sm={6} md={4}>
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
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Badge
                  badgeContent={dataSelect.length !== 0 && dataSelect.length}
                  color={dataSelect.length !== 0 ? 'primary' : undefined}
                >
                  <FilterListIcon color="action" />
                </Badge>
                <Select
                  multiple
                  value={dataSelect}
                  displayEmpty
                  onChange={handleColumnChange}
                  renderValue={() => 'Sửa đổi cột'}
                  size="small"
                >
                  {column.map((header: any) => {
                    console.log(`check ${header.title}`, dataSelect.includes(header.dataIndex));

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

        <Grid item xs={12}>
          <CustomTable columns={column} dataSource={OrderData} dataSelect={dataSelect} />
        </Grid>
      </Grid>
    </>
  );
};

export default OrderAdminPages;
