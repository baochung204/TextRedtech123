// import { Box, Dialog, DialogContent, DialogTitle, Grid } from '@mui/material';
// import Slide from '@mui/material/Slide';
// import { IconAd2, IconEdit, IconEyeOff, IconFileStar } from '@tabler/icons-react';
// import React from 'react';
// import TopCard from 'src/components/widgets/cards/TopCard';
// import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
// import AddBlog from '../blog/_components/AddBlog';
// import PageContainer from './../../../components/container/PageContainer';
// import TableFeature from './_components/TableFeature';

// const BCrumb = [
//   { to: '/', title: 'Trang Chủ' },
//   { to: '/admin/feature', title: 'Danh sách đề xuất' },
// ];


// const dataSource = [
//   {
//     bgColor: 'primary.light',
//     color: 'primary.main',
//     title: 'Đề xuất',
//     total: '190',
//     icons: (
//       <Box
//         bgcolor="primary.main"
//         textAlign="center"
//         padding={1}
//         sx={{
//           width: 45,
//           height: 45,
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <IconAd2 color="white" size={30} />
//       </Box>
//     ),
//   },
//   {
//     bgColor: 'warning.light',
//     color: 'warning.main',
//     title: 'Đánh dấu',
//     total: '190',
//     icons: (
//       <Box
//         bgcolor="warning.main"
//         textAlign="center"
//         padding={1}
//         sx={{
//           width: 45,
//           height: 45,
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <IconFileStar color="white" size={30} />
//       </Box>
//     ),
//   },
//   {
//     bgColor: 'success.light',
//     color: 'success.main',
//     title: 'Chưa xem',
//     total: '123',
//     icons: (
//       <Box
//         bgcolor="success.main"
//         textAlign="center"
//         padding={1}
//         sx={{
//           width: 45,
//           height: 45,
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <IconEyeOff color="white" size={30} />
//       </Box>
//     ),
//   },
//   {
//     bgColor: 'error.light',
//     color: 'error.main',
//     title: 'Cập nhập',
//     total: '23',
//     icons: (
//       <Box
//         bgcolor="error.main"
//         textAlign="center"
//         padding={1}
//         sx={{
//           width: 45,
//           height: 45,
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <IconEdit color="white" size={30} />
//       </Box>
//     ),
//   },
// ];

// const PageFeature = () => {

//   const [isPopupOpen] = React.useState(false);

//   function handleClosePopup(_event: {}): void {
//     throw new Error('Function not implemented.');
//   }

//   return (
//     <PageContainer>
//       <BannerPage title="Đề xuất tính năng" items={BCrumb} />
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <TopCard dataSource={dataSource} totalColumn={4} />
//         </Grid>

//         <Grid item xs={12}>
//           <TableFeature />
//         </Grid>
//       </Grid>

//       {/* Popup Thêm blogs */}
//       <Dialog
//         open={isPopupOpen}
//         onClose={handleClosePopup}
//         fullWidth
//         maxWidth="lg"
//         TransitionComponent={Slide}
//         keepMounted
//       >
//         <DialogTitle padding={'10px'}>Thêm bài viết</DialogTitle>
//         <DialogContent>
//           <AddBlog />
//         </DialogContent>
//       </Dialog>
//     </PageContainer>
//   );
// };

// export default PageFeature;



import { Badge, Box, Checkbox, Dialog, DialogContent, DialogTitle, Grid, IconButton, InputAdornment, ListItemText, MenuItem, Select, TextField } from '@mui/material';
import Slide from '@mui/material/Slide';
import { IconAd2, IconEdit, IconEye, IconEyeOff, IconFileStar, IconSearch, IconTrash } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import AddBlog from '../blog/_components/AddBlog';
import PageContainer from './../../../components/container/PageContainer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import DataFeature from './data/DataFeuture';
import FilterListIcon from '@mui/icons-material/FilterList';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { Dayjs } from 'dayjs';

const BCrumb = [
  { to: '/', title: 'Trang Chủ' },
  { to: '/admin/feature', title: 'Danh sách đề xuất' },
];


const dataSource = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Đề xuất',
    total: '190',
    icons: (
      <Box
        bgcolor="primary.main"
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
        <IconAd2 color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Đánh dấu',
    total: '190',
    icons: (
      <Box
        bgcolor="warning.main"
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
        <IconFileStar color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Chưa xem',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
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
        <IconEyeOff color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Cập nhập',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
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
        <IconEdit color="white" size={30} />
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
const PageFeature = () => {
  const [selectedItems] = useState<number[]>([]);
  const [isPopupOpen] = React.useState(false);
  const column = useMemo<Column[]>(() => [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Ngày tạo', dataIndex: 'createdAt', render: (value: any) => value.toLocaleDateString() },
    { title: 'Họ và tên', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Số điện thoại', dataIndex: 'phone' },
    {
      title: 'Nội dùng đề xuất',
      dataIndex: 'contextFeature',
    },
    { title: 'Trạng thái', dataIndex: 'status' },
    { title: 'Ghi chú', dataIndex: 'note' },
    {
      title: 'Thao tác',
      dataIndex: 'action',
      render: () => (
        <>
          <IconButton>
            <IconEye stroke={2} style={{ color: '#b1ffb3' }} />
          </IconButton>
          <IconButton>
            <IconEdit stroke={2} style={{ color: '#5D87FF' }} />
          </IconButton>
          <IconButton>
            <IconTrash stroke={2} style={{ color: '#5D87FF' }} />
          </IconButton>
        </>
      ),
    },
  ], [])
  const [dataSelect, setDataSelect] = useState<string[]>([]);
  const [value, setValue] = useState<Dayjs | null>(null);
  const [value1, setValue1] = useState<Dayjs | null>(null);
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

  function handleClosePopup(_event: {}): void {
    throw new Error('Function not implemented.');
  }

  return (
    <PageContainer>
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
                <Grid item >
                  <IconButton
                    color="primary"
                    aria-label="Add to cart"
                  // onClick={() => setOpen(true)}

                  >
                    <AddCircleIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Grid>
                <Grid item >
                  <TextField
                    id="outlined-search"
                    placeholder="Tìm kiếm trợ lý"
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

            </Grid>
            <Grid item xs={4}>
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
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <CustomTable columns={column} dataSource={DataFeature} dataSelect={dataSelect} />
        </Grid>
      </Grid>

      {/* Popup Thêm blogs */}
      <Dialog
        open={isPopupOpen}
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
