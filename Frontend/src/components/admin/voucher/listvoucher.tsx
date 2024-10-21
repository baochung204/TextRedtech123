import AddCircleIcon from '@mui/icons-material/AddCircle';
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
import React, { useEffect, useMemo, useState } from 'react';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import CustomSwitch from 'src/components/forms/theme-elements/CustomSwitch';
import AddDialogvoucher from './add/addDialog';
import { useSelector } from 'react-redux';
import { AppState, dispatch } from 'src/store/Store';
import { fetchCounponListData } from 'src/store/admin/counpon/counponlist/table/counponlistSlice';

interface DataRow {
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

// hello

const ListVoucher = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCheckSwitchIds, setIsCheckSwitchIds] = useState<string[]>([]);
  const counponList = useSelector((state: AppState) => state.counpon_list.dataa);

  const [counponListData, setCounponListData] = useState<DataRow[]>([]);

  useEffect(() => {
    dispatch(fetchCounponListData());
  }, [dispatch]);

  useEffect(() => {
    if (counponListData !== counponList.content) {
      setCounponListData(counponList.content);
    }
  }, [counponListData, counponList]);

  console.log(counponListData);

  const handleCheckSwitch = (id: string) => {
    setIsCheckSwitchIds((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id)
        : [...prevSelected, id],
    );
  };
  const column = useMemo<Column[]>(
    () => [
      {
        title: 'Tên chiến dịch',
        dataIndex: 'name',
      },
      {
        title: 'Ngày tạo',
        dataIndex: 'startDate',
        render: (value: string) => {
          const formattedDate = value.split('T')[0]; // Extract the date part
          return formattedDate;
        },
      },
      {
        title: 'Hạn sửa dụng',
        dataIndex: 'endDate',
        render: (value: string) => {
          const formattedDate = value.split('T')[0]; // Extract the date part
          return formattedDate;
        },
      },
      {
        title: 'Mã khuyến mãi',
        dataIndex: 'code',
      },
      {
        title: 'Số lượng mã',
        dataIndex: 'totalCoupon',
      },
      {
        title: 'Đã sử dụng',
        dataIndex: 'totalUsed',
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
        dataIndex: 'valueCoupon',
        render: (value: number) => {
          const formattedValue = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(value);
          return formattedValue;
        },
      },
      {
        title: 'Trạng thái',
        dataIndex: 'status',
        render: (_value, row) => {
          const isActive = isCheckSwitchIds.includes(row.id);
          return (
            <Chip label={isActive ? 'Hoạt động' : 'Ẩn'} color={isActive ? 'success' : 'error'} />
          );
        },
      },
      {
        id: 'statusAction',
        title: 'Thao tác',
        dataIndex: 'open',
        render: (_value: any, row: any) => (
          <CustomSwitch
            color="primary"
            // checked={isCheckSwitchIds.includes(row.id)}
            checked={open}
            onChange={() => handleCheckSwitch(row.id)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        ),
      },
    ],
    [isCheckSwitchIds],
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
        <Grid container sx={{ alignItems: 'center', mt: '1px' }} spacing={2}>
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
              <Grid item>
                <IconButton
                  color="primary"
                  aria-label="Add to cart"
                  onClick={() => setIsPopupOpen(true)}
                >
                  <AddCircleIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-search"
                  placeholder="Tìm kiếm mã khuyến mãi"
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
        <CustomTable columns={column} dataSource={counponListData} dataSelect={dataSelect} />
      </Grid>
      <AddDialogvoucher isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
    </>
  );
};

export default ListVoucher;
