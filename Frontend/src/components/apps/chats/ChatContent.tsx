// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {
  Typography,
  Divider,
  Avatar,
  ListItem,
  ListItemAvatar,
  IconButton,
  Box,
  Stack,
  Badge,
  useMediaQuery,
  Theme,
  ListItemText,
} from '@mui/material';
import { IconDotsVertical, IconMenu2 } from '@tabler/icons-react';
import { useSelector } from 'src/store/Store';

import { ChatsType } from 'src/types/apps/chat';
import ChatInsideSidebar from './ChatInsideSidebar';
import Scrollbar from 'src/components/custom-scroll/Scrollbar';
import { formatDistanceToNowStrict } from 'date-fns';
import { vi } from 'date-fns/locale';

interface ChatContentProps {
  toggleChatSidebar: () => void;
}

const ChatContent: React.FC<ChatContentProps> = ({ toggleChatSidebar }) => {
  const [open, setOpen] = React.useState(false);
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const chatDetails: ChatsType = useSelector(
    (state) => state.chatReducer.chats[state.chatReducer.chatContent - 1],
  );

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
                  <IconDotsVertical stroke={1.5} />
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
            {/* Chat msges */}
            {/* ------------------------------------------- */}

            <Box width="100%">
              <Scrollbar sx={{ height: '650px', overflow: 'auto', maxHeight: '800px' }}>
                <Box p={3}>
                  {chatDetails.messages.map((chat) => {
                    return (
                      <Box key={chat.id + chat.msg + chat.createdAt}>
                        {chatDetails.id === chat.senderId ? (
                          <>
                            <Box display="flex">
                              <ListItemAvatar>
                                <Avatar
                                  alt={chatDetails.name}
                                  src={chatDetails.thumb}
                                  sx={{ width: 40, height: 40 }}
                                />
                              </ListItemAvatar>
                              <Box>
                                {chat.createdAt ? (
                                  <Typography variant="body2" color="grey.400" mb={1}>
                                    {chatDetails.name},{' '}
                                    {formatDistanceToNowStrict(new Date(chat.createdAt), {
                                      addSuffix: true,
                                      locale: vi, // Use Vietnamese locale
                                    })}{' '}
                                  </Typography>
                                ) : null}

                                {chat.type === 'text' ? (
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
                                ) : null}

                                {chat.type === 'image' ? (
                                  <Box mb={1} sx={{ overflow: 'hidden', lineHeight: '0px' }}>
                                    <img src={chat.msg} alt="attach" width="150" />
                                  </Box>
                                ) : null}
                              </Box>
                            </Box>
                          </>
                        ) : (
                          <Box
                            mb={1}
                            display="flex"
                            alignItems="flex-end"
                            flexDirection="row-reverse"
                          >
                            <Box alignItems="flex-end" display="flex" flexDirection={'column'}>
                              {chat.createdAt ? (
                                <Typography variant="body2" color="grey.400" mb={1}>
                                  trước
                                </Typography>
                              ) : null}
                              {chat.type === 'text' ? (
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
                              ) : null}
                              {chat.type === 'image' ? (
                                <Box mb={1} sx={{ overflow: 'hidden', lineHeight: '0px' }}>
                                  <img src={chat.msg} alt="attach" width="250" />
                                </Box>
                              ) : null}
                            </Box>
                          </Box>
                        )}
                      </Box>
                    );
                  })}
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
