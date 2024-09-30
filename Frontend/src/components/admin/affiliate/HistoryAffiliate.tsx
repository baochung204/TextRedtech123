import {
  Badge,
  Box,
  Button,
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
import {
  IconBrandCashapp,
  IconBrandGumroad,
  IconChartArcs,
  IconNumber,
  IconSearch,
} from '@tabler/icons-react';
import FilterListIcon from '@mui/icons-material/FilterList';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useEffect, useMemo, useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import TopCard from 'src/components/widgets/cards/TopCard';
// import HistoryTable from './component/HistoryTable';
import { DataHistoryTable } from './datatable/OrderTableData';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { Dayjs } from 'dayjs';
const dataSource = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Số ưu cầu',
    total: '1907',
    icons: (
      <>
        <Box
          bgcolor="primary.main"
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
          <IconNumber color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Số tiền rút',
    total: '190.720.030đ',
    icons: (
      <>
        <Box
          bgcolor="warning.main"
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
          <IconBrandCashapp color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Đã xử lý',
    total: '123.406.789đ',
    icons: (
      <>
        <Box
          bgcolor="success.main"
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
          <IconBrandGumroad color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Chờ xử lý',
    total: '123.406.789đ',
    icons: (
      <>
        <Box
          bgcolor="error.main"
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
          <IconChartArcs color="white" size={30} />
        </Box>
      </>
    ),
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Chờ duyệt':
      return 'warning'; // Yellow or custom color
    case 'Từ chối':
      return 'error'; // Red or custom color
    case 'Đã đi tiền':
      return 'success'; // Green or custom color
    default:
      return 'default'; // Gray or default color
  }
};
interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const HistoryAffiliate = () => {
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);

  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID thanh toán',
        dataIndex: 'id_checkout',
      },

      {
        title: 'Khách hàng',
        dataIndex: 'name_publisher',
      },
      {
        title: 'Ngày yêu cầu',
        dataIndex: 'date_request',
      },
      {
        title: 'Ngày hoàn tất',
        dataIndex: 'date_done',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'SĐT',
        dataIndex: 'phone_number',
      },
      {
        title: 'Số tiền rút',
        dataIndex: 'bank_amount',
      },
      {
        title: 'Số tài khoản',
        dataIndex: 'bank_number',
      },
      {
        title: 'Ngân hàng',
        dataIndex: 'bank_name',
      },
      {
        title: 'Chủ tài khoản',
        dataIndex: 'own_bank',
      },
      {
        title: 'Chi nhánh',
        dataIndex: 'branch',
      },

      {
        title: 'Hóa đơn',
        dataIndex: 'vat',
        // render: (row: any, value: any) => <Button>Tải xuống</Button>,
        render: () => <Button color="success">Tải Xuống</Button>,
      },
      {
        title: 'Trạng thái',
        dataIndex: '',
        render: (_row: any, value: any) => (
          <Typography variant="subtitle2">
            <Chip label={value.status} color={getStatusColor(value.status)} />
          </Typography>
        ),
      },
      {
        title: 'Duyệt hóa đơn',
        dataIndex: '',
        // render: (_row:any, value: any) => (
        render: () => (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Checkbox defaultChecked />
          </Box>
        ),
      },
      {
        title: 'Đã thanh toán',
        dataIndex: '',
        // render: (row, value: any) => (
        render: () => (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Checkbox defaultChecked />
          </Box>
        ),
      },
      {
        title: 'Thông báo',
        dataIndex: '',
        // render: (row, value: any) => <Button>Gửi email</Button>,
        render: () => <Button>Gửi email</Button>,
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
  const [value, setValue] = useState<Dayjs | null>(null);
  const [value1, setValue1] = useState<Dayjs | null>(null);
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
                <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item xs={7}>
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
                </Grid>
              </Grid>

              <Grid item xs={7}>
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
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(props) => (
                          <CustomTextField
                            {...props}
                            fullWidth
                            size="small"
                            sx={{
                              '& .MuiSvgIcon-root': {
                                width: '18px',
                                height: '18px',
                              },
                              '& .MuiFormHelperText-root': {
                                display: 'none',
                              },
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                    tới
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        value={value1}
                        onChange={(newValue) => {
                          setValue1(newValue);
                        }}
                        renderInput={(props) => (
                          <CustomTextField
                            {...props}
                            fullWidth
                            size="small"
                            sx={{
                              '& .MuiSvgIcon-root': {
                                width: '18px',
                                height: '18px',
                              },
                              '& .MuiFormHelperText-root': {
                                display: 'none',
                              },
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <CustomTable columns={column} dataSource={DataHistoryTable} dataSelect={dataSelect} />
        </Grid>
      </Grid>
    </>
  );
};

export default HistoryAffiliate;
