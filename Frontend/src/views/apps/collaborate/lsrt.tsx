/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Button, MenuItem, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import BlankCard from 'src/components/shared/BlankCard';
// import { EnTableType } from 'src/components/tables/tableData';
import { tabledh } from 'src/components/tables/tabledh';
// import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';

// const BCrumb = [
//   {
//     to: '/',
//     title: 'Trang chủ',
//   },
//   { to: '/buy/point', title: 'Quy đổi ngân lượng' },
//   { title: 'Lịch sử quy đổi ' },
// ];

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import format from 'date-fns/format/index.js';
import CustomTable from 'src/components/ComponentTables/CustomTable';
// import { useTheme } from '@emotion/react';
// const columns = [
//   {
//     title: 'ID thanh toán',
//     dataIndex: 'id'
//   },
//   {
//     title: 'Ngày yêu cầu',
//     dataIndex: 'createdAt',
//     render: (value: any) => value ? dayjs(value).format('DD/MM/YYYY') : '',
//   },
//   {
//     title: 'Ngày hoàn tất',
//     dataIndex: 'completedAt',
//     render: (value: any) => value ? dayjs(value).format('DD/MM/YYYY') : '',
//   },
//   {
//     title: "Số tiền",
//     dataIndex: 'amount',
//     render: (value: number) => `${value.toLocaleString()} VND`,
//   },
//   {
//     title: 'Trạng thái',
//     dataIndex: 'status',
//     render: (status: boolean) => status
//       ? <Typography color="#13DEB9">Đã thanh toán</Typography>
//       : <Typography color="#ff9800">Chờ xử lý</Typography>,
//   },
//   {
//     title: 'Hóa đơn',
//     dataIndex: 'invoice',
//     render: (invoiceUrl: string) => (
//       <Button color="success" onClick={() => window.open(invoiceUrl, '_blank')}>
//         Tải về
//       </Button>
//     ),
//   },
// ];

// function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }

//   return 0;
// }
const rows: any = tabledh;

type Order = 'asc' | 'desc';

// function getComparator<Key extends keyof any>(
//   order: Order,
//   orderBy: Key,
// ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort<T>(array: any[], comparator: (a: T, b: T) => number) {
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

// interface HeadCell {
//   disablePadding: boolean;
//   id: any;
//   label: string;
//   numeric: boolean;
// }
// const headCells: HeadCell[] = [
//   {
//     id: 'requestId',
//     numeric: false,
//     disablePadding: false,
//     label: 'ID thanh toán',
//   },
//   {
//     id: 'createdAt',
//     numeric: false,
//     disablePadding: false,
//     label: 'Ngày yêu cầu',
//   },
//   {
//     id: 'completedAt',
//     numeric: false,
//     disablePadding: false,
//     label: 'Ngày hoàn tất',
//   },

//   {
//     id: 'amount',
//     numeric: false,
//     disablePadding: false,
//     label: 'Số tiền',
//   },
//   {
//     id: 'status',
//     numeric: false,
//     disablePadding: false,
//     label: 'Trạng thái',
//   },
//   {
//     id: 'invoice',
//     numeric: false,
//     disablePadding: false,
//     label: 'Tải hóa đơn',
//   },
// ];

