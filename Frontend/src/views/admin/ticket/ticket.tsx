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
  Typography,
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
      <Box textAlign="center" padding={1} sx={{ width: 40, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={ticket} width={30} alt="Ticket" />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Khách hàng',
    total: '1.369',
    icons: (
      <Box textAlign="center" padding={1} sx={{ width: 40, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={customer} width={30} alt="Customer" />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Đánh giá',
    total: '4.7/5',
    icons: (
      <Box textAlign="center" padding={1} sx={{ width: 40, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={rating} width={30} alt="Rating" />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Chưa xử lý',
    total: '236',
    icons: (
      <Box textAlign="center" padding={1} sx={{ width: 40, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={processing} width={30} alt="Processing" />
      </Box>
    ),
  },
];

interface AdminTicket {
  ticketId: string;
  create_date: Date;
  messageTime: Date;
  rate: number;
  status: number;
  title: string;
  user_id: number;
  user_name: string;
  email: string;
  phone_number: string;
}

const getStatusTextAndColor = (status: number) => {
  switch (status) {
    case 0:
      return { text: 'Chưa xử lý', color: 'red' };
    case 1:
      return { text: 'Đang xử lý', color: 'orange' };
    case 2:
      return { text: 'Đã xử lý', color: 'green' };
    default:
      return { text: 'Không xác định', color: 'gray' };
  }
};

const Ticket = () => {
  const dispatch = useDispatch<AppDispatch>();
  const adminTickets = useSelector((state: AppState) => state.adminTicker.result); // Corrected selector name
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(15);
  const [dataSelect, setDataSelect] = useState<string[]>([]);
  // const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<AdminTicket[]>([
    {
      ticketId: '',
      create_date: new Date(),
      messageTime: new Date(),
      rate: 0,
      status: 0,
      title: '',
      user_id: 0,
      user_name: '',
      email: '',
      phone_number: '',
    },
  ]);

  // const handleClick = (items: AdminTicket) => {
  //   setOpen(true);
  //   setData([items]);
  // };

  useEffect(() => {
    dispatch(fetchTicketsData());
  }, [dispatch]);

  // const handleChangePage = (_event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  const columns = useMemo(
    () => [
      { dataIndex: 'ticketId', title: 'ID' },
      { dataIndex: 'create_date', title: 'Thời gian tạo' },
      { dataIndex: 'user_id', title: 'ID Khách hàng' },
      { dataIndex: 'user_name', title: 'Tên Khách hàng' },
      {
        dataIndex: 'messageTime',
        title: 'Tương tác gần đây',
        render: (value: any) => new Date(value).toLocaleDateString(),
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
        render: (status: number) => {
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
      ticketId: item.id,
      create_date: new Date(item.create_at),
      messageTime: new Date(item.message_time),
      rate: item.rate,
      status: item.status,
      title: item.title,
      user_id: item.user_id,
      user_name: item.user_name,
      email: item.email,
      phone_number: item.phone_number,
    }))
    : [];
    console.log(adminTickets)
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
                {columns.map((item, index) => (
                  <MenuItem key={index}>
                    <Checkbox checked={dataSelect.indexOf(item.title) > -1} />
                    <ListItemText primary={item.title} />
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <DateSelect />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <CustomTable
            dataSource={dataRows.map((row) => ({
              ...row,
              key: row.ticketId,
            }))}
            columns={columns}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Ticket;
