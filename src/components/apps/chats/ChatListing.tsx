// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';
import {
  Avatar,
  List,
  ListItemText,
  TextField,
  Box,
  Alert,
  Badge,
  ListItemButton,
  Typography,
  InputAdornment,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import { useSelector, useDispatch } from 'src/store/Store';
import AddIcon from '@mui/icons-material/Add';
import Scrollbar from '../../custom-scroll/Scrollbar';
import { SelectChat, fetchChats, SearchChat } from '../../../store/apps/chat/ChatSlice';
import { ChatsType } from 'src/types/apps/chat';
import { last } from 'lodash';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';
import user1 from 'src/assets/images/profile/user-1.jpg';
import { formatDistanceToNowStrict } from 'date-fns';
import { vi } from 'date-fns/locale';

const ChatListing = () => {
  const dispatch = useDispatch();
  const activeChat = useSelector((state) => state.chatReducer.chatContent);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  const filterChats = (chats: ChatsType[], cSearch: string) => {
    if (chats)
      return chats.filter((t) => t.name.toLocaleLowerCase().includes(cSearch.toLocaleLowerCase()));

    return chats;
  };

  const chats = useSelector((state) =>
    filterChats(state.chatReducer.chats, state.chatReducer.chatSearch),
  );

  const getDetails = (conversation: ChatsType) => {
    let displayText = '';

    const lastMessage = conversation.messages[conversation.messages.length - 1];
    if (lastMessage) {
      const sender = lastMessage.senderId === conversation.id ? 'a' : '';
      const message = lastMessage.type === 'image' ? 'Sent a photo' : lastMessage.msg;
      displayText = `${sender}${message}`;
    }

    return displayText;
  };

  const lastActivity = (chat: ChatsType) => last(chat.messages)?.createdAt;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* ------------------------------------------- */}
      {/* Profile */}
      {/* ------------------------------------------- */}
      <Box display={'flex'} alignItems="center" gap="10px" p={3}>
        <Badge
          // variant="dot"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          overlap="circular"
          color="success"
        >
          <Avatar alt="Remy Sharp" src={user1} sx={{ width: 54, height: 54 }} />
        </Badge>
        <Box display={'flex'} width={'100%'} justifyContent={'space-between'}>
          <Typography variant="body1" fontWeight={600}>
            Nguyễn Đăng Hòa
          </Typography>
          <AddIcon />
        </Box>
      </Box>
      {/* ------------------------------------------- */}
      {/* Search */}
      {/* ------------------------------------------- */}
      <Box px={3} py={1}>
        <TextField
          id="outlined-search"
          placeholder="Tìm kiếm"
          size="small"
          type="search"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconSearch size={'16'} />
              </InputAdornment>
            ),
          }}
          fullWidth
          onChange={(e) => dispatch(SearchChat(e.target.value))}
        />
      </Box>
      {/* ------------------------------------------- */}
      {/* Contact List */}
      {/* ------------------------------------------- */}
      <List sx={{ px: 0 }}>
        <Box px={2.5} pb={1}>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color="inherit"
          >
            Tin nhắn gần đây <IconChevronDown size="16" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Thời gian giảm dần</MenuItem>
            <MenuItem onClick={handleClose}>Thời gian tăng dần</MenuItem>
          </Menu>
        </Box>
        <Scrollbar sx={{ height: { lg: 'calc(100vh - 100px)', md: '100vh' }, maxHeight: '600px' }}>
          {chats && chats.length ? (
            chats.map((chat) => (
              <ListItemButton
                key={chat.id}
                onClick={() => dispatch(SelectChat(chat.id))}
                sx={{
                  mb: 0.5,
                  py: 2,
                  px: 3,
                  alignItems: 'start',
                }}
                selected={activeChat === chat.id}
              >
                {/* <ListItemAvatar>
                  <Badge
                    color={
                      chat.status === 'online'
                        ? 'success'
                        : chat.status === 'busy'
                        ? 'error'
                        : chat.status === 'away'
                        ? 'warning'
                        : 'secondary'
                    }
                    variant="dot"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    overlap="circular"
                  >
                    <Avatar alt="Remy Sharp" src={chat.thumb} sx={{ width: 42, height: 42 }} />
                  </Badge>
                </ListItemAvatar> */}
                <ListItemText
                  primary={
                    <Typography variant="subtitle2" fontWeight={600} mb={0.5}>
                      #TK006100{chat.id}
                    </Typography>
                  }
                  secondary={getDetails(chat)}
                  secondaryTypographyProps={{
                    noWrap: true,
                  }}
                  sx={{ my: 0 }}
                />
                {/* time in the chat */}
                <Box sx={{ flexShrink: '0' }} mt={0.5}>
                  <Typography variant="body2">
                    {formatDistanceToNowStrict(new Date(lastActivity(chat)), {
                      addSuffix: true,
                      locale: vi, // Use Vietnamese locale
                    })}
                  </Typography>
                </Box>
              </ListItemButton>
            ))
          ) : (
            <Box m={2}>
              <Alert severity="error" variant="filled" sx={{ color: 'white' }}>
                Không tồn tại
              </Alert>
            </Box>
          )}
        </Scrollbar>
      </List>
    </div>
  );
};

export default ChatListing;
