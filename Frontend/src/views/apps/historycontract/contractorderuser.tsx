import { useTheme } from '@emotion/react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import useNavigate for navigation
import fail from 'src/assets/images/certificate/failre.png';
import ProfileBanner from 'src/components/apps/userprofile/profile/ProfileBanner';

const contractorderuser = () => {
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
              {/* Left side (Avatar) */}

              {/* Failure message below */}
              <Grid item xs={12} textAlign="center">
                {/* <img src={fail} alt="Error Image" style={{ width: '200px', height: '170px' }} /> */}

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.error.main,
                    margin: '20px 0',
                  }}
                >
                  Bạn chưa ký hợp đồng
                </Typography>

                <Button component={Link} variant="contained" color="error" to="/">
                  Trở lại trang đăng ký
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default contractorderuser;
