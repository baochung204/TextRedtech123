import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { IconEye, IconPower, IconSearch } from '@tabler/icons-react';
// import { Dayjs } from 'dayjs';

import React, { useEffect, useMemo, useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
// import PersonnelTable from '../datatable/PersonnelTable';
import DialogPersonel from '../dialog/DialogPersonel';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch, useSelector } from 'react-redux';

// import { fetchStr } from 'src/store/apps/resources/str/strSlice';
import { fetchstaffData } from 'src/store/admin/Staff/Staff';
import { AppDispatch, AppState } from 'src/store/Store';
import DateSelect from 'src/components/apps/date/DateSelect';

interface PropsItem {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedKey: string | null;
  setSelectedKey: React.Dispatch<React.SetStateAction<string | null>>;
}
interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const PersonnelTab = ({ value, open, setOpen, setSelectedKey, selectedKey }: PropsItem) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isCheckFix, setIsCheckFix] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const dataStaff = useSelector((state: AppState) => state.staff.dataa);
  console.log('dataStaff1', dataStaff);

  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  useEffect(() => {
    dispatch(fetchstaffData({ page_no: page, page_size: rowsPerPage }));
  }, [rowsPerPage, page]);

  const handleConnection = (id: string) => {
    setSelectedIds((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id) // Remove if already selected
        : [...prevSelected, id],
    );
  };

  const column = useMemo<Column[]>(
    () => [
      {
        dataIndex: `id`,
        title: 'ID',
      },
      {
        dataIndex: 'ngayTao',
        title: 'Ngày tạo',
        render: (value: any) => new Date(value).toLocaleDateString(),
      },
      {
        dataIndex: 'nhanVien',
        title: 'Nhân viên',
        render: (row: any, value: any) => (
          <Stack direction="row" spacing={2}>
            <Avatar src={value.avt} variant="rounded" alt={value.avt} />
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6">{row}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2">{value.position}</Typography>
              </Grid>
            </Grid>
          </Stack>
        ),
        validate: true,
      },
      { dataIndex: 'phongBan', title: 'Phòng ban' },
      { dataIndex: 'email', title: 'Email' },
      { dataIndex: 'soDienThoai', title: 'Số điện thoại' },
      { dataIndex: 'baiViet', title: 'Bài viết' },
      {
        dataIndex: 'trangThai',
        title: 'Trạng thái',
        validate: true,
        render: (_value: any, row: any) => (
          <Typography color={selectedIds.includes(row.id) ? '#13DEB9' : 'gray'} variant="subtitle2">
            {selectedIds.includes(row.id) ? 'Hoạt động' : 'Tắt'}
          </Typography>
        ),
      },
      {
        dataIndex: 'isActive',
        title: 'Hoạt động',
        render: (_value, row: any) => (
          <>
            <IconButton
              onClick={() => {
                setSelectedKey(row.id);
                setOpen(true);
                setIsCheckFix(true);
              }}
            >
              <IconEye stroke={2} style={{ color: '#5D87FF' }} />
            </IconButton>
            <Tooltip title={selectedIds.includes(row.id) ? 'Hoạt động' : 'Tắt'} placement="top">
              <IconButton onClick={() => handleConnection(row.id)}>
                <IconPower
                  style={{ cursor: 'pointer' }}
                  color={selectedIds.includes(row.id) ? '#13DEB9' : 'gray'}
                />
              </IconButton>
            </Tooltip>
          </>
        ),
      },
    ],
    [selectedIds], // Add dependency here to ensure re-render on state change
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

  console.log('dataselect', dataSelect.length);

  return (
    <>
      {' '}
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
              <Grid item xs={2}>
                <IconButton
                  color="primary"
                  aria-label="Add to cart"
                  onClick={() => {
                    setOpen(true);
                    setSelectedKey(null);
                  }}
                >
                  <AddCircleIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="outlined-search"
                  placeholder="Tìm kiếm nhân viên"
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
      <CustomTable
        columns={column}
        dataSelect={dataSelect}
        dataSource={dataStaff.content}
        count={dataStaff.totalElements}
        rowsPerPage={rowsPerPage}
        page={page}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      />
      <DialogPersonel
        open={open}
        value={value}
        setOpen={setOpen}
        keyOption={selectedKey}
        isCheckFix={isCheckFix}
        setIsCheckFix={setIsCheckFix}
      />
    </>
  );
};

export default PersonnelTab;
