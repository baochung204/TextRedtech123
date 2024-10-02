import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Badge,
  Box,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconBellRinging, IconEye, IconSearch, IconTrash } from '@tabler/icons-react';
import { Dayjs } from 'dayjs';
import React, { useEffect, useMemo, useState } from 'react';
import icontext from 'src/assets/images/logos/R-Point.png';
import OrderData from 'src/components/admin/order/data/OrderData';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import DialogOrder from './DialogOrder';
import revenue from 'src/assets/Adminphoto/doanh thu.png';
import rpointblance from 'src/assets/Adminphoto/so du r poi.png';
import customer from 'src/assets/Adminphoto/khách hàng.png';

const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },
  { to: 'admin/order', title: 'Quản lý khách hàng' },
];

interface StyleProps {
  bgColor: string;
  color: string;
  title: string;
  total: string;
  icons: JSX.Element;
}

const DataBox: StyleProps[] = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Khách hàng',
    total: '6251',
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
          {/* <IconBellRinging color="white" size={30} /> */}
          <img src={customer} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'secondary.light',
    color: 'secondary.main',
    title: 'Khách trả phí',
    total: '1204 (33%)',
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
          <IconBellRinging color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'CN/DN',
    total: '3251/3000',
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
          <IconBellRinging color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Doanh thu',
    total: '15.126.422.555đ',
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
          {/* <IconBellRinging color="white" size={30} /> */}
          <img src={revenue} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Số dư R-Point',
    total: '52.126.422',
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
          {/* <IconBellRinging color="white" size={30} /> */}
          <img src={rpointblance} width={30} />
        </Box>
      </>
    ),
  },
];
interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const OrderAdminPages = () => {
  const [selectID, setSelectID] = useState<string | null>(null)
  const [checkValue, setCheckValue] = useState<string | null>(null)
  const [open, setOpen] = useState<boolean>(false)

  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: 'Họ và tên',
        dataIndex: 'name',
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
        title: 'Loại tài khoản',
        dataIndex: 'typeacc',
      },
      {
        title: 'Trợ lý',
        dataIndex: 'troly',
      },
      {
        title: 'Tổng nạp',
        dataIndex: 'tongnap',
      },
      {
        title: 'Số dư',
        dataIndex: 'sodu',
        render: (_row, value: any) => (
          <Box width={'80px'} sx={{ display: 'flex', justifyContent: 'end' }}>
            <Typography
              color="textSecondary"
              variant="subtitle2"
              sx={{ display: 'flex', gap: 0.5 }}
            >
              {value.sodu}{' '}
              <img src={icontext} alt="" width={20} height={20} style={{ borderRadius: 50 }} />
            </Typography>
          </Box>
        ),
      },
      {
        title: 'Hành động',
        dataIndex: 'action',
        render: (_row, value: any) => (
          <>
            <IconButton
              onClick={() => {
                setSelectID(value.id);
                setOpen(true);
                setCheckValue('view');
              }}
            >
              <IconEye stroke={2} style={{ color: '#5D87FF' }} />
            </IconButton>
            <IconButton>
              <IconTrash stroke={2} style={{ color: '#FA896B' }} />
            </IconButton>
          </>
        ),
      },
      {
        title: 'Giới tính',
        dataIndex: 'sex',
        isValids: false
      },
      {
        title: 'Ngày sinh',
        dataIndex: 'date',
        isValids: false
      },
      {
        title: 'Địa chỉ (Cá nhân)',
        dataIndex: 'dccn',
        isValids: false
      },
      {
        title: 'MST (Cá nhân)',
        dataIndex: 'mstcn',
        isValids: false
      },
      {
        title: 'Địa chỉ (Cá nhân)',
        dataIndex: 'adress',
        isValids: false,
      },
      {
        title: 'Xuất VAT',
        dataIndex: 'xvat',
        isValids: false
      },
      {
        title: 'Tên công ty',
        dataIndex: 'tct',
        isValids: false
      },
      {
        title: 'MST (Doanh nghiệp)',
        dataIndex: 'mstdn',
        isValids: false
      },
      {
        title: 'Người đại diện',
        dataIndex: 'ndd',
        isValids: false
      },
      {
        title: 'Chúc vụ',
        dataIndex: 'cv',
        isValids: false
      },
      {
        title: 'Địa chỉ (Công ty)',
        dataIndex: 'dcct',
        isValids: false
      },
      {
        title: 'Email (Công ty)',
        dataIndex: 'ect',
        isValids: false
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
  const [value, setValue] = useState<Dayjs | null>(null);
  const [value1, setValue1] = useState<Dayjs | null>(null);
  console.log(checkValue);

  return (
    <>
      <BannerPage title="Quản lý khách hàng" items={BCrumb} />

      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={DataBox} totalColumn={DataBox.length} />
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
                    onClick={() => { setOpen(true); setCheckValue('add') }}
                  >
                    <AddCircleIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Grid> */}

                <Grid item>

                
                <Grid item >

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
                {column.map((header: Column) => {
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
          <CustomTable columns={column} dataSource={OrderData} dataSelect={dataSelect} />
        </Grid>
      </Grid>
      <DialogOrder
        open={open}
        setOpen={setOpen}
        selectID={selectID}
        checkValue={checkValue}
        setCheckValue={setCheckValue}
      />
    </>
  );
};

export default OrderAdminPages;
