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
import { useDispatch, useSelector } from 'react-redux';
import revenue from 'src/assets/Adminphoto/doanh thu.png';
import bill from 'src/assets/Adminphoto/dơn hang.png';
import commission from 'src/assets/Adminphoto/hoa hong.png';
import RPoint from 'src/assets/images/logos/R-Point.png';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import TopCard from 'src/components/widgets/cards/TopCard';
import { fetchOverviewOrderAffiliateData } from 'src/store/admin/affiliate/orderaffiliate/oveview/orderAffiliateOverviewSlice';
import { fetchOrderAffiliateListData } from 'src/store/admin/affiliate/orderaffiliate/table/orderAffiliateSlice';
import { AppDispatch, AppState } from 'src/store/Store';

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const OrderAffiliate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const orderAffiliateList = useSelector((state: AppState) => state.list_order_affiliate.dataa);
  useEffect(() => {
    dispatch(fetchOrderAffiliateListData({ page_no: page, page_size: rowsPerPage }));
  }, [rowsPerPage, page]);

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
        dataIndex: 'orderId',
      },

      {
        title: 'ID Publisher',
        dataIndex: 'publisherId',
      },
      {
        title: 'Ngày mua',
        dataIndex: 'createDate',
        render: (value: string) => {
          const values = new Date(value);
          return values.toLocaleDateString('vi-VN');
        },
      },
      {
        title: 'Tên Publisher',
        dataIndex: 'publisherName',
      },
      {
        title: 'Email Publisher',
        dataIndex: 'emailPublisher',
      },
      {
        title: 'SĐT Publisher',
        dataIndex: 'phonePublisher',
      },
      {
        title: 'Khách hàng',
        dataIndex: '',

        render: (_row: any, value: any) => (
          <Box
            sx={{
              display: 'flex',
              width: '200px',
              alignItems: 'center',
            }}
          >
            <Avatar
              src={value.customerImage}
              variant="rounded"
              alt={value.customerImage}
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
        dataIndex: 'customerEmail',
      },
      {
        title: 'SDT',
        dataIndex: 'customerPhone',
      },
      {
        title: 'Tên gói nạp',
        dataIndex: 'pointName',
      },
      {
        title: 'Số point',
        dataIndex: 'point',
        render: (value: number) => {
          const formattedValue = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(value);
          return formattedValue;
        },
      },

      {
        title: 'Hoa hồng',
        dataIndex: 'commission',
        render: (value: number) => {
          const formattedValue = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(value);
          return formattedValue;
        },
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
          <CustomTable
            columns={column}
            dataSelect={dataSelect}
            dataSource={orderAffiliateList.content}
            count={orderAffiliateList.totalElements}
            rowsPerPage={rowsPerPage}
            page={page}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default OrderAffiliate;
