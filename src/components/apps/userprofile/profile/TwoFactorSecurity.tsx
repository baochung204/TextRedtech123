import { Box, Button, Switch, Typography, useTheme } from '@mui/material';
import { useState } from 'react';

const TwoFactorSecurity = () => {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const theme = useTheme(); // Lấy thông tin theme

  const handleToggleTwoFactor = () => {
    setIsTwoFactorEnabled(!isTwoFactorEnabled);
  };

  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 1,
        boxShadow: 3,
        backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff', // Màu nền thay đổi theo chế độ
        color: theme.palette.mode === 'dark' ? '#fff' : '#000', // Màu chữ thay đổi theo chế độ
        margin: '0 auto',
      }}
    >
      <Typography mb={4} variant="h4" fontWeight="600" gutterBottom>
        Bảo Mật Hai Lớp
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="500">
          Bản thân khách hàng
        </Typography>
        <Typography variant="body1" color={theme.palette.mode === 'dark' ? 'gray' : 'textSecondary'}>
          Khách hàng sẽ có thể theo đuổi mục tiêu phát triển của công ty. Về mặt cơ thể, họ rất chăm chỉ trong nhiệm vụ của mình.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Typography sx={{ flexGrow: 1, fontWeight: 'bold' }}>Bảo mật hai lớp:</Typography>
          <Switch
            checked={isTwoFactorEnabled}
            onChange={handleToggleTwoFactor}
            color="primary"
          />
        </Box>
      </Box>

      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" fontWeight="500">
            Ứng dụng xác thực
          </Typography>
          <Typography variant="body1" color={theme.palette.mode === 'dark' ? 'gray' : 'textSecondary'}>
            Ứng dụng xác thực của Google
          </Typography>
        </Box>
        <Button variant="outlined" color="primary">
          Cài đặt
        </Button>
      </Box>

      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" fontWeight="500">
            Liên kết xác minh email
          </Typography>
        </Box>
        <Button variant="outlined" color="primary">
          Cài đặt
        </Button>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" fontWeight="500">
            Liên kết số điện thoại gửi SMS
          </Typography>
        </Box>
        <Button variant="outlined" color="primary">
          Cài đặt
        </Button>
      </Box>
    </Box>
  );
};

export default TwoFactorSecurity;
