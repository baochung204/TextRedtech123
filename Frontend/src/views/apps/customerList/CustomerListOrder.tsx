import {
  Box,
  Checkbox,
  Chip,
  Dialog,
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
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconSearch } from '@tabler/icons-react';
import * as React from 'react';

import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import AddOrder from './PopupAdd2';
// import Tags from 'src/components/apps/sell/Tags';
import { TabContext, TabPanel } from '@mui/lab';
import ChildCard from 'src/components/shared/ChildCard';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import fb from 'src/assets/images/socialmedia/facebook.png';
import BlankCard from 'src/components/shared/BlankCard';
// const BCrumb = [
//   { to: '/', title: 'Home' },
//   { to: '/apps/blog/posts', title: 'Blog' },
//   { title: 'Blog post' },
// ];
import IconPoint from 'src/assets/images/logos/R-Point.png';

interface PropsTable {
  id: string;
  createdAt: string;
  assistant: string;
  pricePoint: number;
  channel: string;
  name: string;
  phone: string;
  address: string;
  email: string;
  orderInfo: string;
  notes: string;
  misc?: string;
}

// const generateIdCode = () => {
//   const randomNumber = Math.floor(Math.random() * 1000000);
//   return `#${randomNumber.toString().padStart(6, '0')}`;
// };

const TableData: PropsTable[] = [
  {
    id: 'ORD001',
    createdAt: '2024-09-01',
    assistant: 'Trợ lý A',
    pricePoint: 150000,
    channel: 'Ngô Đình Toản',
    name: 'Nguyễn Văn A',
    phone: '0123456789',
    address: 'Hà Nội',
    email: 'a@example.com',
    orderInfo: 'Thông tin đơn hàng A',
    notes: 'Ghi chú A',
    misc: fb,
  },
  {
    id: 'ORD002',
    createdAt: '2024-09-02',
    assistant: 'Trợ lý B',
    pricePoint: 10000,
    channel: 'Trần Dần',
    name: 'Trần Thị B',
    phone: '0987654321',
    address: 'Hồ Chí Minh',
    email: 'b@example.com',
    orderInfo: 'Thông tin đơn hàng B',
    notes: 'Ghi chú B',
    misc: fb,
  },
  // Dữ liệu mẫu mới
  {
    id: 'ORD003',
    createdAt: '2024-09-03',
    assistant: 'Trợ lý C',
    pricePoint: 150000,
    channel: 'Nguyễn Văn Bình',
    name: 'Phạm Văn C',
    phone: '0981234567',
    address: 'Đà Nẵng',
    email: 'c@example.com',
    orderInfo: 'Thông tin đơn hàng C',
    notes: 'Ghi chú C',
    misc: fb,
  },
  {
    id: 'ORD004',
    createdAt: '2024-09-04',
    assistant: 'Trợ lý D',
    pricePoint: 20250,
    channel: 'Lê Văn Dũng',
    name: 'Hoàng Thị D',
    phone: '0912345678',
    address: 'Cần Thơ',
    email: 'd@example.com',
    orderInfo: 'Thông tin đơn hàng D',
    notes: 'Ghi chú D',
    misc: fb,
  },
];

