import {
  Box,
  Button,
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
// components
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import { styled } from '@mui/system';
const BoxStyled = styled(Box)(() => ({
  padding: '24px',
  transition: '0.1s ease-in',
  cursor: 'pointer',
  color: 'inherit',
  // '&:hover': {
  //   transform: 'scale(1.03)',
  // },
}));
import { format } from 'date-fns';
import { Dayjs } from 'dayjs';
import icontext from 'src/assets/images/logos/R-Point.png';
import BlankCard from 'src/components/shared/BlankCard';
import { useState } from 'react';
import { EnhancedTableData, EnTableType } from 'src/components/tables/tableData';
import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import { IconSearch } from '@tabler/icons-react';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
const BCrumb = [
  {
    to: '/',
    title: 'ADMIN',
  },
  {
    title: 'TICKET',
  },
  {
    title: 'QUẢN LÝ TICKET ',
  },
];
interface StyleProps {
  bgColor: string;
  color: string;
  title: string;
  total: string;
  icons: string;
}

const DataBox: StyleProps[] = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Ticket',
    total: '2.326',
    // icons: (
    //   <PeopleAltIcon
    //     sx={{
    //       fontSize: 40,
    //     }}
    //   />
    // ),
    icons: icontext,
  },
  {
    bgColor: 'secondary.light',
    color: 'secondary.main',
    title: 'Khách hàng',
    total: '1.369',
    icons: icontext,
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Đáng giá',
    total: '4.7/5',
    icons: icontext,
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Chưa xử lý',
    total: '236',
    icons: icontext,
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
interface DataRow {
  idTicket: string;
  creationTime: string;
  interaction: string;
  rating: number;
  status: number;
  title: string;
  customerId: string;
  customerName: string;
  email: string;
  phoneNumber: string;
}
const dataRows: DataRow[] = [
  {
    idTicket: 'TCK001',
    creationTime: '2024-09-01 08:30',
    interaction: 'Nhận yêu cầu',
    rating: 4,
    status: 1,
    title: 'Lỗi sản phẩm',
    customerId: 'CUS001',
    customerName: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phoneNumber: '0123456789',
  },
  {
    idTicket: 'TCK002',
    creationTime: '2024-09-02 09:15',
    interaction: 'Gửi phản hồi',
    rating: 5,
    status: 2,
    title: 'Yêu cầu hỗ trợ kỹ thuật',
    customerId: 'CUS002',
    customerName: 'Trần Thị B',
    email: 'tranthib@example.com',
    phoneNumber: '0987654321',
  },
  {
    idTicket: 'TCK003',
    creationTime: '2024-09-03 10:45',
    interaction: 'Gọi điện',
    rating: 3,
    status: 2,
    title: 'Vấn đề thanh toán',
    customerId: 'CUS003',
    customerName: 'Lê Văn C',
    email: 'levanc@example.com',
    phoneNumber: '0123987654',
  },
  {
    idTicket: 'TCK004',
    creationTime: '2024-09-04 11:20',
    interaction: 'Nhận yêu cầu',
    rating: 2,
    status: 2,
    title: 'Sản phẩm bị lỗi',
    customerId: 'CUS004',
    customerName: 'Hoàng Thị D',
    email: 'hoangthid@example.com',
    phoneNumber: '0234567890',
  },
  {
    idTicket: 'TCK005',
    creationTime: '2024-09-05 14:05',
    interaction: 'Gửi phản hồi',
    rating: 4,
    status: 1,
    title: 'Yêu cầu đổi hàng',
    customerId: 'CUS005',
    customerName: 'Phạm Văn E',
    email: 'phamvane@example.com',
    phoneNumber: '0345678901',
  },
  {
    idTicket: 'TCK006',
    creationTime: '2024-09-06 15:30',
    interaction: 'Gọi điện',
    rating: 5,
    status: 1,
    title: 'Vấn đề bảo hành',
    customerId: 'CUS006',
    customerName: 'Ngô Thị F',
    email: 'ngothif@example.com',
    phoneNumber: '0456789012',
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
    id: 'idTicket',
    numeric: false,
    disablePadding: false,
    label: 'ID Ticket',
  },
  {
    id: 'creationTime',
    numeric: false,
    disablePadding: false,
    label: 'Thời gian tạo',
  },
  {
    id: 'interaction',
    numeric: false,
    disablePadding: false,
    label: 'Tương tác gần đây',
  },
  {
    id: 'rating',
    numeric: false,
    disablePadding: false,
    label: 'Đánh giá',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Trạng thái',
  },
  {
    id: 'title',
    numeric: false,
    disablePadding: false,
    label: 'Tiêu đề',
  },
  {
    id: 'customerId',
    numeric: false,
    disablePadding: false,
    label: 'ID Khách hàng',
  },
  {
    id: 'customerName',
    numeric: false,
    disablePadding: false,
    label: 'Tên Khách hàng',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'phoneNumber',
    numeric: false,
    disablePadding: false,
    label: 'Số điện thoại',
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
const getStatusTextAndColor = (status: any) => {
  switch (status) {
    case 1:
      return (
        <Typography color="#13DEB9" variant="subtitle2">
          Đã xử lý
        </Typography>
      );
    case 2:
      return (
        <Typography color="#ff9800" variant="subtitle2">
          Chưa xử lý
        </Typography>
      );

    default:
      return;
  }
};

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
const Ticket = () => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<any>('calories');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [dense] = useState(false);
  // const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof []) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataRows.length) : 0;
  return (
    <PageContainer title="Vertical Form" description="this is Vertical Form page">
      <BannerPage title="Thanh Toán" items={BCrumb} />
      <Grid container spacing={3}>
        {DataBox?.map((items: StyleProps, index: number) => (
          <Grid item lg={3} sm={6} xs={12} key={index}>
            <BoxStyled sx={{ backgroundColor: items.bgColor, color: items.color }}>
              <Grid container>
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <img src={items.icons} alt="" width={40} />
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h5">{items.title}</Typography>
                  <Typography variant="h3">{items.total}</Typography>
                </Grid>
              </Grid>
            </BoxStyled>
          </Grid>
        ))}
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
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 10 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={selectedStartDate}
                    onChange={setSelectedStartDate}
                    renderInput={(params) => (
                      <CustomTextField {...params} sx={{ marginRight: '10px' }} />
                    )}
                  />
                  <Typography sx={{ marginRight: '10px' }}>tới</Typography>
                  <DatePicker
                    value={selectedEndDate}
                    onChange={setSelectedEndDate}
                    renderInput={(params) => (
                      <CustomTextField {...params} sx={{ marginRight: '10px' }} />
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
                              <TableCell>
                                <Stack spacing={2} direction="row">
                                  <Box>
                                    <Typography color="textSecondary" variant="subtitle2">
                                      {row?.idTicket}
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
                              <TableCell>
                                <Stack spacing={2} direction="row">
                                  <Box>
                                    <Typography color="textSecondary" variant="subtitle2">
                                      {row?.interaction}
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
                                      sx={{ display: 'flex', gap: 0.5 }}
                                    >
                                      {row?.rating}/5
                                    </Typography>
                                  </Box>
                                </Stack>
                              </TableCell>
                              <TableCell>
                                <Stack spacing={2} direction="row">
                                  <Box>
                                    <Typography color="textSecondary" variant="subtitle2">
                                      {getStatusTextAndColor(row?.status)}
                                    </Typography>
                                  </Box>
                                </Stack>
                              </TableCell>
                              <TableCell sx={{ whiteSpace: 'nowrap' }}>
                                <Stack spacing={2} direction="row">
                                  <Box>
                                    <Typography color="textSecondary" variant="subtitle2">
                                      {row?.title}
                                    </Typography>
                                  </Box>
                                </Stack>
                              </TableCell>
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
                                      {row?.email}
                                    </Typography>
                                  </Box>
                                </Stack>
                              </TableCell>{' '}
                              <TableCell>
                                <Stack spacing={2} direction="row">
                                  <Box>
                                    <Typography color="textSecondary" variant="subtitle2">
                                      {row?.phoneNumber}
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
              />
            </Box>
          </BlankCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Ticket;
