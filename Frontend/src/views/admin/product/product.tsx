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
import { IconEye, IconSearch } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import { default as iconPoint, default as point } from 'src/assets/images/logos/R-Point.png';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

import { useDispatch, useSelector } from 'react-redux';
import aovpicture from 'src/assets/Adminphoto/aov.png';
import bill from 'src/assets/Adminphoto/dơn hang.png';
import sale from 'src/assets/Adminphoto/khuyen mai.png';
import totalvalue from 'src/assets/Adminphoto/tong gia tri.png';
import totalcheckout from 'src/assets/Adminphoto/tong thanh toan.png';
import DateSelect from 'src/components/apps/date/DateSelect';
import PageContainer from 'src/components/container/PageContainer';
import { fetchOverviewOrderProductData } from 'src/store/admin/sell/orderproduct/overview/orderproductSlice';
import { fetchOrderProductListData } from 'src/store/admin/sell/orderproduct/table/listOrderProductSlice';
import { AppDispatch, AppState } from 'src/store/Store';
import DialogDetailOrder from './DialogDetailOrder';

const BCrumb = [
  { to: '/admin/dashboard', title: 'Trang Chủ' },
  { to: '/admin/buy/orderproducts', title: 'Danh sách đơn hàng' },
];

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const ProductAdmin = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [, setSelectID] = useState<string | null>(null);
  const [, setCheckValue] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const dataOrderProductOverview = useSelector((state: AppState) => state.overview_order.dataa);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const orderProductList = useSelector((state: AppState) => state.list_order_product.dataa);
  useEffect(() => {
    dispatch(fetchOrderProductListData({ page_no: page, page_size: rowsPerPage }));
  }, [rowsPerPage, page]);

  const totalOrder = dataOrderProductOverview.totalOrder;
  const totalValue = dataOrderProductOverview.totalValue;
  const totalPromotion = dataOrderProductOverview.totalPromotion;
  const totalPayment = dataOrderProductOverview.totalPayment;
  const aov = dataOrderProductOverview.aov;

  const DataBox = [
    {
      bgColor: 'primary.light',

      title: 'Đơn hàng',
      total: (
        <>
          <Typography variant="h6">{totalOrder}</Typography>
        </>
      ),
      icons: (
        <>
          <Box
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
            <img src={bill} width={30} />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Tổng giá trị',
      total: (
        <>
          <Box display="flex" alignItems="center" gap={0.4}>
            <Typography variant="h6">{totalValue}</Typography>
            <img src={iconPoint} alt="" width={17} />
          </Box>
        </>
      ),
      icons: (
        <>
          <Box
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
            <img src={totalvalue} width={30} />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Khuyến mại',
      total: (
        <>
          <Box display="flex" alignItems="center" gap={0.4}>
            <Typography variant="h6">{totalPromotion}</Typography>
            <img src={iconPoint} alt="" width={17} />
          </Box>
        </>
      ),
      icons: (
        <>
          <Box
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
            <img src={sale} width={30} />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Tổng thanh toán',
      total: (
        <>
          <Box display="flex" alignItems="center" gap={0.4}>
            <Typography variant="h6">{totalPayment}</Typography>
            <img src={iconPoint} alt="" width={17} />
          </Box>
        </>
      ),
      icons: (
        <>
          <Box
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
            <img src={totalcheckout} width={30} />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'AOV',
      total: (
        <>
          <Box display="flex" alignItems="center" gap={0.4}>
            <Typography variant="h6">{aov}</Typography>
            <img src={iconPoint} alt="" width={17} />
          </Box>
        </>
      ),
      icons: (
        <>
          <Box
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
            {/* <IconChartBar color="white" size={30} /> */}
            <img src={aovpicture} width={30} />
          </Box>
        </>
      ),
    },
  ];

  useEffect(() => {
    dispatch(fetchOverviewOrderProductData());
  }, [dispatch]);

  console.log(dataOrderProductOverview);

  console.log('hello', orderProductList);

  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'orderId',
      },
      {
        title: 'Ngày mua',
        dataIndex: 'date',
        render: (value: string) => {
          const values = new Date(value);
          return values.toLocaleDateString('vi-VN');
        },
      },
      {
        title: 'ID',
        dataIndex: 'userId',
      },
      {
        title: 'Tên khách hàng',
        dataIndex: 'nameUser',
      },
      {
        title: 'Giá niêm yết',
        dataIndex: 'point',
        render: (_row: any, value: any) => {
          const formattedValue = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(value.point);

          return (
            <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
              {formattedValue}
              <img src={point} alt="" width={20} style={{ marginLeft: '8px' }} />
            </Typography>
          );
        },
      },
      {
        title: 'Khuyến mại',
        dataIndex: 'promotion',
        render: (_row: any, value: any) => {
          const formattedValue = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(value.promotion);

          return (
            <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
              {formattedValue}
              <img src={point} alt="" width={20} style={{ marginLeft: '8px' }} />
            </Typography>
          );
        },
      },
      {
        title: 'Thanh toán',
        dataIndex: 'payment',
        render: (_row: any, value: any) => (
          <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
            {value.payment}
            <img src={point} alt="" width={20} style={{ marginLeft: '8px' }} />
          </Typography>
        ),
      },
      {
        title: 'Thao tác',
        dataIndex: '',
        render: (_value: any, row: any) => (
          <IconButton
            onClick={() => {
              setSelectID(row.id_don_hang);
              setOpen(!open);
              setCheckValue('show');
            }}
          >
            <IconEye stroke={2} style={{ color: '#5D87FF' }} />
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
      <PageContainer title="Đơn hàng sản phẩm" description="this is  page">
        <BannerPage title="Đơn hàng sản phẩm" items={BCrumb} />
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <TopCard dataSource={DataBox} totalColumn={5} />
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
                  <Grid item></Grid>
                  <Grid item>
                    <TextField
                      id="outlined-search"
                      placeholder="Tìm kiếm trợ lý"
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
                    autoFocus: false,
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
              dataSource={orderProductList.content}
              count={orderProductList.totalElements}
              rowsPerPage={rowsPerPage}
              page={page}
              setPage={setPage}
              setRowsPerPage={setRowsPerPage}
            />
          </Grid>
        </Grid>
        <DialogDetailOrder open={open} setOpen={setOpen} />
      </PageContainer>
    </>
  );
};

export default ProductAdmin;
