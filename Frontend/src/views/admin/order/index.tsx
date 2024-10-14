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
import { IconEye, IconSearch, IconTrash } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import personorcompany from 'src/assets/Adminphoto/cn dn.png';
import revenue from 'src/assets/Adminphoto/doanh thu.png';
import customerpaid from 'src/assets/Adminphoto/khach tra phi.png';
import customer from 'src/assets/Adminphoto/khách hàng.png';
import rpointblance from 'src/assets/Adminphoto/so du r poi.png';
import icontext from 'src/assets/images/logos/R-Point.png';
import OrderData from 'src/components/admin/order/data/OrderData';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PageContainer from 'src/components/container/PageContainer';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import DialogOrder from './DialogOrder';

const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },
  { to: 'admin/order', title: 'Quản lý khách hàng' },
];

interface StyleProps {
  bgColor: string;

  title: string;
  total: string;
  icons: JSX.Element;
}

const DataBox: StyleProps[] = [
  {
    bgColor: 'primary.light',

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
          <img src={customer} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
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
          <img src={revenue} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Khách hàng trả phí',
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
          <img src={customerpaid} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
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
          <img src={personorcompany} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
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
  const [selectID, setSelectID] = useState<string | null>(null);
  const [checkValue, setCheckValue] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

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
        title: 'Số lượng trợ lý',
        dataIndex: 'troly',
      },
      // {
      //   title: 'Trợ lý',
      //   dataIndex: 'troly',
      // },
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
        title: 'Người đại diện',
        dataIndex: 'ndd',
      },
      {
        title: 'Publisher',
        dataIndex: 'name',
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
        title: 'Ngày tạo',
        dataIndex: 'date',
        isValids: false,
      },
      {
        title: 'Ngày sinh',
        dataIndex: 'date',
        isValids: false,
      },
      {
        title: 'Giới tính',
        dataIndex: 'sex',
        isValids: false,
      },
      {
        title: 'MST (Cá nhân)',
        dataIndex: 'mstcn',
        isValids: false,
      },
      {
        title: 'Địa chỉ (Cá nhân)',
        dataIndex: 'dccn',
        isValids: false,
      },
      {
        title: 'MST (Doanh nghiệp)',
        dataIndex: 'mstdn',
        isValids: false,
      },
      {
        title: 'Tên công ty',
        dataIndex: 'tct',
        isValids: false,
      },
      {
        title: 'Email (Công ty)',
        dataIndex: 'ect',
        isValids: false,
      },
      {
        title: 'Địa chỉ (Công ty)',
        dataIndex: 'dcct',
        isValids: false,
      },

      {
        title: 'Chức vụ',
        dataIndex: 'cv',
        isValids: false,
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

  console.log(checkValue);

  return (
    <>
      <PageContainer title="Quản lý khách hàng" description="this is  page">
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
                <DateSelect />
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
      </PageContainer>
    </>
  );
};

export default OrderAdminPages;
