import { useTheme } from '@emotion/react';
import { Box, Button, Grid, Typography } from '@mui/material';
import certificate from 'src/assets/images/certificate/certificate.png';

// const ProfileImage = styled(Box)(() => ({
//   backgroundImage: 'linear-gradient(#50b2fc,#f44c66)',
//   borderRadius: '50%',
//   width: '110px',
//   height: '110px',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   margin: '0 auto',
// }));

// const SuccessMessageWrapper = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1e4620' : '#f0fff4',
//   padding: '20px',
//   borderRadius: '8px',
//   border: `2px solid ${theme.palette.success.main}`,
//   marginTop: '20px',
// }));
const contractaffiliateuser = () => {
  const theme = useTheme(); // Get theme to check dark/light mode
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <>
      <Grid container spacing={2}>
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
              <Grid item xs={12} sm={12} textAlign="center">
                <img
                  src={certificate}
                  alt="Certificate"
                  style={{ marginTop: '20px', width: '550px', height: '550px' }}
                />
              </Grid>

              {/* Center (Success Icon and Message) */}
              <Grid item xs={6} sm={6} textAlign="center">
                {/* Certificate */}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              {/* Success Message */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: theme.palette.success.main,
                  marginBottom: '10px',
                }}
              >
                Bạn đã đăng ký thành công!
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: isDarkMode ? '#ccc' : '#555', marginBottom: '6px' }}
              >
                Bạn đã chính thức trở thành đối tác affiliate của chúng tôi!
              </Typography>
              <Typography variant="body2" sx={{ color: isDarkMode ? '#ccc' : '#555' }}>
                Tải về hợp đồng tại đây.
              </Typography>
              <Button style={{ margin: '20px 0' }}>Ký hợp đồng ngay</Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default contractaffiliateuser;
