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
    title: 'Home',
  },
  {
    to: '/apps/assistant/add',
    title: 'Editor Assistant',
  },
];

const AssistantEditor = () => {
  return (
    <PageContainer title="Shop List" description="this is Shop List page">
      {/* breadcrumb */}
      <Breadcrumb title="Assistant" items={BCrumb} />
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
