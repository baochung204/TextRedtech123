// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import Integrations from 'src/components/apps/integration/Integration';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import ChildCard from 'src/components/shared/ChildCard';
const BCrumb = [
  { to: '/', title: 'Trang Chủ' },
  { to: '/apps/blog/posts', title: 'Danh Sách Khách Hàng' },
];
const Integration = () => {
  return (
    <PageContainer title="User Profile" description="this is User Profile page">
      <BannerPage title="Danh sách khách hàng" items={BCrumb} />
      <ChildCard sx={{ border: 'none' }}>
        <Integrations />
      </ChildCard>
    </PageContainer>
  );
};

export default Integration;
