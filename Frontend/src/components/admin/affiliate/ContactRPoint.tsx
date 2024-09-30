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
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  IconDevicesCancel,
  IconFileText,
  IconPencilDollar,
  IconPencilSearch,
  IconSearch,
} from '@tabler/icons-react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import TopCard from 'src/components/widgets/cards/TopCard';
import { DataContactPointTable } from './datatable/OrderTableData';
import React, { useEffect, useMemo, useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Dayjs } from 'dayjs';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

const dataSource = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Hợp đồng',
    total: '190',
    icons: (
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
        <IconFileText color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Từ chối',
    total: '190',
    icons: (
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
        <IconDevicesCancel color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Đã ký',
    total: '123',
    icons: (
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
        <IconPencilDollar color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Chờ ký',
    total: '23',
    icons: (
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
        <IconPencilSearch color="white" size={30} />
      </Box>
    ),
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Đã ký':
      return 'success'; // Green for approved
    case 'Chờ ký':
      return 'warning'; // Yellow for pending approval
    case 'Từ chối':
      return 'error'; // Red for rejected
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

const ContactRPoint = () => {
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);

  const column = useMemo<Column[]>(
    () => [
      {
        title: 'Mã hợp đồng',
        dataIndex: 'id_contract',
      },

      {
        title: 'Mã khách hàng',
        dataIndex: 'id_customer',
      },
      {
        title: 'Ngày tạo',
        dataIndex: 'createdate',
      },

      {
        title: 'Ngày ký',
        dataIndex: 'confirmdate',
      },
      {
        title: 'Loại tài khoản',
        dataIndex: 'type_company',
        render: (_row: any, value: any) => (
          <Typography style={{ width: '150px' }} variant="subtitle2">
            <Chip
              label={value.type_company ? 'Doanh nghiệp' : 'Cá nhân'}
              color={value.type_company ? 'success' : 'warning'}
              variant="outlined"
            />
          </Typography>
        ),
      },
      {
        title: 'Tên công ty',
        dataIndex: 'name_company',
      },
      {
        title: 'Mã số thuế',
        dataIndex: 'tax_code',
      },
      {
        title: 'Địa chỉ',
        dataIndex: 'address',
      },
      {
        title: 'Người đại diện',
        dataIndex: 'representative',
      },
      {
        title: 'Chức vụ',
        dataIndex: 'position',
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'phone_number',
      },
      {
        title: 'Email công ty',
        dataIndex: 'email',
      },
      {
        title: 'Trạng thái',
        dataIndex: 'status',
        render: (_row, value: any) => (
          <Typography style={{ width: '100px' }} variant="subtitle2">
            <Chip label={value.status} color={getStatusColor(value.status)} />
          </Typography>
        ),
      },
      {
        title: 'Duyệt hồ sơ',
        dataIndex: 'duyet',
        // render: (_row:any, value: any) => (
        render: () => (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Checkbox defaultChecked />
          </Box>
        ),
      },
      {
        title: 'Hợp đồng',
        dataIndex: 'hopdong',
        // render: (row, value: any) => (
        render: () => (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button style={{ width: '100px' }}>Ký ngay</Button>
          </Box>
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
                  <Grid item xs={12}>
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
          <CustomTable
            columns={column}
            dataSource={DataContactPointTable}
            dataSelect={dataSelect}
          />
          ;
        </Grid>
      </Grid>
    </>
  );
};

export default ContactRPoint;
