import { useTheme } from '@emotion/react';
import { Box, Button, Grid, Typography } from '@mui/material';
import certificate from 'src/assets/images/certificate/certificate.png';
import ProfileBanner from 'src/components/apps/userprofile/profile/ProfileBanner';

const contractaffiliateuser = () => {
  const theme = useTheme(); // Get theme to check dark/light mode
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <ProfileBanner />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              textAlign: 'center',
              border: `2px solid ${isDarkMode ? '#444' : '#ddd'}`,
              borderRadius: '10px',
              padding: '20px',

              color: isDarkMode ? '#fff' : '#000',
            }}
          >
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              {/* Left side (Avatar, User Info, Certificate) */}
              {/* <Grid item xs={12} sm={12} textAlign="center">
                <img
                  src={certificate}
                  alt="Certificate"
                  style={{ marginTop: '20px', width: '550px', height: '550px' }}
                />
              </Grid> */}
            </Grid>
            <Grid item xs={12} sm={12}>
              {/* Success Message */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: theme.palette.success.main,
                  margin: '20px 0',
                }}
              >
                Bạn đã đăng ký thành công!
              </Typography>
              <Button>Ký hợp đồng ngay</Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default contractaffiliateuser;
