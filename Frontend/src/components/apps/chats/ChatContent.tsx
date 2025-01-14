import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { IconMenu2 } from '@tabler/icons-react';
import { formatDistanceToNowStrict } from 'date-fns';
import { vi } from 'date-fns/locale';
import React, { useEffect, useRef, useState } from 'react';
import rating from 'src/assets/Adminphoto/đanh gia.png';
import Scrollbar from 'src/components/custom-scroll/Scrollbar';
import { useSelector } from 'src/store/Store';
import { ChatsType } from 'src/types/apps/chat';
import ChatInsideSidebar from './ChatInsideSidebar';

interface ChatContentProps {
  toggleChatSidebar: () => void;
}
// interface Message {
//   text: string;
//   sender: 'user' | 'bot';
// }

const ChatContent: React.FC<ChatContentProps> = ({ toggleChatSidebar }) => {
  const [open, setOpen] = useState(false);
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const chatDetails: ChatsType = useSelector(
    (state) => state.chatReducer.chats[state.chatReducer.chatContent - 1],
  );

  const messagesEndRef = useRef<HTMLDivElement>(null); // This ref will point to the last message

  useEffect(() => {
    // Scroll to the last message whenever the messages array changes
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatDetails?.messages]); // Trigger scrolling on messages change

  return (
    <Box>
      {chatDetails ? (
        <Box>
          {/* ------------------------------------------- */}
          {/* Header Part */}
          {/* ------------------------------------------- */}
          <Box>
            <Box display="flex" alignItems="center" p={2}>
              <Box
                sx={{
                  display: { xs: 'block', md: 'block', lg: 'none' },
                  mr: '10px',
                }}
              >
                <IconMenu2 stroke={1.5} onClick={toggleChatSidebar} />
              </Box>
              <ListItem key={chatDetails.id} dense disableGutters>
                <ListItemAvatar>
                  <Badge
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    overlap="circular"
                  >
                    <Avatar alt={chatDetails.name} src={chatDetails.thumb} />
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography variant="h5">Trợ lý Redtech</Typography>}
                  // secondary={chatDetails.status}
                />
              </ListItem>
              <Stack direction={'row'}>
                <IconButton aria-label="delete" onClick={() => setOpen(!open)}>
                  <img src={rating} width={24} />
                </IconButton>
              </Stack>
            </Box>
            <Divider />
          </Box>
          {/* ------------------------------------------- */}
          {/* Chat Content */}
          {/* ------------------------------------------- */}

          <Box display="flex">
            {/* ------------------------------------------- */}
            {/* Chat messages */}
            {/* ------------------------------------------- */}

            <Box width="100%">
              <Scrollbar sx={{ height: '650px', overflow: 'auto', maxHeight: '800px' }}>
                <Box p={3}>
                  {chatDetails.messages.map((chat) => {
                    return (
                      <Box key={chat.id + chat.msg + chat.createdAt}>
                        {chatDetails.id === chat.senderId ? (
                          <Box display="flex">
                            <ListItemAvatar>
                              <Avatar
                                alt={chatDetails.name}
                                src={chatDetails.thumb}
                                sx={{ width: 40, height: 40 }}
                              />
                            </ListItemAvatar>
                            <Box>
                              {chat.createdAt && (
                                <Typography variant="body2" color="grey.400" mb={1}>
                                  {chatDetails.name},{' '}
                                  {formatDistanceToNowStrict(new Date(chat.createdAt), {
                                    addSuffix: true,
                                    locale: vi, // Use Vietnamese locale
                                  })}{' '}
                                </Typography>
                              )}

                              {chat.type === 'text' && (
                                <Box
                                  mb={2}
                                  sx={{
                                    p: 1,
                                    backgroundColor: 'grey.100',
                                    mr: 'auto',
                                    maxWidth: '320px',
                                  }}
                                >
                                  {chat.msg}
                                </Box>
                              )}

                              {chat.type === 'image' && (
                                <Box mb={1} sx={{ overflow: 'hidden', lineHeight: '0px' }}>
                                  <img src={chat.msg} alt="attach" width="150" />
                                </Box>
                              )}
                            </Box>
                          </Box>
                        ) : (
                          <Box
                            mb={1}
                            display="flex"
                            alignItems="flex-end"
                            flexDirection="row-reverse"
                          >
                            <Box alignItems="flex-end" display="flex" flexDirection={'column'}>
                              {chat.createdAt && (
                                <Typography variant="body2" color="grey.400" mb={1}>
                                  trước
                                </Typography>
                              )}
                              {chat.type === 'text' && (
                                <Box
                                  mb={1}
                                  key={chat.id}
                                  sx={{
                                    p: 1,
                                    backgroundColor: 'primary.light',
                                    ml: 'auto',
                                    maxWidth: '320px',
                                  }}
                                >
                                  {chat.msg}
                                </Box>
                              )}
                              {chat.type === 'image' && (
                                <Box mb={1} sx={{ overflow: 'hidden', lineHeight: '0px' }}>
                                  <img src={chat.msg} alt="attach" width="250" />
                                </Box>
                              )}
                            </Box>
                          </Box>
                        )}
                      </Box>
                    );
                  })}
                  {/* The invisible div at the end of the message list to ensure scroll */}
                  <div ref={messagesEndRef} />
                </Box>
              </Scrollbar>
            </Box>

            {/* ------------------------------------------- */}
            {/* Chat right sidebar Content */}
            {/* ------------------------------------------- */}
            <ChatInsideSidebar isInSidebar={lgUp ? open : !open} chat={chatDetails} />
          </Box>
        </Box>
      ) : (
        <Box display="flex" alignItems="center" p={2} pb={1} pt={1}>
          {/* ------------------------------------------- */}
          {/* if No Chat Content */}
          {/* ------------------------------------------- */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'flex', lg: 'none' },
              mr: '10px',
            }}
          >
            <IconMenu2 stroke={1.5} onClick={toggleChatSidebar} />
          </Box>
          <Typography variant="h4">Select Chat</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ChatContent;