// interface HeadCell {
//   disablePadding: boolean;
//   id: any;
//   label: string;
//   numeric: boolean;
// }
const FilmsData: any = [
  {
    id: 1,
    title: 'ID thanh toán',
    dataIndex: 'MHD',
  },
  {
    id: 2,
    title: 'Ngày yêu cầu',
    dataIndex: 'createdAt',
    render: (value: any) => format(new Date(value), 'dd/MM/yyyy  HH:mm'),
  },
  {
    id: 3,
    title: 'Ngày hoàn tất',
    dataIndex: 'completedAt',
    render: (value: any) => format(new Date(value), 'dd/MM/yyyy  HH:mm'),
  },
  {
    id: 4,
    title: 'Số tiền',
    dataIndex: 'money',
    render: (value: any) => `${value} đ`,
  },
  {
    id: 5,
    title: 'Trạng thái',
    dataIndex: 'status',
    render: (value: any) => (
      <Typography color={value ? '#13DEB9' : '#ba8b02'} variant="subtitle2" fontWeight={'24px'}>
        {value ? 'đã thanh toán' : 'Chờ xử lý'}
      </Typography>
    ),
  },

  {
    id: 7,
    title: 'Hành động',
    dataIndex: 'status',
    render: (value: any) => <Button color="success">{value ? 'tải về' : ''}</Button>,
  },
];

// interface EnhancedTableProps {
//   numSelected: number;
//   onRequestSort: (event: React.MouseEvent<unknown>, property: keyof []) => void;
//   onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   order: Order;
//   orderBy: string;
//   rowCount: number;
// }
// const getStatusTextAndColor = (status: any) => {
//   switch (status) {
//     case 1:
//       return (
//         <Typography color="#13DEB9" variant="subtitle2">
//           Thanh toán
//         </Typography>
//       );
//     case 2:
//       return (
//         <Typography color="#ff9800" variant="subtitle2">
//           Chờ xử lý
//         </Typography>
//       );
//     case 3:
//       return (
//         <Typography color="#f44336" variant="subtitle2">
//           Chưa thanh toán
//         </Typography>
//       );
//     default:
//       return;
//   }
// };
// const getInvoiceTextAndColor = (status: any) => {
//   switch (status) {
//     case 1:
//       return <Button color="success">Tải về</Button>;
//     case 2:
//       return <Typography color="#ff9800">Chờ xử lý</Typography>;
//     case 3:
//       return <Typography color="#f44336"> Chưa thanh toán</Typography>;
//     default:
//       return;
//   }
// };

// function EnhancedTableHead(props: EnhancedTableProps) {
//   const { order, orderBy, onRequestSort } = props;
//   const createSortHandler = (property: keyof []) => (event: React.MouseEvent<unknown>) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       {/* <TableRow>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               <Typography variant="subtitle1" fontWeight="700">
//                 {headCell.label}
//               </Typography>
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow> */}
//     </TableHead>
//   );
// }

// interface EnhancedTableToolbarProps {
//   numSelected: number;
// }

const HistoryMoney = () => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<any>('calories');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  // const [dense, setDense] = React.useState(false);
  const [dense] = React.useState(false);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof []) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.checked) {
  //     const newSelecteds = rows.map((n: any) => n.name);
  //     setSelected(newSelecteds);

  //     return;
  //   }
  //   setSelected([]);
  // };
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

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setDense(event.target.checked);
  // };

  // const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const [month, setMonth] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  // chart color
  // const theme = useTheme();
  const [value, setValue] = React.useState<any | null>(null);
  const [value1, setValue1] = React.useState<any | null>(null);
  return (
    <PageContainer title="Enhanced Table" description="this is Enhanced Table page">
      {/* breadcrumb */}
      <Box
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0px 0px 10px 0px',
        }}
      >
        <CustomSelect
          labelId="month-dd"
          id="month-dd"
          size="small"
          value={month}
          onChange={handleChange}
        >
          <MenuItem value={1}>Tất cả</MenuItem>
          <MenuItem value={2}>Khách hàng </MenuItem>
          <MenuItem value={3}>Đơn Hàng </MenuItem>
        </CustomSelect>
        <Box style={{ width: '60%' }} display={'flex'} alignItems={'center'} gap="5px">
          {' '}
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
      </Box>
      <BlankCard>
        <Box mb={2} sx={{ mb: 2 }}>
          <CustomTable columns={FilmsData} dataSource={tabledh} />
        </Box>
      </BlankCard>
    </PageContainer>
  );
};

export default HistoryMoney;
