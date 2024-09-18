// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { Typography, Grid } from '@mui/material';

import DashboardCard from '../../shared/DashboardCard';

const MonthlyEarnings1 = () => {
  return (
    <DashboardCard title="">
      <>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3">Số dư ví</Typography>

            <Typography variant="h1" fontSize="38px" margin="20px 0">
              0 đ
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">Đang xử lý</Typography>
            <Typography variant="h1" fontSize="38px" margin="20px 0">
              0 đ
            </Typography>
          </Grid>
        </Grid>
      </>
    </DashboardCard>
  );
};

export default MonthlyEarnings1;
