/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { format } from 'date-fns';
import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import { EnhancedTableData, EnTableType } from 'src/components/tables/tableData';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import BlankCard from '../../components/shared/BlankCard';

const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },
  { to: '/buy/point', title: 'Quy đổi ngân lượng' },
  { title: 'Lịch sử quy đổi ' },
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
const rows: EnTableType[] = EnhancedTableData;

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
  id: any;
  label: string;
  numeric: boolean;
}
const headCells: HeadCell[] = [
  {
    id: 'createdAt',
    numeric: false,
    disablePadding: false,
    label: 'Thời gian tạo',
  },
  {
    id: 'completedAt',
    numeric: false,
    disablePadding: false,
    label: 'Thời gian hoàn tất',
  },
  {
    id: 'requestId',
    numeric: false,
    disablePadding: false,
    label: 'ID Yêu cầu',
  },
  {
    id: 'paymentMethod',
    numeric: false,
    disablePadding: false,
    label: 'Phương thức thanh toán',
  },
  {
    id: 'amount',
    numeric: false,
    disablePadding: false,
    label: 'Số tiền',
  },
  {
    id: 'numberPrice',
    numeric: false,
    disablePadding: false,
    label: 'Thanh toán',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Trạng thái',
  },
  {
    id: 'invoice',
    numeric: false,
    disablePadding: false,
    label: 'Hóa đơn',
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
          Thanh toán
        </Typography>
      );
    case 2:
      return (
        <Typography color="#ff9800" variant="subtitle2">
          Chờ xử lý
        </Typography>
      );
    case 3:
      return (
        <Typography color="#f44336" variant="subtitle2">
          Chưa thanh toán
        </Typography>
      );
    default:
      return;
  }
};
const getInvoiceTextAndColor = (status: any) => {
  switch (status) {
    case 1:
      return <Button color="success">Tải về</Button>;
    case 2:
      return <Typography color="#ff9800">Chờ xử lý</Typography>;
    case 3:
      return <Typography color="#f44336"> Chưa thanh toán</Typography>;
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
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography variant="subtitle1" fontWeight="700">
                {headCell.label}
              </Typography>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const HistoryBuyService = () => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<any>('calories');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof []) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
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

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <PageContainer title="Enhanced Table" description="this is Enhanced Table page">
      {/* breadcrumb */}
      <Breadcrumb title="Lịch sử quy đổi ngân lượng" items={BCrumb} />

      <BlankCard>
        <Box mb={2} sx={{ mb: 2 }}>
          <TableContainer>
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
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any) => {
                    // const isItemSelected = isSelected(row.name);
                    // const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        // aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        // selected={isItemSelected}
                      >
                        <TableCell>
                          <Stack spacing={2} direction="row">
                            <Box>
                              <Typography color="textSecondary" variant="subtitle2">
                                {format(new Date(row.createdAt), 'MM/dd/yyyy HH:mm:ss')}
                              </Typography>
                            </Box>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Stack spacing={2} direction="row">
                            <Box>
                              <Typography color="textSecondary" variant="subtitle2">
                                {format(new Date(row.completedAt), 'MM/dd/yyyy HH:mm:ss')}
                              </Typography>
                            </Box>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Stack spacing={2} direction="row">
                            <Box>
                              <Typography color="textSecondary" variant="subtitle2">
                                {row.requestId}
                              </Typography>
                            </Box>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Stack spacing={2} direction="row">
                            <Box>
                              <Typography color="textSecondary" variant="subtitle2">
                                {row.paymentMethod}
                              </Typography>
                            </Box>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Stack spacing={2} direction="row">
                            <Box>
                              <Typography color="textSecondary" variant="subtitle2">
                                {row.numberPrice}
                              </Typography>
                            </Box>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Stack spacing={2} direction="row">
                            <Box>
                              <Typography color="textSecondary" variant="subtitle2">
                                {row.amount}
                              </Typography>
                            </Box>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Stack spacing={2} direction="row">
                            <Box>{getStatusTextAndColor(row.status)}</Box>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Stack spacing={2} direction="row">
                            <Box>{getInvoiceTextAndColor(row.invoice)}</Box>
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
              {/* <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <CustomCheckbox
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Stack spacing={2} direction="row">
                            <Avatar
                              alt="text"
                              src={row.imgsrc}
                              sx={{
                                width: '35px',
                                height: '35px',
                              }}
                            />
                            <Box>
                              <Typography variant="h6" fontWeight="600">
                                {row.name}
                              </Typography>
                              <Typography color="textSecondary" variant="subtitle2">
                                {row.email}
                              </Typography>
                            </Box>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                            {row.pname}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Stack direction="row">
                            <AvatarGroup>
                              {row.teams.map((team: any) => (
                                <Avatar
                                  key={team.id}
                                  sx={{
                                    width: '35px',
                                    height: '35px',
                                    bgcolor: team.color,
                                  }}
                                >
                                  {team.text}
                                </Avatar>
                              ))}
                            </AvatarGroup>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Stack spacing={1} direction="row" alignItems="center">
                            <Badge
                              color={
                                row.status === 'Active'
                                  ? 'success'
                                  : row.status === 'Pending'
                                  ? 'warning'
                                  : row.status === 'Completed'
                                  ? 'primary'
                                  : row.status === 'Cancel'
                                  ? 'error'
                                  : 'secondary'
                              }
                              variant="dot"
                            ></Badge>
                            <Typography color="textSecondary" variant="body1">
                              {row.status}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Typography color="textSecondary" variant="body1">
                            {row.weeks}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h6">${row.budget}k</Typography>
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
              </TableBody> */}
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </BlankCard>
    </PageContainer>
  );
};

export default HistoryBuyService;
