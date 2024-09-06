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
  const [age, setAge] = React.useState('1');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File đã chọn:', file.name);
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

  return (
    <PageContainer title="Tạo Assistant" description="this is Custom Form page">
      <ParentCard title="Playground">
        <Grid container spacing={3}>
          {/* Cột 1 */}
          <Grid item xs={12} sm={12} lg={5}>
            <Box sx={{ height: '80vh', overflowY: 'auto', p: 2 }}>
              <CustomFormLabel htmlFor="name">Tên</CustomFormLabel>
              <CustomTextField id="name" placeholder="Enter a user friendly name" variant="outlined" fullWidth />
              <CustomFormLabel htmlFor="cname">Hướng dẫn</CustomFormLabel>
              <CustomTextField id="cname" placeholder="You are a helpful assistant" variant="outlined" fullWidth />
              <CustomFormLabel htmlFor="name">Công cụ</CustomFormLabel>
              <input
                accept="*/*"
                style={{ display: 'none' }}
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="contained-button-file">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} lg={12}>
                    <FormControlLabel style={{ width: '70%' }} control={<CustomSwitch />} label="File search" />
                    <Button variant="contained" color="primary" component="span" style={{ marginBottom: '10px', marginTop: '10px' }}>
                      <AddIcon fontSize='small' style={{ marginRight: '10px' }} />File
                    </Button>
                  </Grid>
                  {/* <Grid item xs={12} sm={6} lg={12}>
                    <FormControlLabel style={{ width: '70%' }} control={<CustomSwitch />} label="Code interpreter" />
                    <Button variant="contained" color="primary" component="span" style={{ marginBottom: '10px' }}>
                      <AddIcon fontSize='small' style={{ marginRight: '10px' }} />File
                    </Button>
                  </Grid> */}
                </Grid>
              </label>
              <CustomFormLabel htmlFor="demo-simple-select">Model</CustomFormLabel>
              <CustomSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                fullWidth
              >
                <MenuItem value={1}>GPT-3.5-TURBO</MenuItem>
                <MenuItem value={2}>GPT-4-MINI</MenuItem>
                <MenuItem value={3}>GPT-4-TURBO</MenuItem>
              </CustomSelect>
              {/* <CustomFormLabel>Response format</CustomFormLabel>
              <CustomSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                fullWidth
              >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
              </CustomSelect> */}
              <CustomFormLabel style={{ width: '34%', marginBottom: '10px' }} htmlFor="functions">
                Functions
              </CustomFormLabel>
              <Button variant="contained" color="primary" component="span" style={{ marginBottom: '10px' }}>
                <AddIcon fontSize='small' style={{ marginRight: '10px' }} />Functions
              </Button>
              
            </Box>
          </Grid>
          {/* Cột 2 */}
          <Grid item xs={12} sm={12} lg={7}>
            <Paper elevation={3} sx={{ height: '80vh', display: 'flex', flexDirection: 'column', p: 2 }}>
              <Typography variant="h6">Chatbot</Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ flex: 1, overflowY: 'auto', maxHeight: 'calc(80vh - 120px)' }}>
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
                {/* <Button variant="contained" color="primary">
                  Add New
                </Button>
                <CustomDisabledButton variant="contained" disabled>
                  Add New
                </CustomDisabledButton>
                <CustomOutlinedButton variant="outlined">Add New</CustomOutlinedButton> */}
              </Stack>
              <Stack direction="row" spacing={1}>
                <Button variant="contained" color="secondary">
                  Add New
                </Button>
                {/* <Button variant="contained" color="success">
                  Add New
                </Button> */}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
};

export default AssistantEditor;
