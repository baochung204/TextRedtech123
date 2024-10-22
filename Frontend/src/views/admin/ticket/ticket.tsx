import FilterListIcon from '@mui/icons-material/FilterList';
import {
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
} from '@mui/material';
import { IconSearch } from '@tabler/icons-react';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import processing from 'src/assets/Adminphoto/chua xu ly.png';
import rating from 'src/assets/Adminphoto/DANH GIA.png';
import customer from 'src/assets/Adminphoto/khách hàng.png';
import ticket from 'src/assets/Adminphoto/ticket.png';
import rating1 from 'src/assets/Adminphoto/đanh gia.png';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PageContainer from 'src/components/container/PageContainer';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import { AppDispatch, AppState } from 'src/store/Store';
import { fetchTicketsData } from 'src/store/admin/admin-ticket/AdminTicketSlice';
interface AdminTicket {
  ticketId: string;
  create_date: Date;
  messageTime: Date | null;
  rate: number;
  status: string;
  title: string;
  user_id: number;
  user_name: string;
  email: string;
  phone_number: string;
} // Define interface AdminTicket
const BCrumb = [
  { to: '/', title: 'Trang chủ' },
  { title: 'Danh sách trợ lý' },
];

const DataBox = [
  {
    bgColor: 'primary.light',
    title: 'Ticket',
    total: '2.415',
    icons: (
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
        <img src={ticket} width={30} alt="Ticket" />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Khách hàng',
    total: '1.369',
    icons: (
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
        <img src={customer} width={30} alt="Customer" />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Đánh giá',
    total: '4.7/5',
    icons: (
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
        <img src={rating} width={30} alt="Rating" />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Chưa xử lý',
    total: '236',
    icons: (
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
        <img src={processing} width={30} alt="Processing" />
      </Box>
    ),
  },
];



const getStatusTextAndColor = (status: string) => {
  switch (status) {
    case "Chưa xử lý":
      return { text: 'Chưa xử lý', color: 'red' };
    case "Đang xử lý":
      return { text: 'Đang xử lý', color: 'orange' };
    case "Đã xử lý":
      return { text: 'Đã xử lý', color: 'green' };
    default:
      return { text: 'Không xác định', color: 'gray' };
  }
};

const Ticket = () => {
  const dispatch = useDispatch<AppDispatch>();
  const adminTickets = useSelector((state: AppState) => state.adminTicker.result);
  const [dataSelect, setDataSelect] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchTicketsData());
  }, [dispatch]);

  const columns = useMemo(
    () => [
      { dataIndex: 'ticketId', title: 'ID' },
      { dataIndex: 'create_date', title: 'Thời gian tạo' },
      { dataIndex: 'user_id', title: 'ID Khách hàng' },
      { dataIndex: 'user_name', title: 'Tên Khách hàng' },
      {
        dataIndex: 'messageTime',
        title: 'Tương tác gần đây',
        render: (value: any) => (value ? new Date(value).toLocaleDateString() : 'Chưa có tương tác'),
      },
      {
        dataIndex: 'rate',
        title: 'Đánh giá',
        render: (value: any) => (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Box>{value}</Box>
            <IconButton sx={{ padding: '0' }}>
              <img src={rating1} width={16} alt="Rating" />
            </IconButton>
          </Box>
        ),
      },
      { dataIndex: 'email', title: 'Email' },
      { dataIndex: 'phone_number', title: 'Số điện thoại' },
      { dataIndex: 'title', title: 'Tiêu đề' },
      {
        dataIndex: 'status',
        title: 'Trạng thái',
        render: (status: string) => {
          const { text, color } = getStatusTextAndColor(status);
          return <Chip label={text} sx={{ backgroundColor: color, color: '#fff' }} />;
        },
      },
    ],
    [],
  );

  const handleColumnChange = (event: any) => {
    const { value } = event.target;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  const dataRows = Array.isArray(adminTickets)
    ? adminTickets.map((item: any) => ({
        ticketId: item.ticketId,
        create_date: new Date(item.create_date),
        messageTime: item.messageTime ? new Date(item.messageTime) : null,
        rate: item.rate,
        status: item.status,
        title: item.title,
        user_id: item.user_id,
        user_name: item.user_name,
        email: item.email,
        phone_number: item.phone_number,
      }))
    : [];

  console.log(adminTickets); // Log dữ liệu để kiểm tra

  return (
    <PageContainer title="Quản lý ticket" description="this is page">
      <BannerPage title="Quản lý ticket" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={DataBox} totalColumn={4} />
        </Grid>
        <Grid item xs={12}>
          <Grid container sx={{ alignItems: 'center' }} spacing={2}>
            <Grid item xs={4} sm={4} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                placeholder="Tìm kiếm ticket"
                size="small"
                type="search"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconSearch size="12" />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
              <IconButton aria-label="filter">
                <Badge badgeContent={columns.length - dataSelect.length} color="primary">
                  <FilterListIcon />
                </Badge>
              </IconButton>
              <Select
                multiple
                value={dataSelect}
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
                      '&::-webkit-scrollbar-track': {
                        backgroundColor: '#f1f1f1',
                      },
                    },
                  },
                }}
              >
                <MenuItem>
                  <Checkbox
                    checked={!(dataSelect.length === columns.length)}
                    indeterminate={dataSelect.length > 0 && dataSelect.length < columns.length}
                  />
                  <ListItemText primary="Chọn tất cả" />
                </MenuItem>
                {columns.map((column) => (
                  <MenuItem key={column.dataIndex} value={column.dataIndex}>
                    <Checkbox checked={dataSelect.indexOf(column.dataIndex) > -1} />
                    <ListItemText primary={column.title} />
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
              <DateSelect />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <CustomTable columns={columns} dataSource={dataRows} />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Ticket;
