import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, AlertTitle, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showAlert, setShowAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const theme = useTheme(); // Lấy theme để kiểm tra chế độ dark/light
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (newPassword !== confirmNewPassword) {
      setShowAlert({ message: 'Mật khẩu mới và xác nhận mật khẩu không khớp.', type: 'error' });
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
        backgroundColor: theme.palette.mode === 'dark' ? '#2A3447' : '#fff', // Thay đổi màu nền cho dark mode
        color: theme.palette.mode === 'dark' ? '#fff' : '#000', // Màu chữ phù hợp với dark mode
        margin: '0 auto',
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
            input: { color: theme.palette.mode === 'dark' ? '#fff' : '#000' }, 
            label: { color: theme.palette.mode === 'dark' ? '#fff' : '#000' } // Màu nhãn thay đổi theo chế độ
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
            input: { color: theme.palette.mode === 'dark' ? '#fff' : '#000' }, 
            label: { color: theme.palette.mode === 'dark' ? '#fff' : '#000' } 
          }}
        />
        <TextField
          label="Nhập lại mật khẩu mới"
          type="password"
          fullWidth
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          sx={{ 
            input: { color: theme.palette.mode === 'dark' ? '#fff' : '#000' }, 
            label: { color: theme.palette.mode === 'dark' ? '#fff' : '#000' } 
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
        <Alert severity={showAlert.type} sx={{ mt: 3, backgroundColor: showAlert.type === 'success' ? '#4caf50' : '#f44336', color: 'white' }}>
          <AlertTitle>{showAlert.type === 'success' ? 'Thành công' : 'Lỗi'}</AlertTitle>
          {showAlert.message}
        </Alert>
      )}
    </Box>
  );
};

export default ChangePassword;
