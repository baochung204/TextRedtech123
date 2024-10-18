// src/pages/PageFeature.tsx

import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Badge,
  Box,
  Checkbox,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import Slide from '@mui/material/Slide';
import { IconEye, IconSearch } from '@tabler/icons-react';

import React, { useEffect, useMemo, useState } from 'react';
import update from 'src/assets/DeXuatTinhNang/cap nhap.png';
import seen from 'src/assets/DeXuatTinhNang/chua xem.png';
import mark from 'src/assets/DeXuatTinhNang/danh dau.png';
import suggest from 'src/assets/DeXuatTinhNang/de xuat.png';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import AddBlog from '../blog/_components/AddBlog';
import PageContainer from './../../../components/container/PageContainer';
import DataFeature from './data/DataFeuture';
import DialogFeature from './dialog/DialogFeature';

const BCrumb = [
  { to: '/', title: 'Trang Chủ' },
  { to: '/admin/feature', title: 'Danh sách đề xuất' },
];

const dataSource = [
  {
    bgColor: 'primary.light',
    title: 'Đề xuất',
    total: '190',
    icons: (
      <Box
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
        <img src={suggest} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Đánh dấu',
    total: '190',
    icons: (
      <Box
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
        <img src={mark} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Chưa xem',
    total: '123',
    icons: (
      <Box
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
        <img src={seen} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Cập nhập',
    total: '23',
    icons: (
      <Box
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
        <img src={update} width={30} />
      </Box>
    ),
  },
];

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

interface FeatureItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  contextFeature: string;
}
const getStatusColor = (status: number) => {
  switch (status) {
    case 1:
      return 'success';
    case 2:
      return 'warning';
    case 3:
      return 'error';
    case 4:
      return 'primary';
    default:
      return 'default';
  }
};
const PageFeature = () => {
  //   const [isPopupOpen] = React.useState(false);
  //   const column = useMemo<Column[]>(

  const [open, setOpen] = useState<boolean>(false);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [isCheckFix, setIsCheckFix] = useState<boolean>(false);

  const column: Column[] = useMemo(
    () => [
      { title: 'ID', dataIndex: 'id' },
      {
        title: 'Ngày tạo',
        dataIndex: 'createdAt',
        render: (value: any) => value.toLocaleDateString(),
      },
      { title: 'Họ và tên', dataIndex: 'name' },
      { title: 'Email', dataIndex: 'email' },
      { title: 'Số điện thoại', dataIndex: 'phone' },
      // {
      //   title: 'Nội dung đề xuất',
      //   dataIndex: 'contextFeature',
      // },
      {
        title: 'Trạng thái',
        dataIndex: 'status',
        render: (value: any) => (
          <Chip
            label={
              value === 1
                ? 'Đã xem'
                : value === 2
                  ? 'Đanh dấu'
                  : value === 3
                    ? 'Updated'
                    : value === 4
                      ? 'Chưa xem'
                      : ''
            }
            color={getStatusColor(value)}
          />
        ),
      },
      // { title: 'Ghi chú', dataIndex: 'note' },
      {
        title: 'Thao tác',
        dataIndex: 'action',
        render: (_value: any, row: FeatureItem) => (
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

  function handleClosePopup(_event: {}): void {
    // Implement if needed
  }

  return (
    <PageContainer title="Đề xuất tính năng">
      <BannerPage title="Đề xuất tính năng" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={dataSource} totalColumn={4} />
        </Grid>
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
                    placeholder="Tìm kiếm tình năng"
                    type="search"
                    variant="outlined"
                    inputProps={{ 'aria-label': 'Search Followers' }}
                    sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconSearch size={12} />
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
          <CustomTable columns={column} dataSource={DataFeature} dataSelect={dataSelect} />
          <DialogFeature
            open={open}
            value="1" // Ensure this value matches the condition in DialogFeature
            setOpen={setOpen}
            keyOption={selectedKey}
            setIsCheckFix={setIsCheckFix}
            isCheckFix={isCheckFix}
          />
        </Grid>
      </Grid>

      {/* Popup Thêm blogs */}
      <Dialog
        open={false} // Set to true to test
        onClose={handleClosePopup}
        fullWidth
        maxWidth="lg"
        TransitionComponent={Slide}
        keepMounted
      >
        <DialogTitle padding={'10px'}>Thêm bài viết</DialogTitle>
        <DialogContent>
          <AddBlog />
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
};

export default PageFeature;
