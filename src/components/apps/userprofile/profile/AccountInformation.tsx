import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField } from '@mui/material';
import { IconUserCircle, IconEdit } from '@tabler/icons-react'; // Thay thế với biểu tượng bạn muốn

const AccountInformation = () => {
  const [editing, setEditing] = useState<string | null>(null);
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
    // Thực hiện lưu dữ liệu ở đây, ví dụ: gọi API để cập nhật dữ liệu
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
            sx={{ flexGrow: 1, mr: 1 }}
            size="small"
          />
          <IconButton onClick={handleSaveClick}>
            <IconEdit />
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
    </Box>
  );
};

export default AccountInformation;
