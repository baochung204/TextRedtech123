import { Box, Grid } from '@mui/material';

import React from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import dayjs, { Dayjs } from 'dayjs';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { tabledh } from 'src/components/tables/tabledh';
import CustomSelect from './../../../components/forms/theme-elements/CustomSelect';

const columns = [
  {
    title: 'STT',
    dataIndex: 'id',
  },
  {
    title: 'Mã đơn hàng',
    dataIndex: 'MHD',
  },
  {
    title: 'Khách hàng',
    dataIndex: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
  },
  {
    title: 'Ngày đặt hàng',
    dataIndex: 'createdAt',
    render: (value: any) => (value ? dayjs(value).format('DD/MM/YYYY') : ''),
  },
  {
    title: 'Giá trị đơn hàng',
    dataIndex: 'amount',
    render: (value: number) => `${value.toLocaleString()} VND`,
  },
  {
    title: 'Hoa hồng',
    dataIndex: 'money',
    render: (value: number) => `${value.toLocaleString()} VND`,
  },
];
const Danhsachdh = () => {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [value1, setValue1] = React.useState<Dayjs | null>(null);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'flex-end',
          margin: '0px 0px 10px 0px',
        }}
      >
        <Box style={{ width: '35.2%' }} display={'flex'} alignItems={'center'} gap="5px">
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
      </Box>
      <Grid item xs={12}>
        <CustomTable columns={columns} dataSource={tabledh} />
      </Grid>
    </>
  );
};

export default Danhsachdh;
