// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';

import BlankCard from 'src/components/shared/BlankCard';
import Assistant_Add from 'src/components/apps/assistant/AssistantEditor';

const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },
  {
    to: '/apps/assistant/add',
    title: 'Tạo Assistant',
  },
];

const AssistantEditor = () => {
  return (
    <PageContainer title="Tạo Assistant" description="this is Shop List page">
      {/* breadcrumb */}
      <Breadcrumb title="Tạo Assistant" items={BCrumb} />
      <BlankCard>
        {/* ------------------------------------------- */}
        {/* Left part */}
        {/* ------------------------------------------- */}
        <Assistant_Add/>
      </BlankCard>
    </PageContainer>
  );
};

export default AssistantEditor;
