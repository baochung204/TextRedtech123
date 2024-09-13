import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Snackbar,
  IconButton,
  InputAdornment,
  useTheme,
  Slide,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function SlideTransition(props: any) {
  return <Slide {...props} direction="left" />;
}

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State để mở/tắt mật khẩu
  const [open, setOpen] = useState(false); // State để mở Snackbar
  const [showAlert, setShowAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [passwordMatchError, setPasswordMatchError] = useState(false); // State để hiển thị lỗi khớp mật khẩu
  const theme = useTheme();

  const handleSubmit = () => {
    if (newPassword !== confirmNewPassword) {
      setPasswordMatchError(true);
      setShowAlert({ message: 'Mật khẩu mới và xác nhận mật khẩu không khớp.', type: 'error' });
      setOpen(true); // Mở Snackbar khi có lỗi
      return;
    }

    setShowAlert({ message: 'Đổi mật khẩu thành công!', type: 'success' });
    setOpen(true); // Mở Snackbar khi thành công

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

  const handleClose = (_event: Event | React.SyntheticEvent<any, Event>, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false); // Đóng Snackbar
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
            label: { color: theme.palette.mode === 'dark' ? '#fff' : '#000' },
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
            label: { color: theme.palette.mode === 'dark' ? '#fff' : '#000' },
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
            label: { color: theme.palette.mode === 'dark' ? '#fff' : '#000' },
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

      {/* Hiển thị Alert khi có sự thay đổi */}
      <Snackbar
        open={open} // Kiểm soát việc mở/đóng Snackbar
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={SlideTransition}
      >
        <Alert onClose={handleClose} severity={showAlert?.type || 'success'} variant="filled">
          {showAlert?.message || 'Lưu thay đổi thành công'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ChangePassword;
