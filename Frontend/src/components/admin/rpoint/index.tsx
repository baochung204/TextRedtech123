import React, { useEffect, useMemo, useState } from 'react';
// import CustomTable from './CustomTable';
import {
  Badge,
  Box,
  Checkbox,
  Fab,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconEye, IconPlus, IconSearch, IconTrash } from '@tabler/icons-react';
import icontext from 'src/assets/images/logos/R-Point.png';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PublisherTable from './datatable/Publisher';
import FilterListIcon from '@mui/icons-material/FilterList';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { Dayjs } from 'dayjs';

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const PublisherTablePage: React.FC = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: 'Tên gói',
        dataIndex: 'package',
      },
      {
        title: 'Model',
        dataIndex: 'model',
      },
      {
        title: 'Số Points',
        dataIndex: 'points',
        render: (value: string) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {value}
            <img src={icontext} alt="" width={20} />
          </Box>
        ),
      },
      {
        title: 'Giá tiền',
        dataIndex: 'money',
        render: (value: string) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>{value} VNĐ</Box>
        ),
      },
      {
        title: 'Số lượt mua',
        dataIndex: 'totalBuy',
      },
      {
        title: 'Chức năng',
        dataIndex: 'function',
      },
      {
        title: 'Chiến lược',
        dataIndex: 'strategy',
      },
      {
        title: 'Tổng files',
        dataIndex: 'files',
      },
      {
        title: 'Tổng chức năng',
        dataIndex: 'totalFunction',
      },
      {
        title: 'Ngày tạo',
        dataIndex: 'createDate',
      },
      {
        dataIndex: 'isActive',
        title: 'Hoạt động',
        validate: true,
        render: () => (
          <>
            <IconButton
              onClick={() => {
                // setSelectedKey(row.id);
                // setOpen(true);
                // setIsCheckFix(true);
              }}
            >
              <IconEye stroke={2} style={{ color: '#5D87FF' }} />
            </IconButton>
            <IconButton>
              <IconTrash stroke={2} style={{ color: '#FA896B' }} />
            </IconButton>
          </>
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
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          paddingBottom: 3,
        }}
      >
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid item xs={4} sm={4} md={4}>
            {/* <TextField
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
            /> */}
            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Thêm gói R-Point" sx={{ mb: '15px' }}>
                  {/* <AddDialogvoucher /> */}

                  <Fab size="small" color="primary" aria-label="plus" sx={{ my: 'auto' }}>
                    <IconPlus width={18} />
                  </Fab>
                </Tooltip>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="outlined-search"
                  placeholder="Tìm kiếm mã khuyến mại"
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
      <Grid item xs={12}>
        <CustomTable columns={column} dataSource={PublisherTable} dataSelect={dataSelect} />
      </Grid>
    </Grid>
  );
};

export default PublisherTablePage;
