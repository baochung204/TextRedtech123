import {
  Avatar,
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
  Typography,
} from '@mui/material';
import { IconSearch } from '@tabler/icons-react';

import FilterListIcon from '@mui/icons-material/FilterList';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Dayjs } from 'dayjs';
import React, { useEffect, useMemo, useState } from 'react';
import publisher from 'src/assets/Adminphoto/Publisher.png';
import notpaid from 'src/assets/Adminphoto/chua thanh toan.png';
import bill from 'src/assets/Adminphoto/dơn hang.png';
import commission from 'src/assets/Adminphoto/hoa hong.png';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import TopCard from 'src/components/widgets/cards/TopCard';
import { DataPublishersTable } from './datatable/OrderTableData';
const DataBox = [
  {
    bgColor: 'primary.light',
    title: 'Publisher',
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
          <img src={publisher} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Đơn hàng',
    total: '8386',
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
          {/* <IconBox color="white" size={30} /> */}
          <img src={bill} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Hoa hồng',
    total: '123.406.369 ₫',
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
          {/* <IconCoins color="white" size={30} /> */}
          <img src={commission} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Chưa thanh toán',
    total: '11.415.123 ₫',
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
          <img width={30} src={notpaid} />
        </Box>
      </>
    ),
  },
];

const getStatusAccountColor = (status: number) => {
  switch (status) {
    case 1:
      return 'success'; // Green for approved
    case 2:
      return 'warning'; // Yellow for pending approval
    case 3:
      return 'error'; // Red for rejected
    default:
      return 'default'; // Default color for unknown statuses
  }
};

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const PublisherAffiliate = () => {
  // const [selectedItems] = useState<number[]>([]);
  const [value, setValue] = useState<Dayjs | null>(null);
  const [value1, setValue1] = useState<Dayjs | null>(null);
  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID Publisher',
        dataIndex: 'id_publisher',
      },

      {
        title: 'Đối tác',
        dataIndex: 'doitac',
        render: (_row: any, value: any) => (
          <Box
            sx={{
              display: 'flex',
              width: '200px',
              alignItems: 'center',
            }}
          >
            <Avatar
              src={value.imgsrc}
              variant="rounded"
              alt={value.imgsrc}
              sx={{ width: 48, height: 48 }}
            />
            <Typography style={{ marginLeft: '10px' }} variant="subtitle2">
              {value.name_partner}
            </Typography>
          </Box>
        ),
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
        title: 'Loại hình',
        dataIndex: 'email_publisher',
        render: (_row: any, value: any) => (
          <Typography style={{ width: '100px' }} variant="subtitle2">
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography style={{ width: '200px' }} variant="subtitle2">
                <Chip
                  label={value.type ? 'Doanh nghiệp' : 'Cá nhân'}
                  color={value.type ? 'success' : 'warning'}
                  variant="outlined"
                />
              </Typography>
            </Box>
          </Typography>
        ),
      },
      {
        title: 'Ngày đăng ký',
        dataIndex: 'create_date',
      },
      {
        title: 'Trạng thái tài khoản',
        dataIndex: '',
        render: (_row: any, value: any) => (
          <Chip
            label={
              value.type_account === 1
                ? 'Hoạt động'
                : value.type_account === 2
                ? 'Chờ duyệt'
                : value.type_account === 3
                ? 'Bị từ chối'
                : ''
            }
            color={getStatusAccountColor(value.type_account)}
          />
        ),
      },
      {
        title: 'Rank',
        dataIndex: 'rank',
      },
      {
        title: 'Số lượng khách hàng',
        dataIndex: 'total_Customers',
      },
      {
        title: 'Số lượng đơn hàng',
        dataIndex: 'total_Order',
      },
      // {
      //   title: 'Hồ sơ',
      //   dataIndex: '',
      //   render: (_row: any, value: any) => (
      //     <Typography style={{ width: '100px' }} variant="subtitle2">
      //       <Chip label={value.contract} color={getStatusColor(value.contract)} />
      //     </Typography>
      //   ),
      // },
      // {
      //   title: 'Hợp đồng Affiliate',
      //   dataIndex: '',
      //   render: (_row: any, value: any) => (
      //     <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      //       <Typography style={{ width: '100px' }} variant="subtitle2">
      //         <Chip
      //           label={value.brief ? 'Đã ký' : 'Chưa ký'}
      //           color={value.brief ? 'success' : 'warning'}
      //           variant="outlined"
      //         />
      //       </Typography>
      //     </Box>
      //   ),
      // },
      {
        title: 'Tổng hoa hồng',
        dataIndex: 'total_commission',
      },
      {
        title: 'Click',
        dataIndex: 'click',
      },
      // {
      //   title: 'Khách hàng',
      //   dataIndex: 'customer',
      // },
      // {
      //   title: 'Số đơn hàng',
      //   dataIndex: 'order',
      // },
      // {
      //   title: 'Doanh thu',
      //   dataIndex: 'revenue',
      // },
      {
        title: 'CVR',
        dataIndex: 'cvr',
      },
      {
        title: 'Số dư ví',
        dataIndex: 'account_balance',
      },
      {
        title: 'Đang xử lý',
        dataIndex: 'processing',
      },
      {
        title: 'Đã hoàn thành',
        dataIndex: 'paid',
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
          <TopCard dataSource={DataBox} totalColumn={4} />
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
                    placeholder="Tìm kiếm khách hàng"
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
          <CustomTable columns={column} dataSource={DataPublishersTable} dataSelect={dataSelect} />
        </Grid>
      </Grid>
    </>
  );
};

export default PublisherAffiliate;