const Transition = React.forwardRef<
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
const CustomerListOrder = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  // const [value, setValue] = React.useState('1');

  // const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);
  // const [selectedItems, setSelectedItems] = React.useState<number[]>([]);
  const [dataSelect, setDataSelect] = React.useState<string[]>([]);
  // const handleItemClick = (id: number) => {
  //   setSelectedItems((prev) =>
  //     prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
  //   );
  // };

  // const [iconIndex, setIconIndex] = React.useState<number>(0);
  // const icons = [SwapVertIcon, SouthIcon, NorthIcon];

  // const handleClickIcon = () => {
  //   setIconIndex((pre) => (pre + 1) % icons.length);
  // };
  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };
  const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '/apps/blog/posts', title: 'Đơn hàng' },
  ];
  // interface FilmsData {
  //   id: number;
  //   title: string;
  // }
  // const FilmsData: FilmsData[] = [
  //   { id: 1, title: 'File' },
  //   { id: 2, title: 'Dung lượng' },
  //   { id: 3, title: 'Functions' },
  //   { id: 4, title: 'Token huấn luyện' },
  //   { id: 5, title: 'Ngày tạo' },
  //   { id: 6, title: 'Vòng quay trung bình' },
  //   { id: 7, title: 'khách hàng' },
  //   { id: 8, title: 'Đơn hàng' },
  //   { id: 9, title: 'CVR' },
  //   { id: 10, title: 'GMV' },
  //   { id: 11, title: 'Chi phí' },
  //   { id: 12, title: 'Chi phí/Doanh thu' },
  //   { id: 13, title: 'Chi phí/Đơn hàng' },
  //   { id: 14, title: 'Chi phí/Khách hàng' },
  //   { id: 15, title: 'Chiến lược' },
  // ];
  const columns = React.useMemo<Column[]>(() => [
    {
      title: 'Mã đơn hàng',
      dataIndex: 'id',
      sort: true,
    },
    {
      title: 'Thời gian tạo',
      dataIndex: 'createdAt',
      sort: true,
    },
    {
      title: 'Trợ lý',
      dataIndex: 'assistant',
      sort: true,
    },
    {
      title: 'Giá trị đơn hàng',
      dataIndex: 'pricePoint',
      sort: true,
      render: (value: string) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            gap: 0.5,
            maxWidth: 150,
            px: 2,
          }}
        >
          {value}{' '}
          <Box
            component="img"
            src={IconPoint}
            alt=""
            width={20}
            height={20}
            sx={{ borderRadius: '50%' }}
          />
        </Box>
      ),
    },
    {
      title: 'Kênh marketing',
      dataIndex: 'misc',
      render: (value: string) => (
        <>
          <Grid container spacing={3}>
            <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src={value}
                alt=""
                width={38}
                height={38}
                sx={{
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="subtitle1"> Facebook</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" fontSize={12}>
                    {' '}
                    #123456
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      ),
    },
    {
      title: 'Tags',
      dataIndex: 'channel',
      render: (value: string) => <Chip color="error" label={value} variant="outlined" />,
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'name',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
    },
  ], [])

  React.useEffect(() => {
    const hasIsValids = columns.some(col => 'isValids' in col);
    if (hasIsValids) {
      const hiddenColumns = columns
        .filter(col => col.isValids === false)
        .map(col => col.dataIndex || '');

      setDataSelect(hiddenColumns);
    } else {
      setDataSelect([]);
    }
  }, [columns]);

  const handleColumnChange = (event: any) => {
    const { target: { value } } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };


  return (
    <PageContainer>
      <BannerPage title="Đơn hàng" items={BCrumb} />
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
                    <Grid item xs={4} >
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

                    <Grid item xs={8}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'end'
                      }}
                    >
                      <Select
                        multiple
                        value={dataSelect}
                        displayEmpty
                        onChange={handleColumnChange}
                        renderValue={() => 'Sửa đổi cột'}
                        sx={{
                          marginRight: 2,
                        }}
                        size='small'
                      >
                        {columns.map((header: any) => {

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
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} mx={0.3}>
                  <BlankCard>
                    <CustomTable columns={columns} dataSource={TableData} dataSelect={dataSelect}/>
                  </BlankCard>
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </TabContext>
      </ChildCard>

      {/* Add Order Popup */}
      <Dialog
        open={isPopupOpen}
        onClose={handleClosePopup}
        fullWidth
        maxWidth="lg"
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle padding="10px">Thêm đơn hàng</DialogTitle>
        <DialogContent>
          <AddOrder />
        </DialogContent>
        {/* Uncomment if you want to use dialog actions */}
        {/* <DialogActions>
          <Button onClick={handleClosePopup}>Hủy</Button>
          <Button onClick={handleClosePopup} variant="contained" color="primary">
            Xác nhận
          </Button>
        </DialogActions> */}
      </Dialog>
    </PageContainer>
  );
};

export default CustomerListOrder;
