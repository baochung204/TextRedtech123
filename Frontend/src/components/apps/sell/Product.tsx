// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore

import AddCircleIcon from '@mui/icons-material/AddCircle';
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
import { IconSearch } from '@tabler/icons-react';
import { useEffect, useMemo, useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { AppState, useDispatch, useSelector } from 'src/store/Store';
import { fetchProduct } from '../../../store/apps/products/productsSlice';
import AddDialog from './layout/addDialog';

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const PaginationTable = () => {
  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'shopProductId',
      },
      {
        title: 'Ảnh',
        dataIndex: 'shopProductImageUrl',
      },
      {
        title: '	Tên sản phẩm',
        dataIndex: 'shopProductName',
      },
      {
        title: 'Tags',
        dataIndex: 'tags',
      },
      {
        title: '	Giá niêm yết',
        dataIndex: 'price',
        render: (row) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>{row.price} đ</Typography>
          </Box>
        ),
      },
      {
        title: 'Giá khuyến mãi',
        dataIndex: 'discount',
        render: (_value: string, row) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>{row.discount} đ</Typography>
          </Box>
        ),
      },
      {
        title: 'Mô tả',
        dataIndex: 'mota',
        isValids: false,
      },
      {
        title: 'Ảnh sản phẩm',
        dataIndex: 'anhsanpham',
        isValids: false,
      },
      {
        title: 'Đơn vị tính',
        dataIndex: 'donvitinh',
        isValids: false,
      },
      {
        title: 'Kích thước',
        dataIndex: 'kichthuoc',
        isValids: false,
      },
      {
        title: 'Màu sắc',
        dataIndex: 'mausac',
        isValids: false,
      },
      {
        title: 'Chất liệu',
        dataIndex: 'chatlieu',
        isValids: false,
      },
      {
        title: 'Tiêu đề',
        dataIndex: 'tieude',
        isValids: false,
      },
      {
        title: 'Kiểu dáng',
        dataIndex: 'kieudang',
        isValids: false,
      },
    ],
    [],
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();
  const dataProduct = useSelector((state: AppState) => state.product.data);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
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
    <Grid container spacing={3}>
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
            xs={8}
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
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <CustomTable columns={column} dataSource={dataProduct} dataSelect={dataSelect} />
      </Grid>
      {/* <Dialogproduct open={open} setOpen={setOpen} /> */}
      <AddDialog isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
    </Grid>
  );
};

export default PaginationTable;
