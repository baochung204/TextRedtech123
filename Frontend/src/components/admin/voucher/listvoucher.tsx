import {
  Badge,
  Box,
  Checkbox,
  Chip,
  Grid,
  InputAdornment,

  ListItemText,

  MenuItem,

  Select,

  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconSearch } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import BlankCard from 'src/components/shared/BlankCard';
import AddDialogvoucher from './add/addDialog';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import FilterListIcon from '@mui/icons-material/FilterList';



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
    customerName: '10%',
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

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

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

// function EnhancedTableHead(props: EnhancedTableProps) {
//   const { order, orderBy, onRequestSort } = props;
//   const createSortHandler = (property: keyof DataRow) => (event: React.MouseEvent<unknown>) => {
//     onRequestSort(event, property);
//   };
//   return (
//     <TableHead sx={{ overflowX: 'auto', width: '100%' }}>
//       <TableRow>
//         {headCells.map((headCell: any) => (
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
//                     <Box component="span">
//                       {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                     </Box>
//                   ) : null} */}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }


const ListVoucher = () => {
  
 
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const column = useMemo<Column[]>(() => [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Tên chiến dịch',
      dataIndex: 'voucherName',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'creationTime',
    },
    {
      title: 'Hạn sửa dụng',
      dataIndex: 'endTime',
    },
    {
      title: 'Mã khuyến mãi',
      dataIndex: 'Mavoucher',
    },
    {
      title: 'Số lượng mã',
      dataIndex: 'quantity',
    },
    {
      title: 'Loại giảm giá',
      dataIndex: 'customerId',
      render: (value: any) => {
        return <Chip label={value} color={value === 'Đồng' ? 'primary' : 'secondary'} />;
      },
    },
    {
      title: 'Giá trị giảm',
      dataIndex: 'customerName',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'tag',
      render: (value: any) => {
        return (
          <Chip
            label={value}
            color={
              value === 'chưa sử dụng' ? 'primary' : value === 'đã sử dụng' ? 'success' : 'error'
            }
          />
        );
      },
    },
    {
      title: 'Đã sử dụng',
      dataIndex: 'use',
    },
  ], [])
  

  const [dataSelect, setDataSelect] = useState<string[]>([]);

  useEffect(() => {
    const selectedColumns = column || [];
    const hasIsValids = selectedColumns.some(col => col.isValids !== undefined);
    if (hasIsValids) {
      const hiddenColumns = selectedColumns
        .filter(col => col.isValids === false)
        .map(col => col.dataIndex || '');
      setDataSelect(hiddenColumns);
    } else {
      setDataSelect([]);
    }
  }, [column]);

  const handleColumnChange = (event: any) => {
    const { target: { value } } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };


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
                      <AddDialogvoucher />
                    </Tooltip>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      id="outlined-search"
                      placeholder="Tìm kiếm mã khuyến mại"
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
                  <Badge badgeContent={dataSelect.length !== 0 && dataSelect.length} color={dataSelect.length !== 0 ? 'primary' : undefined}>
                    <FilterListIcon color="action" />
                  </Badge>
                  <Select
                    multiple
                    value={dataSelect}
                    displayEmpty
                    onChange={handleColumnChange}
                    renderValue={() => 'Sửa đổi cột'}
                    size='small'
                  >
                    {column.map((header: any) => {

                      console.log(`check ${header.title}`, dataSelect.includes(header.dataIndex))

                      const isSelected = dataSelect.includes(header.dataIndex);

                      return (
                        <MenuItem key={header.dataIndex} value={header.dataIndex}>
                          <Checkbox checked={!isSelected} />
                          <ListItemText primary={header.title} />
                        </MenuItem>
                      );
                    })}
                  </Select>
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
          <CustomTable columns={column} dataSource={dataRows} dataSelect={dataSelect}/>
        </BlankCard>
      </Grid>
    </div>
  );
};

export default ListVoucher;
