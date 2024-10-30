import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import { TabContext, TabPanel } from '@mui/lab';
import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  Slide,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { IconEye, IconSearch } from '@tabler/icons-react';
import { forwardRef, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import DateSelect from 'src/components/apps/date/DateSelect';
import PageContainer from 'src/components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import { AppDispatch, AppState } from 'src/store/Store';
import { fetchCustomer } from 'src/store/apps/customer/customerSlice';
import { fetchCustomerUserListData } from 'src/store/user/customer/listcustomer/listCustomerUserSlice';
import PopupAddList2 from './PopupAddlist2';
import DialogDetailCustomer from './dialog/dialogDetailCustomer';

const BCrumb = [
  { to: '/', title: 'Trang Chủ' },
  { to: '/blogs', title: 'Danh Sách Khách Hàng' },
];

const Transition = forwardRef<
  unknown,
  TransitionProps & { children: React.ReactElement<any, any> }
>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}
const CustomerList2 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [openDetail, setOpenDetail] = useState(false);

  const customerUserList = useSelector((state: AppState) => state.listCustomerUser.dataa);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  useEffect(() => {
    dispatch(fetchCustomerUserListData({ page_no: page, page_size: rowsPerPage }));
  }, [rowsPerPage, page]);
  useEffect(() => {
    dispatch(fetchCustomer());
  }, [dispatch]);

  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'customerId',
        render: (value: any) =>
          value || <Typography color={'#ff3333'}>Không có dữ liệu</Typography>,
      },

      {
        title: 'Ngày tạo',
        dataIndex: 'date',
        render: (value: string) => {
          const values = new Date(value);
          return values.toLocaleDateString('vi-VN');
        },
      },
      {
        title: 'Tên khách hàng',
        dataIndex: 'name',
        render: (value: any) =>
          value || <Typography color={'#ff3333'}>Không có dữ liệu</Typography>,
      },
      {
        title: 'Kênh',
        dataIndex: 'misc',
        render: (_, value: any) => (
          <Stack direction="row" spacing={1}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={value?.avatarUrl} alt={value} />
            </Box>
            <Box>
              <Typography variant="subtitle1"> {value?.facebookName} </Typography>
              <Typography variant="subtitle2" fontSize={12}>
                {value?.facebookCode}
              </Typography>
            </Box>
          </Stack>
        ),
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'phoneNumber',
        render: (value: any) =>
          value || <Typography color={'#ff3333'}>Không có dữ liệu</Typography>,
      },
      {
        title: 'Trợ lý',
        dataIndex: 'chatBotName',
        render: (value: any) =>
          value || <Typography color={'#ff3333'}>Không có dữ liệu</Typography>,
      },

      {
        title: 'Email',
        dataIndex: 'email',
        render: (value: any) =>
          value || <Typography color={'#ff3333'}>Không có dữ liệu</Typography>,
      },
      {
        title: 'Xem chi tiết',
        dataIndex: 'actions',
        render: (_row: any, value: any) => (
          <Box sx={{ px: 4 }}>
            <IconButton onClick={handleDetail}>
              <IconEye stroke={2} style={{ color: '#5D87FF' }} />
            </IconButton>
          </Box>
        ),
      },
    ],
    [],
  );
  const handleDetail = () => {
    setOpenDetail(!openDetail);
  };
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
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
    <PageContainer title="Danh sách khách hàng">
      <BannerPage title="Danh sách khách hàng" items={BCrumb} />
      <ChildCard sx={{ border: 'none' }} sx1={{ padding: 0 }}>
        <TabContext value="1">
          <Box>
            <TabPanel value="1" sx={{ p: 0, mt: 0.5 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={2}
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <Grid item xs={12} sm={4}>
                      <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                          <Tooltip title="Thêm mới khách hàng" onClick={handleOpenPopup}>
                            <IconButton color="primary" aria-label="Add to cart">
                              <AddCircleIcon sx={{ fontSize: 30 }} />
                            </IconButton>
                          </Tooltip>
                        </Grid>
                        <Grid item xs={10}>
                          <TextField
                            id="outlined-search"
                            placeholder="Tìm kiếm khách hàng"
                            size="small"
                            variant="outlined"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <IconSearch size="20" />
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={5.83}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton aria-label="filter" sx={{ mr: 2 }}>
                          <Badge
                            badgeContent={
                              column.length - dataSelect.filter((item) => item !== 'all').length
                            }
                            color="primary"
                          >
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
                            autoFocus: false,
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
                              indeterminate={
                                dataSelect.length > 0 && dataSelect.length < column.length
                              }
                              onChange={() => {
                                if (dataSelect.length < column.length) {
                                  const allColumns = column.map(
                                    (header: Column) => header.dataIndex,
                                  );
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

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <DateSelect />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <CustomTable
                    columns={column}
                    dataSelect={dataSelect}
                    dataSource={customerUserList.content}
                    count={customerUserList.totalElements}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    setPage={setPage}
                    setRowsPerPage={setRowsPerPage}
                  />
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </TabContext>
      </ChildCard>

      <Dialog
        open={isPopupOpen}
        onClose={handleClosePopup}
        fullWidth
        maxWidth="lg"
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle>
          <Typography padding={'20px'} fontSize={'30px'}>
            Thêm khách hàng
          </Typography>
        </DialogTitle>
        <DialogContent
          sx={{
            padding: '0',
            overflowY: 'hidden',
          }}
        >
          <PopupAddList2 />
        </DialogContent>
      </Dialog>
      {/* Popup Chi tiết khách hàng */}
      <DialogDetailCustomer openDetail={openDetail} setOpenDetail={setOpenDetail} />
    </PageContainer>
  );
};

export default CustomerList2;
