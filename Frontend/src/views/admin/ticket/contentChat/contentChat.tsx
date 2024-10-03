import { Box, Button, Dialog, Divider } from '@mui/material';
import { useState } from 'react';
import ChatContent from 'src/components/apps/chats/ChatContent';
import ChatMsgSent from 'src/components/apps/chats/ChatMsgSent';
import ChatSidebar from 'src/components/apps/chats/ChatSidebar';
import AppCard from 'src/components/shared/AppCard';

interface ContentChatProps {
  onClose: () => void;
}
const ContentChat: React.FC<ContentChatProps> = ({ onClose }) => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <>
      <AppCard>
        <Button onClick={onClose}>x</Button>
        <Box flexGrow={1}>
          <ChatContent toggleChatSidebar={() => setMobileSidebarOpen(true)} />
          <Divider />
          <ChatMsgSent />
        </Box>
      </AppCard>
    </>
  );
};

export default ContentChat;
