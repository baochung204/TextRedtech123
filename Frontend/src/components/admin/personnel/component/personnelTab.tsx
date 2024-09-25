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
import React, { createElement, useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PersonnelTable from '../datatable/PersonnelTable';
import BlankCard from 'src/components/shared/BlankCard';
interface FilmsData {
  dataIndex: string;
  title: string;
  validate: boolean;
}
const FilmsData: any = [
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
    render: () => (
      <>
        <IconButton>
          <IconEye stroke={2} style={{ color: '#5D87FF' }} />
        </IconButton>
        <IconButton>
          <IconTrash stroke={2} style={{ color: '#FA896B' }} />
        </IconButton>
      </>
    ),
  },
];
interface PropsItem {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedKey: string | null;
  setSelectedKey: React.Dispatch<React.SetStateAction<string | null>>;
}

const PersonnelTab = ({ setOpen, setSelectedKey }: PropsItem) => {
  const [iconIndex, setIconIndex] = useState<number>(0);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleItemClick = (id: number) => {
    setSelectedItems((prev: any) =>
      prev.includes(id) ? prev.filter((item: any) => item !== id) : [...prev, id],
    );
  };
  const icons = [SwapVertIcon, SouthIcon, NorthIcon];

  const handleClickIcon = () => {
    setIconIndex((pre) => (pre + 1) % icons.length);
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
            <IconButton aria-label="filter" sx={{ mr: 2 }}>
              <Badge badgeContent={selectedItems.length} color="primary">
                <FilterListIcon />
              </Badge>
            </IconButton>

            <Select
              multiple
              value={selectedItems}
              displayEmpty
              renderValue={(selected) =>
                selected.length === 0 ? 'Sửa đổi cột' : `${selected.length} cột đã chọn`
              }
              size="small"
              sx={{ minWidth: 150 }}
            >
              <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {FilmsData.map((film: any) => (
                  <MenuItem key={film.id} value={film.id} onClick={() => handleItemClick(film.id)}>
                    <Checkbox checked={selectedItems.includes(film.id)} />
                    <ListItemText primary={film.title} />
                  </MenuItem>
                ))}
              </div>
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
      <BlankCard>
        <CustomTable columns={FilmsData} dataSource={PersonnelTable} />
      </BlankCard>
    </>
  );
};

export default PersonnelTab;
