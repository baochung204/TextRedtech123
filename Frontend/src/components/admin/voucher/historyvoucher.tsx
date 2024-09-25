import {
  Box,
  Chip,
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
import CustomTable from 'src/components/ComponentTables/CustomTable';
interface DataRow2 {
  id: string;
  creationTime: string;
  voucherName: string;
  startTime: string;
  user: string;
  email: string;
  phone: string;
  expiry: string;
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
    expiry: '09/05/2024 10:45:00',
    TypeVoucher: 'phân trăm',
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
    expiry: '09/03/2024 10:45:00',
    TypeVoucher: 'đồng',
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
    expiry: '09/03/2024 10:45:00',
    TypeVoucher: 'phân trăm',
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
    expiry: '09/03/2024 10:45:00',
    TypeVoucher: 'đồng',
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
    expiry: '10/03/2025 00:45:00',
    TypeVoucher: 'phân trăm',
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
    expiry: '09/03/2025 10:45:00',
    TypeVoucher: 'phân trăm',
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
const headCells2: any = [
  {
    id: 'id',
    title: 'ID',
    dataIndex: 'id',
  },
  {
    id: 'creationTime',
    title: 'Ngày áp mã',
    dataIndex: 'creationTime',
  },
  {
    id: 'user',
    title: 'Khách hàng',
    dataIndex: 'user',
  },
  {
    id: 'email',
    title: 'Email',
    dataIndex: 'email',
  },
  {
    id: 'phone',
    title: 'Số điện thoại',
    dataIndex: 'phone',
  },
  {
    id: 'voucherName',
    title: 'Tên chiến dịch',
    dataIndex: 'voucherName',
  },
  {
    id: 'startTime',
    title: 'Ngày tạo',
    dataIndex: 'startTime',
  },
  {
    id: 'expiry',
    title: 'Hạn sửa dụng',
    dataIndex: 'expiry',
  },
  {
    id: 'TypeVoucher',
    title: 'Loại giảm giá',
    dataIndex: 'TypeVoucher',
    render: (value: any) => {
      return (
        <Chip
          label={value}
          sx={{
            color: 'white',
            backgroundColor: value === 'phân trăm' ? 'success.main' : 'error.main',
          }}
        />
      );
    },
  },
  {
    id: 'sale',
    title: 'Giá trị giảm',
    dataIndex: 'sale',
  },
  {
    id: 'ID_order',
    title: 'ID đơn hàng',
    dataIndex: 'ID_order',
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
          <Grid item xs={12} my={3}>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid item xs={4} sm={4} md={4}>
                <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item xs={10}>
                    <TextField
                      id="outlined-search"
                      placeholder="Tìm kiếm lịch sử"
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
          <CustomTable columns={headCells2} dataSource={dataRows2} />
        </BlankCard>
      </Grid>
    </div>
  );
};

export default HistoryVoucher;
