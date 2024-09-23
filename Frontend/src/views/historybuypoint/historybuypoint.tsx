/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Grid } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Dayjs } from 'dayjs';
import React from 'react';
import TableHistoryBuyPoint from 'src/components/apps/historyBuyPoint/TableHistoryBuyPoint/TableHistoryBuyPoint';
import PageContainer from 'src/components/container/PageContainer';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },
  { to: '/buy/point', title: 'Quy đổi R-Point' },
  { title: 'Lịch sử quy đổi ' },
];

const HistoryBuyPoint = () => {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [value1, setValue1] = React.useState<Dayjs | null>(null);
  return (
    <PageContainer title="Enhanced Table" description="this is Enhanced Table page">
      <BannerPage title="Lịch sử quy đổi R-Point" items={BCrumb} />
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              justifyContent: 'end',
            }}
          >
            <Box style={{ width: '35%' }} display={'flex'} alignItems={'center'} gap="5px">
              {' '}
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
        </Grid>
        <TableHistoryBuyPoint />
      </Grid>
    </PageContainer>
  );
};

export default HistoryBuyPoint;
