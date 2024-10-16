import FilterListIcon from '@mui/icons-material/FilterList';
import { TabContext, TabPanel } from '@mui/lab';
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
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { IconSearch } from '@tabler/icons-react';
import {ChangeEvent, useEffect, useMemo, useState} from 'react';
import DateSelect from 'src/components/apps/date/DateSelect';
import { Column } from 'src/components/ComponentTables/ColumnInterface';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PageContainer from 'src/components/container/PageContainer';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import BlankCard from 'src/components/shared/BlankCard';
import ChildCard from 'src/components/shared/ChildCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

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


const CustomerListOrder = () => {
  const [month, setMonth] = useState('1');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  const [dataSelect, setDataSelect] = useState<string[]>([]);

  const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '/', title: 'Chuyển đổi' },
  ];

  const columns = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: 'Ngày tạo',
        dataIndex: 'createdAt',
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
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Kênh',
        dataIndex: 'misc',
        render: (value: string) => (
          <Stack direction="row" spacing={1}>
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
      },
      {
        title: 'Tags',
        dataIndex: 'channel',
        render: (value: string) => <Chip color="error" label={value} variant="outlined" />,
      },
      {
        title: 'Giá trị đơn hàng',
        dataIndex: 'pricePoint',

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

  useEffect(() => {
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
                        <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
                          <CustomSelect
                            labelId="month-dd"
                            id="month-dd"
                            size="small"
                            value={month}
                            onChange={handleChange}
                          >
                            <MenuItem value={1}>Tất cả</MenuItem>
                            <MenuItem value={2}>Assistant 1</MenuItem>
                            <MenuItem value={3}>Assistant 2</MenuItem>
                          </CustomSelect>
                        </Grid>

                        <Grid item xs={9}>
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
                        <IconButton aria-label="filter" sx={{ mr: 2 }}>
                          <Badge badgeContent={columns.length - dataSelect.length} color="primary">
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
                          <MenuItem>
                            <Checkbox
                              checked={!(dataSelect.length === columns.length)}
                              indeterminate={dataSelect.length > 0 && dataSelect.length < columns.length}
                              onChange={() => {
                                if (dataSelect.length < columns.length) {
                                  const allColumns = columns.map((header: Column) => header.dataIndex);
                                  setDataSelect(allColumns);
                                } else {
                                  setDataSelect([]);
                                }
                              }}
                            />
                            <ListItemText primary="Chọn tất cả" />
                          </MenuItem>
                          {columns.map((header: Column) => {
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
      {/* <Dialog
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
      </Dialog> */}
    </PageContainer>
  );
};

export default CustomerListOrder;
