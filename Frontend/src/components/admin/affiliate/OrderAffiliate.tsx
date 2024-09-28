import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  Chip,
  Grid,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { IconBox, IconChartBar, IconSearch, IconZoomMoney } from '@tabler/icons-react';
import RPoint from 'src/assets/images/logos/R-Point.png';
import TopCard from 'src/components/widgets/cards/TopCard';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { DataAffiliateTable } from './datatable/OrderTableData';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useEffect, useMemo, useState } from 'react';
import Point from 'src/assets/images/icon.png/point.png';
import FilterListIcon from '@mui/icons-material/FilterList';

const dataSource = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Đơn hàng',
    total: '1907',
    icons: (
      <>
        <Box
          bgcolor="primary.main"
          textAlign="center"
          padding={1}
          sx={{
            width: 45,
            height: 45,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconBox color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'R-Point',
    total: '190.720.030',
    icons: (
      <>
        <Box
          bgcolor="warning.main"
          textAlign="center"
          padding={1}
          sx={{
            width: 45,
            height: 45,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <IconWashDrycleanOff color="white" size={30} /> */}{' '}
          <img src={RPoint} alt="RPoint" style={{ width: '24px', height: '24px' }} />,
        </Box>
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Doanh thu',
    total: '123.456.789đ',
    icons: (
      <Box
        bgcolor="success.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconChartBar color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Hoa hồng',
    total: '123.456.789đ',
    icons: (
      <Box
        bgcolor="error.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconZoomMoney color="white" size={30} />
      </Box>
    ),
  },
];

const getStatusAccountColor = (status: string) => {
  switch (status) {
    case 'Hoạt động':
      return 'success'; // Green for approved
    case 'Chờ duyệt':
      return 'warning'; // Yellow for pending approval
    case 'Từ chối':
      return 'error'; // Red for rejected
    case 'Chưa đăng ký':
      return 'default'; // Gray for not yet sent
    default:
      return 'default'; // Gray for any unrecognized status
  }
};
interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}
const OrderAffiliate = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID đơn hàng',
        dataIndex: 'id_order',
      },

      {
        title: 'ID Publisher',
        dataIndex: 'id_publisher',
      },
      {
        title: 'Ngày mua',
        dataIndex: 'createdate',
      },
      {
        title: 'Tên Publisher',
        dataIndex: 'name_publisher',
      },
      {
        title: 'Email Publisher',
        dataIndex: 'email_publisher',
      },
      {
        title: 'SĐT Publisher',
        dataIndex: 'phonenumber_publisher',
      },
      {
        title: 'Khách hàng',
        dataIndex: 'number',

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
              {value.name_customer}
            </Typography>
          </Box>
        ),
      },
      {
        title: 'Email',
        dataIndex: 'email_customer',
      },
      {
        title: 'SDT',
        dataIndex: 'phonenumber_customer',
      },
      {
        title: 'Tên gói nạp',
        dataIndex: 'package',
      },
      {
        title: 'Số point',
        dataIndex: 'branch',

        render: (_row: any, value: any) => (
          <Box sx={{ display: 'flex' }}>
            <Typography variant="subtitle2">{value.numberpoint}</Typography>
            <img style={{ width: '20px', height: '20px' }} src={Point} />
          </Box>
        ),
      },
      {
        title: 'Giá trị đơn hàng',
        dataIndex: 'value',
      },
      {
        title: 'Hoa hồng',
        dataIndex: 'commission',
      },
      {
        title: 'Trạng thái',
        dataIndex: '',
        render: (_row: any, value: any) => (
          <Chip label={value.status} color={getStatusAccountColor(value.status)} />
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
          <Grid item xs={12}>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid item xs={4} sm={4} md={4}>
                <TextField
                  id="outlined-search"
                  placeholder="Tìm kiếm thông báo"
                  size="small"
                  type="search"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Search Followers' }}
                  sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconSearch size="20" />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth={true}
                />
              </Grid>

              <Grid item xs={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Badge
                    badgeContent={dataSelect.length !== 0 && dataSelect.length}
                    color={dataSelect.length !== 0 ? 'primary' : undefined}
                  >
                    <FilterListIcon color="action" />
                  </Badge>
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
                    {column.map((header: any) => {
                      console.log(`check ${header.title}`, dataSelect.includes(header.dataIndex));

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
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <Typography>tới</Typography>
                    <DatePicker
                      value={selectedEndDate}
                      onChange={setSelectedEndDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <CustomTable columns={column} dataSource={DataAffiliateTable} dataSelect={dataSelect} />
        </Grid>
      </Grid>
    </>
  );
};

export default OrderAffiliate;
