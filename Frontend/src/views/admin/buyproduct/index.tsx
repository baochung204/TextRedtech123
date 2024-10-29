import AddCircleIcon from '@mui/icons-material/AddCircle';
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
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { IconEye, IconSearch, IconTrash } from '@tabler/icons-react';
// import { Dayjs } from 'dayjs';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import revenueperproduct from 'src/assets/Adminphoto/doanh thu san pham.png';
import product from 'src/assets/Adminphoto/san pham.png';
import amountcheckout from 'src/assets/Adminphoto/so luong mua.png';
import totalrevenue from 'src/assets/Adminphoto/tong doanh thu.png';
import totalcheckout from 'src/assets/Adminphoto/tong thanh toan.png';
import icontext, { default as iconPoint } from 'src/assets/images/logos/R-Point.png';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import { fetchOverviewProductData } from 'src/store/admin/sell/product/overview/productSlice';
import { AppDispatch, AppState } from 'src/store/Store';
import ProductTable from '../product/ProductData';
import DialogBuyProduct from './DialogBuyProduct';

const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },
  { to: 'admin/buy/products', title: 'Danh sách sản phẩm' },
];
interface FilmsData {
  title: string;
}

const FilmsData: FilmsData[] = [
  { title: 'Quần áo bộ ' },
  { title: 'Áo hoodie' },
  { title: 'Váy' },
  { title: 'Dép' },
];

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const BuyPoints = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [checkValue, setCheckValue] = useState<string | null>(null);
  const [selectID, setSelectID] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const productOverview = useSelector((state: AppState) => state.overview_product.dataa);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    dispatch(fetchOverviewProductData());
  }, [dispatch]);

  // "totalProduct": 63,
  // "totalQuantity": 13,
  // "totalRevenue": 5500,
  // "quantityOnProduct": 0,
  // "revenueOnProduct": 87

  // console.log('hello' + productOverview);

  const totalProduct = productOverview.totalProduct;
  const totalQuantity = productOverview.totalQuantity;
  const totalRevenue = productOverview.totalRevenue;
  const quantityOnProduct = productOverview.quantityOnProduct;
  const revenueOnProduct = productOverview.revenueOnProduct;

  const DataBox = [
    {
      bgColor: 'primary.light',
      title: 'Sản phẩm',
      total: `${totalProduct}`,
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
            <img src={product} width={30} alt="Product" />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Số lượng mua',
      total: (
        <>
          <Box display="flex" alignItems="center" gap={0.4}>
            <Typography variant="h6">{totalQuantity}</Typography>
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
            <img src={amountcheckout} width={30} alt="Amount Checkout" />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Doanh thu',
      total: (
        <>
          <Box display="flex" alignItems="center" gap={0.4}>
            <Typography variant="h6">{totalRevenue}</Typography>
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
            <img src={totalcheckout} width={30} alt="Total Checkout" />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Lượt mua / sản phẩm',
      total: (
        <>
          <Box display="flex" alignItems="center" gap={0.4}>
            <Typography variant="h6">{quantityOnProduct}</Typography>
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
            <img src={totalrevenue} width={30} alt="Total Revenue" />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Doanh thu / sản phẩm',
      total: (
        <>
          <Box display="flex" alignItems="center" gap={0.4}>
            <Typography variant="h6">{revenueOnProduct}₫</Typography>
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
            <img src={revenueperproduct} width={30} alt="Revenue per Product" />
          </Box>
        </>
      ),
    },
  ];

  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: 'Danh mục',
        dataIndex: 'danhmuc',
      },
      {
        title: 'Ảnh',
        dataIndex: 'id_khach_hang',
        render: (_row, value: any) => <Avatar src={value.anh} alt={value.anh} />,
      },
      {
        title: 'Tên sản phẩm',
        dataIndex: 'tensanpham',
      },
      {
        title: 'Giá niêm yết',
        dataIndex: 'gia',
        render: (_row, value: any) => (
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Typography variant="subtitle2">{value.gianiemyet}</Typography>
            <img src={icontext} alt="" width={20} />
          </Box>
        ),
      },
      {
        title: 'Giá khuyến mãi',
        dataIndex: 'khuyenmai',
        render: (_row, value: any) => (
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Typography variant="subtitle2">{value.giakhuyenmai}</Typography>
            <img src={icontext} alt="" width={20} />
          </Box>
        ),
      },
      {
        title: 'Level',
        dataIndex: 'level',
      },
      {
        title: 'Tags',
        dataIndex: 'tags',
      },
      {
        title: 'Số lượng mua',
        dataIndex: 'soluongmua',
        sort: true,
        render: (value: any) => (
          <Box
            sx={{
              textAlign: 'center',
            }}
          >
            <Typography variant="subtitle2">{value}</Typography>
          </Box>
        ),
      },

      {
        title: 'Doanh thu',
        dataIndex: 'tongdoanhthu',
        render: (value) => (
          <Box sx={{ display: 'flex', justifyContent: 'end', pr: 1, gap: '4px' }}>
            {value.toLocaleString('vi-VN')} <Box>₫</Box>
          </Box>
        ),
        sort: true,
      },
      {
        title: 'Tỉ trọng doanh thu',

        dataIndex: 'titrongdoanthu',
        sort: true,
      },

      {
        title: 'Thông tin sản phẩm',
        dataIndex: 'ttsp',
        isValids: false,
      },
      {
        title: 'Hình ảnh',
        dataIndex: 'ha',
        isValids: false,
      },
      {
        title: 'Secretkey',
        dataIndex: 'secretkey',
        isValids: false,
      },
      {
        title: 'Hướng dẫn sử dụng',
        dataIndex: 'hdsd',
        isValids: false,
      },
      {
        title: 'Hoạt động',
        dataIndex: 'action',
        render: (_row: any, value: any) => (
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <IconButton
                onClick={() => {
                  setOpen(true);
                  setCheckValue('view');
                  setSelectID(value.id);
                }}
              >
                <IconEye stroke={2} style={{ color: '#5D87FF' }} />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton onClick={() => {}}>
                <IconTrash stroke={2} style={{ color: '#FA896B' }} />
              </IconButton>
            </Grid>
          </Grid>
        ),
      },
    ],
    [],
  );
  const [selectedItems, setSelectedItems] = useState<string>('');
  const handleChange1 = (event: SelectChangeEvent<string>) => {
    setSelectedItems(event.target.value);
  };
  const handleItemClick1 = (title: string) => {
    if (selectedItems === title) {
      setSelectedItems('');
    } else {
      setSelectedItems(title);
    }
  };
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
      <BannerPage title="Quản lý sản phẩm" items={BCrumb} />
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
                <Grid item>
                  <IconButton
                    color="primary"
                    aria-label="Add to cart"
                    onClick={() => {
                      setOpen(true);
                      setCheckValue('add');
                    }}
                  >
                    <AddCircleIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    id="outlined-search"
                    placeholder="Tìm kiếm sản phẩm"
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
              {' '}
              <Select
                value={selectedItems}
                onChange={handleChange1}
                displayEmpty
                renderValue={(selected) => (selected === '' ? 'Lọc danh mục' : `${selectedItems}`)}
                size="small"
                style={{ minWidth: 50 }}
              >
                {FilmsData.map((film) => (
                  <MenuItem
                    key={film.title}
                    value={film.title}
                    onClick={() => handleItemClick1(film.title)}
                  >
                    <ListItemText primary={film.title} />
                  </MenuItem>
                ))}
              </Select>
              <IconButton aria-label="filter" sx={{ mx: 2 }}>
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
          <CustomTable columns={column} dataSource={ProductTable} dataSelect={dataSelect} />
        </Grid>
      </Grid>
      <DialogBuyProduct
        open={open}
        setOpen={setOpen}
        setCheckValue={setCheckValue}
        checkValue={checkValue}
        selectID={selectID}
      />
    </>
  );
};

export default BuyPoints;
