import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
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
        backgroundColor: '#fff',
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
          sx={{ mb: 2 }}
        />
        <TextField
          label="Mật khẩu mới"
          type="password"
          fullWidth
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Nhập lại mật khẩu mới"
          type="password"
          fullWidth
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
      </Box>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-start' }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Đổi mật khẩu
        </Button>
      </Box>

      {/* Hiển thị Alert khi có thông báo */}
      {showAlert && (
        <Alert severity={showAlert.type} sx={{ mt: 3 }}>
          <AlertTitle>{showAlert.type === 'success' ? 'Thành công' : 'Lỗi'}</AlertTitle>
          {showAlert.message}
        </Alert>
      )}
    </Box>
  );
};

export default ChangePassword;
