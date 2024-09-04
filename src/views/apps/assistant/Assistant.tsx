// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import ProductTableList from 'src/components/apps/assistant/Assistant';
import BlankCard from 'src/components/shared/BlankCard';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },
  {
    to: '/apps/assistant',
    title: 'Quản lý Assistant',
  },
];

const Assistant = () => {
  return (
    <PageContainer title="Assistant" description="this is Shop List page">
      {/* breadcrumb */}
      <Breadcrumb title="Assistant" items={BCrumb} />
      <Button
            variant="contained"
            color="primary"
            style={{  marginBottom:'20px' }} // Khoảng cách giữa ParentCard và Button
          >
            <AddIcon fontSize="small" style={{ marginRight: '8px' }} />
            Thêm mới
          </Button>
      <BlankCard>
        {/* ------------------------------------------- */}
        {/* Left part */}
        {/* ------------------------------------------- */}
        <ProductTableList />
      </BlankCard>
    </PageContainer>
  );
};

export default Assistant;
