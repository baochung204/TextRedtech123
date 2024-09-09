import { Box, Button, Switch, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import WarningIcon from '@mui/icons-material/Warning'; // Thêm icon Warning

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
        backgroundColor: theme.palette.mode === 'dark' ? '#2A3447' : '#fff', 
      }}
    >
      <Typography mb={4} variant="h4" fontWeight="600" gutterBottom>
        Bảo Mật Hai Lớp
      </Typography>

      <Box
        sx={{
        //   mb: 4,
          padding: 2,
          backgroundColor: '#E3F2FD', 
          borderRadius: 1,
          color: '#1976D2',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <WarningIcon sx={{ mr: 2 }} />
        <Typography variant="body1">
          Chúng tôi khuyên bạn nên bật xác thực hai yếu tố để cung cấp thêm một lớp bảo mật cho tài khoản của bạn.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <Typography sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: 17 }}>Bảo mật hai lớp:</Typography>
        <Switch
          checked={isTwoFactorEnabled}
          onChange={handleToggleTwoFactor}
          color="primary"
        />
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
