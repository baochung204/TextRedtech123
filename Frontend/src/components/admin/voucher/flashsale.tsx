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
  Typography
} from '@mui/material';
import s24 from 'src/assets/images/products/s24.jpg';
// components
// import { styled } from '@mui/system';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconSearch } from '@tabler/icons-react';
import { Dayjs } from 'dayjs';
import React, { useEffect, useMemo, useState } from 'react';
import icontext from 'src/assets/images/logos/R-Point.png';
import s22 from 'src/assets/images/products/s22.jpg';
import s25 from 'src/assets/images/products/s23.jpg';
import s23 from 'src/assets/images/products/s25.jpg';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import CustomSwitch from 'src/components/forms/theme-elements/CustomSwitch';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import BlankCard from 'src/components/shared/BlankCard';


interface DataRow3 {
  id: string;
  voucherName: string;
  quantityFS: number;
  product: string;
  listed: number;
  buy: number;
  img: any;
  TypeVoucher: number;
  flashSale: number;
  sale: number;
  status: boolean;
}
const dataRows3: DataRow3[] = [
  {
    id: 'MA001',
    voucherName: 'Sản phẩm mới',
    quantityFS: 2,
    product: 'chat bot AI',
    listed: 120000,
    buy: 1900,
    img: s24,
    TypeVoucher: 19338000,
    flashSale: 28832,
    sale: 23,
    status: true,
  },
  {
    id: 'MA002',
    voucherName: 'Mã giảm giá',
    quantityFS: 5,
    product: 'dịch vụ SEO',
    listed: 150000,
    buy: 2500,
    img: s23,
    TypeVoucher: 37500000,
    flashSale: 45000,
    sale: 30,
    status: false,
  },
  {
    id: 'MA003',
    voucherName: 'khách hàng thân thiết',
    quantityFS: 3,
    product: 'dịch vụ quảng cáo',
    listed: 200000,
    buy: 3000,
    img: s22,

    TypeVoucher: 60000000,
    flashSale: 60000,
    sale: 25,
    status: true,
  },
  {
    id: 'MA004',
    voucherName: 'mini-game',
    quantityFS: 1,
    product: 'dịch vụ thiết kế',
    listed: 100000,
    buy: 1500,
    img: s25,

    TypeVoucher: 15000000,
    flashSale: 15000,
    sale: 10,
    status: true,
  },
  {
    id: 'MA005',
    voucherName: 'sự kiện',
    quantityFS: 4,
    product: 'dịch vụ hosting',
    listed: 50000,
    buy: 1000,
    img: s23,

    TypeVoucher: 5000000,
    flashSale: 5000,
    sale: 15,
    status: true,
  },
  {
    id: 'MA006',
    voucherName: 'khách hàng thân thiết',
    quantityFS: 6,
    product: 'dịch vụ bảo trì',
    listed: 75000,
    buy: 1200,
    img: s24,

    TypeVoucher: 9000000,
    flashSale: 9000,
    sale: 20,
    status: true,
  },
];

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

// function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }

//   return 0;
// }

// type Order = 'asc' | 'desc';

// function getComparator<Key extends keyof any>(
//   order: Order,
//   orderBy: Key,
// ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }
// interface EnhancedTableProps {
//   numSelected: number;
//   order: 'asc' | 'desc';
//   orderBy: string;
//   onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
//   rowCount: number;
// }

