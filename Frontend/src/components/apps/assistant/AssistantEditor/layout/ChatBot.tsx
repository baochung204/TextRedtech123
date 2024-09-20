import { Box, Divider, IconButton, InputBase, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { IconSend } from "@tabler/icons-react";
import { useState, useEffect, useRef } from "react";

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const ChatBot = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const messagesContainerRef = useRef<HTMLDivElement>(null); // Tạo ref cho Box chứa tin nhắn

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setMessages([...messages, { text: inputValue, sender: 'user' }]);
            setInputValue('');
            setTimeout(() => {
                setMessages(prevMessages => [...prevMessages, { text: 'Đây là phản hồi từ bot.', sender: 'bot' }]);
            }, 1000);
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

    // useEffect để cuộn xuống cuối khi có tin nhắn mới
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTo({ top: messagesContainerRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <Paper elevation={3} sx={{ height: '100%', minHeight: '51vh', maxHeight: '51vh', display: 'flex', flexDirection: 'column', p: 2 }}>
            <Typography variant="h6">Chatbot</Typography>
            <Divider sx={{ my: 2 }} />
            {/* Phần chứa tin nhắn có tính năng cuộn */}
            <Box
                ref={messagesContainerRef}
                sx={{
                    flex: 1,
                    overflowY: 'auto',
                    minHeight: '30vh',
                    maxHeight: '30vh',
                    display: 'flex',
                    flexDirection: 'column',
                    // Custom scrollbar styles
                    '&::-webkit-scrollbar': {
                        width: '10px',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'none',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#f1f1f1',
                        borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#e6e6e6',
                    },
                }}
            >
                <List>
                    {messages.map((message, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                            }}
                        >
                            <ListItemText
                                primary={message.text}
                                sx={{
                                    backgroundColor: message.sender === 'user' ? '#1976d2' : '#e0e0e0',
                                    color: message.sender === 'user' ? '#fff' : '#000',
                                    borderRadius: '10px',
                                    p: 1,
                                    maxWidth: '80%',
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex' }}>
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
                <IconButton color="primary" onClick={handleSendMessage}>
                    <IconSend stroke={1.5} size="20" />
                </IconButton>
            </Box>
        </Paper>
    );
};

export default ChatBot;
