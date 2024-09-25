import { Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconEdit, IconEye, IconSearch, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import DataFeature from '../data/DataFeuture';
import BlankCard from 'src/components/shared/BlankCard';
import { render } from 'react-dom';
const FilmsData: any = [
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
    render: (value: any) => (
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
];

const TableFeature = () => {
  // const handleChangePage = (newPage: number) => {
  //     setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setRowsPerPage(parseInt(event.target.value, 10));
  //     setPage(0);
  // };
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <>
      {' '}
      <Grid item xs={12} my={'10px'}>
        <Grid container alignItems="center">
          <Grid item xs={4}>
            <TextField
              id="outlined-search"
              placeholder="Tìm kiếm đề xuất tính năng "
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
              fullWidth
            />
          </Grid>
          <Grid item xs={8} container spacing={2} justifyContent="flex-end" alignItems={'center'}>
            <Grid item>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Ngày bắt đầu"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item>
              <Typography sx={{ margin: '0 10px' }}>tới</Typography>
            </Grid>
            <Grid item>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Ngày kết thúc"
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <BlankCard>
        <CustomTable columns={FilmsData} dataSource={DataFeature} />
      </BlankCard>
    </>
  );
};

export default TableFeature;
