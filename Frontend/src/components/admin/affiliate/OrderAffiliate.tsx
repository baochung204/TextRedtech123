import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Avatar,
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
import { IconSearch } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import revenue from 'src/assets/Adminphoto/doanh thu.png';
import bill from 'src/assets/Adminphoto/dơn hang.png';
import commission from 'src/assets/Adminphoto/hoa hong.png';
import Point from 'src/assets/images/icon.png/point.png';
import RPoint from 'src/assets/images/logos/R-Point.png';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import TopCard from 'src/components/widgets/cards/TopCard';
import { DataAffiliateTable } from './datatable/OrderTableData';
import { useDispatch } from 'react-redux';
import { AppDispatch, AppState } from 'src/store/Store';
import { useSelector } from 'react-redux';
import { fetchOverviewOrderAffiliateData } from 'src/store/admin/affiliate/orderaffiliate/oveview/orderAffiliateOverviewSlice';

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}
const OrderAffiliate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const dataOrderAffiliateOverview = useSelector(
    (state: AppState) => state.overview_order_affiliate.dataa,
  );
  useEffect(() => {
    dispatch(fetchOverviewOrderAffiliateData());
  }, [dispatch]);

  const totalOrders = dataOrderAffiliateOverview.totalOrders;
  const totalRPoints = dataOrderAffiliateOverview.totalRPoints;
  const totalRevenue = dataOrderAffiliateOverview.totalRevenue;
  const totalCommission = dataOrderAffiliateOverview.totalCommission;

  const dataSource = [
    {
      bgColor: 'primary.light',
      title: 'Đơn hàng',
      total: totalOrders,
      icons: (
        <>
          <Box
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
            <img src={bill} width={30} />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'R-Point',
      total: totalRPoints,
      icons: (
        <>
          <Box
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
            <img src={RPoint} alt="RPoint" style={{ width: '30px', height: '30px' }} />,
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Doanh thu',
      total: totalRevenue,
      icons: (
        <Box
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
          <img src={revenue} width={30} />
        </Box>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Hoa hồng',
      total: totalCommission,
      icons: (
        <Box
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
          <img src={commission} width={30} />
        </Box>
      ),
    },
  ];

  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
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
        dataIndex: 'number',

        render: (_row: any, value: any) => (
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

        render: (_row: any, value: any) => (
          <Box sx={{ display: 'flex' }}>
            <Typography variant="subtitle2">{value.numberpoint}</Typography>
            <img style={{ width: '20px', height: '20px' }} src={Point} />
          </Box>
        ),
      },
      {
        title: 'Giá trị đơn hàng',
        dataIndex: 'value',
        render: (value) => (
          <Box sx={{ display: 'flex', justifyContent: 'end', pr: 1, gap: '4px' }}>
            {value.toLocaleString('vi-VN')} <Box>₫</Box>
          </Box>
        ),
      },
      {
        title: 'Hoa hồng',
        dataIndex: 'commission',
        render: (value) => (
          <Box sx={{ display: 'flex', justifyContent: 'end', pr: 1, gap: '4px' }}>
            {value.toLocaleString('vi-VN')} <Box>₫</Box>
          </Box>
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
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={dataSource} totalColumn={4} />
        </Grid>
        <Grid item xs={12}>
          <Grid container sx={{ alignItems: 'center' }} spacing={2}>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Grid container sx={{ alignItems: 'center' }}>
                <Grid item xs={10}>
                  <TextField
                    id="outlined-search"
                    placeholder="Tìm kiếm đơn hàng"
                    size="small"
                    type="search"
                    variant="outlined"
                    inputProps={{ 'aria-label': 'Search Followers' }}
                    sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconSearch size="12" />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
              }}
            >
              <IconButton aria-label="filter" sx={{ mr: 2 }}>
                <Badge badgeContent={column.length - dataSelect.length} color="primary">
                  <FilterListIcon />
                </Badge>
              </IconButton>
              <Select
                multiple
                value={dataSelect}
                displayEmpty
                onChange={handleColumnChange}
                renderValue={() => 'Sửa đổi cột'}
                size="small"
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
                  autoFocus: false,
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
                <MenuItem>
                  <Checkbox
                    checked={!(dataSelect.length === column.length)}
                    indeterminate={dataSelect.length > 0 && dataSelect.length < column.length}
                    onChange={() => {
                      if (dataSelect.length < column.length) {
                        const allColumns = column.map((header: Column) => header.dataIndex);
                        setDataSelect(allColumns);
                      } else {
                        setDataSelect([]);
                      }
                    }}
                  />
                  <ListItemText primary="Chọn tất cả" />
                </MenuItem>
                {column.map((header: Column) => {
                  const isSelected = !dataSelect.includes(header.dataIndex);
                  return (
                    <MenuItem key={header.dataIndex} value={header.dataIndex}>
                      <Checkbox checked={isSelected} />
                      <ListItemText primary={header.title} />
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <DateSelect />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <CustomTable columns={column} dataSource={DataAffiliateTable} dataSelect={dataSelect} />
        </Grid>
      </Grid>
    </>
  );
};

export default OrderAffiliate;
