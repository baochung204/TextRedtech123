import {
  Box,
  Chip,
  Grid,
  InputAdornment,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
// components
import { DatePicker, LocalizationProvider } from '@mui/lab';
import { styled } from '@mui/system';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconSearch } from '@tabler/icons-react';
import { format } from 'date-fns';
import React, { useState } from 'react';
import icontext from 'src/assets/images/logos/R-Point.png';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PageContainer from 'src/components/container/PageContainer';
import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import BlankCard from 'src/components/shared/BlankCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TopCard from 'src/components/widgets/cards/TopCard';
const BoxStyled = styled(Box)(() => ({
  padding: '24px',
  transition: '0.1s ease-in',
  cursor: 'pointer',
  color: 'inherit',
  // '&:hover': {
  //   transform: 'scale(1.03)',
  // },
}));
const BCrumb = [
  {
    to: '/',
    title: 'Quản trị ',
  },
  { to: '/admin/personnel', title: 'Danh sách mã khuyến mãi' },
];

const DataBox = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Mã khuyến mãi',
    total: '620',
    icons: (
      <ConfirmationNumberIcon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Số lượng mã',
    total: '3.455',
    icons: (
      <ConfirmationNumberIcon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Đã sử sử dụng',
    total: '3.931',
    icons: (
      <ConfirmationNumberIcon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Tỉ lệ sử dụng',
    total: '34.2%',
    icons: (
      <ConfirmationNumberIcon
        sx={{
          fontSize: 40,
        }}
      />
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
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
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
    customerId: 'đ',
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
    customerId: 'đ',
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
    customerId: '%',
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
    customerId: 'đ',
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
    customerId: '%',
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
    customerId: '%',
    customerName: '10%',
    tag: 'đã sử dụng',
    use: 23,
  },
];

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
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
interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof []) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
function CustomTabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof []) => (event: React.MouseEvent<unknown>) => {
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
const VoucherAdmin = () => {
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

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleRequestSort = (_event: React.MouseEvent<unknown>, property: keyof []) => {
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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
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

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // const [value, setValue] = useState(0);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataRows.length) : 0;
  return (
    <PageContainer title="Vertical Form" description="this is Vertical Form page">
      <BannerPage title="Mã khuyến mãi" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={DataBox} />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Typography variant="h5">Danh sách ticket</Typography>
          </Box>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: 'auto' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{ padding: '0px 50px' }}
            >
              <Tab label="Danh sách mã khuyến mãi" {...a11yProps(0)} />
              <Tab label="Lịch sử Áp mã" {...a11yProps(1)} />
              <Tab label="Flash-Sale" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Grid item xs={12}>
              <Grid container>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <TextField
                    id="outlined-search"
                    placeholder="Tìm kiếm ticket"
                    size="small"
                    type="search"
                    variant="outlined"
                    inputProps={{ 'aria-label': 'Search Followers' }}
                    sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconSearch size="18" />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: '500px' }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        value={selectedStartDate}
                        onChange={(newDate: any) => setSelectedStartDate(newDate)}
                        renderInput={(params: any) => (
                          <CustomTextField
                            {...params}
                            sx={{ marginRight: '10px', maxWidth: '170px' }}
                          />
                        )}
                      />
                      <Typography sx={{ marginRight: '10px' }}>tới</Typography>
                      <DatePicker
                        value={selectedEndDate}
                        onChange={(newDate: any) => setSelectedEndDate(newDate)}
                        renderInput={(params: any) => (
                          <CustomTextField
                            {...params}
                            sx={{ marginRight: '10px', maxWidth: '170px' }}
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
                <Box mb={2} sx={{ mb: 2 }}>
                  <TableContainer>
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
                                          {format(
                                            new Date(row?.creationTime),
                                            'MM/dd/yyyy HH:mm:ss',
                                          )}
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
                                        <Typography color="textSecondary" variant="subtitle2">
                                          {row?.customerId}
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
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Grid item xs={12}>
              <Grid container>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <TextField
                    id="outlined-search"
                    placeholder="Tìm kiếm ticket"
                    size="small"
                    type="search"
                    variant="outlined"
                    inputProps={{ 'aria-label': 'Search Followers' }}
                    sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconSearch size="18" />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: '500px' }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        value={selectedStartDate}
                        onChange={(newDate: any) => setSelectedStartDate(newDate)}
                        renderInput={(params: any) => (
                          <CustomTextField
                            {...params}
                            sx={{ marginRight: '10px', maxWidth: '170px' }}
                          />
                        )}
                      />
                      <Typography sx={{ marginRight: '10px' }}>tới</Typography>
                      <DatePicker
                        value={selectedEndDate}
                        onChange={(newDate: any) => setSelectedEndDate(newDate)}
                        renderInput={(params: any) => (
                          <CustomTextField
                            {...params}
                            sx={{ marginRight: '10px', maxWidth: '170px' }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
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
                                          {row?.idTicket}
                                        </Typography>
                                      </Box>
                                    </Stack>
                                  </TableCell>
                                  {/* Thời gian tạo (creationTime) */}
                                  <TableCell>
                                    <Stack spacing={2} direction="row">
                                      <Box>
                                        <Typography color="textSecondary" variant="subtitle2">
                                          {format(
                                            new Date(row?.creationTime),
                                            'MM/dd/yyyy HH:mm:ss',
                                          )}
                                        </Typography>
                                      </Box>
                                    </Stack>
                                  </TableCell>
                                  {/* Tương tác (interaction) */}
                                  <TableCell>
                                    <Stack spacing={2} direction="row">
                                      <Box>
                                        <Typography color="textSecondary" variant="subtitle2">
                                          {row?.interaction}
                                        </Typography>
                                      </Box>
                                    </Stack>
                                  </TableCell>
                                  {/* Đánh giá (endTime) */}
                                  <TableCell>
                                    <Stack spacing={2} direction="row">
                                      <Box>
                                        <Typography
                                          color="textSecondary"
                                          variant="subtitle2"
                                          sx={{ display: 'flex', gap: 0.5 }}
                                        >
                                          {row?.endTime}/5
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
                                        <Typography color="textSecondary" variant="subtitle2">
                                          {row?.customerId}
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
                                        <Typography color="textSecondary" variant="subtitle2">
                                          {row?.tag}
                                        </Typography>
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
          </CustomTabPanel>{' '}
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default VoucherAdmin;
