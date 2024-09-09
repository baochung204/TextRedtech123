import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, AlertTitle, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const theme = useTheme(); // Lấy theme từ MUI
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showAlert, setShowAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (newPassword !== confirmNewPassword) {
      setShowAlert({ message: 'Mật khẩu mới và xác nhận mật khẩu không khớp.', type: 'error' });
      return;
    }

    // Kiểm tra độ mạnh của mật khẩu mới nếu cần
    if (newPassword.length < 6) {
      setShowAlert({ message: 'Mật khẩu mới phải có ít nhất 6 ký tự.', type: 'error' });
      return;
    }

    // Giả sử bạn sẽ gửi yêu cầu đổi mật khẩu đến server ở đây
    // Thay thế bằng logic thực tế của bạn
    setShowAlert({ message: 'Đổi mật khẩu thành công!', type: 'success' });

    // Ẩn thông báo sau 3 giây
    setTimeout(() => setShowAlert(null), 3000);

    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    
    // Nếu cần điều hướng sau khi thành công
    // navigate('/some-page');
  };

  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 1,
        boxShadow: 3,
        backgroundColor: theme.palette.mode === 'dark' ? '#2A3447' : theme.palette.background.paper, // Nền tối cho dark mode
        margin: '0 auto',
        color: theme.palette.text.primary, // Màu chữ sáng cho dark mode
      }}
    >
      <Typography mb={4} variant="h4" fontWeight="600" gutterBottom>
        Đổi Mật Khẩu
      </Typography>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Mật khẩu hiện tại"
          type="password"
          fullWidth
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          sx={{
            mb: 2,
            input: { color: theme.palette.text.primary },
            label: { color: theme.palette.text.primary },
          }}
        />
        <TextField
          label="Mật khẩu mới"
          type="password"
          fullWidth
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          sx={{
            mb: 2,
            input: { color: theme.palette.text.primary },
            label: { color: theme.palette.text.primary },
          }}
        />
        <TextField
          label="Nhập lại mật khẩu mới"
          type="password"
          fullWidth
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          sx={{
            input: { color: theme.palette.text.primary },
            label: { color: theme.palette.text.primary },
          }}
        />
      </Box>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-start' }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Đổi mật khẩu
        </Button>
      </Box>

      {/* Hiển thị Alert khi có thông báo */}
      {showAlert && (
        <Alert severity={showAlert.type} sx={{ mt: 3, backgroundColor: showAlert.type === 'success' ? theme.palette.success.main : theme.palette.error.main, color: 'white' }}>
          <AlertTitle>{showAlert.type === 'success' ? 'Thành công' : 'Lỗi'}</AlertTitle>
          {showAlert.message}
        </Alert>
      )}
    </Box>
  );
};

export default ChangePassword;
