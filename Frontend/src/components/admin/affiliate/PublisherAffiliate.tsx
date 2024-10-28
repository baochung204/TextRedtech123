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
import React, { useEffect, useMemo, useState } from 'react';
import publisher from 'src/assets/Adminphoto/Publisher.png';
import notpaid from 'src/assets/Adminphoto/chua thanh toan.png';
import bill from 'src/assets/Adminphoto/dơn hang.png';
import user from 'src/assets/Adminphoto/khách hàng.png';
import commission from 'src/assets/Adminphoto/hoa hong.png';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import DateSelect from 'src/components/apps/date/DateSelect';
import TopCard from 'src/components/widgets/cards/TopCard';
import { DataPublishersTable } from './datatable/OrderTableData';
import { useDispatch } from 'react-redux';
import { AppDispatch, AppState } from 'src/store/Store';
import { useSelector } from 'react-redux';
import { fetchOverviewPublisherData } from 'src/store/admin/affiliate/publisher/overview/publisherOverviewSlice';
import { fetchPublisherListData } from 'src/store/admin/affiliate/publisher/table/listPublisherSlice';

const getStatusAccountColor = (status: string) => {
  switch (status) {
    case 'ACCEPT':
      return 'success';
    case 'PENDING':
      return 'warning';
    case 'REJECT':
      return 'error';
    case 'BAN':
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

const PublisherAffiliate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const dataPublisherOverview = useSelector((state: AppState) => state.overview_publisher.dataa);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const publisherList = useSelector((state: AppState) => state.list_publisher.dataa);
  useEffect(() => {
    dispatch(fetchPublisherListData({ page_no: page, page_size: rowsPerPage }));
  }, [rowsPerPage, page]);

  useEffect(() => {
    dispatch(fetchOverviewPublisherData());
  }, [dispatch]);

  const totalPublisher = dataPublisherOverview.totalPublisher;
  const totalOrder = dataPublisherOverview.totalOrder;
  const totalCustomers = dataPublisherOverview.totalCustomers;
  const totalCommission = dataPublisherOverview.totalCommission;
  const totalOutstanding = dataPublisherOverview.totalOutstanding;

  const DataBox = [
    {
      bgColor: 'primary.light',
      title: 'Publisher',
      total: totalPublisher,
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
            <img src={publisher} width={30} alt="Publisher" />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Đơn hàng',
      total: totalOrder,
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
            <img src={bill} width={30} alt="Đơn hàng" />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Khách hàng',
      total: totalCustomers,
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
            <img src={user} width={30} alt="Đơn hàng" />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Hoa hồng',
      total: totalCommission,
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
            <img src={commission} width={30} alt="Hoa hồng" />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Chưa thanh toán',
      total: totalOutstanding,
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
            <img width={30} src={notpaid} alt="Chưa thanh toán" />
          </Box>
        </>
      ),
    },
  ];

  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'id',
      },

      {
        title: 'Đối tác',
        dataIndex: '',
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
              {value.name}
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
        dataIndex: 'phoneNumber',
      },
      {
        title: 'Loại hình',
        dataIndex: 'type',
        render: (_row: any, value: any) => (
          <Typography style={{ width: '110px' }} variant="subtitle2">
            <Box sx={{ display: 'flex', justifyContent: 'center', px: 1 }}>
              <Typography style={{ width: '200px' }} variant="subtitle2">
                <Chip
                  label={value.type === 'BUSINESS' ? 'Doanh nghiệp' : 'Cá nhân'}
                  color={value.type === 'BUSINESS' ? 'success' : 'warning'}
                  variant="outlined"
                />
              </Typography>
            </Box>
          </Typography>
        ),
      },
      {
        title: 'Ngày đăng ký',
        dataIndex: 'registerDate',
        render: (value: string) => {
          const values = new Date(value);
          return values.toLocaleDateString('vi-VN');
        },
      },
      {
        title: 'Trạng thái tài khoản',
        dataIndex: 'accountStatus',
        render: (_row: any, value: any) => (
          <Chip
            label={
              value.accountStatus === 'ACCEPT'
                ? 'Hoạt động'
                : value.accountStatus === 'PENDING'
                ? 'Chờ duyệt'
                : value.accountStatus === 'REJECT'
                ? 'Bị từ chối'
                : value.accountStatus === 'BAN'
                ? 'Bị cấm'
                : ''
            }
            color={getStatusAccountColor(value.accountStatus)}
          />
        ),
      },
      {
        title: 'Rank',
        dataIndex: 'rank',
        render: (value) => <Box sx={{ display: 'flex', justifyContent: 'center' }}>{value}</Box>,
      },
      {
        title: 'Số khách hàng',
        dataIndex: 'totalCustomer',
        render: (value) => <Box sx={{ display: 'flex', justifyContent: 'center' }}>{value}</Box>,
      },
      {
        title: 'Số đơn hàng',
        dataIndex: 'totalOrder',
        render: (value) => <Box sx={{ display: 'flex', justifyContent: 'center' }}>{value}</Box>,
      },
      {
        title: 'Tổng hoa hồng',
        dataIndex: 'totalCommission',
        render: (value: number) => {
          const formattedValue = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(value);
          return formattedValue;
        },
      },
      {
        title: 'Click',
        dataIndex: 'totalClick',
        render: (value) => <Box sx={{ display: 'flex', justifyContent: 'center' }}>{value}</Box>,
      },
      {
        title: 'CVR',
        dataIndex: 'cvr',
        render: (value) => (
          <Box sx={{ display: 'flex', justifyContent: 'end', pr: 1, gap: '4px' }}>
            {value} <Box>%</Box>
          </Box>
        ),
      },
      {
        title: 'Số dư ví',
        dataIndex: 'balance',
        render: (value: number) => {
          const formattedValue = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(value);
          return formattedValue;
        },
      },
      {
        title: 'Đang xử lý',
        dataIndex: 'inProcessing',
        render: (value: number) => {
          const formattedValue = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(value);
          return formattedValue;
        },
      },
      {
        title: 'Tổng rút',
        dataIndex: 'totalAmountWithdrawn',
        render: (value: number) => {
          const formattedValue = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(value);
          return formattedValue;
        },
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
                  autoFocus: false,
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
          <CustomTable
            columns={column}
            dataSelect={dataSelect}
            dataSource={publisherList.content}
            count={publisherList.totalElements}
            rowsPerPage={rowsPerPage}
            page={page}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PublisherAffiliate;
