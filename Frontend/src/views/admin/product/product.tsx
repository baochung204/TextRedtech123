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
import { IconChartBar, IconEye, IconSearch } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import { default as iconPoint, default as point } from 'src/assets/images/logos/R-Point.png';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import DataOrderProduct from './data/DataOrderProduct';

const BCrumb = [
  { to: '/admin/dashboard', title: 'Trang Chủ' },
  { to: '/admin/buy/orderproducts', title: 'Danh sách đơn hàng' },
];

const DataBox = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Đơn hàng',
    total: (
      <>
        <Typography variant="h6">1236</Typography>
      </>
    ),
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
          <IconChartBar color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'secondary.light',
    color: 'secondary.main',
    title: 'Tổng giá trị',
    total: (
      <>
        <Box display="flex" alignItems="center" gap={0.4}>
          <Typography variant="h6">16.146.515</Typography>
          <img src={iconPoint} alt="" width={17} />
        </Box>
      </>
    ),
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
          <IconChartBar color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Khuyến mại',
    total: (
      <>
        <Box display="flex" alignItems="center" gap={0.4}>
          <Typography variant="h6">5.432.234</Typography>
          <img src={iconPoint} alt="" width={17} />
        </Box>
      </>
    ),
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
          <IconChartBar color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Tổng thanh toán',
    total: (
      <>
        <Box display="flex" alignItems="center" gap={0.4}>
          <Typography variant="h6">12.423.423 </Typography>
          <img src={iconPoint} alt="" width={17} />
        </Box>
      </>
    ),
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
          <IconChartBar color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'AOV',
    total: (
      <>
        <Box display="flex" alignItems="center" gap={0.4}>
          <Typography variant="h6">23.423 </Typography>
          <img src={iconPoint} alt="" width={17} />
        </Box>
      </>
    ),
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
          <IconChartBar color="white" size={30} />
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

const ProductAdmin = () => {
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);

  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'id_don_hang',
      },
      {
        title: 'Ngày mua',
        dataIndex: 'createdAt',
        render: (_row: any, value: any) => (
          <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
            {value.createdAt.toLocaleDateString()}
          </Typography>
        ),
      },
      {
        title: 'ID khách hàng',
        dataIndex: 'id_khach_hang',
      },
      {
        title: 'Tên khách hàng',
        dataIndex: 'ten_khach_hang',
      },
      {
        title: 'Giá niêm yết',
        dataIndex: 'gianiemyet',
        render: (_row: any, value: any) => (
          <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
            {value.gia_niem_yet}
            <img src={point} alt="" width={20} style={{ marginLeft: '8px' }} />
          </Typography>
        ),
      },
      {
        title: 'Khuyến mại',
        dataIndex: 'khuyenmai',
        render: (_row: any, value: any) => (
          <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
            {value.khuyen_mai}
            <img src={point} alt="" width={20} style={{ marginLeft: '8px' }} />
          </Typography>
        ),
      },
      {
        title: 'Thanh toán',
        dataIndex: 'thanhtoan',
        render: (_row: any, value: any) => (
          <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
            {value.thanh_toan}
            <img src={point} alt="" width={20} style={{ marginLeft: '8px' }} />
          </Typography>
        ),
      },
      {
        title: 'Thao tác',
        dataIndex: 'thaotac',
        render: () => (
          <IconButton>
            <IconEye stroke={2} style={{ color: '#b1ffb3' }} />
          </IconButton>
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
      <BannerPage title="Đơn hàng sản phẩm" items={BCrumb} />
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={DataBox} totalColumn={5} />
        </Grid>

        <Grid item xs={12}>
          <Grid item xs={12}>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid item xs={4} sm={4} md={4}>
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

              <Grid item xs={6}>
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
        </Grid>

        <Grid item xs={12}>
          <CustomTable columns={column} dataSource={DataOrderProduct} dataSelect={dataSelect} />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductAdmin;
