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
import { useDispatch } from 'react-redux';
import { AppDispatch, AppState } from 'src/store/Store';
import { useSelector } from 'react-redux';
import { fetchOverviewWithdrawalHistoryData } from 'src/store/admin/affiliate/historywithdrawal/overview/historyWithdrawlOverviewSlice';
import { fetchWithdrawalHistoryListData } from 'src/store/admin/affiliate/historywithdrawal/table/historyWithdrawalSlice';

const getStatusColor = (status: number) => {
  switch (status) {
    case 1:
      return 'success';
    case 2:
      return 'warning';
    case 3:
      return 'secondary';
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
  const dispatch = useDispatch<AppDispatch>();
  const dataWithdrawalHistoryOverview = useSelector(
    (state: AppState) => state.overview_withdrawal_history.dataa,
  );
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const withdrawalHistoryList = useSelector(
    (state: AppState) => state.list_withdrawal_history.dataa,
  );
  useEffect(() => {
    dispatch(fetchWithdrawalHistoryListData({ page_no: page, page_size: rowsPerPage }));
  }, [rowsPerPage, page]);

  useEffect(() => {
    dispatch(fetchOverviewWithdrawalHistoryData());
  }, [dispatch]);
  const [open, setOpen] = useState<boolean>(false);

  const totalRequests = dataWithdrawalHistoryOverview.totalRequests;
  const totalWithdrawals = dataWithdrawalHistoryOverview.totalWithdrawals;
  const totalProcessed = dataWithdrawalHistoryOverview.totalProcessed;
  const totalPending = dataWithdrawalHistoryOverview.totalPending;

  const dataSource = [
    {
      bgColor: 'primary.light',
      title: 'Số yêu cầu',
      total: totalRequests,
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
            <img src={amountrequest} width={30} />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Số tiền rút',
      total: totalWithdrawals,
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
            <img src={amountwithdrawth} width={30} />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Đã xử lý',
      total: totalProcessed,
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
            <img src={done} width={30} />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Chờ xử lý',
      total: totalPending,
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
            <img src={pending} width={30} />
          </Box>
        </>
      ),
    },
  ];

  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'withdrawId',
      },
      {
        title: 'Publisher',
        dataIndex: 'publisherType',
        render: (value: string) => (
          <Box sx={{ display: 'flex', width: '110px' }}>
            <Chip
              label={value === 'BUSINESS' ? 'Doanh nghiệp' : 'Cá nhân'}
              color={value === 'BUSINESS' ? 'success' : 'warning'}
              variant="outlined"
            />
          </Box>
        ),
      },
      {
        title: 'Khách hàng',
        dataIndex: 'publisherName',
      },
      {
        title: 'Ngày yêu cầu',
        dataIndex: 'requestDate',
        render: (value: string) => {
          const values = new Date(value);
          return values.toLocaleDateString('vi-VN');
        },
      },
      {
        title: 'Ngày hoàn tất',
        dataIndex: 'completeDate',
        render: (value: string) => {
          const values = new Date(value);
          return values.toLocaleDateString('vi-VN');
        },
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
        title: 'Số tiền rút',
        dataIndex: 'amountWithdrawn',
        render: (value: number) => {
          const formattedValue = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(value);
          return formattedValue;
        },
      },
      {
        title: 'Số tài khoản',
        dataIndex: 'bankAccount',
      },
      {
        title: 'Ngân hàng',
        dataIndex: 'bankName',
      },
      {
        title: 'Chủ tài khoản',
        dataIndex: 'accountOwnerName',
      },
      {
        title: 'Chi nhánh',
        dataIndex: 'bankBranch',
      },

      {
        title: 'Hóa đơn',
        dataIndex: '',
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
                ? 'Hợp đồng hợp lệ'
                : value === 4
                ? 'Từ chối'
                : ''
            }
            color={getStatusColor(value)}
          />
        ),
      },

      {
        title: 'Thông báo',
        dataIndex: '',
        render: () => <Button>Gửi email</Button>,
      },
      {
        dataIndex: 'actions',
        title: 'Hoạt động',
        render: () => (
          <Box display={'flex'} sx={{ justifyContent: 'center' }}>
            <Tooltip title="Xem" placement="right">
              <IconButton
                onClick={() => {
                  setOpen(!open);
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
            dataSource={withdrawalHistoryList.content}
            count={withdrawalHistoryList.totalElements}
            rowsPerPage={rowsPerPage}
            page={page}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
          />
        </Grid>
      </Grid>
      <DialogViewHistory open={open} setOpen={setOpen} />
    </>
  );
};

export default HistoryAffiliate;
