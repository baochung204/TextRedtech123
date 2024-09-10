import React, { useState } from 'react';
import {
  Grid,
  Box,
  Typography,
  FormControl,
  MenuItem,
  Button,
  Stack,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  InputBase,
  IconButton,
  FormControlLabel,
  TextField,
  Avatar,
  Tooltip,
  Fab,
} from '@mui/material';
import { SliderThumb } from '@mui/material/Slider';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomSwitch from 'src/components/forms/theme-elements/CustomSwitch';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import PageContainer from 'src/components/container/PageContainer';
import ParentCard from 'src/components/shared/ParentCard';
import CustomDisabledButton from 'src/components/forms/theme-elements/CustomDisabledButton';
import CustomOutlinedButton from 'src/components/forms/theme-elements/CustomOutlinedButton';
import PersonIcon from '@mui/icons-material/Person';
import { IconEdit } from '@tabler/icons-react';
import DateTime from './DateTime'
import Checkboxes from './Tags';
import FacebookIcon from '@mui/icons-material/Facebook';
import QuillEditor from './QuillEditor';
import { IconPlus } from '@tabler/icons-react';
import Integration from './Integration';
import Strategy from './Strategy';
function CustomThumbComponent(props: SliderValueLabelProps) {
  const { children, ...other } = props;

  return (
    <SliderThumb {...other}>
      {children}
      <Box
        sx={{
          height: 9,
          width: '2px',
          backgroundColor: '#fff',
        }}
      />
      <Box
        sx={{
          height: '14px',
          width: '2px',
          backgroundColor: '#fff',
          ml: '2px',
        }}
      />
      <Box
        sx={{
          height: 9,
          width: '2px',
          backgroundColor: '#fff',
          ml: '2px',
        }}
      />
    </SliderThumb>
  );
}

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
  const [fileSearchName, setFileSearchName] = useState('');
  const [fileFunctionsName, setFileFunctionsName] = useState('');
  

  const handleChangeCountry = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountry(event.target.value as string); // Cập nhật state khi chọn
  };
  const handleChangeLanguage = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLanguage(event.target.value as string); // Cập nhật state khi chọn
  };
  const handleModel = (event: React.ChangeEvent<{ value: unknown }>) => {
    setModel(event.target.value as string); // Cập nhật state khi chọn
  };
  const handleLevel = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLevel(event.target.value as string); // Cập nhật state khi chọn
  };
  const handleFileSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileSearchName(event.target.files[0].name); // Cập nhật tên file
    }
  };
  const handleFileFunctions = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileFunctionsName(event.target.files[0].name); // Cập nhật tên file
    }
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
      <Box sx={{m:3}}>
        <Grid container spacing={3}>
          {/* Cột 1 */}
          <Grid item xs={12} sm={12} lg={4}>
          <Box sx={{height:'72vh'}}>
              {/* Circular Avatar Placeholder */}
              <Box sx={{maxHeight: 'calc(72vh - 120px)', textAlign: 'center', mt: { md: 2 }, mb:'20px' }}>
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
                      border: '2px dashed #ccc',
                      color: '#9e9e9e',
                      cursor: 'pointer',
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
                    
              <CustomFormLabel htmlFor="name" sx={{mt: 0}}>Tên</CustomFormLabel>
              <CustomTextField size="small" id="name" placeholder="Nhập tên trợ lý mong muốn " variant="outlined" fullWidth />
              <Grid container item xs={12} sm={12} lg={12} spacing={2}>
                <Grid item xs={12} sm={6} lg={6}>
                  <CustomFormLabel htmlFor="name" sx={{ mt: 3 }}>Ngày sinh</CustomFormLabel>
                  <DateTime />
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <CustomFormLabel sx={{ mt: 3 }}  htmlFor="demo-simple-select">Trình độ học vẫn</CustomFormLabel>
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
            <Paper elevation={3} sx={{ minHeight:'5%', p:2,mt:3 }}>
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
              <Integration/>
            </Paper>
          </Grid>
          {/* Cột 2 */}
          <Grid item xs={12} sm={12} lg={4} >
            <Paper elevation={3} sx={{ height: '40vh', overflowY: 'auto', px:2 }}>
              <CustomFormLabel htmlFor="demo-simple-select">Model</CustomFormLabel>
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
              <TextField minRows={3} multiline  id="cname" placeholder="Hướng dẫn trợ lý" variant="outlined" fullWidth />
              {/* <QuillEditor/> */}
            </Paper>
            <Paper elevation={3} sx={{ minHeight:'5%', p:2,mt:2 }}>
              {/* tri thức */}
              <input
                accept="*/*"
                style={{ display: 'none' }}
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleFileSearch} // Bắt sự kiện khi file được chọn
              />
              <label htmlFor="contained-button-file">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} lg={8.4}>
                    <Box fontWeight={600}>Tri thức</Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3.6}>
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                      style={{ marginBottom: '10px' }}
                    >
                      <AddIcon fontSize='small' style={{ marginRight: '10px' }} />File
                    </Button>
                  </Grid>
                </Grid>
              </label>

              {fileSearchName && ( // Hiển thị tên file nếu có
                <Grid container spacing={2} style={{ marginTop: '0px' }}>
                  <Grid item xs={12}>
                    {`${fileSearchName}`}
                  </Grid>
                </Grid>
              )}
              
            </Paper>
            <Paper elevation={3} sx={{ minHeight:'5%', p:2,mt:2 }}>
              {/* Functions */}
              <input
                accept="*/*"
                style={{ display: 'none' }}
                id="contained-button-fileFunctions"
                multiple
                type="file"
                onChange={handleFileFunctions} // Bắt sự kiện khi file được chọn
              />
              <label htmlFor="contained-button-fileFunctions">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} lg={8.4}>
                    <Box fontWeight={600}>Functions</Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3.6}>
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                      style={{ marginBottom: '10px' }}
                    >
                      <AddIcon fontSize='small' style={{ marginRight: '10px' }} />File
                    </Button>
                  </Grid>
                </Grid>
              </label>

              {fileFunctionsName && ( // Hiển thị tên file nếu có
                <Grid container spacing={2} style={{ marginTop: '0px' }}>
                  <Grid item xs={12}>
                    {`${fileFunctionsName}`}
                  </Grid>
                </Grid>
              )}
             
            </Paper>
            <Paper elevation={3} sx={{ minHeight:'5%', p:2,mt:3 }}>
              <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={10}>
                      <Box fontWeight={600}>Chiến lược</Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={2}>
                      <Tooltip title="Thêm">
                        <Fab size="small" color="secondary" aria-label="plus">
                          <IconPlus width={18} />
                        </Fab>
                    </Tooltip>
                    </Grid>
                    <Strategy/>
              </Grid>
              
            </Paper>
          </Grid>
          {/* Cột 3 */}
          <Grid item xs={12} sm={12} lg={4}>
            <Paper elevation={3} sx={{ height: '110vh', display: 'flex', flexDirection: 'column', p: 2 }}>
              <Typography variant="h6">Chatbot</Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ flex: 1, overflowY: 'auto', maxHeight: 'calc(110vh - 120px)' }}>
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
                  placeholder="Type a message..."
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  sx={{ flex: 1, px: 2, border: '1px solid #ccc', borderRadius: '4px' }}
                />
                <IconButton color="primary" onClick={handleSendMessage}>
                  <SendIcon />
                </IconButton>
              </Box>
            </Paper>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="space-between"
              mt={2}
            >
              <Stack spacing={1} direction="row">
                
              </Stack>
              <Stack direction="row" spacing={1}>
                <Button variant="contained" color="secondary">
                  Thêm mới
                </Button>
               
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default AssistantEditor;
