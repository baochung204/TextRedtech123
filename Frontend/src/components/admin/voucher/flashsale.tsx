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
  Typography
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
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}
const headCells3: HeadCell3[] = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: 'ID',
  },
  {
    id: 'voucherName',
    numeric: false,
    disablePadding: false,
    label: 'Tên chiến dịch',
  },
  {
    id: 'quantityFS',
    numeric: false,
    disablePadding: false,
    label: 'Số lượng FS',
  },
  {
    id: 'product',
    numeric: false,
    disablePadding: false,
    label: 'Sản phẩm',
  },

  {
    id: 'listed',
    numeric: false,
    disablePadding: false,
    label: 'Giá niêm yết',
  },
  {
    id: 'sale',
    numeric: false,
    disablePadding: false,
    label: 'Giảm giá',
  },

  {
    id: 'flashSale',
    numeric: false,
    disablePadding: false,
    label: 'Giá Flash-Sale',
  },
  {
    id: 'buy',
    numeric: false,
    disablePadding: false,
    label: 'Số lượt mua',
  },
  {
    id: 'TypeVoucher',
    numeric: false,
    disablePadding: false,
    label: 'Doanh thu',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Trạng thái',
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

function EnhancedTableHead3(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead sx={{ overflowX: 'auto', width: '100%' }}>
      <TableRow>
        {headCells3.map((headCell: any) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ whiteSpace: 'nowrap' }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography variant="h6">{headCell.label}</Typography>
              {/* {orderBy === headCell.id ? (
                  <Box component="span">
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null} */}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function stableSort3<T>(array: any[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }

    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
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
          <Box mb={2} sx={{ mb: 2 }}>
            <TableContainer>
              <Scrollbar_x>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={dense ? 'small' : 'medium'}
                >
                  <EnhancedTableHead3
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={dataRows3.length}
                  />
                  <TableBody>
                    {stableSort3(dataRows3, getComparator(order, orderBy))
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row: any) => {
                        return (
                          <TableRow
                            hover
                            onClick={(event) => handleClick(event, row.name)}
                            role="checkbox"
                            tabIndex={-1}
                            key={row.id}
                          >
                            {/* Mã vé (idTicket) */}
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="textSecondary" variant="subtitle2">
                                    {row?.id}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>
                            {/* Thời gian tạo (creationTime) */}{' '}
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="textSecondary" variant="subtitle2">
                                    {row?.voucherName}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="textSecondary" variant="subtitle2">
                                    {row?.quantityFS}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>
                            {/* Tương tác (interaction) */}
                            {/* Đánh giá (endTime) */}{' '}
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                {/* Avatar on the left */}
                                <img
                                  src={row.img}
                                  style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    marginRight: '10px',
                                  }}
                                />

                                <Box>
                                  <Typography variant="subtitle2">{row.product}</Typography>
                                  <Typography style={{ fontSize: '12px', color: '#ccc' }}>
                                    {'MKT000' + row.id}
                                  </Typography>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell sx={{ whiteSpace: 'nowrap' }}>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography
                                    color="textSecondary"
                                    variant="subtitle2"
                                    display={'flex'}
                                    gap={'2px'}
                                  >
                                    {(row?.listed).toLocaleString()}{' '}
                                    <img src={icontext} alt="" width={22} />
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>{' '}
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography
                                    color="textSecondary"
                                    variant="subtitle2"
                                    display={'flex'}
                                    gap={'2px'}
                                  >
                                    {row?.sale.toLocaleString()}{' '}
                                    <img src={icontext} alt="" width={22} />
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography
                                    color="textSecondary"
                                    variant="subtitle2"
                                    display={'flex'}
                                    gap={'2px'}
                                  >
                                    {row?.flashSale.toLocaleString()}{' '}
                                    <img src={icontext} alt="" width={22} />
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>
                            {/* Trạng thái (Mavoucher) */}
                            {/* Thông tin khách hàng (customerName) */}
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="textSecondary" variant="subtitle2">
                                    {row?.buy.toLocaleString()}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>{' '}
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography
                                    color="textSecondary"
                                    variant="subtitle2"
                                    display={'flex'}
                                    gap={'2px'}
                                  >
                                    {row?.TypeVoucher.toLocaleString()}{' '}
                                    <img src={icontext} alt="" width={22} />
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>{' '}
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="textSecondary" variant="subtitle2">
                                    <CustomSwitch
                                      color="primary"
                                      defaultChecked={row?.status ? true : false}
                                    />
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>{' '}
                          </TableRow>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </Scrollbar_x>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={dataRows3.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="Số hàng trên mỗi trang"
            />
          </Box>
        </BlankCard>
      </Grid>
    </div>
  );
};

export default FlashSale;
//Khai dan khai dan khai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai
//dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai
//dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai
//dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai
//dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai
//dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai
//dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai
//dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai
//dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai
//dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai
//dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai
//dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai
//dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai
//dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai dankhai 