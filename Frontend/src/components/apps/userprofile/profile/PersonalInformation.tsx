import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Select,
  MenuItem,
  Alert,
  Snackbar,
  Slide,
  useTheme,
} from '@mui/material';
import { IconUser, IconEdit, IconCheck } from '@tabler/icons-react';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SelectChangeEvent } from '@mui/material';

function SlideTransition(props: any) {
  return <Slide {...props} direction="left" />;
}

const PersonalInformation = () => {
  const theme = useTheme();
  const [editing, setEditing] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(
    null,
  );
  const [userInfo, setUserInfo] = useState({
    name: 'Ngô Quốc Toản',
    gender: 'Nam',
    dob: new Date('2004-10-30'),
    address: '123 Đường ABC, TP. Hồ Chí Minh',
  });

  const handleEditClick = (field: string) => {
    setEditing(field);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [editing as string]: e.target.value,
    });
  };

  const handleGenderChange = (e: SelectChangeEvent<string>) => {
    setUserInfo({
      ...userInfo,
      gender: e.target.value as string,
    });
  };

  const handleDateChange = (date: Date | null) => {
    setUserInfo({
      ...userInfo,
      dob: date || new Date(),
    });
  };

  const handleSaveClick = () => {
    setEditing(null);
    setShowAlert({ type: 'success', message: 'Lưu thay đổi thành công!' });
    setOpen(true); // Hiển thị Snackbar khi lưu thay đổi
    setTimeout(() => setShowAlert(null), 3000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSaveClick();
    }
  };

  const handleClose = (_event: Event | React.SyntheticEvent<any, Event>, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const renderField = (field: string, label: string) => (
    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
      <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
        {label}:
      </Typography>
      {editing === field ? (
        field === 'dob' ? (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={userInfo.dob}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField {...params} size="small" sx={{ flexGrow: 1, mr: 1 }} />
              )}
            />
          </LocalizationProvider>
        ) : field === 'gender' ? (
          <Select
            value={userInfo.gender}
            onChange={handleGenderChange}
            sx={{ flexGrow: 1, mr: 1 }}
            size="small"
          >
            <MenuItem value="Nam">Nam</MenuItem>
            <MenuItem value="Nữ">Nữ</MenuItem>
            <MenuItem value="Khác">Khác</MenuItem>
          </Select>
        ) : (
          <TextField
            value={userInfo[field as keyof typeof userInfo]}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            sx={{ flexGrow: 1, mr: 1 }}
            size="small"
          />
        )
      ) : (
        <>
          <Typography variant="body1" sx={{ flexGrow: 1 }}>
            {field === 'dob'
              ? userInfo.dob.toLocaleDateString()
              : String(userInfo[field as keyof typeof userInfo])}
          </Typography>
          <IconButton onClick={() => handleEditClick(field)}>
            <IconEdit />
          </IconButton>
        </>
      )}
      {editing === field && (
        <IconButton onClick={handleSaveClick}>
          <IconCheck />
        </IconButton>
      )}
    </Box>
  );

  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 1,
        boxShadow: 3,
        backgroundColor: theme.palette.mode === 'dark' ? '#2A3447' : '#fff',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
        margin: '0 auto',
      }}
    >
      <Typography mb={4} variant="h4" fontWeight="600" gutterBottom display={'flex'} gap={1}>
        <IconUser /> <span>Thông tin cá nhân</span>
      </Typography>
      {renderField('name', 'Họ và tên')}
      {renderField('gender', 'Giới tính')}
      {renderField('dob', 'Ngày sinh')}
      {renderField('address', 'Địa chỉ')}

      {/* Hiển thị Alert khi có sự thay đổi */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={SlideTransition}
      >
        <Alert onClose={handleClose} severity={'success'} variant="filled">
          {showAlert?.message || 'Lưu thay đổi thành công'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PersonalInformation;