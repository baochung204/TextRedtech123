import {
  Box,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { IconSend, IconPhoto } from '@tabler/icons-react'; // Icon for image upload
import { useState, useEffect, useRef } from 'react';

interface Message {
  text?: string;
  sender: 'user' | 'bot';
  imageUrl?: string; // Add imageUrl for handling images
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Đây là phản hồi từ bot.', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMessages([
          ...messages,
          { sender: 'user', imageUrl: reader.result as string }, // Handle image message
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <Paper
      elevation={3}
      sx={{
        height: '100%',
        minHeight: '61vh',
        maxHeight: '61vh',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}
    >
      <Typography variant="h6">Chat thử</Typography>
      <Divider sx={{ my: 2 }} />
      {/* Phần chứa tin nhắn có tính năng cuộn */}
      <Box
        ref={messagesContainerRef}
        sx={{
          flex: 1,
          overflowY: 'auto',
          maxHeight: '40vh',
          display: 'flex',
          flexDirection: 'column',
          '&::-webkit-scrollbar': {
            width: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#f1f1f1',
            borderRadius: '10px',
          },
        }}
      >
        <List sx={{ padding: '10px' }}>
          {messages.map((message, index) => (
            <ListItem
              key={index}
              sx={{
                display: 'flex',
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                mb: 1,
              }}
            >
              {message.imageUrl ? (
                <Box
                  component="img"
                  src={message.imageUrl}
                  alt="uploaded"
                  sx={{
                    borderRadius: '10px',
                    maxWidth: '55%',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                  }}
                />
              ) : (
                <ListItemText
                  primary={message.text}
                  sx={{
                    backgroundColor: message.sender === 'user' ? '#1976d2' : '#e0e0e0',
                    color: message.sender === 'user' ? '#fff' : '#000',
                    borderRadius: '15px',
                    p: 1,
                    maxWidth: '55%',
                    wordWrap: 'break-word',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                  }}
                />
              )}
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <InputBase
          id="msg-sent"
          fullWidth
          value={inputValue}
          placeholder="Nhập câu hỏi tại đây"
          size="small"
          type="text"
          inputProps={{ 'aria-label': 'Type a Message' }}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <IconButton color="primary" component="label">
          <input hidden accept="image/*" type="file" onChange={handleImageUpload} />
          <IconPhoto stroke={1.5} size="20" />
        </IconButton>
        <IconButton color="primary" onClick={handleSendMessage}>
          <IconSend stroke={1.5} size="20" />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ChatBot;
