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
    title: 'Home',
  },
  {
    to: '/apps/assistant',
    title: 'My Assistant',
  },
];

const Assistant = () => {
  return (
    <PageContainer title="Shop List" description="this is Shop List page">
      {/* breadcrumb */}
      <Breadcrumb title="Assistant" items={BCrumb} />
      <Button
            variant="contained"
            color="primary"
            style={{  marginBottom:'20px' }} // Khoảng cách giữa ParentCard và Button
          >
            <AddIcon fontSize="small" style={{ marginRight: '8px' }} />
            Add New
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
