import { Box, Button, Switch, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import WarningIcon from '@mui/icons-material/Warning';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch, AppState } from 'src/store/Store';
import { fetchStatusTwoFaData } from 'src/store/user/2-factor-authentication/twofaSlice';

interface PropsData {
  google_authenticator?: boolean | null;
  sms?: boolean | null;
  email?: boolean | null;
}

const TwoFactorSecurity = () => {
  const nav = useNavigate();
  const [status, setStatus] = useState<PropsData>();
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState<boolean | undefined>(false);

  const [isTwoFactorEnabledEmail, setIsTwoFactorEnabledEmail] = useState<boolean | undefined>(
    false,
  );

  const dispatch = useDispatch<AppDispatch>();
  const twofa = useSelector((state: AppState) => state.twofa.dataa);
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchStatusTwoFaData());
  }, [dispatch]);

  useEffect(() => {
    setStatus(twofa);
    setIsTwoFactorEnabledEmail(
      status?.google_authenticator ? status.google_authenticator : undefined,
    );
    setIsTwoFactorEnabled(status?.google_authenticator ? status.google_authenticator : undefined);
  }, [twofa, status]);

  console.log(
    'Status from redux status:',
    status?.google_authenticator ? status.google_authenticator : undefined,
  );
  console.log('Status from redux email:', status?.email);

  const handleToggleTwoFactor = () => {
    setIsTwoFactorEnabled(!isTwoFactorEnabled);

    // Navigate to /auth/two-steps when the switch is turned on
    if (!isTwoFactorEnabled) {
      nav('/auth/two-steps');
    }
  };

  const handleToggleTwoFactorEmail = () => {
    setIsTwoFactorEnabledEmail(!isTwoFactorEnabledEmail);
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
          Chúng tôi khuyên bạn nên bật xác thực hai yếu tố để cung cấp thêm một lớp bảo mật cho tài
          khoản của bạn.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <Typography sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: 17 }}>
          Bật bảo mật 2 lớp:
        </Typography>
        <Switch
          sx={{ border: '3px' }}
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
          <Typography
            variant="body1"
            color={theme.palette.mode === 'dark' ? 'gray' : 'textSecondary'}
          >
            Google Authenticator
          </Typography>
        </Box>
        {isTwoFactorEnabled && isTwoFactorEnabledEmail ? (
          <Switch
            sx={{ border: '3px' }}
            checked={isTwoFactorEnabled}
            onChange={handleToggleTwoFactor}
            color="primary"
          />
        ) : (
          <Button variant="outlined" color="primary">
            Cài đặt
          </Button>
        )}
      </Box>

      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" fontWeight="500">
            Liên kết xác minh email
          </Typography>
        </Box>
        <Switch
          sx={{ border: '3px' }}
          checked={isTwoFactorEnabledEmail}
          onChange={handleToggleTwoFactorEmail}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default TwoFactorSecurity;
