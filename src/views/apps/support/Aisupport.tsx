import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Avatar,
  IconButton,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import PhotoIcon from '@mui/icons-material/Photo';
import ChatBc from 'src/assets/images/breadcrumb/ChatBc.png';

const Aisupport = () => {
  // Current chat messages
  const [messages, setMessages] = useState([
    { text: 'Hello, how can I help you?', sender: 'bot', time: 'Just now' },
  ]);

  // Message input state
  const [inputMessage, setInputMessage] = useState('');

  // List of previous chat histories (mock data)
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      title: 'Support Inquiry',
      preview: 'Can you help me?',
      messages: [
        { text: 'Can you help me?', sender: 'user', time: '10 hours ago' },
        { text: 'Of course, what do you need?', sender: 'bot', time: '10 hours ago' },
      ],
    },
    {
      id: 2,
      title: 'Order Status',
      preview: 'What is my order status?',
      messages: [
        { text: 'What is my order status?', sender: 'user', time: '5 hours ago' },
        { text: 'Your order is on the way!', sender: 'bot', time: '5 hours ago' },
      ],
    },
  ]);

  // The currently selected chat history
  const [selectedChat, setSelectedChat] = useState(null);

  // Simulate bot replies with fake delay
  useEffect(() => {
    if (messages.length > 1 && messages[messages.length - 1].sender === 'user') {
      const fakeReplies = [
        'Let me check that for you...',
        'Here is the information you need!',
        'Can you provide more details?',
      ];
      const randomReply = fakeReplies[Math.floor(Math.random() * fakeReplies.length)];

      setTimeout(() => {
        setMessages((prev) => [...prev, { text: randomReply, sender: 'bot', time: 'Just now' }]);
      }, 1000); // Bot will reply after 1 second
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages((prev) => [...prev, { text: inputMessage, sender: 'user', time: 'Just now' }]);
      setInputMessage('');
    }
  };

  // Load a selected chat history
  const handleChatHistoryClick = (chat) => {
    setMessages(chat.messages);
    setSelectedChat(chat.id);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30vh',
          backgroundColor: '#ECF2FF',
        }}
      >
        <img src={ChatBc} alt="Chat Icon" style={{ maxWidth: '160px', maxHeight: '160px' }} />
      </Box>
      <Grid container sx={{ height: '100vh' }}>
        {/* Chat History Sidebar (Left) */}
        <Grid item xs={3} sx={{ backgroundColor: '#fff', borderRight: '1px solid #e0e0e0' }}>
          <Box sx={{ padding: '16px' }}>
            <Typography variant="h6" gutterBottom>
              Chat History
            </Typography>
            <List>
              {chatHistory.map((chat) => (
                <ListItem
                  button
                  key={chat.id}
                  selected={selectedChat === chat.id}
                  onClick={() => handleChatHistoryClick(chat)}
                >
                  <ListItemText primary={chat.title} secondary={chat.preview} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>

        {/* Main Chat Area */}
        <Grid
          item
          xs={9}
          sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F7FA' }}
        >
          {/* Header */}
          <Box
            sx={{
              backgroundColor: '#fff',
              borderBottom: '1px solid #e0e0e0',
              padding: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src="/path/to/avatar.png" alt="Avatar" sx={{ marginRight: '16px' }} />
              <Box>
                <Typography variant="h6">Nguyễn Đăng Hòa</Typography>
              </Box>
            </Box>
            <Box>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Chat Messages */}
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              maxHeight: '70vh', // Max height for scrolling
            }}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  marginBottom: '8px',
                  flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
                }}
              >
                <Avatar
                  src={
                    message.sender === 'user'
                      ? '/path/to/user-avatar.png'
                      : '/path/to/bot-avatar.png'
                  }
                  alt="Avatar"
                  sx={{
                    marginLeft: message.sender === 'user' ? '8px' : '0',
                    marginRight: message.sender === 'bot' ? '8px' : '0',
                  }}
                />
                <Box
                  sx={{
                    backgroundColor: message.sender === 'user' ? '#1976d2' : '#fff',
                    color: message.sender === 'user' ? '#fff' : '#000',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    maxWidth: '60%',
                  }}
                >
                  <Typography variant="body2" color="textSecondary">
                    {message.time}
                  </Typography>
                  <Typography variant="body1">{message.text}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Chat Input */}
          <Box
            sx={{
              backgroundColor: '#fff',
              padding: '16px',
              borderTop: '1px solid #e0e0e0',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <IconButton color="primary">
              <AttachFileIcon />
            </IconButton>
            <IconButton color="primary">
              <LinkIcon />
            </IconButton>
            <IconButton color="primary">
              <PhotoIcon />
            </IconButton>
            <TextField
              fullWidth
              placeholder="Type a message"
              variant="outlined"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
              sx={{
                backgroundColor: '#f1f1f1',
                borderRadius: '20px',
              }}
            />
            <Button
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              onClick={handleSendMessage}
              sx={{ padding: '8px 24px', borderRadius: '20px' }}
            >
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Aisupport;
