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
import { IconChartBar, IconEye, IconSearch } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import { default as iconPoint, default as point } from 'src/assets/images/logos/R-Point.png';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import DataOrderProduct from './data/DataOrderProduct';
import { Dayjs } from 'dayjs';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import aov from 'src/assets/Adminphoto/aov.png';
import bill from 'src/assets/Adminphoto/dơn hang.png';

import DialogProduct from './DialogProduct';



const BCrumb = [
  { to: '/admin/dashboard', title: 'Trang Chủ' },
  { to: '/admin/buy/orderproducts', title: 'Danh sách đơn hàng' },
];

const DataBox = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Đơn hàng',
    total: (
      <>
        <Typography variant="h6">1236</Typography>
      </>
    ),
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
          {/* <IconChartBar color="white" size={30} /> */}
          <img src={bill} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'secondary.light',
    color: 'secondary.main',
    title: 'Tổng giá trị',
    total: (
      <>
        <Box display="flex" alignItems="center" gap={0.4}>
          <Typography variant="h6">16.146.515</Typography>
          <img src={iconPoint} alt="" width={17} />
        </Box>
      </>
    ),
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
          <IconChartBar color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Khuyến mại',
    total: (
      <>
        <Box display="flex" alignItems="center" gap={0.4}>
          <Typography variant="h6">5.432.234</Typography>
          <img src={iconPoint} alt="" width={17} />
        </Box>
      </>
    ),
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
          <IconChartBar color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Tổng thanh toán',
    total: (
      <>
        <Box display="flex" alignItems="center" gap={0.4}>
          <Typography variant="h6">12.423.423 </Typography>
          <img src={iconPoint} alt="" width={17} />
        </Box>
      </>
    ),
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
          <IconChartBar color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'AOV',
    total: (
      <>
        <Box display="flex" alignItems="center" gap={0.4}>
          <Typography variant="h6">23.423 </Typography>
          <img src={iconPoint} alt="" width={17} />
        </Box>
      </>
    ),
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
          {/* <IconChartBar color="white" size={30} /> */}
          <img src={aov} width={30} />
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

const ProductAdmin = () => {


  const [open, setOpen] = useState<boolean>(false);
  const [selectID, setSelectID] = useState<string | null>(null);
  const [checkValue, setCheckValue] = useState<string | null>(null)


  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'id_don_hang',
      },
      {
        title: 'Ngày mua',
        dataIndex: 'createdAt',
        render: (_row: any, value: any) => (
          <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
            {value.createdAt.toLocaleDateString()}
          </Typography>
        ),
      },
      {
        title: 'ID khách hàng',
        dataIndex: 'id_khach_hang',
      },
      {
        title: 'Tên khách hàng',
        dataIndex: 'ten_khach_hang',
      },
      {
        title: 'Giá niêm yết',
        dataIndex: 'gia_niem_yet',
        render: (_row: any, value: any) => (
          <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
            {value.gia_niem_yet}
            <img src={point} alt="" width={20} style={{ marginLeft: '8px' }} />
          </Typography>
        ),
      },
      {
        title: 'Khuyến mại',
        dataIndex: 'khuyen_mai',
        render: (_row: any, value: any) => (
          <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
            {value.khuyen_mai}
            <img src={point} alt="" width={20} style={{ marginLeft: '8px' }} />
          </Typography>
        ),
      },
      {
        title: 'Thanh toán',
        dataIndex: 'thanh_toan',
        render: (_row: any, value: any) => (
          <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
            {value.thanh_toan}
            <img src={point} alt="" width={20} style={{ marginLeft: '8px' }} />
          </Typography>
        ),
      },
      {
        title: 'Thao tác',
        dataIndex: 'thaotac',
        render: (_value: any, row: any) => (
          <IconButton
            onClick={() => {
              setSelectID(row.id_don_hang);
              setOpen(true);
              setCheckValue('show')
              console.log('checkValuever1:',checkValue);
              
            }}
          >
            <IconEye stroke={2} style={{ color: '#5D87FF' }} />
          </IconButton>
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
  const [value, setValue] = useState<Dayjs | null>(null);
  const [value1, setValue1] = useState<Dayjs | null>(null);
  return (
    <>
      <BannerPage title="Đơn hàng sản phẩm" items={BCrumb} />
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={DataBox} totalColumn={5} />
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
                <Grid item>
                  <IconButton
                    color="primary"
                    aria-label="Add to cart"

                    // onClick={() => setOpen(true)}

                    onClick={() => {
                      setOpen(true);
                      setCheckValue('add')
                    }}

                  >
                    <AddCircleIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Grid>
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
          <CustomTable columns={column} dataSource={DataOrderProduct} dataSelect={dataSelect} />
        </Grid>
      </Grid>
      <DialogProduct open={open} setOpen={setOpen} checkValue={checkValue} setCheckValue={setCheckValue} selectID={selectID} />
    </>
  );
};

export default ProductAdmin;
