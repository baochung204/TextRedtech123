// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Divider } from '@mui/material';
import { useState } from 'react';
import ChatContent from 'src/components/apps/chats/ChatContent';
import ChatMsgSent from 'src/components/apps/chats/ChatMsgSent';
import ChatSidebar from 'src/components/apps/chats/ChatSidebar';
import PageContainer from 'src/components/container/PageContainer';
import AppCard from 'src/components/shared/AppCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },
  {
    to: '/',
    title: 'Ticket hỗ trợ',
  },
];
const Chats = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <PageContainer title="Ticket hỗ trợ" description="this is Chat page">
      {/* <Breadcrumb title="Chat app" subtitle="Messenger" /> */}
      <BannerPage title="Ticket hỗ trợ" items={BCrumb} />
      <AppCard>
        {/* ------------------------------------------- */}
        {/* Left part */}
        {/* ------------------------------------------- */}

        <ChatSidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />
        {/* ------------------------------------------- */}
        {/* Right part */}
        {/* ------------------------------------------- */}

        <Box flexGrow={1}>
          <ChatContent toggleChatSidebar={() => setMobileSidebarOpen(true)} />
          <Divider />
          <ChatMsgSent />
        </Box>
      </AppCard>
    </PageContainer>
  );
};

export default Chats;
