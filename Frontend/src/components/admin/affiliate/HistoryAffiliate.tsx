import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Badge,
  Box,
  Button,
  Checkbox,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from '@mui/material';
import { IconEye, IconSearch } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import TopCard from 'src/components/widgets/cards/TopCard';
// import HistoryTable from './component/HistoryTable';
import pending from 'src/assets/Adminphoto/cho xu ly.png';
import done from 'src/assets/Adminphoto/da xu ly.png';
import amountwithdrawth from 'src/assets/Adminphoto/so tien rut.png';
import amountrequest from 'src/assets/Adminphoto/so uu cau.png';
import DateSelect from 'src/components/apps/date/DateSelect';
import { DataHistoryTable } from './datatable/OrderTableData';
import DialogViewHistory from './dialog/DialogViewHistory';
const dataSource = [
  {
    bgColor: 'primary.light',
    title: 'Số yêu cầu',
    total: '1907',
    icons: (
      <>
        <Box
          textAlign="center"
          padding={1}
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <IconNumber color="white" size={30} /> */}
          <img src={amountrequest} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Số tiền rút',
    total: '190.720.030đ',
    icons: (
      <>
        <Box
          textAlign="center"
          padding={1}
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <IconBrandCashapp color="white" size={30} /> */}
          <img src={amountwithdrawth} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Đã xử lý',
    total: '123.406.789đ',
    icons: (
      <>
        <Box
          textAlign="center"
          padding={1}
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <IconBrandGumroad color="white" size={30} /> */}
          <img src={done} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Chờ xử lý',
    total: '123.406.789đ',
    icons: (
      <>
        <Box
          textAlign="center"
          padding={1}
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <IconChartArcs color="white" size={30} /> */}
          <img src={pending} width={30} />
        </Box>
      </>
    ),
  },
];

// const getStatusColor = (status: string) => {
//   switch (status) {
//     case 'Chờ duyệt':
//       return 'warning'; // Yellow or custom color
//     case 'Từ chối':
//       return 'error'; // Red or custom color
//     case 'Đã đi tiền':
//       return 'success'; // Green or custom color
//     default:
//       return 'default'; // Gray or default color
//   }
// };
const getStatusColor = (status: number) => {
  switch (status) {
    case 1:
      return 'success';
    case 2:
      return 'warning';
    case 3:
      return 'error';
    case 4:
      return 'error';
    default:
      return 'default';
  }
};
interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const HistoryAffiliate = () => {
  // const [selectedItems] = useState<number[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'id_checkout',
      },
      {
        title: 'Publisher',
        dataIndex: 'type_publisher',
        render: (value: any) => (
          <Box sx={{ display: 'flex', width: '110px' }}>
            <Chip
              label={value === 1 ? 'Doanh nghiệp' : value === 2 ? 'Cá nhân' : ''}
              color={value === 1 ? 'success' : value === 2 ? 'warning' : 'default'}
              variant="outlined"
            />
          </Box>
        ),
      },
      {
        title: 'Khách hàng',
        dataIndex: 'name_publisher',
      },
      {
        title: 'Ngày yêu cầu',
        dataIndex: 'date_request',
      },
      {
        title: 'Ngày hoàn tất',
        dataIndex: 'date_done',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'SĐT',
        dataIndex: 'phone_number',
      },
      {
        title: 'Số tiền rút',
        dataIndex: 'bank_amount',
        render: (value) => (
          <Box sx={{ display: 'flex', justifyContent: 'end', px: 1, gap: '4px' }}>
            {value.toLocaleString('vi-VN')} <Box>₫</Box>
          </Box>
        ),
      },
      {
        title: 'Số tài khoản',
        dataIndex: 'bank_number',
      },
      {
        title: 'Ngân hàng',
        dataIndex: 'bank_name',
      },
      {
        title: 'Chủ tài khoản',
        dataIndex: 'own_bank',
      },
      {
        title: 'Chi nhánh',
        dataIndex: 'branch',
      },

      {
        title: 'Hóa đơn',
        dataIndex: 'vat',
        // render: (row: any, value: any) => <Button>Tải xuống</Button>,
        render: () => <Button color="success">Tải Xuống</Button>,
      },
      {
        title: 'Trạng thái',
        dataIndex: 'status',
        render: (value: any) => (
          <Chip
            label={
              value === 1
                ? 'Đã đi tiền '
                : value === 2
                ? 'Chờ duyệt'
                : value === 3
                ? 'Từ chối'
                : value === 4
                ? 'Chưa đi tiền'
                : ''
            }
            color={getStatusColor(value)}
          />
        ),
      },

      // {
      //   title: 'Duyệt hóa đơn',
      //   dataIndex: '',
      //   // render: (_row:any, value: any) => (
      //   render: () => (
      //     <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      //       <Checkbox defaultChecked />
      //     </Box>
      //   ),
      // },
      // {
      //   title: 'Đã thanh toán',
      //   dataIndex: '',
      //   // render: (row, value: any) => (
      //   render: () => (
      //     <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      //       <Checkbox defaultChecked />
      //     </Box>
      //   ),
      // },
      {
        title: 'Thông báo',
        dataIndex: '',
        // render: (row, value: any) => <Button>Gửi email</Button>,
        render: () => <Button>Gửi email</Button>,
      },
      {
        dataIndex: 'actions',
        title: 'Hoạt động',
        render: () => (
          // console.log(value)
          <Box display={'flex'} sx={{ justifyContent: 'center' }}>
            <Tooltip title="Xem" placement="right">
              <IconButton
                onClick={() => {
                  setOpen(!open);
                  // setSelectId(value.id);
                }}
              >
                <IconEye stroke={2} style={{ color: '#5D87FF' }} />
              </IconButton>
            </Tooltip>
          </Box>
        ),
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

  return (
    <>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={dataSource} totalColumn={4} />
        </Grid>

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
                {/* <Grid item >
                  <IconButton
                    color="primary"
                    aria-label="Add to cart"
                  // onClick={() => setOpen(true)}

                  >
                    <AddCircleIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Grid> */}
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
                <MenuItem>
                  <Checkbox
                    checked={!(dataSelect.length === column.length)}
                    indeterminate={dataSelect.length > 0 && dataSelect.length < column.length}
                    onChange={() => {
                      if (dataSelect.length < column.length) {
                        const allColumns = column.map((header: Column) => header.dataIndex);
                        setDataSelect(allColumns);
                      } else {
                        setDataSelect([]);
                      }
                    }}
                  />
                  <ListItemText primary="Chọn tất cả" />
                </MenuItem>
                {column.map((header: Column) => {
                  const isSelected = !dataSelect.includes(header.dataIndex);
                  return (
                    <MenuItem key={header.dataIndex} value={header.dataIndex}>
                      <Checkbox checked={isSelected} />
                      <ListItemText primary={header.title} />
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <DateSelect />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <CustomTable columns={column} dataSource={DataHistoryTable} dataSelect={dataSelect} />
        </Grid>
      </Grid>
      <DialogViewHistory open={open} setOpen={setOpen} />
    </>
  );
};

export default HistoryAffiliate;
