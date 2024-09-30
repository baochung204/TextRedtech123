import { Box, Button, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import format from 'date-fns/format/index.js';
import React from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PageContainer from 'src/components/container/PageContainer';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { tabledh } from 'src/components/tables/tabledh';

const FilmsData: any = [
  {
    id: 1,
    title: 'ID thanh toán',
    dataIndex: 'MHD',
  },
  {
    id: 2,
    title: 'Ngày yêu cầu',
    dataIndex: 'createdAt',
    render: (value: any) => format(new Date(value), 'dd/MM/yyyy'),
  },
  {
    id: 3,
    title: 'Ngày hoàn tất',
    dataIndex: 'completedAt',
    render: (value: any) => format(new Date(value), 'dd/MM/yyyy'),
  },
  {
    id: 4,
    title: 'Số tiền',
    dataIndex: 'money',
    render: (value: any) => `${value} đ`,
  },
  {
    id: 5,
    title: 'Trạng thái',
    dataIndex: 'status',

    render: (value: number) => (
      <Box>
        {value === 1 ? (
          <Typography sx={{ color: '#13DEB9' }} variant="subtitle2">
            Đã thanh toán
          </Typography>
        ) : value === 2 ? (
          <Typography sx={{ color: '#ff9800' }} variant="subtitle2">
            Chờ xử lý
          </Typography>
        ) : value === 3 ? (
          <Typography sx={{ color: '#f44336' }} variant="subtitle2">
            Không hợp lệ
          </Typography>
        ) : (
          <Typography sx={{ color: 'gray' }} variant="subtitle2">
            Chưa tải hóa đơn
          </Typography>
        )}
      </Box>
    ),
  },

  {
    id: 7,
    title: 'Hóa đơn',
    dataIndex: 'status',

    render: (value: number) => (
      <Box>
        {value === 1 || value === 2 ? (
          <Typography sx={{ color: '#13DEB9' }} variant="subtitle2">
            Đã tải
          </Typography>
        ) : value === 3 ? (
          <Button color="error" variant="text" sx={{ width: 70 }}>
            Tải lại
          </Button>
        ) : (
          <Button color="success" variant="contained" sx={{ width: 70 }}>
            Tải lên
          </Button>
        )}
      </Box>
    ),
  },
];

const HistoryMoney = () => {
  const [value, setValue] = React.useState<any | null>(null);
  const [value1, setValue1] = React.useState<any | null>(null);
  return (
    <PageContainer title="Enhanced Table" description="this is Enhanced Table page">
      {/* breadcrumb */}
      <Box
        style={{
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
      <CustomTable columns={FilmsData} dataSource={tabledh} />
    </PageContainer>
  );
};

export default HistoryMoney;
