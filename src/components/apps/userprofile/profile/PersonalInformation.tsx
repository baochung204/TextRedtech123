import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField, Alert, AlertTitle } from '@mui/material';
import { IconUser, IconEdit, IconCheck } from '@tabler/icons-react';

const PersonalInformation = () => {
  const [editing, setEditing] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false); // Trạng thái để hiển thị thông báo
  const [userInfo, setUserInfo] = useState({
    name: 'Ngô Quốc Toản',
    email: 'nqton301004@gmail.com',
    phone: '0123456789',
    address: '123 Đường ABC, TP. Hồ Chí Minh'
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

  const handleSaveClick = () => {
    setEditing(null);
    setShowAlert(true); // Hiển thị thông báo thành công
    setTimeout(() => setShowAlert(false), 3000); // Ẩn thông báo sau 3 giây
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSaveClick();
    }
  };

  const renderField = (field: string, label: string) => (
    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
      <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
        {label}:
      </Typography>
      {editing === field ? (
        <>
          <TextField
            value={userInfo[field as keyof typeof userInfo]}
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
            {userInfo[field as keyof typeof userInfo]}
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
        margin: '0 auto', // Căn giữa trang
      }}
    >
      <Typography mb={4} variant="h4" fontWeight="600" gutterBottom>
        <IconUser /> Thông tin cá nhân
      </Typography>
      {renderField('name', 'Tên')}
      {renderField('email', 'Email')}
      {renderField('phone', 'Số điện thoại')}
      {renderField('address', 'Địa chỉ')}

      {/* Hiển thị Alert khi có sự thay đổi */}
      {showAlert && (
        <Alert severity="success" sx={{ mt: 3 }}>
          <AlertTitle>Success</AlertTitle>
          Cập nhật thành công — <strong>kiểm tra lại thông tin!</strong>
        </Alert>
      )}
    </Box>
  );
};

export default PersonalInformation;
