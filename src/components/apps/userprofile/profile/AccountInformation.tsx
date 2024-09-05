import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField, Snackbar, Alert } from '@mui/material';
import { IconUserCircle, IconEdit, IconCheck } from '@tabler/icons-react';

const AccountInformation = () => {
  const [editing, setEditing] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [accountInfo, setAccountInfo] = useState({
    username: 'ngoc-toan',
    email: 'nqton301004@gmail.com',
    address: '123 Đường ABC, TP. Hồ Chí Minh',
    gender: 'male',
  });

  const handleEditClick = (field: string) => {
    setEditing(field);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountInfo({
      ...accountInfo,
      [editing as string]: e.target.value,
    });
  };

  const handleSaveClick = () => {
    setEditing(null);
    setSuccess(true); // Hiển thị thông báo thành công
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSaveClick();
    }
  };

  const renderField = (field: string, label: string) => (
    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
      <Typography variant="h6" fontWeight="500" sx={{ flexGrow: 1 }}>
        {label}:
      </Typography>
      {editing === field ? (
        <>
          <TextField
            value={accountInfo[field as keyof typeof accountInfo]}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} // Xử lý sự kiện Enter
            sx={{ flexGrow: 1, mr: 1 }}
            size="small"
          />
          <IconButton onClick={handleSaveClick}>
            <IconCheck />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="body1" sx={{ flexGrow: 1 }}>
            {accountInfo[field as keyof typeof accountInfo]}
          </Typography>
          <IconButton onClick={() => handleEditClick(field)}>
            <IconEdit />
          </IconButton>
        </>
      )}
    </Box>
  );

  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 1,
        boxShadow: 3,
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h4" fontWeight="600" gutterBottom>
        <IconUserCircle /> Thông tin tài khoản
      </Typography>
      {renderField('username', 'Tên đăng nhập')}
      {renderField('email', 'Email')}
      {renderField('address', 'Địa chỉ')}
      {renderField('gender', 'Giới tính')}

      {/* Snackbar hiển thị thông báo thành công */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
          Cập nhật thành công!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AccountInformation;
