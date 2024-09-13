import FacebookIcon from '@mui/icons-material/Facebook';
import PersonIcon from '@mui/icons-material/Person';
import {
  Avatar,
  Button,
  Divider,
  Fab,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import { IconPlus, IconSend } from '@tabler/icons-react';
import React, { useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import DateTime from './DateTime';
import Integration from './Integration';
import Checkboxes from './Tags';
import FunctionsDialog from './dialog/functionsDialog';
import SimpleDialog from './dialog/searchDialog';
import StrategyDialog from './dialog/strategyDialog';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const AssistantEditor = () => {

  const [country, setCountry] = useState('1');
  const [language, setLanguage] = useState('1');
  const [model, setModel] = useState('1');
  const [level, setLevel] = useState('1');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleChangeCountry = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountry(event.target.value as string);
  };
  const handleChangeLanguage = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLanguage(event.target.value as string);
  };
  const handleModel = (event: React.ChangeEvent<{ value: unknown }>) => {
    setModel(event.target.value as string);
  };
  const handleLevel = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLevel(event.target.value as string);
  };

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
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <PageContainer title="Tạo Assistant" description="this is Custom Form page">
      <Box>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          mt={2}
          mb={2}
        >
          <Stack spacing={1} direction="row">

          </Stack>
          <Stack direction="row" spacing={1}>
            <Button variant="contained" color="secondary">
              Thêm mới
            </Button>

          </Stack>
        </Stack>
        <Grid container spacing={3}>
          {/* Cột 1 */}

          <Grid item xs={12} sm={12} lg={4}>
            <Paper elevation={3} sx={{ minHeight: '64%', display: 'flex', flexDirection: 'column', p: 2 }}>
              <Box sx={{ height: '100%' }}>
                {/* Circular Avatar Placeholder */}
                <Box sx={{ maxHeight: 'calc(65vh - 120px)', textAlign: 'center', mt: { md: 2 }, mb: '20px' }}>
                  <label htmlFor="avatar-upload">
                  <Avatar
                    src={avatarPreview || ''}
                    alt="avatar preview"
                    sx={{
                      width: { xs: 80, sm: 100, md: 120, lg: 150 },
                      height: { xs: 80, sm: 100, md: 120, lg: 150 },
                      margin: 'auto',
                      fontSize: 50,
                      backgroundColor: avatarPreview ? 'transparent' : '#f0f0f0',
                      color: '#9e9e9e',
                      cursor: 'pointer',
                      position: 'relative',
                      zIndex: 1,
                      borderRadius: '50%',
                      border: 'none',  // Xóa đường viền mặc định
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '50%',
                        padding: '6px', // Độ rộng của đường viền
                        background: 'linear-gradient(#50b2fc, #f44c66)', // Gradient màu
                        '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                        zIndex: 1,  // Đảm bảo gradient ở sau avatar
                      },
                    }}
                  >
                    {!avatarPreview && <PersonIcon fontSize="inherit" />}
                  </Avatar>

                  </label>
                  {/* Hidden file input */}
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleAvatarChange}
                  />
                </Box>

                <CustomFormLabel htmlFor="name" sx={{ mt: 0 }}>Tên</CustomFormLabel>
                <CustomTextField size="small" id="name" placeholder="Nhập tên trợ lý mong muốn " variant="outlined" fullWidth />
                <Grid container item xs={12} sm={12} lg={12} spacing={2}>
                  <Grid item xs={12} sm={6} lg={6}>
                    <CustomFormLabel htmlFor="name" sx={{ mt: 3 }}>Ngày sinh</CustomFormLabel>
                    <DateTime />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6}>
                    <CustomFormLabel sx={{ mt: 3 }} htmlFor="demo-simple-select">Trình độ học vẫn</CustomFormLabel>
                    <CustomSelect
                      size="small"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={level}
                      onChange={handleLevel}
                      fullWidth
                    >
                      <MenuItem value={1}>Tốt nghiệp cấp 3</MenuItem>
                      <MenuItem value={2}>Đại học</MenuItem>
                      <MenuItem value={3}>Trên đại học</MenuItem>
                    </CustomSelect>
                  </Grid>
                </Grid>
                <CustomFormLabel htmlFor="name" sx={{ mt: 3 }}>Chuyên môn</CustomFormLabel>
                <Checkboxes />

                <Grid container item xs={12} sm={12} lg={12} spacing={2}>
                  <Grid item xs={12} sm={6} lg={6}>
                    <CustomFormLabel htmlFor="demo-simple-select">Quốc gia</CustomFormLabel>
                    <CustomSelect
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={country}
                      onChange={handleChangeCountry}
                      fullWidth
                    >
                      <MenuItem value={1}>Việt Nam</MenuItem>
                      <MenuItem value={2}>Trung Quốc</MenuItem>
                      <MenuItem value={3}>Nhật</MenuItem>
                    </CustomSelect>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6}>
                    <CustomFormLabel htmlFor="demo-simple-select">Ngôn ngữ</CustomFormLabel>
                    <CustomSelect
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={language}
                      onChange={handleChangeLanguage}
                      fullWidth
                    >
                      <MenuItem value={1}>Việt Nam</MenuItem>
                      <MenuItem value={2}>Anh</MenuItem>
                    </CustomSelect>
                  </Grid>
                </Grid>
               
              </Box>
            </Paper>
            {/*Tích hợp  */}
            <Paper elevation={3} sx={{ minHeight: '4%', p: 2, mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} lg={10}>
                    <Box display="flex" alignItems="center">
                      <FacebookIcon fontSize='large' color="info" />
                      <Box fontWeight={600} ml={1}>Tích hợp Facebook</Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={2}>
                    <Tooltip title="Thêm">
                      <Fab size="small" color="secondary" aria-label="plus">
                        <IconPlus width={18} />
                      </Fab>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Integration />
              </Paper>
          </Grid>
          {/* Cột 2 */}
          <Grid item xs={12} sm={12} lg={4} >
            <Paper elevation={3} sx={{ height: '46vh', overflowY: 'auto', px: 2 }}>
              <Box fontWeight={600} mt={2} mb={1}>Model</Box>
              <CustomSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={model}
                onChange={handleModel}
                fullWidth
              >
                <MenuItem value={1}>GPT-3.5-TURBO</MenuItem>
                <MenuItem value={2}>GPT-4-MINI</MenuItem>
                <MenuItem value={3}>GPT-4-TURBO</MenuItem>
              </CustomSelect>
              <CustomFormLabel htmlFor="cname">Hướng dẫn</CustomFormLabel>
              {/* <TextField minRows={3} multiline  id="cname" placeholder="Hướng dẫn trợ lý" variant="outlined" fullWidth /> */}
              {/* <QuillEditor /> */}
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={7}
                fullWidth
                placeholder="Nhập hướng dẫn . . ."
                sx={{
                  '& .MuiOutlinedInput-root': {
                    padding: 0,  // Loại bỏ padding của TextField
                  },
                }}
              />
            </Paper>
            {/* tri thức */}
            <Paper elevation={3} sx={{ minHeight: '5%', p: 2, mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={9}>
                  <Box fontWeight={600} mt={0.5}>Tri thức</Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <SimpleDialog />
                </Grid>
              </Grid>


            </Paper>
            {/* Functions */}
            <Paper elevation={3} sx={{ minHeight: '5%', p: 2, mt: 2.3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={9}>
                  <Box fontWeight={600} mt={0.5}>Functions</Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FunctionsDialog />
                </Grid>
              </Grid>
            </Paper>
            <Paper elevation={3} sx={{ minHeight: '5%', p: 2, mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={10}>
                  <Box fontWeight={600} mt={0.5}>Chiến lược</Box>
                  
                </Grid>
                <Grid item xs={12} sm={6} lg={2} p={0}>
                  <Tooltip title="Chọn chiến lược" >
                    <Fab onClick={handleClickOpen} size="small" color="secondary" aria-label="plus">
                      <IconPlus width={18} />
                    </Fab>
                  </Tooltip>
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                  <StrategyDialog open={open} setOpen={setOpen}/>
                  
                </Grid>
              </Grid>

            </Paper>
          </Grid>
          {/* Cột 3 */}
          <Grid item xs={12} sm={12} lg={4}>

            <Paper elevation={3} sx={{ height: '78vh', display: 'flex', flexDirection: 'column', p: 2 }}>
              <Typography variant="h6">Chatbot</Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ flex: 1, overflowY: 'auto', maxHeight: 'calc(78vh - 120px)' }}>
                <List>
                  {messages.map((message, index) => (
                    <ListItem key={index} sx={{ display: 'flex', justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                      <ListItemText
                        primary={message.text}
                        sx={{
                          backgroundColor: message.sender === 'user' ? '#1976d2' : '#e0e0e0',
                          color: message.sender === 'user' ? '#fff' : '#000',
                          borderRadius: '10px',
                          p: 1,
                          maxWidth: '80%'
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

          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default AssistantEditor;
