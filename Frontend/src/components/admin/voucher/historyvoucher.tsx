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
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
// components
// import { styled } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconSearch } from '@tabler/icons-react';
import React, { useState } from 'react';

import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import BlankCard from 'src/components/shared/BlankCard';
interface DataRow2 {
  id: string;
  creationTime: string;
  voucherName: string;
  startTime: string;
  user: string;
  email: string;
  phone: string;
  expiry: number;
  TypeVoucher: string;
  sale: number;
  ID_order: string;
}
const dataRows2: DataRow2[] = [
  {
    id: 'MA001',
    creationTime: '2024-09-01 08:30',
    voucherName: 'Sản phẩm mới',
    startTime: '2024-09-03 10:45',
    user: 'Nguyễn văn Toản',
    email: 'toan2ho@gmail.com',
    phone: '08686759866',
    expiry: 90,
    TypeVoucher: '%',
    sale: 23,
    ID_order: '#09341341',
  },
  {
    id: 'MA002',
    creationTime: '2024-09-02 09:15',
    voucherName: 'Mã giảm giá',
    startTime: '2025-10-12 00:23',
    user: 'Trần Văn B',
    email: 'tranb@gmail.com',
    phone: '0987654321',
    expiry: 60,
    TypeVoucher: 'đ',
    sale: 99,
    ID_order: '#09341342',
  },
  {
    id: 'MA003',
    creationTime: '2024-09-03 10:45',
    voucherName: 'khách hàng thân thiết',
    startTime: '2024-09-03 10:45',
    user: 'Lê Thị C',
    email: 'lec@gmail.com',
    phone: '0912345678',
    expiry: 30,
    TypeVoucher: '%',
    sale: 10,
    ID_order: '#09341343',
  },
  {
    id: 'MA004',
    creationTime: '2024-09-04 11:20',
    voucherName: 'mini-game',
    startTime: '2024-09-03 10:45',
    user: 'Phạm Văn D',
    email: 'phamd@gmail.com',
    phone: '0901234567',
    expiry: 45,
    TypeVoucher: 'đ',
    sale: 100,
    ID_order: '#09341344',
  },
  {
    id: 'MA005',
    creationTime: '2024-09-05 14:05',
    voucherName: 'sự kiện',
    startTime: '2024-09-03 10:45',
    user: 'Nguyễn Thị E',
    email: 'nguyene@gmail.com',
    phone: '0897654321',
    expiry: 20,
    TypeVoucher: '%',
    sale: 20,
    ID_order: '#09341345',
  },
  {
    id: 'MA006',
    creationTime: '2024-09-06 15:30',
    voucherName: 'khách hàng thân thiết',
    startTime: '2024-09-03 10:45',
    user: 'Trần Thị F',
    email: 'tranf@gmail.com',
    phone: '0887654321',
    expiry: 10,
    TypeVoucher: '%',
    sale: 10,
    ID_order: '#09341346',
  },
];
interface HeadCell2 {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}
const headCells2: HeadCell2[] = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: 'ID',
  },

  {
    id: 'creationTime',
    numeric: false,
    disablePadding: false,
    label: 'Ngày áp mã',
  },
  {
    id: 'user',
    numeric: false,
    disablePadding: false,
    label: 'Khách hàng',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: 'Số điện thoại',
  },
  {
    id: 'voucherName',
    numeric: false,
    disablePadding: false,
    label: 'Tên chiến dịch',
  },
  {
    id: 'startTime',
    numeric: false,
    disablePadding: false,
    label: 'Ngày tạo',
  },
  {
    id: 'expiry',
    numeric: false,
    disablePadding: false,
    label: 'Hạn sửa dụng',
  },
  {
    id: 'TypeVoucher',
    numeric: false,
    disablePadding: false,
    label: 'Loại giảm giá ',
  },
  {
    id: 'sale',
    numeric: false,
    disablePadding: false,
    label: 'Giá trị giảm',
  },
  {
    id: 'ID_order',
    numeric: false,
    disablePadding: false,
    label: 'ID đơn hàng',
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

function EnhancedTableHead2(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof DataRow2) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead sx={{ overflowX: 'auto', width: '100%' }}>
      <TableRow>
        {headCells2.map((headCell: any) => (
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

function stableSort2<T>(array: any[], comparator: (a: T, b: T) => number) {
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

const HistoryVoucher = () => {
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
      const newSelecteds = dataRows2.map((n: any) => n.name);
      setSelected(newSelecteds);

      return;
    }
    setSelected([]);
  };
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataRows2.length) : 0;
  return (
    <div>
      {' '}
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
              }}
            >
              {' '}
              {/* <AddDialogvoucher /> */}
              {/* Action Buttons and Filters */}
              <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 5 }}>
                {/* Add Order Button */}
                {/* <Tooltip title="Tạo đơn hàng">
      <Fab
        color="primary"
        aria-label="add"
        size="small"
        sx={{ marginRight: '30px' }}
        onClick={handleOpenPopup}
      >
        <FaPlus />
      </Fab>
    </Tooltip> */}

                {/* Search Bar */}
                <TextField
                  sx={{
                    width: '300px',
                    height: '40px',
                    marginRight: '40px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                      backgroundColor: '#fff',
                      '&:hover fieldset': {
                        borderColor: '#3f51b5',
                      },
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconSearch size="1.1rem" />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Tìm kiếm "
                  size="small"
                />

                {/* Column Filter and Sort */}
                {/* <CustomSelect
      labelId="column-filter"
      id="column-filter"
      size="small"
      value={1}
      sx={{ marginRight: '30px' }}
    >
      <MenuItem value={1}>Sửa đổi cột</MenuItem>
    </CustomSelect>

    <CustomSelect
      labelId="column-sort"
      id="column-sort"
      size="small"
      value={1}
      sx={{ marginRight: '20px' }}
    >
      <MenuItem value={1}>Bộ lọc</MenuItem>
    </CustomSelect> */}
              </Box>
              {/* Time Filter and Refresh Icon */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={selectedStartDate}
                    onChange={setSelectedStartDate}
                    renderInput={(params: any) => (
                      <TextField {...params} sx={{ marginRight: '10px' }} />
                    )}
                  />
                  <Typography sx={{ marginRight: '10px' }}>tới</Typography>
                  <DatePicker
                    value={selectedEndDate}
                    onChange={setSelectedEndDate}
                    renderInput={(params: any) => (
                      <TextField {...params} sx={{ marginRight: '10px' }} />
                    )}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
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
                  <EnhancedTableHead2
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={dataRows2.length}
                  />
                  <TableBody>
                    {stableSort2(dataRows2, getComparator(order, orderBy))
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
                                    {format(new Date(row?.creationTime), 'MM/dd/yyyy HH:mm:ss')}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="textSecondary" variant="subtitle2">
                                    {row?.user}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>
                            {/* Tương tác (interaction) */}
                            {/* Đánh giá (endTime) */}{' '}
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="textSecondary" variant="subtitle2">
                                    {row?.email}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>{' '}
                            <TableCell sx={{ whiteSpace: 'nowrap' }}>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="textSecondary" variant="subtitle2">
                                    {row?.phone}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>{' '}
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
                                    {format(new Date(row?.startTime), 'MM/dd/yyyy HH:mm:ss')}
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
                                    {row?.expiry}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>{' '}
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="textSecondary" variant="subtitle2">
                                    {row?.TypeVoucher}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>{' '}
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="textSecondary" variant="subtitle2">
                                    {row?.sale}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>{' '}
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="textSecondary" variant="subtitle2">
                                    {row?.ID_order}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>
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
              count={dataRows2.length}
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

export default HistoryVoucher;
