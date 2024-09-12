import {
  Box,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
  Toolbar,
  Tooltip,
} from '@mui/material';
import { IconDotsVertical, IconSearch, IconTrash } from '@tabler/icons-react';
import { format } from 'date-fns';
import React, { useState } from 'react';

// Sample data
const orders = [
  {
    id: '001',
    createdAt: '2024-09-01',
    assistant: 'John Doe',
    orderValue: '$200',
    channel: 'Facebook',
    customerName: 'Ngô Quốc Toản',
    phone: '123456789',
    address: '123 Main St',
    email: 'example@example.com',
    orderInfo: 'Product X, Product Y',
    notes: 'Urgent delivery',
  },
  // Additional orders
  // ...
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

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
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

const headCells: readonly HeadCell[] = [
  { id: 'id', numeric: false, disablePadding: false, label: 'Order ID' },
  { id: 'createdAt', numeric: false, disablePadding: false, label: 'Date' },
  { id: 'assistant', numeric: false, disablePadding: false, label: 'Assistant' },
  { id: 'orderValue', numeric: false, disablePadding: false, label: 'Order Value' },
  { id: 'channel', numeric: false, disablePadding: false, label: 'Channel' },
  { id: 'customerName', numeric: false, disablePadding: false, label: 'Customer Name' },
  { id: 'phone', numeric: false, disablePadding: false, label: 'Phone' },
  { id: 'address', numeric: false, disablePadding: false, label: 'Address' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
  { id: 'orderInfo', numeric: false, disablePadding: false, label: 'Order Info' },
  { id: 'notes', numeric: false, disablePadding: false, label: 'Notes' },
  { id: 'action', numeric: false, disablePadding: false, label: 'Action' },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: any) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <input
            type="checkbox"
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
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
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={{ visibility: 'hidden' }}>
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

interface EnhancedTableToolbarProps {
  numSelected: number;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected, handleSearch, search } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        // ...(numSelected > 0 && {
        //   bgcolor: (theme) =>
        //     alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        // }),
      }}
    >
      <Box sx={{ flex: '1 1 100%' }}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconSearch size="1.1rem" />
              </InputAdornment>
            ),
          }}
          placeholder="Search Orders"
          size="small"
          onChange={handleSearch}
          value={search}
        />
      </Box>

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <IconTrash width="18" />
          </IconButton>
        </Tooltip>
      ) : null}
    </Toolbar>
  );
};

const OrderTableList = () => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<any>('id');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  // const [dense, setDense] = useState(false);
  const [dense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState('');
  const [rows, setRows] = useState(orders);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredRows = orders.filter((row) =>
      row.customerName.toLowerCase().includes(event.target.value.toLowerCase()),
    );
    setSearch(event.target.value);
    setRows(filteredRows);
  };

  const handleRequestSort = (_event: React.MouseEvent<unknown>, property: any) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = orders.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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

  const handleCheckboxChange = (_event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Paper>
      <EnhancedTableToolbar
        numSelected={selected.length}
        handleSearch={handleSearch}
        search={search}
      />
      <TableContainer>
        <Table sx={{ minWidth: 750 }} size={dense ? 'small' : 'medium'}>
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
              .map((row) => {
                const isItemSelected = selected.indexOf(row.id) !== -1;
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <input
                        type="checkbox"
                        checked={isItemSelected}
                        onChange={(event) => handleCheckboxChange(event, row.id)}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{format(new Date(row.createdAt), 'yyyy-MM-dd')}</TableCell>
                    <TableCell>{row.assistant}</TableCell>
                    <TableCell>{row.orderValue}</TableCell>
                    <TableCell>{row.channel}</TableCell>
                    <TableCell>{row.customerName}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.orderInfo}</TableCell>
                    <TableCell>{row.notes}</TableCell>
                    <TableCell>
                      <Tooltip title="More options">
                        <IconButton>
                          <IconDotsVertical width="18" />
                        </IconButton>
                      </Tooltip>
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
                <TableCell colSpan={headCells.length} />
              </TableRow>
            )}
          </TableBody>
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
    </Paper>
  );
};

export default OrderTableList;
