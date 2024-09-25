import {
  Box,
  Grid,
  InputAdornment,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import s24 from 'src/assets/images/products/s24.jpg';
// components
// import { styled } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconSearch } from '@tabler/icons-react';
import React, { useState } from 'react';
import icontext from 'src/assets/images/logos/R-Point.png';

import s22 from 'src/assets/images/products/s22.jpg';
import s25 from 'src/assets/images/products/s23.jpg';
import s23 from 'src/assets/images/products/s25.jpg';
import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import CustomSwitch from 'src/components/forms/theme-elements/CustomSwitch';
import BlankCard from 'src/components/shared/BlankCard';
import AddDflashsale from './add/addflashsale';
import CustomTable from 'src/components/ComponentTables/CustomTable';

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
interface HeadCell3 {
  id: keyof DataRow3;
  label: string;
  dataIndex?: string;
}
const headCells3: any = [
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
    render: (text: any, value: any) => (
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
          <Typography style={{ fontSize: '12px', color: '#ccc' }}>{'MKT000' + value.id}</Typography>
        </Box>
      </Box>
    ),
  },
  {
    id: 'listed',
    title: 'Giá niêm yết',
    dataIndex: 'listed',
    render: (text: any, value: any) => (
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
    render: (text: any, value: any) => (
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
    render: (text: any, value: any) => (
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
    render: (text: any, value: any) => (
      <Typography color="textSecondary" variant="subtitle2">
        {value.buy.toLocaleString()}
      </Typography>
    ),
  },
  {
    id: 'TypeVoucher',
    title: 'Doanh thu',
    dataIndex: 'TypeVoucher',
    render: (text: any, value: any) => (
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
    render: (text: any, value: any) => (
      <Typography color="textSecondary" variant="subtitle2">
        <CustomSwitch color="primary" defaultChecked={value.status ? true : false} />
      </Typography>
    ),
  },
];
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
interface EnhancedTableProps {
  numSelected: number;
  order: 'asc' | 'desc';
  orderBy: string;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  rowCount: number;
}

const FlashSale = () => {
  type Order = 'asc' | 'desc';

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<any>('calories');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [dense] = useState(false);
  // const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [value, setValue] = React.useState(0);
  const handleClick = (_event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleRequestSort = (_event: React.MouseEvent<unknown>, property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = dataRows3.map((n: any) => n.name);
      setSelected(newSelecteds);

      return;
    }
    setSelected([]);
  };
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataRows3.length) : 0;
  return (
    <div>
      {' '}
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} my={3}>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid item xs={4} sm={4} md={4}>
                <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title="Thêm thông báo mới" sx={{ mb: '15px' }}>
                      <AddDflashsale />
                    </Tooltip>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      id="outlined-search"
                      placeholder="Tìm kiếm Flash-Sale"
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

              <Grid item xs={5}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={selectedStartDate}
                      onChange={setSelectedStartDate}
                      renderInput={(params: any) => <TextField {...params} />}
                    />
                    <Typography>tới</Typography>
                    <DatePicker
                      value={selectedEndDate}
                      onChange={setSelectedEndDate}
                      renderInput={(params: any) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <BlankCard>
          <CustomTable columns={headCells3} dataSource={dataRows3} />
        </BlankCard>
      </Grid>
    </div>
  );
};

export default FlashSale;
