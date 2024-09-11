import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, AlertTitle, IconButton, InputAdornment, useTheme } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State để mở/tắt mật khẩu
  const [showAlert, setShowAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [passwordMatchError, setPasswordMatchError] = useState(false); // State để hiển thị lỗi khớp mật khẩu
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (newPassword !== confirmNewPassword) {
      setPasswordMatchError(true);
      setShowAlert({ message: 'Mật khẩu mới và xác nhận mật khẩu không khớp.', type: 'error' });
      return;
    }

    setShowAlert({ message: 'Đổi mật khẩu thành công!', type: 'success' });

    setTimeout(() => setShowAlert(null), 3000);

    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    setPasswordMatchError(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Đổi trạng thái hiển thị mật khẩu
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmNewPassword(e.target.value);
    if (newPassword !== e.target.value) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  };

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
      <Typography mb={4} variant="h4" fontWeight="600" gutterBottom>
        Đổi Mật Khẩu
      </Typography>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Mật khẩu hiện tại"
          type={showPassword ? 'text' : 'password'} // Hiển thị hoặc ẩn mật khẩu
          fullWidth
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          sx={{
            mb: 2,
            input: { color: theme.palette.mode === 'dark' ? '#fff' : '#000' },
            label: { color: theme.palette.mode === 'dark' ? '#fff' : '#000' }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Mật khẩu mới"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          sx={{
            mb: 2,
            input: { color: theme.palette.mode === 'dark' ? '#fff' : '#000' },
            label: { color: theme.palette.mode === 'dark' ? '#fff' : '#000' }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Nhập lại mật khẩu mới"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          value={confirmNewPassword}
          onChange={handleConfirmPasswordChange}
          error={passwordMatchError} // Đặt lỗi nếu mật khẩu không khớp
          helperText={passwordMatchError ? 'Mật khẩu không khớp' : ''}
          sx={{
            input: { color: theme.palette.mode === 'dark' ? '#fff' : '#000' },
            label: { color: theme.palette.mode === 'dark' ? '#fff' : '#000' }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-start' }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Đổi mật khẩu
        </Button>
      </Box>

      {showAlert && (
        <Alert
          severity={showAlert.type}
          sx={{
            position: 'fixed',
            top: 16,
            right: 16,
            zIndex: theme.zIndex.snackbar,
            backgroundColor: showAlert.type === 'success' ? '#4caf50' : '#f44336',
            color: 'white',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
            borderRadius: 1, 
            padding: 2, 
            width: 300, 
          }}
        >
          <AlertTitle>{showAlert.type === 'success' ? 'Thành công' : 'Lỗi'}</AlertTitle>
          {showAlert.message}
        </Alert>
      )}

    </Box>
  );
};

export default ChangePassword;