const FlashSale = () => {
  // type Order = 'asc' | 'desc';

  // const [order, setOrder] = useState<Order>('asc');
  // const [orderBy, setOrderBy] = useState<any>('calories');
  // const [selected, setSelected] = useState<readonly string[]>([]);
  // const [page, setPage] = useState(0);
  // const [dense] = useState(false);
  // // const [dense, setDense] = useState(false);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // // @ts-ignore
  // const [value, setValue] = React.useState(0);
  // const handleClick = (_event: React.MouseEvent<unknown>, name: string) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected: readonly string[] = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1),
  //     );
  //   }

  //   setSelected(newSelected);
  // };
  // const handleChangePage = (_event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };
  // const handleRequestSort = (_event: React.MouseEvent<unknown>, property: string) => {
  //   const isAsc = orderBy === property && order === 'asc';
  //   setOrder(isAsc ? 'desc' : 'asc');
  //   setOrderBy(property);
  // };

  // const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.checked) {
  //     const newSelecteds = dataRows3.map((n: any) => n.name);
  //     setSelected(newSelecteds);

  //     return;
  //   }
  //   setSelected([]);
  // };
  // const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  // const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [dataSelect, setDataSelect] = useState<string[]>([]);
  const [value, setValue] = useState<Dayjs | null>(null);
  const [value1, setValue1] = useState<Dayjs | null>(null);
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
        dataIndex: 'voucherName',
      },
      {
        id: 'quantityFS',
        title: 'Số lượng FS',
        dataIndex: 'quantityFS',
      },
      {
        id: 'product',
        title: 'Sản phẩm',
        dataIndex: 'product',
        render: (_text: any, value: any) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Avatar on the left */}
            <img
              src={value.img}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />

            <Box>
              <Typography variant="subtitle2">{value.product}</Typography>
              <Typography style={{ fontSize: '12px', color: '#ccc' }}>
                {'MKT000' + value.id}
              </Typography>
            </Box>
          </Box>
        ),
      },
      {
        id: 'listed',
        title: 'Giá niêm yết',
        dataIndex: 'listed',
        render: (_text: any, value: any) => (
          <Typography
            color="textSecondary"
            variant="subtitle2"
            display={'flex'}
            gap={'2px'}
            style={{ whiteSpace: 'nowrap' }}
          >
            {value.listed.toLocaleString()} <img src={icontext} alt="" width={22} />
          </Typography>
        ),
      },
      {
        id: 'sale',
        title: 'Giảm giá',
        dataIndex: 'sale',
        render: (_text: any, value: any) => (
          <Typography
            color="textSecondary"
            variant="subtitle2"
            display={'flex'}
            gap={'2px'}
            style={{ whiteSpace: 'nowrap' }}
          >
            {value.sale.toLocaleString()} <img src={icontext} alt="" width={22} />
          </Typography>
        ),
      },
      {
        id: 'flashSale',
        title: 'Giá Flash-Sale',
        dataIndex: 'flashSale',
        render: (_text: any, value: any) => (
          <Typography
            color="textSecondary"
            variant="subtitle2"
            display={'flex'}
            gap={'2px'}
            style={{ whiteSpace: 'nowrap' }}
          >
            {value.flashSale.toLocaleString()} <img src={icontext} alt="" width={22} />
          </Typography>
        ),
      },
      {
        id: 'buy',
        title: 'Số lượt mua',
        dataIndex: 'buy',
        render: (_text: any, value: any) => (
          <Typography color="textSecondary" variant="subtitle2">
            {value.buy.toLocaleString()}
          </Typography>
        ),
      },
      {
        id: 'TypeVoucher',
        title: 'Doanh thu',
        dataIndex: 'TypeVoucher',
        render: (_text: any, value: any) => (
          <Typography
            color="textSecondary"
            variant="subtitle2"
            display={'flex'}
            gap={'2px'}
            style={{ whiteSpace: 'nowrap' }}
          >
            {value.TypeVoucher.toLocaleString()} <img src={icontext} alt="" width={22} />
          </Typography>
        ),
      },
      {
        id: 'status',
        title: 'Trạng thái',
        dataIndex: 'status',
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
  const [selectedItems] = useState<number[]>([]);
  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };
  // const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataRows3.length) : 0;
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
              <Grid item >
                <IconButton
                  color="primary"
                  aria-label="Add to cart"
                // onClick={() => setOpen(true)}

                >
                  <AddCircleIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </Grid>
              <Grid item >
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
              <Badge badgeContent={selectedItems.length} color="primary">
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

          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(props) => (
                    <CustomTextField
                      {...props}
                      fullWidth
                      size="small"
                      sx={{
                        '& .MuiSvgIcon-root': {
                          width: '18px',
                          height: '18px',
                        },
                        '& .MuiFormHelperText-root': {
                          display: 'none',
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
              tới
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={value1}
                  onChange={(newValue) => {
                    setValue1(newValue);
                  }}
                  renderInput={(props) => (
                    <CustomTextField
                      {...props}
                      fullWidth
                      size="small"
                      sx={{
                        '& .MuiSvgIcon-root': {
                          width: '18px',
                          height: '18px',
                        },
                        '& .MuiFormHelperText-root': {
                          display: 'none',
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <BlankCard>
          <CustomTable columns={column} dataSource={dataRows3} dataSelect={dataSelect} />
        </BlankCard>
      </Grid>
    </div>
  );
};

export default FlashSale;
