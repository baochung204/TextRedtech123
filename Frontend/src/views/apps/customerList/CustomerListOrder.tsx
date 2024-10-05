import { TabContext, TabPanel } from '@mui/lab';
import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  Chip,
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
  Typography,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { TransitionProps } from '@mui/material/transitions';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconSearch } from '@tabler/icons-react';
import * as React from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PageContainer from 'src/components/container/PageContainer';
import BlankCard from 'src/components/shared/BlankCard';
import ChildCard from 'src/components/shared/ChildCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import AddOrder from './PopupAdd2';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
    misc: 'fb',
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
    misc: 'fb',
  },
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
    misc: 'fb',
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
    misc: 'fb',
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
  const handleClosePopup = () => setIsPopupOpen(false);
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);

  const [dataSelect, setDataSelect] = React.useState<string[]>([]);

  const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '/', title: 'Chuyển đổi' },
  ];

  const columns = React.useMemo<Column[]>(
    () => [
      {
        title: 'Id',
        dataIndex: 'id',
        sort: true,
      },
      {
        title: 'Thời gian tạo',
        dataIndex: 'createdAt',
        sort: true,
      },
      {
        title: 'Tên khách hàng',
        dataIndex: 'name',
        sort: true,
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'phone',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Kênh',
        dataIndex: 'misc',
        render: (value: string) => (
          <Stack
            direction='row'
            spacing={1}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={value} alt={value} />
            </Box>
            <Box>
              <Typography variant="subtitle1"> Facebook</Typography>
              <Typography variant="subtitle2" fontSize={12}>
                {' '}
                #123456
              </Typography>
            </Box>
          </Stack>
        ),
      },
      {
        title: 'Trợ lý',
        dataIndex: 'assistant',
        sort: true,
      },
      {
        title: 'Tags',
        dataIndex: 'channel',
        render: (value: string) => <Chip color="error" label={value} variant="outlined" />,
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
            {value} đ
          </Box>
        ),
      },
      {
        title: 'Địa chỉ',
        dataIndex: 'address',
      },
    ],
    [],
  );

  React.useEffect(() => {
    const hasIsValids = columns.some((col) => 'isValids' in col);
    if (hasIsValids) {
      const hiddenColumns = columns
        .filter((col) => col.isValids === false)
        .map((col) => col.dataIndex || '');

      setDataSelect(hiddenColumns);
    } else {
      setDataSelect([]);
    }
  }, [columns]);

  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <PageContainer title="Chuyển đổi">
      <BannerPage title="Chuyển đổi" items={BCrumb} />
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
                      <Grid container sx={{ alignItems: 'center' }}>
                        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                          {' '}
                          <IconButton
                            color="primary"
                            aria-label="Add to cart"
                            onClick={() => setIsPopupOpen(true)}
                          >
                            <AddCircleIcon sx={{ fontSize: 30 }} />
                          </IconButton>
                        </Grid>
                        <Grid item xs={10}>
                          {' '}
                          <TextField
                            id="outlined-search"
                            placeholder="Tìm kiếm chuyển đổi"
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
                          badgeContent={columns.length - dataSelect.length}
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
                          {columns.map((header: any) => {
                            // console.log(
                            //   `check ${header.title}`,
                            //   dataSelect.includes(header.dataIndex),
                            // );

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

                <Grid item xs={12} mx={0.3}>
                  <BlankCard>
                    <CustomTable columns={columns} dataSource={TableData} dataSelect={dataSelect} />
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
      </Dialog>
    </PageContainer>
  );
};

export default CustomerListOrder;
