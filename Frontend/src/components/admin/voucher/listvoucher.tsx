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

interface DataRow {
  id: string;
  startDate: string;
  name: string;
  endDate: string;
  code: string;
  totalCoupon: number;
  type: string;
  valueCoupon: string;
  status: boolean;
  totalUsed: number;
}

const dataRows: DataRow[] = [
  {
    id: 'MA001',
    startDate: '2024-09-01',
    name: 'Sản phẩm mới',
    endDate: '2024-09-03',
    code: 'JDEwJG5zZ3J1c2',
    totalCoupon: 234,
    type: 'Đồng',
    valueCoupon: '19.000 đ',
    status: true,
    totalUsed: 23,
  },
  {
    id: 'MA002',
    startDate: '2024-09-02',
    name: 'Mã giảm giá',
    endDate: '2025-10-12',
    code: 'DFG3554F3TT4F',
    totalCoupon: 680,
    type: 'Đồng',
    valueCoupon: '99.000 đ',
    status: true,
    totalUsed: 41,
  },
  {
    id: 'MA003',
    startDate: '2024-09-03',
    name: 'khách hàng thân thiết',
    endDate: '2024-09-03',
    code: 'DG335534TTGGE',
    totalCoupon: 32,
    type: 'Phần trăm',
    valueCoupon: '10%',
    status: false,
    totalUsed: 21,
  },
  {
    id: 'MA004',
    startDate: '2024-09-04',
    name: 'mini-game',
    endDate: '2024-09-03',
    code: '44FV43TG4V34G',
    totalCoupon: 54,
    type: 'Phần trăm',
    valueCoupon: '10%',
    status: true,
    totalUsed: 3,
  },
  {
    id: 'MA005',
    startDate: '2024-09-05',
    name: ' sự kiện',
    endDate: '2024-09-03',
    code: 'DGH34T53167D5',
    totalCoupon: 23,
    type: 'Phần trăm',
    valueCoupon: '20%',
    status: false,
    totalUsed: 7,
  },
  {
    id: 'MA006',
    startDate: '2024-09-06',
    name: 'khách hàng thân thiết',
    endDate: '2024-09-03',
    code: 'RH56YH563226TYB',
    totalCoupon: 424,
    type: 'Phần trăm',
    valueCoupon: '10%',
    status: false,
    totalUsed: 23,
  },
];

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const ListVoucher = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCheckSwitchIds, setIsCheckSwitchIds] = useState<string[]>([]);
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
      },
      {
        title: 'Hạn sửa dụng',
        dataIndex: 'endDate',
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
          return <Chip label={value} color={value === 'Đồng' ? 'primary' : 'secondary'} />;
        },
      },
      {
        title: 'Giá trị giảm',
        dataIndex: 'valueCoupon',
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
        dataIndex: 'statuss',
        render: (_value: any, row: any) => (
          <CustomSwitch
            color="primary"
            checked={isCheckSwitchIds.includes(row.id)}
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
      {' '}
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
        <CustomTable columns={column} dataSource={dataRows} dataSelect={dataSelect} />
      </Grid>
      <AddDialogvoucher isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
    </>
  );
};

export default ListVoucher;
