import FilterListIcon from '@mui/icons-material/FilterList';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {
  Avatar,
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
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconEye, IconPlus, IconSearch, IconTrash } from '@tabler/icons-react';
import React, { createElement, useEffect, useMemo, useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PersonnelTable from '../datatable/PersonnelTable';
import DialogPersonel from '../dialog/DialogPersonel';
// import DialogPersonel from '../dialog/DialogPersonel';

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
  const [iconIndex, setIconIndex] = useState<number>(0);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [isCheckFix, setIsCheckFix] = useState<boolean>(false);

  const icons = [SwapVertIcon, SouthIcon, NorthIcon];
  const handleClickIcon = () => {
    setIconIndex((pre) => (pre + 1) % icons.length);
  };
  const column = useMemo<Column[]>(() => [
    { dataIndex: 'id', title: 'ID', validate: true },
    {
      dataIndex: 'createdAt',
      title: 'Ngày tạo',
      render: (value: any) => value.toLocaleDateString(),
      validate: true,
    },
    {
      dataIndex: 'employeeName',
      title: 'Nhân viên',
      render: (row: any, value: any) => (
        <>
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
        </>
      ),

      validate: true,
    },
    { dataIndex: 'department', title: 'Phòng ban', validate: true },
    { dataIndex: 'email', title: 'Email', validate: true },
    { dataIndex: 'phoneNumber', title: 'Số điện thoại', validate: true },
    { dataIndex: 'articleCount', title: 'Bài viết', validate: true },
    {
      dataIndex: 'status',
      title: 'Trạng thái',
      validate: true,

      render: (value: any) => (
        <>
          {value ? (
            <Typography color="success.dark" variant="subtitle2">
              Hoạt động
            </Typography>
          ) : (
            <Typography color="error" variant="subtitle2">
              Khóa
            </Typography>
          )}
        </>
      ),
    },
    {
      dataIndex: 'isActive',
      title: 'Hoạt động',
      validate: true,
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
          <IconButton>
            <IconTrash stroke={2} style={{ color: '#FA896B' }} />
          </IconButton>
        </>
      ),
    },
  ], [])

  const [dataSelect, setDataSelect] = useState<string[]>([]);

  useEffect(() => {
    const selectedColumns = column || [];
    const hasIsValids = selectedColumns.some(col => col.isValids !== undefined);
    if (hasIsValids) {
      const hiddenColumns = selectedColumns
        .filter(col => col.isValids === false)
        .map(col => col.dataIndex || '');
      setDataSelect(hiddenColumns);
    } else {
      setDataSelect([]);
    }
  }, [column]);

  const handleColumnChange = (event: any) => {
    const { target: { value } } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <>
      {' '}
      <Grid item xs={12}>
        <Grid container>
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
            <Grid container spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid item>
                <IconButton
                  color="primary"
                  aria-label="Add to cart"
                  onClick={() => {
                    setOpen(true);
                    setSelectedKey(null);
                  }}
                  sx={{
                    pr: 0,
                  }}
                >
                  <Tooltip title="Thêm nhân viên mới" sx={{ mb: '15px' }}>
                    <Fab
                      size="small"
                      color="secondary"
                      aria-label="plus"
                      sx={{ my: 'auto', mr: '10px' }}
                    >
                      <IconPlus width={18} />
                    </Fab>
                  </Tooltip>
                </IconButton>
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-search"
                  placeholder="Tìm kiếm nhân viên "
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
            <Badge
              badgeContent={dataSelect.length !== 0 && dataSelect.length}
              color={dataSelect.length !== 0 ? 'primary' : undefined}
              sx={{ marginRight: 2 }}
            >

              <FilterListIcon color="action" />
            </Badge>
            <Select
              multiple
              value={dataSelect}
              displayEmpty
              onChange={handleColumnChange}
              renderValue={() => 'Sửa đổi cột'}
              size='small'
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

                console.log(`check ${header.title}`, dataSelect.includes(header.dataIndex))

                const isSelected = dataSelect.includes(header.dataIndex);

                return (
                  <MenuItem key={header.dataIndex} value={header.dataIndex}>
                    <Checkbox checked={!isSelected} />
                    <ListItemText primary={header.title} />
                  </MenuItem>
                );
              })}
            </Select>

            <IconButton
              aria-label="filter"
              onClick={handleClickIcon}
              sx={{
                ml: 1,
              }}
            >
              {createElement(icons[iconIndex])}
            </IconButton>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
      <CustomTable
        columns={column}
        dataSource={PersonnelTable}
        dataSelect={dataSelect} />
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
