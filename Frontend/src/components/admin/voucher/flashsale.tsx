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
// components
// import { styled } from '@mui/system';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import { IconSearch } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import icontext from 'src/assets/images/logos/R-Point.png';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import CustomSwitch from 'src/components/forms/theme-elements/CustomSwitch';
import { fetchFlashSaleListData } from 'src/store/admin/counpon/flashsale/table/flashsaleSlice';
import { AppState, dispatch, useSelector } from 'src/store/Store';
import AddDflashsale from './add/addflashsale';

interface DataRow3 {
  id: number;
  name: string;
  quantity: number;
  productName: string;
  productId: number;
  productImage: string;
  price: number;
  percent: number;
  priceAfterFlashSale: number;
  totalBuyFlashSales: number;
  totalRevenue: number;
  isUsed: boolean;
}

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const FlashSale = () => {
  const [dataSelect, setDataSelect] = useState<string[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const flashsalelist = useSelector((state: AppState) => state.flashsale_list.dataa);

  const [flashSaleData, setFlashSaleData] = useState<DataRow3[]>([]);

  useEffect(() => {
    dispatch(fetchFlashSaleListData());
  }, [dispatch]);

  useEffect(() => {
    if (flashSaleData !== flashsalelist.content) {
      setFlashSaleData(flashsalelist.content);
    }
  }, [flashSaleData, flashsalelist]);

  console.log(flashSaleData);

  const column = useMemo<Column[]>(
    () => [
      {
        id: 'id',
        title: 'ID',
        dataIndex: 'id',
      },
      {
        id: 'voucherName',
        title: 'Tên chiến dịch',
        dataIndex: 'name',
      },
      {
        id: 'quantityFS',
        title: 'Số lượng FS',
        dataIndex: 'quantity',
      },
      {
        id: 'product',
        title: 'Sản phẩm',
        dataIndex: 'productName',
        render: (_text: any, value: any) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Avatar on the left */}
            <img
              src={value.productImage}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />

            <Box>
              <Typography variant="subtitle2">{value.productName}</Typography>
              <Typography style={{ fontSize: '12px', color: '#ccc' }}>
                #{value.productId}
              </Typography>
            </Box>
          </Box>
        ),
      },
      {
        id: 'listed',
        title: 'Giá niêm yết',
        dataIndex: 'price',
        render: (value: number) => {
          const formattedValue = new Intl.NumberFormat('vi-VN').format(value); // No currency symbol
          return (
            <>
              <Box sx={{ display: 'flex' }}>
                <Typography>{formattedValue} </Typography>
                <img src={icontext} alt="" width={22} style={{ marginLeft: 4 }} />
              </Box>
            </>
          );
        },
      },
      {
        id: 'sale',
        title: 'Giảm giá',
        dataIndex: 'percent',
        render: (value: number) => {
          const formattedValue = new Intl.NumberFormat('vi-VN').format(value); // No currency symbol
          return <Typography>{formattedValue} %</Typography>;
        },
      },
      {
        id: 'flashSale',
        title: 'Giá Flash-Sale',
        dataIndex: 'priceAfterFlashSale',
        render: (value: number) => {
          const formattedValue = new Intl.NumberFormat('vi-VN').format(value); // No currency symbol
          return (
            <>
              <Box sx={{ display: 'flex' }}>
                <Typography>{formattedValue} </Typography>
                <img src={icontext} alt="" width={22} style={{ marginLeft: 4 }} />
              </Box>
            </>
          );
        },
      },
      {
        id: 'buy',
        title: 'Số lượt mua',
        dataIndex: 'totalBuyFlashSales',
        render: (value: number) => {
          const formattedValue = new Intl.NumberFormat('vi-VN').format(value); // No currency symbol
          return <Typography>{formattedValue} </Typography>;
        },
      },
      {
        id: 'TypeVoucher',
        title: 'Doanh thu',
        dataIndex: 'totalRevenue',
        render: (value: number) => {
          const formattedValue = new Intl.NumberFormat('vi-VN').format(value); // No currency symbol
          return (
            <>
              <Box sx={{ display: 'flex' }}>
                <Typography>{formattedValue} </Typography>
                <img src={icontext} alt="" width={22} style={{ marginLeft: 4 }} />
              </Box>
            </>
          );
        },
      },
      {
        id: 'status',
        title: 'Trạng thái',
        dataIndex: 'isUsed',
        render: (_text: any, value: any) => (
          <Typography color="textSecondary" variant="subtitle2">
            <CustomSwitch color="primary" defaultChecked={value.status ? true : false} />
          </Typography>
        ),
      },
    ],
    [],
  );
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
    <div>
      {' '}
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
              <Grid item xs={2}>
                <IconButton
                  color="primary"
                  aria-label="Add to cart"
                  onClick={() => setIsPopupOpen(true)}
                >
                  <AddCircleIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="outlined-search"
                  placeholder="Tìm kiếm flash-sale"
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
        <CustomTable columns={column} dataSource={flashSaleData} dataSelect={dataSelect} />
      </Grid>
      <AddDflashsale isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
    </div>
  );
};

export default FlashSale;
