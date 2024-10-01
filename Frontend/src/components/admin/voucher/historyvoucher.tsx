import {
  Badge,
  Box,
  Checkbox,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,

  TextField,

} from '@mui/material';
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
import CustomTable from 'src/components/ComponentTables/CustomTable';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import BlankCard from 'src/components/shared/BlankCard';

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

// function EnhancedTableHead2(props: EnhancedTableProps) {
//   const { order, orderBy, onRequestSort } = props;
//   const createSortHandler = (property: keyof DataRow2) => (event: React.MouseEvent<unknown>) => {
//     onRequestSort(event, property);
//   };
//   return (
//     <TableHead sx={{ overflowX: 'auto', width: '100%' }}>
//       <TableRow>
//         {headCells2.map((headCell: any) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//             sx={{ whiteSpace: 'nowrap' }}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               <Typography variant="h6">{headCell.label}</Typography>
//               {/* {orderBy === headCell.id ? (
//                   <Box component="span">
//                     {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                   </Box>
//                 ) : null} */}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// function stableSort2<T>(array: any[], comparator: (a: T, b: T) => number) {
//   const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }

//     return a[1] - b[1];
//   });

//   return stabilizedThis.map((el) => el[0]);
// }
interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}
const HistoryVoucher = () => {
  // type Order = 'asc' | 'desc';

  // const [order, setOrder] = useState<Order>('asc');
  // const [orderBy, setOrderBy] = useState<any>('calories');
  // const [selected, setSelected] = useState<readonly string[]>([]);
  // const [page, setPage] = useState(0);
  // const [dense] = useState(false);
  // const [dense, setDense] = useState(false);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
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
  //     const newSelecteds = dataRows2.map((n: any) => n.name);
  //     setSelected(newSelecteds);

  //     return;
  //   }
  //   setSelected([]);
  // };

  // const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  // const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [value, setValue] = useState<Dayjs | null>(null);
  const [value1, setValue1] = useState<Dayjs | null>(null);
  const [selectedItems] = useState<number[]>([]);
  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: 'Ngày áp mã',
        dataIndex: 'creationTime',
      },
      {
        title: 'Khách hàng',
        dataIndex: 'user',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'phone',
      },
      {
        title: 'Tên chiến dịch',
        dataIndex: 'voucherName',
      },
      {
        title: 'Ngày tạo',
        dataIndex: 'startTime',
      },
      {
        title: 'Hạn sửa dụng',
        dataIndex: 'expiry',
      },
      {
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
        title: 'Giá trị giảm',
        dataIndex: 'sale',
      },
      {
        title: 'ID đơn hàng',
        dataIndex: 'ID_order',
      },
    ],
    [],
  );
  const [dataSelect, setDataSelect] = useState<string[]>([]);

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

  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  // const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataRows2.length) : 0;
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
              
              <Grid item>
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
              <Badge badgeContent={column.length - dataSelect.length} color="primary">
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
          <CustomTable columns={column} dataSource={dataRows2} dataSelect={dataSelect} />
        </BlankCard>
      </Grid>
    </div>
  );
};

export default HistoryVoucher;
