// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { Typography, Grid } from '@mui/material';

import DashboardCard from '../../shared/DashboardCard';
import { useSelector } from 'react-redux';
import { AppState } from 'src/store/Store';

const MonthlyEarnings1 = () => {
  const dataAffiliateOverview = useSelector((state: AppState) => state.overview_affiliate.dataa);
  const data = [
    {
      ...dataAffiliateOverview.info,
    },
  ];

  console.log('data');
  return (
    <DashboardCard title="">
      <>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12}>
                <Typography variant="h3">Số dư ví</Typography>
                <Typography variant="h1" fontSize="38px" margin="20px 0">
                  {item.walletBalance || '0 đ'}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3">Đang xử lý</Typography>
                <Typography variant="h1" fontSize="38px" margin="20px 0">
                  {item.moneyProcessing || '0 đ'}
                </Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </>
    </DashboardCard>
  );
};

export default MonthlyEarnings1;
