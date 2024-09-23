import React, { useState } from 'react';
import CustomTable from './CustomTable';
import PublisherTable from './datatable/Publisher';
import icontext from 'src/assets/images/logos/R-Point.png';
import { Box, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { IconSearch } from '@tabler/icons-react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface PropsTable {
  id: string;
  package: string;
  model: string;
  points: string;
  money: string;
  totalBuy: string;
  function: string;
  strategy: string;
  files: string;
  totalFunction: string;
  createDate: string;
}

const columns = [
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
    title: 'Hành động',
    // dataIndex: 'hanhdong',
    render: (row: PropsTable) => {
      return (
        <Grid container spacing={7}>
          <Grid item xs={6}>
            <Button variant="contained" onClick={() => console.log(row.id)}>
              V
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="error">
              X
            </Button>
          </Grid>
        </Grid>
      );
    },
  },
];

const PublisherTablePage: React.FC = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          paddingY: 3,
        }}
      >
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid item xs={4} sm={4} md={4}>
            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid item xs={12}>
                <TextField
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
                />
              </Grid>
            </Grid>
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
      <Grid item xs={12}>
        <CustomTable columns={columns} dataSource={PublisherTable} />;
      </Grid>
    </Grid>
  );
};

export default PublisherTablePage;
