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

import FilterListIcon from '@mui/icons-material/FilterList';
import { IconSearch } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { AppState, dispatch, useSelector } from 'src/store/Store';
import { fetchCounponHistoryData } from 'src/store/admin/counpon/counponhistory/table/counponthistorySlice';

interface DataRow2 {
  orderVndId: number;
  vndCouponName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  type: string;
  valueCoupon: number | null;
  percentCoupon: number | null;
  value: string;
}

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}
const HistoryVoucher = () => {
  const historyvoucher = useSelector((state: AppState) => state.counpon_history.dataa);

  const [historyVoucherData, setHistoryVoucherData] = useState<DataRow2[]>([]);

  useEffect(() => {
    dispatch(fetchCounponHistoryData());
  }, [dispatch]);

  useEffect(() => {
    if (historyVoucherData !== historyvoucher.content) {
      setHistoryVoucherData(historyvoucher.content);
    }
  }, [historyVoucherData, historyvoucher]);

  console.log(historyVoucherData);
  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID đơn hàng',
        dataIndex: 'orderVndId',
      },
      {
        title: 'Tên chiến dịch',
        dataIndex: 'vndCouponName',
      },
      {
        title: 'Khách hàng',
        dataIndex: 'userName',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'phoneNumber',
      },
      {
        title: 'Loại giảm giá',
        dataIndex: 'type',
        render: (value: any) => {
          const label = value === 'VALUE' ? 'đ' : '%';
          return (
            <Chip
              label={label}
              sx={{
                color: 'white',
                backgroundColor: value === 'VALUE' ? 'success.main' : 'error.main',
              }}
            />
          );
        },
      },
      {
        title: 'Giá trị giảm',
        dataIndex: 'value',
        render: (value: number) => {
          const formattedValue = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(value);
          return formattedValue;
        },
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
      <Grid item xs={12}>
        <Grid container sx={{ alignItems: 'center' }} spacing={2}>
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Grid container sx={{ alignItems: 'center' }}>
              <Grid item xs={10}>
                <TextField
                  id="outlined-search"
                  placeholder="Tìm kiếm lịch sử"
                  size="small"
                  type="search"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Search Followers' }}
                  sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconSearch size="12" />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth={true}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
            }}
          >
            <IconButton aria-label="filter" sx={{ mr: 2 }}>
              <Badge badgeContent={column.length - dataSelect.length} color="primary">
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
                  checked={!(dataSelect.length === column.length)}
                  indeterminate={dataSelect.length > 0 && dataSelect.length < column.length}
                  onChange={() => {
                    if (dataSelect.length < column.length) {
                      const allColumns = column.map((header: Column) => header.dataIndex);
                      setDataSelect(allColumns);
                    } else {
                      setDataSelect([]);
                    }
                  }}
                />
                <ListItemText primary="Chọn tất cả" />
              </MenuItem>
              {column.map((header: Column) => {
                const isSelected = !dataSelect.includes(header.dataIndex);
                return (
                  <MenuItem key={header.dataIndex} value={header.dataIndex}>
                    <Checkbox checked={isSelected} />
                    <ListItemText primary={header.title} />
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <DateSelect />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <CustomTable columns={column} dataSource={historyVoucherData} dataSelect={dataSelect} />
      </Grid>
    </>
  );
};

export default HistoryVoucher;
