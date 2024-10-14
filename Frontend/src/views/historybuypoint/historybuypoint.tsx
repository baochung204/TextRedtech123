/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Grid } from '@mui/material';
import { Dayjs } from 'dayjs';
import React from 'react';
import DateSelect from 'src/components/apps/date/DateSelect';
import TableHistoryBuyPoint from 'src/components/apps/historyBuyPoint/TableHistoryBuyPoint';
import PageContainer from 'src/components/container/PageContainer';
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
              <DateSelect />
            </Box>
          </Box>
        </Grid>
        <TableHistoryBuyPoint />
      </Grid>
    </PageContainer>
  );
};

export default HistoryBuyPoint;
