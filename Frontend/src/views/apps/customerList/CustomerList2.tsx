import { TabContext, TabPanel } from '@mui/lab';
import {
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
  TextField,
  Typography,
} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { TransitionProps } from '@mui/material/transitions';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconSearch } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PageContainer from 'src/components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
// import { fetchCustomer } from 'src/store/apps/customer/customerSlice';
// import { AppDispatch, AppState } from 'src/store/Store';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import FilterListIcon from '@mui/icons-material/FilterList';
import { forwardRef, useEffect, useMemo, useState } from 'react';
import { AppDispatch, AppState } from 'src/store/Store';
import { fetchCustomer } from 'src/store/apps/customer/customerSlice';
import PopupAddList2 from './PopupAddlist2';

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
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const dataCustomer = useSelector((state: AppState) => state.customer.data);
  useEffect(() => {
    dispatch(fetchCustomer());
  }, [dispatch]);
  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID khách hàng',
        dataIndex: 'idCustomer',
      },

      {
        title: 'Ngày tạo',
        dataIndex: 'dateTime',
      },
      {
        title: 'Trợ lý',
        dataIndex: 'assistant',
      },
      {
        title: 'Tags',
        dataIndex: 'tag',
      },
      {
        title: 'Tên khách hàng',
        dataIndex: 'nameCustomer',
      },
      {
        title: 'Tổng chi tiêu',
        dataIndex: 'orderValue',
        render: (_row: any, value: any) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>{value.totalSpend} đ</Typography>
          </Box>
        ),
      },
      {
        title: 'SĐT',
        dataIndex: 'phoneNumber',
      },
      {
        title: 'Địa chỉ',
        dataIndex: 'address',
      },
    ],
    [],
  );

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
                        <Badge
                          badgeContent={column.length - dataSelect.length}
                          color={'primary'}
                        >
                          <FilterListIcon color="action" />
                        </Badge>
                        <Select
                          multiple
                          value={dataSelect}
                          displayEmpty
                          onChange={handleColumnChange}
                          renderValue={() => 'Sửa đổi cột'}
                          sx={{
                            marginRight: 2,
                          }}
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

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                              value={selectedStartDate}
                              onChange={setSelectedStartDate}
                              renderInput={(params) => (
                                <TextField {...params} size="small" fullWidth />
                              )}
                            />
                            <Typography>tới</Typography>
                            <DatePicker
                              value={selectedEndDate}
                              onChange={setSelectedEndDate}
                              renderInput={(params) => (
                                <TextField {...params} size="small" fullWidth />
                              )}
                            />
                          </LocalizationProvider>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <CustomTable columns={column} dataSource={dataCustomer} dataSelect={dataSelect} />
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </TabContext>
      </ChildCard>

      {/* Popup Thêm khách hàng */}
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
    </PageContainer>
  );
};

export default CustomerList2;
