import { TabContext, TabPanel } from '@mui/lab';
import {
  Badge,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  Slide,
  TextField,
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconSearch } from '@tabler/icons-react';
import * as React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PageContainer from 'src/components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
// import { fetchCustomer } from 'src/store/apps/customer/customerSliceAffiliate';
// import { AppDispatch, AppState } from 'src/store/Store';
import PopupAdd from './PopupAdd';
import { useEffect, useState, useMemo } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import { DataCustomerListAffiliateTable } from 'src/components/tables/tableData';



const Transition = React.forwardRef<unknown, TransitionProps & { children: React.ReactElement }>(
  (props, ref) => (
    <Slide direction="up" ref={ref} {...props}>
      {props.children}
    </Slide>
  ),
);

const BCrumb = [
  { to: '/', title: 'Trang Chủ' },
  { to: '', title: 'Danh sách khách hàng' },
];
interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}
const CustomerList = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const column = useMemo<Column[]>(() => [
    {
      title: 'STT',
      dataIndex: 'id',
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      render: (_row, value: any) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={value?.imgsrc}
            alt=""
            style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
          />
          <Typography>{value.name}</Typography>
        </Box>
      ),
    },

    {
      title: 'SĐT',
      dataIndex: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Ngày đăng ký',
      dataIndex: 'createdAt',
    },
    {
      title: 'Loại khách hàng',
      dataIndex: 'typeofcustomer',
    },
  ], [])


  const [dataSelect, setDataSelect] = useState<string[]>([]);

  useEffect(() => {
    const selectedColumns = column || [];
    const hasIsValids = selectedColumns.some(col => col.isValids !== undefined);
    if (hasIsValids) {
      const hiddenColumns = selectedColumns
        .filter(col => col.isValids === false)
        .map(col => col.dataIndex || '');
      setDataSelect(hiddenColumns);
    } else {
      setDataSelect([]);
    }
  }, [column]);

  const handleColumnChange = (event: any) => {
    const { target: { value } } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <PageContainer>
      <BannerPage title="Danh sách khách hàng" items={BCrumb} />
      <ChildCard sx={{ border: 'none' }} sx1={{ padding: 0 }}>
        <TabContext value="1">
          <Box>
            <TabPanel value="1" sx={{ p: 0, mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={2}
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <Grid item xs={12} sm={4}>
                      <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
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

                    <Grid item xs={10} sm={4}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Badge badgeContent={dataSelect.length !== 0 && dataSelect.length} color={dataSelect.length !== 0 ? 'primary' : undefined}>
                          <FilterListIcon color="action" />
                        </Badge>
                        <Select
                          multiple
                          value={dataSelect}
                          displayEmpty
                          onChange={handleColumnChange}
                          renderValue={() => 'Sửa đổi cột'}
                          size='small'
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

                            console.log(`check ${header.title}`, dataSelect.includes(header.dataIndex))

                            const isSelected = dataSelect.includes(header.dataIndex);

                            return (
                              <MenuItem key={header.dataIndex} value={header.dataIndex}>
                                <Checkbox checked={!isSelected} />
                                <ListItemText primary={header.title} />
                              </MenuItem>
                            );
                          })}
                        </Select>
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
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <CustomTable
                    columns={column}
                    dataSource={DataCustomerListAffiliateTable}
                    dataSelect={dataSelect}
                  />;
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
        <DialogTitle>Thêm khách hàng</DialogTitle>
        <DialogContent>
          <PopupAdd />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup}>Hủy</Button>
          <Button onClick={handleClosePopup} variant="contained" color="primary">
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
};

export default CustomerList;
