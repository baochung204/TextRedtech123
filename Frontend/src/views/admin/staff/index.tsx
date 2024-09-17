import React from "react";

import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import PageContainer from 'src/components/container/PageContainer';
import { Grid } from '@mui/material';
import Personnels from 'src/components/admin/personnel'


const BCrumb = [
  {
    to: '/',
    title: 'Admin',
  },
  { to: '/admin/personnel', title: 'Nhân viên' },
];


const Staff = () => {
  return (
    <PageContainer title="Personnel" description="this is Personnel page">
      <BannerPage title="Tài nguyên" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Personnels />
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default Staff