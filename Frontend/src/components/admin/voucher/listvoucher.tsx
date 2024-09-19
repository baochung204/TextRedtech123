import {
  Box,
  Chip,
  Fab,
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
import { format } from 'date-fns';
// components
// import { styled } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import React, { useState } from 'react';

import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import BlankCard from 'src/components/shared/BlankCard';
import AddDialogvoucher from './add/addDialog';
import { FaPlus } from 'react-icons/fa';
interface DataRow {
  id: string;
  creationTime: string;
  voucherName: string;
  endTime: string;
  Mavoucher: string;
  quantity: number;
  customerId: string;
  customerName: string;
  tag: string;
  use: number;
}

const dataRows: DataRow[] = [
  {
    id: 'MA001',
    creationTime: '2024-09-01 08:30',
    voucherName: 'Sản phẩm mới',
    endTime: '2024-09-03 10:45',
    Mavoucher: 'JDEwJG5zZ3J1c2',
    quantity: 234,
    customerId: 'Đồng',
    customerName: '19.000 đ',
    tag: 'chưa sử dụng',
    use: 23,
  },
  {
    id: 'MA002',
    creationTime: '2024-09-02 09:15',
    voucherName: 'Mã giảm giá',
    endTime: '2025-10-12 00:23',
    Mavoucher: 'DFG3554F3TT4F',
    quantity: 680,
    customerId: 'Đồng',
    customerName: '99.000 đ',
    tag: 'đã sử dụng',
    use: 41,
  },
  {
    id: 'MA003',
    creationTime: '2024-09-03 10:45',
    voucherName: 'khách hàng thân thiết',
    endTime: '2024-09-03 10:45',
    Mavoucher: 'DG335534TTGGE',
    quantity: 32,
    customerId: 'Phần trăm',
    customerName: '10%',
    tag: 'quá hạn',
    use: 21,
  },
  {
    id: 'MA004',
    creationTime: '2024-09-04 11:20',
    voucherName: 'mini-game',
    endTime: '2024-09-03 10:45',
    Mavoucher: '44FV43TG4V34G',
    quantity: 54,
    customerId: 'Phần trăm',
    customerName: '100.000đ',
    tag: 'đã sử dụng',
    use: 3,
  },
  {
    id: 'MA005',
    creationTime: '2024-09-05 14:05',
    voucherName: ' sự kiện',
    endTime: '2024-09-03 10:45',
    Mavoucher: 'DGH34T53167D5',
    quantity: 23,
    customerId: 'Phần trăm',
    customerName: '20%',
    tag: 'quá hạn',
    use: 7,
  },
  {
    id: 'MA006',
    creationTime: '2024-09-06 15:30',
    voucherName: 'khách hàng thân thiết',
    endTime: '2024-09-03 10:45',
    Mavoucher: 'RH56YH563226TYB',
    quantity: 424,
    customerId: 'Phần trăm',
    customerName: '10%',
    tag: 'đã sử dụng',
    use: 23,
  },
];
interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}

const headCells: HeadCell[] = [
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
    id: 'creationTime',
    numeric: false,
    disablePadding: false,
    label: 'Ngày tạo',
  },
  {
    id: 'endTime',
    numeric: false,
    disablePadding: false,
    label: 'Hạn sửa dụng',
  },
  {
    id: 'Mavoucher',
    numeric: false,
    disablePadding: false,
    label: 'Mã khuyến mãi',
  },
  {
    id: 'quantity',
    numeric: false,
    disablePadding: false,
    label: 'Số lượng mã',
  },
  {
    id: 'customerId',
    numeric: false,
    disablePadding: false,
    label: 'Loại giảm giá',
  },
  {
    id: 'customerName',
    numeric: false,
    disablePadding: false,
    label: 'Giá trị giảm',
  },
  {
    id: 'tag',
    numeric: false,
    disablePadding: false,
    label: 'Trạng thái',
  },
  {
    id: 'use',
    numeric: false,
    disablePadding: false,
    label: 'Đã sử dụng',
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

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof DataRow) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead sx={{ overflowX: 'auto', width: '100%' }}>
      <TableRow>
        {headCells.map((headCell: any) => (
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

function stableSort<T>(array: any[], comparator: (a: T, b: T) => number) {
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

const ListVoucher = () => {
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
      const newSelecteds = dataRows.map((n: any) => n.name);
      setSelected(newSelecteds);

      return;
    }
    setSelected([]);
  };
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataRows.length) : 0;
  return (
    <div>
      {' '}
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} my={2}>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid item xs={4} sm={4} md={4}>
                <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title="Thêm thông báo mới" sx={{ mb: '15px' }}>
                      <Fab size="small" color="secondary" aria-label="plus" sx={{ my: 'auto' }}>
                        <IconPlus width={18} />
                      </Fab>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={10}>
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
            <TableContainer sx={{ p: 2 }}>
              <Scrollbar_x>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={dense ? 'small' : 'medium'}
                >
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={dataRows.length}
                  />
                  <TableBody>
                    {stableSort(dataRows, getComparator(order, orderBy))
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row: any) => {
                        return (
                          <TableRow
                            hover
                            onClick={(event) => handleClick(event, row.name)}
                            role="checkbox"
                            tabIndex={-1}
                            key={row.idTicket}
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
                            {/* Thời gian tạo (creationTime) */}
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
                                    {format(new Date(row?.creationTime), 'MM/dd/yyyy HH:mm:ss')}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>
                            {/* Tương tác (interaction) */}
                            {/* Đánh giá (endTime) */}
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="textSecondary" variant="subtitle2">
                                    {format(new Date(row?.endTime), 'MM/dd/yyyy HH:mm:ss')}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>
                            {/* Trạng thái (Mavoucher) */}
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="textSecondary" variant="subtitle2">
                                    {row?.Mavoucher}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>
                            <TableCell sx={{ whiteSpace: 'nowrap' }}>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="textSecondary" variant="subtitle2">
                                    {row?.quantity}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>
                            {/* Thông tin khách hàng (customerName) */}
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="" variant="subtitle2">
                                    <Chip
                                      label={row?.customerId}
                                      sx={{
                                        bgcolor:
                                          row?.customerId === 'Đồng'
                                            ? 'primary.main'
                                            : 'secondary.main',
                                        color: row?.customerId === 'Đồng' ? 'white' : 'white',
                                      }}
                                      key={row?.customerId}
                                      size="small"
                                    />
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="textSecondary" variant="subtitle2">
                                    {row?.customerName}
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>{' '}
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Chip
                                    color={
                                      row?.tag === 'đã sử dụng'
                                        ? 'success'
                                        : row.tag === 'chưa sử dụng'
                                        ? 'warning'
                                        : row.tag === 'quá hạn'
                                        ? 'error'
                                        : 'secondary'
                                    }
                                    sx={{
                                      borderRadius: '6px',
                                    }}
                                    size="small"
                                    label={row?.tag}
                                  />
                                </Box>
                              </Stack>
                            </TableCell>{' '}
                            <TableCell>
                              <Stack spacing={2} direction="row">
                                <Box>
                                  <Typography color="textSecondary" variant="subtitle2">
                                    {row?.use}
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
              count={dataRows.length}
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

export default ListVoucher;
