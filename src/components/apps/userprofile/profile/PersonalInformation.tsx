import React from 'react';
import { Box, Typography } from '@mui/material';
import { IconUser } from '@tabler/icons-react'; // Bạn có thể thay thế với biểu tượng phù hợp

const PersonalInformation = () => {
  // Dữ liệu giả lập cho thông tin cá nhân
  const userInfo = {
    name: 'Ngô Quốc Toản',
    email: 'nqton301004@gmail.com',
    phone: '0123456789',
    address: '123 Đường ABC, TP. Hồ Chí Minh'
  };

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
        <IconUser /> Thông tin cá nhân
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="500">Tên:</Typography>
        <Typography variant="body1">{userInfo.name}</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="500">Email:</Typography>
        <Typography variant="body1">{userInfo.email}</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="500">Số điện thoại:</Typography>
        <Typography variant="body1">{userInfo.phone}</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="500">Địa chỉ:</Typography>
        <Typography variant="body1">{userInfo.address}</Typography>
      </Box>
    </Box>
  );
};

export default PersonalInformation;
